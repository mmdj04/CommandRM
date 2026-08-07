#!/usr/bin/env node

/**
 * Script de seed para popular o Supabase com dados de teste realistas (PT-BR).
 *
 * Uso:
 *   node test-data/seed.js              # Inserir dados
 *   node test-data/seed.js --clean      # Limpar dados antigos e reinserir
 */

const https = require("https");

const SUPABASE_URL = "wrszvrdzmgfrgkbdhrfw.supabase.co";
const SERVICE_ROLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indyc3p2cmR6bWdmcmdrYmRocmZ3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4NjA0NzE1MSwiZXhwIjoyMTAxNjIzMTUxfQ.PyplbM7eFSERSxkwrJqzhSqOUgwelfFKMDTYvkam_Hk";

const SALES_ID = 5; // Matheus Moraes

const CLEAN = process.argv.includes("--clean");

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const data = body ? JSON.stringify(body) : null;
    const urlPath = path.includes("Prefer") ? path : path;
    const options = {
      hostname: SUPABASE_URL,
      path: `/rest/v1${urlPath}`,
      method,
      headers: {
        apikey: SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
    };
    const req = https.request(options, (res) => {
      let chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        const text = Buffer.concat(chunks).toString();
        if (res.statusCode >= 400) {
          reject(new Error(`${res.statusCode} ${text}`));
        } else {
          resolve(text ? JSON.parse(text) : null);
        }
      });
    });
    req.on("error", reject);
    if (data) req.write(data);
    req.end();
  });
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomDate(start, end) {
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return d.toISOString();
}

function randomPhone() {
  const ddd = pick([11, 21, 31, 41, 51, 61, 71, 81, 85, 34, 62, 77, 19, 48, 55, 22, 91, 67, 86, 92]);
  const p1 = randInt(90000, 99999);
  const p2 = randInt(1000, 9999);
  return `(${ddd}) 9${p1}-${p2}`;
}

function randomEmail(first, last) {
  const domains = ["gmail.com", "hotmail.com", "outlook.com", "yahoo.com.br", "empresa.com.br"];
  const normalizedFirst = first
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const normalizedLast = last
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  return `${normalizedFirst}.${normalizedLast}@${pick(domains)}`;
}

function randomUrl(company) {
  const slug = company
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return `https://www.${slug}.com.br`;
}

// ── Data pools ──────────────────────────────────────────────────────────────

const FIRST_NAMES_M = [
  "João", "Pedro", "Lucas", "Matheus", "Gabriel", "Rafael", "Felipe",
  "Bruno", "Gustavo", "Thiago", "Rodrigo", "Diego", "Eduardo", "Leonardo",
  "Fernando", "Carlos", "Paulo", "Marcos", "André", "Ricardo", "Alexandre",
  "Sérgio", "Roberto", "Daniel", "Marcelo", "Antônio", "Francisco", "Claudio",
  "Henrique", "Vinícius", "Guilherme", "Caio", "Renato", "Sandro", "Márcio",
];

const FIRST_NAMES_F = [
  "Maria", "Ana", "Juliana", "Fernanda", "Patrícia", "Camila", "Amanda",
  "Bruna", "Letícia", "Carol", "Adriana", "Vanessa", "Tatiane", "Renata",
  "Priscila", "Flávia", "Larissa", "Daniela", "Bianca", "Natalia", "Isabela",
  "Luana", "Mariana", "Raquel", "Thuane", "Aline", "Cristiane", "Simone",
  "Cláudia", "Denise", "Eliane", "Kátia", "Sandra", "Vera", "Luciana",
];

const LAST_NAMES = [
  "Silva", "Santos", "Oliveira", "Souza", "Rodrigues", "Ferreira", "Almeida",
  "Nascimento", "Lima", "Araújo", "Barbosa", "Rocha", "Ribeiro", "Martins",
  "Carvalho", "Gomes", "Costa", "Pereira", "Moreira", "Nunes", "Lopes",
  "Mendes", "Vieira", "Teixeira", "Castro", "Azevedo", "Pinto", "Correia",
  "Fonseca", "Monteiro", "Cardoso", "Dias", "Barros", "Freitas", "Sales",
];

