import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { corsHeaders, OptionsMiddleware } from "../_shared/cors.ts";
import { createErrorResponse } from "../_shared/utils.ts";
import { supabaseAdmin } from "../_shared/supabaseAdmin.ts";
import { AuthMiddleware, UserMiddleware } from "../_shared/authentication.ts";

async function updatePassword(user: any) {
  const CRM_BASE_URL = Deno.env.get("CRM_BASE_URL") ?? "http://localhost:5173";
  const { data, error } = await supabaseAdmin.auth.resetPasswordForEmail(
    user.email,
    {
      redirectTo: `${CRM_BASE_URL}/#/set-password`,
    },
  );

  if (!data || error) {
    console.error("resetPasswordForEmail error:", error);
    return createErrorResponse(500, error?.message || "Internal Server Error");
  }

  return new Response(
    JSON.stringify({
      data,
    }),
    {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    },
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
