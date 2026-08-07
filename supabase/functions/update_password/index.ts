import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { corsHeaders, OptionsMiddleware } from "../_shared/cors.ts";
import { createErrorResponse } from "../_shared/utils.ts";
import { supabaseAdmin } from "../_shared/supabaseAdmin.ts";
import { AuthMiddleware, UserMiddleware } from "../_shared/authentication.ts";

const MAX_RETRIES = 3;
const INITIAL_RETRY_DELAY_MS = 1000;

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function updatePassword(user: any) {
  const CRM_BASE_URL = Deno.env.get("CRM_BASE_URL") ?? "http://localhost:5173";

  let lastError: any = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const { data, error } = await supabaseAdmin.auth.resetPasswordForEmail(
      user.email,
      {
        redirectTo: `${CRM_BASE_URL}/#/set-password`,
      },
    );

    if (!error) {
      return new Response(JSON.stringify({ data }), {
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    lastError = error;

    const isRateLimit =
      error.message?.includes("rate limit") ||
      error.message?.includes("429") ||
      error.status === 429;

    if (!isRateLimit) {
      console.error("resetPasswordForEmail error (non-retryable):", error);
      return createErrorResponse(500, error.message || "Internal Server Error");
    }

    if (attempt < MAX_RETRIES) {
      const delay = INITIAL_RETRY_DELAY_MS * Math.pow(2, attempt - 1);
      console.warn(
        `Rate limit hit on attempt ${attempt}/${MAX_RETRIES}, retrying in ${delay}ms...`,
      );
      await sleep(delay);
    }
  }

  console.error("resetPasswordForEmail failed after all retries:", lastError);
  return createErrorResponse(
    429,
    "Muitas solicitações. Aguarde alguns minutos e tente novamente.",
  );
}

Deno.serve(async (req: Request) =>
  OptionsMiddleware(req, async (req) =>
    AuthMiddleware(req, async (req) =>
      UserMiddleware(req, async (req, user) => {
        if (req.method === "PATCH") {
          return updatePassword(user);
        }

        return createErrorResponse(405, "Method Not Allowed");
      }),
    ),
  ),
);