const COMPANIES = [
  { name: "Tech Brasil Soluções", sector: "information-technology", size: 250, city: "São Paulo", state: "SP" },
  { name: "Rio Sistemas Digitais", sector: "information-technology", size: 50, city: "Rio de Janeiro", state: "RJ" },
  { name: "Minas Consulting", sector: "professional-services", size: 10, city: "Belo Horizonte", state: "MG" },
  { name: "Sul Tech Inovação", sector: "information-technology", size: 50, city: "Curitiba", state: "PR" },
  { name: "Nordeste Data Analytics", sector: "information-technology", size: 10, city: "Recife", state: "PE" },
  { name: "Pernambuco Software House", sector: "information-technology", size: 50, city: "Recife", state: "PE" },
  { name: "Bahia Digital", sector: "media", size: 10, city: "Salvador", state: "BA" },
  { name: "Brasília Consultoria", sector: "professional-services", size: 250, city: "Brasília", state: "DF" },
  { name: "Amazonas Engenharia", sector: "industrial", size: 500, city: "Manaus", state: "AM" },
  { name: "Gaúcha Telecom", sector: "telecommunications", size: 500, city: "Porto Alegre", state: "RS" },
  { name: "Catarinense Automação", sector: "industrial", size: 250, city: "Florianópolis", state: "SC" },
  { name: "Paulista Retail", sector: "retail", size: 500, city: "São Paulo", state: "SP" },
  { name: "Carioca Fashion", sector: "retail", size: 50, city: "Rio de Janeiro", state: "RJ" },
  { name: "Mineira Alimentos", sector: "food", size: 250, city: "Uberlândia", state: "MG" },
  { name: "Capixaba Turismo", sector: "tourism", size: 10, city: "Vitória", state: "ES" },
  { name: "Cearense Saúde", sector: "health-care", size: 500, city: "Fortaleza", state: "CE" },
  { name: "Paranaense Farmacêutica", sector: "health-care", size: 250, city: "Curitiba", state: "PR" },
  { name: "Goiana Agronegócio", sector: "other", size: 500, city: "Goiânia", state: "GO" },
  { name: "Mato-grossense Logística", sector: "other", size: 250, city: "Cuiabá", state: "MT" },
  { name: "Tocantinense Energia", sector: "other", size: 50, city: "Palmas", state: "TO" },
  { name: "Maranhense Educação", sector: "other", size: 10, city: "São Luís", state: "MA" },
  { name: "Alagoas Construção", sector: "other", size: 50, city: "Maceió", state: "AL" },
  { name: "Sergipana Metalúrgica", sector: "industrial", size: 250, city: "Aracaju", state: "SE" },
  { name: "Paraibana Comércio", sector: "retail", size: 10, city: "João Pessoa", state: "PB" },
  { name: "Rondoniense Mineração", sector: "industrial", size: 500, city: "Porto Velho", state: "RO" },
];

const TAGS = [
  { name: "influenciador", color: "#d4a84b" },
  { name: "gerente", color: "#3b7dd8" },
  { name: "vip", color: "#4caf50" },
  { name: "decisor", color: "#f44336" },
  { name: "parceiro", color: "#9c27b0" },
  { name: "lead-quente", color: "#ff9800" },
  { name: "cliente-atual", color: "#00bcd4" },
  { name: "indicado", color: "#8bc34a" },
];

const DEAL_NAMES = [
  "Implantação ERP Completo", "Consultoria Estratégica", "Desenvolvimento App Mobile",
  "Migração Cloud AWS", "Automação de Marketing", "Campanha Digital Q4",
  "Projeto UI/UX Redesign", "Integração Sistemas Legados", "Licença Software Anual",
  "Suporte Técnico Premium", "Treinamento Corporativo", "Auditoria de Segurança",
  "Deploy Infraestrutura", "Plano de Comunicação", "Gestão de Redes Sociais",
  "Desenvolvimento E-commerce", "Sistema de BI Corporativo", "Modernização Legacy",
  "Contrato Manutenção Anual", "Projeto IoT Industrial", "Chatbot Inteligente",
  "Plano de Backup Disaster Recovery", "Consultoria LGPD", "Transformação Digital",
  "Implantação CRM", "Desenvolvimento Portal", "Automação de Processos RPA",
  "Análise de Dados Predictiva", "Campanha de Performance", "Otimização SEO",
  "Gestão de Tráfego Pago", "Produção de Conteúdo", "Branding Completo",
  "Filagem Corporativa", "Assessoria de Imprensa", "Eventos Corporativos",
  "Plano de Expansão Nacional", "Parceiro Estratégico", "Licenciamento White-label",
  "Projeto Fase 2", "Piloto de Inovação", "MVP Produto Digital",
];

