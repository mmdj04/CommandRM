# Script de Seed de Dados de Teste

## Visão Geral

O script `test-data/seed.cjs` popula o banco de dados Supabase com dados de teste realistas em Português Brasileiro, útil para demonstrações e desenvolvimento.

## Uso

```bash
# Inserir dados (acumula com existentes)
node test-data/seed.cjs

# Limpar dados antigos e reinserir
node test-data/seed.cjs --clean
```

## Dados Inseridos

| Tabela | Quantidade | Descrição |
|--------|-----------|-----------|
| `tags` | 8 | influenciador, gerente, vip, decisor, parceiro, lead-quente, cliente-atual, indicado |
| `companies` | 25 | Empresas brasileiras (Tech Brasil, Rio Sistemas, Minas Consulting, etc.) |
| `contacts` | 80 | Nomes brasileiros com emails, telefones, vinculados a empresas |
| `deals` | 40 | Oportunidades com 6 estágios do kanban (oportunidade → ganho/perdido) |
| `contact_notes` | 150 | Anotações associadas a contatos |
| `deal_notes` | 80 | Anotações associadas a oportunidades |
| `tasks` | 80 | Tarefas com tipos variados (email, reunião, ligação, etc.) |

## Ordem de Inserção

O script respeita as dependências de foreign key:

1. `tags` (sem FK)
2. `companies` (FK → `sales`)
3. `contacts` (FK → `companies`, `sales`)
4. `deals` (FK → `companies`, `contacts`)
5. `contact_notes` (FK → `contacts`, `sales`)
6. `deal_notes` (FK → `deals`, `sales`)
7. `tasks` (FK → `contacts`, `sales`)

## Configuração

As constantes no topo do script permitem ajustar:

- `SALES_ID` — ID do usuário proprietário dos dados (padrão: `5` — Matheus Moraes)
- `SUPABASE_URL` — URL do projeto Supabase
- `SERVICE_ROLE_KEY` — Chave de serviço (bypass RLS)

## Como Funciona

1. Usa a REST API do Supabase (PostgREST) com a service role key
2. Insere dados em lotes de 10 registros para evitar timeouts
3. Faz retry automático (3 tentativas) com delay de 2s em caso de falha
4. Retorna os IDs inseridos para usar como FK nas tabelas seguintes
5. Gera dados brasileiros realistas: nomes, telefones `(11) 99999-9999`, emails, URLs, endereços

## Estrutura do Script

```
test-data/seed.cjs
├── Funções auxiliares (request, pick, randInt, randomDate, randomPhone, randomEmail)
├── Pools de dados (FIRST_NAMES, LAST_NAMES, COMPANIES, TAGS, etc.)
├── Funções de inserção (insertTags, insertCompanies, insertContacts, etc.)
└── Função main() — orquestra a inserção na ordem correta
```

## Notas

- O script é CommonJS (`.cjs`) porque o projeto usa `"type": "module"` no package.json
- Todos os dados são gerados com caracteres PT-BR acentuados (Ç, Ã, Õ, Á, etc.)
- Os IDs retornados pelo Supabase são usados para vincular registros entre tabelas
- O script pode ser executado múltiplas vezes (com `--clean` ou sem)