const DEAL_STAGES = ["opportunity", "proposal-sent", "in-negociation", "won", "lost", "delayed"];
const DEAL_CATEGORIES = ["other", "copywriting", "print-project", "ui-design", "website-design"];
const CONTACT_STATUSES = ["cold", "warm", "hot", "in-contract"];
const TASK_TYPES = ["email", "demo", "lunch", "meeting", "follow-up", "call", "ship", "thank-you"];

const NOTE_TEXTS = [
  "Reunião produtiva. Cliente demonstrou interesse no plano enterprise.",
  "Envio de proposta comercial via email. Aguardando retorno.",
  "Follow-up por telefone. Cliente pediu ajuste no escopo.",
  "Apresentação da solução técnica. Time de TI aprovou.",
  "Negociação de valores. Proposta inicial R$ 45.000.",
  "Contrato em análise jurídica. Previsão de assinatura em 15 dias.",
  "Demo do produto foi bem recebida. Próximo passo: piloto.",
  "Cliente solicitou referências de outros clientes do setor.",
  "Reunião com diretoria. Decisão pendente de orçamento.",
  "Proposta revisada enviada com desconto de 10%.",
  "Contato indicou outro decisor na empresa.",
  "Reunião técnica para alinhamento de integração.",
  "Cliente comparando com concorrência. Enviar estudo de caso.",
  "Budget aprovado para Q2. Iniciar implementação.",
  "Reunião de kickoff agendada para segunda-feira.",
  "Treinamento da equipe do cliente concluído.",
  "Chamado de suporte resolvido. Cliente satisfeito.",
  "Escopo expandido. Valor do contrato aumentou 30%.",
  "Reunião mensal de review. Métricas acima do esperado.",
  "Contrato renovado por mais 12 meses.",
  "Proposta enviada para nova filial.",
  "Cliente pediu referência técnica detalhada.",
  "Deploy concluído com sucesso. Sem incidentes.",
  "Reunião de alinhamento pós-implantação.",
  "Solicitação de customização urgente atendida.",
  "Auditoria de segurança identificou 3 pontos críticos.",
  "Plano de migração aprovado. Início previsto para março.",
  "Cliente solicitou orçamento para fase 2.",
  "Reunião com parceiro tecnológico para joint solution.",
  "Campanha gerou 250 leads qualificados no mês.",
];

const TASK_TEXTS = [
  "Enviar proposta comercial atualizada",
  "Agendar reunião de follow-up",
  "Ligar para confirmar horário da demo",
  "Preparar apresentação para diretoria",
  "Enviar case study do setor",
  "Atualizar planilha de escopo",
  "Responder email sobre integração",
  "Marcar call técnica com time de TI",
  "Enviar contrato para revisão jurídica",
  "Confirmar pagamento da parcela",
  "Agendar treinamento da equipe",
  "Verificar status da implantação",
  "Enviar relatório mensal de métricas",
  "Preparar demo personalizada",
  "Atualizar CRM com notas da reunião",
  "Enviar资料 técnicos solicitados",
  "Confirmar participação no evento",
  "Agendar review trimestral",
  "Enviar pesquisa de satisfação",
  "Atualizar documentação do projeto",
];

// ── Main ────────────────────────────────────────────────────────────────────

const BATCH_DELAY = 500; // ms between batches

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function clean() {
  console.log("Limpando dados antigos...");
  const tablesWithSalesId = ["tasks", "deal_notes", "contact_notes", "deals", "contacts", "companies"];
  for (const table of tablesWithSalesId) {
    await request("DELETE", `/${table}?sales_id=eq.${SALES_ID}`, null);
    console.log(`  ✓ ${table}`);
  }
  // tags não tem sales_id — deleta todas (usando id > 0 como condição)
  await request("DELETE", "/tags?id=gt.0", null);
  console.log("  ✓ tags");
  console.log();
}

async function insertTags() {
  console.log("Inserindo tags...");
  const rows = TAGS.map((t) => ({ name: t.name, color: t.color }));
  await request("POST", "/tags", rows);
  console.log(`  ✓ ${rows.length} tags inseridas`);
  return rows;
}

async function insertCompanies() {
  console.log("Inserindo empresas...");
  const rows = COMPANIES.map((c) => ({
    name: c.name,
    sector: c.sector,
    size: c.size,
    city: c.city,
    state_abbr: c.state,
    country: "Brazil",
    website: randomUrl(c.name),
    address: `Rua ${pick(["das Flores", "Principal", "São Paulo", "da Paz", "Atlântica", "Paulista", "Copacabana", "Sete de Setembro"])}, ${randInt(100, 5000)}`,
    zipcode: `${randInt(10000, 99999)}-${randInt(100, 999)}`,
    phone_number: randomPhone(),
    sales_id: SALES_ID,
    revenue: `${pick(["R$ 500K", "R$ 1M", "R$ 5M", "R$ 10M", "R$ 50M", "R$ 100M"])}`,
    description: `Empresa do setor de ${c.sector.replace(/-/g, " ")} localizada em ${c.city}-${c.state}.`,
  }));
  const insertedIds = [];
  // Inserir em lotes de 10
  for (let i = 0; i < rows.length; i += 10) {
    const batch = rows.slice(i, i + 10);
    const result = await request("POST", "/companies", batch);
    if (result) {
      for (const row of result) {
        insertedIds.push(row.id);
      }
    }
    console.log(`  ✓ lote ${Math.floor(i / 10) + 1}: ${batch.length} empresas`);
  }
  console.log(`  ✓ total: ${insertedIds.length} empresas inseridas`);
  return insertedIds;
}

async function insertContacts(companyIds) {
  console.log("Inserindo contatos...");
  const allRows = [];
  for (let i = 0; i < 80; i++) {
    const gender = Math.random() > 0.45 ? "male" : "female";
    const first = gender === "male" ? pick(FIRST_NAMES_M) : pick(FIRST_NAMES_F);
    const last1 = pick(LAST_NAMES);
    const last2 = Math.random() > 0.5 ? ` ${pick(LAST_NAMES)}` : "";
    const lastName = last1 + last2;
    const title = pick([
      "CEO", "CTO", "CFO", "Gerente de TI", "Diretor Comercial",
      "Gerente de Projetos", "Analista Senior", "Coordenador de Marketing",
      "Desenvolvedor Full Stack", "Arquiteto de Soluções", "Product Owner",
      "Scrum Master", "Gerente de Vendas", "Diretor de Operações",
      "Head de Marketing", "Líder Técnico", "Consultor Senior",
      "Engenheiro de Dados", "DevOps Engineer", "UX Designer",
    ]);
    allRows.push({
      first_name: first,
      last_name: lastName,
      gender,
      title,
      background: `Profissional com experiência em ${pick(["gestão de projetos", "desenvolvimento de software", "vendas B2B", "marketing digital", "análise de dados"])}.`,
      first_seen: randomDate(new Date("2024-01-01"), new Date("2025-12-31")),
      last_seen: randomDate(new Date("2026-01-01"), new Date("2026-08-07")),
      has_newsletter: Math.random() > 0.5,
      status: pick(CONTACT_STATUSES),
      company_id: pick(companyIds),
      sales_id: SALES_ID,
      email_jsonb: [{ email: randomEmail(first, last1), type: "Work" }],
      phone_jsonb: [{ number: randomPhone(), type: "Work" }],
      linkedin_url: `https://linkedin.com/in/${first.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}-${last1.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}${randInt(1, 999)}`,
    });
  }
  // Inserir em lotes de 10 e coletar IDs
  const insertedIds = [];
  for (let i = 0; i < allRows.length; i += 10) {
    const batch = allRows.slice(i, i + 10);
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        const result = await request("POST", "/contacts", batch);
        if (result) {
          for (const row of result) {
            insertedIds.push(row.id);
          }
        }
        console.log(`  ✓ lote ${Math.floor(i / 10) + 1}: ${batch.length} contatos`);
        break;
      } catch (err) {
        if (attempt < 2) {
          console.log(`  ⏳ lote ${Math.floor(i / 10) + 1}: retry ${attempt + 1}...`);
          await new Promise((r) => setTimeout(r, 2000));
        } else {
          throw err;
        }
      }
    }
  }
  console.log(`  ✓ total: ${insertedIds.length} contatos inseridos`);
  console.log(`  IDs: [${insertedIds.slice(0, 5).join(", ")}...]`);
  return insertedIds;
}

async function insertDeals(companyIds, contactIds) {
  console.log("Inserindo oportunidades...");
  const rows = [];
  for (let i = 0; i < 40; i++) {
    const stage = pick(DEAL_STAGES);
    const companyCompanyId = pick(companyIds);
    const relatedContacts = [];
    const numContacts = randInt(1, 3);
    for (let j = 0; j < numContacts; j++) {
      relatedContacts.push(pick(contactIds));
    }
    rows.push({
      name: pick(DEAL_NAMES),
      company_id: companyCompanyId,
      contact_ids: [...new Set(relatedContacts)],
      category: pick(DEAL_CATEGORIES),
      stage,
      amount: randInt(5000, 500000) * 100,
      description: pick(NOTE_TEXTS),
      created_at: randomDate(new Date("2025-01-01"), new Date("2026-06-30")),
      updated_at: randomDate(new Date("2026-01-01"), new Date("2026-08-07")),
      expected_closing_date: randomDate(new Date("2026-09-01"), new Date("2026-12-31")).split("T")[0],
      sales_id: SALES_ID,
      index: randInt(0, 20),
    });
  }
  const result = await request("POST", "/deals", rows);
  const dealIds = result ? result.map((r) => r.id) : [];
  console.log(`  ✓ ${dealIds.length} oportunidades inseridas`);
  return dealIds;
}

async function insertContactNotes(contactIds) {
  console.log("Inserindo anotações de contatos...");
  const allRows = [];
  for (let i = 0; i < 150; i++) {
    allRows.push({
      contact_id: pick(contactIds),
      text: pick(NOTE_TEXTS),
      date: randomDate(new Date("2025-06-01"), new Date("2026-08-07")),
      sales_id: SALES_ID,
      status: pick(CONTACT_STATUSES),
    });
  }
  for (let i = 0; i < allRows.length; i += 10) {
    const batch = allRows.slice(i, i + 10);
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await request("POST", "/contact_notes", batch);
        console.log(`  ✓ lote ${Math.floor(i / 10) + 1}: ${batch.length} anotações`);
        break;
      } catch (err) {
        if (attempt < 2) {
          await new Promise((r) => setTimeout(r, 2000));
        } else {
          throw err;
        }
      }
    }
  }
  console.log(`  ✓ total: ${allRows.length} anotações de contatos inseridas`);
}

async function insertDealNotes(dealIds) {
  console.log("Inserindo anotações de oportunidades...");
  const allRows = [];
  for (let i = 0; i < 80; i++) {
    allRows.push({
      deal_id: pick(dealIds),
      type: pick(["internal", "feedback", "call", "meeting"]),
      text: pick(NOTE_TEXTS),
      date: randomDate(new Date("2025-06-01"), new Date("2026-08-07")),
      sales_id: SALES_ID,
    });
  }
  for (let i = 0; i < allRows.length; i += 10) {
    const batch = allRows.slice(i, i + 10);
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await request("POST", "/deal_notes", batch);
        console.log(`  ✓ lote ${Math.floor(i / 10) + 1}: ${batch.length} anotações`);
        break;
      } catch (err) {
        if (attempt < 2) {
          await new Promise((r) => setTimeout(r, 2000));
        } else {
          throw err;
        }
      }
    }
  }
  console.log(`  ✓ total: ${allRows.length} anotações de oportunidades inseridas`);
}

async function insertTasks(contactIds) {
  console.log("Inserindo tarefas...");
  const allRows = [];
  for (let i = 0; i < 80; i++) {
    const hasDone = Math.random() > 0.6;
    allRows.push({
      contact_id: pick(contactIds),
      type: pick(TASK_TYPES),
      text: pick(TASK_TEXTS),
      due_date: randomDate(new Date("2026-07-01"), new Date("2026-12-31")),
      done_date: hasDone ? randomDate(new Date("2026-06-01"), new Date("2026-08-07")) : null,
      sales_id: SALES_ID,
    });
  }
  for (let i = 0; i < allRows.length; i += 10) {
    const batch = allRows.slice(i, i + 10);
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await request("POST", "/tasks", batch);
        console.log(`  ✓ lote ${Math.floor(i / 10) + 1}: ${batch.length} tarefas`);
        break;
      } catch (err) {
        if (attempt < 2) {
          await new Promise((r) => setTimeout(r, 2000));
        } else {
          throw err;
        }
      }
    }
  }
  console.log(`  ✓ total: ${allRows.length} tarefas inseridas`);
}

async function main() {
  console.log("🌱 CommandRM - Seed de Dados de Teste\n");

  if (CLEAN) {
    await clean();
  }

  // 1. Tags
  await insertTags();

  // 2. Empresas
  const companyIds = await insertCompanies();

  // 3. Contatos
  const contactIds = await insertContacts(companyIds);

  // 4. Oportunidades
  const dealIds = await insertDeals(companyIds, contactIds);

  // 5. Anotações de contatos
  await insertContactNotes(contactIds);

  // 6. Anotações de oportunidades
  await insertDealNotes(dealIds);

  // 7. Tarefas
  await insertTasks(contactIds);

  console.log("\n✅ Seed concluído com sucesso!");
  console.log("   Acesse https://command-rm.vercel.app para ver os dados.\n");
}

main().catch((err) => {
  console.error("\n❌ Erro:", err.message);
  process.exit(1);
});
