# AGENTS.md

## Visão Geral do Projeto

CommandRM é um CRM completo construído com React, shadcn-admin-kit e Supabase. Ele fornece gerenciamento de contatos, acompanhamento de tarefas, anotações, captura de emails e gerenciamento de oportunidades com um quadro Kanban.

## ⚠️ REGRA ABSOLUTA: Português Brasileiro com Acentos

**SEMPRE usar caracteres especiais do Português Brasileiro em TODOS os arquivos do projeto. Isso é OBRIGATÓRIO e NÃO opcional.**

**Caracteres que DEVEM ser usados:**
- Ç/ç (cedilha): Configuração, Façam, Ação
- Ã/ã, Õ/õ (til): Não, São, Então, Razão, Limões
- Á/á, É/é, Í/í, Ó/ó, Ú/ú (acento agudo): Teléfono, Empresa, Título, Música
- Â/â, Ê/ê, Ô/ô (acento circunflexo): Êxodo, Sôfregu, Ônibus
- À/à (acento grave): Às, Dia, À noite
- Ü/ü (trema): Segurança, Usuário

**NUNCA escrever sem acentos - SEM EXCEÇÃO:**
- ❌ Configuracao → ✅ Configuração
- ❌ Gerenciamento → ✅ Gerenciamento
- ❌ Anotacoes → ✅ Anotações
- ❌ Oportunidades → ✅ Oportunidades
- ❌ Verificacao → ✅ Verificação
- ❌ Producao → ✅ Produção
- ❌ Nao → ✅ Não
- ❌ Empresa → ✅ Empresa
- ❌ funcao → ✅ função
- ❌ variavel → ✅ variável
- ❌ cabecalho → ✅ cabeçalho
- ❌ traducao → ✅ tradução
- ❌ voce → ✅ você
- ❌ nao → ✅ não

**Isso se aplica a TUDO:**
- Código TypeScript/JavaScript (strings, comentários, variáveis)
- Documentação (README, CHANGELOG, AGENTS.md, MEMORY.md)
- Mensagens de erro e logs
- Traduções e labels da interface
- Commits e mensagens de commit
- Nomes de arquivos e pastas
- Configurações de banco de dados

**ANTES de escrever qualquer coisa, VERIFIQUE se todos os caracteres especiais estão corretos.**

## Comandos de Desenvolvimento

### Configuração
```bash
make install          # Instalar dependências (frontend, backend, Supabase local)
make start            # Iniciar stack completo com API real (Supabase + servidor de desenvolvimento Vite)
make stop             # Parar o stack
make start-demo       # Iniciar stack completo com provedor de dados FakeRest
```

### Testes e Qualidade do Código

```bash
make test             # Executar testes unitários (vitest)
make typecheck        # Executar verificação de tipos TypeScript
make lint             # Executar verificações ESLint e Prettier
```

### Compilação

```bash
make build            # Compilar pacote de produção (executa tsc + vite build)
```

### Gerenciamento de Banco de Dados

O esquema do banco de dados é definido declarativamente em `supabase/schemas/` (fonte da verdade). As migrações em `supabase/migrations/`, geradas automaticamente, não devem ser editadas diretamente - mas às vezes é necessário um ajuste manual (por exemplo, substituir um DROP+CREATE por um ALTER TABLE RENAME para renomear colunas). As definições de funções em `02_functions.sql` devem usar exatamente o formato `pg_dump` (execute `npx supabase db dump --local --schema public`) para evitar diferenças fantasma.

```bash
npx supabase db diff --local -f <nome>  # Gerar migração a partir de alterações no esquema
npx supabase migration up --local       # Aplicar migrações localmente
npx supabase db push                    # Enviar migrações para o remoto
npx supabase db reset --local           # Redefinir banco de dados local (destrutivo)
```

### Registro (Componentes Shadcn)

```bash
make registry-gen     # Gerar registry.json (executa automaticamente no pre-commit)
make registry-build   # Compilar registro Shadcn
```

## Arquitetura

### Stack Tecnológico

- **Frontend**: React 19 + TypeScript + Vite
- **Roteamento**: React Router v7
- **Busca de Dados**: React Query (TanStack Query)
- **Formulários**: React Hook Form
- **Lógica da Aplicação**: shadcn-admin-kit + ra-core (react-admin headless)
- **Componentes de UI**: Shadcn UI + Radix UI
- **Estilização**: Tailwind CSS v4
- **Backend**: Supabase (PostgreSQL + API REST + Autenticação + Armazenamento + Funções Edge)
- **Testes**: Vitest

### Estrutura de Diretórios

```
src/
├── components/
│   ├── admin/              # Componentes Shadcn Admin Kit (dependência mutável)
│   ├── commandrm/          # Código principal do CRM (~15.000 linhas)
│   │   ├── activity/       # Logs de atividade
│   │   ├── companies/      # Gerenciamento de empresas
│   │   ├── contacts/       # Gerenciamento de contatos (inclui import/export CSV)
│   │   ├── dashboard/      # Widgets do painel
│   │   ├── deals/          # Pipeline de oportunidades (Kanban)
│   │   ├── filters/        # Filtros de lista
│   │   ├── layout/         # Componentes de layout do app
│   │   ├── login/          # Páginas de autenticação
│   │   ├── misc/           # Utilitários compartilhados
│   │   ├── notes/          # Gerenciamento de notas
│   │   ├── providers/      # Provedores de dados (Supabase + FakeRest)
│   │   ├── root/           # Componente raiz do CRM
│   │   ├── sales/          # Gerenciamento da equipe de vendas
│   │   ├── settings/       # Página de configurações
│   │   ├── simple-list/    # Componentes de lista
│   │   ├── tags/           # Gerenciamento de etiquetas
│   │   └── tasks/          # Gerenciamento de tarefas
│   ├── supabase/           # Componentes de autenticação específicos do Supabase
│   └── ui/                 # Componentes Shadcn UI (dependência mutável)
├── hooks/                  # Hooks React personalizados
├── lib/                    # Funções utilitárias
└── App.tsx                 # Ponto de entrada da aplicação

supabase/
├── functions/              # Funções Edge (gerenciamento de usuários, email de entrada)
├── migrations/             # Migrações do banco de dados (geradas automaticamente, não edite diretamente)
└── schemas/                # Esquema declarativo (fonte da verdade para a estrutura do DB)
```

### Padrões Principais de Arquitetura

Para mais detalhes, consulte o documento `doc/src/content/docs/developers/architecture-choices.mdx`.

#### Dependências Mutáveis

O código fonte inclui dependências mutáveis que devem ser modificadas diretamente se necessário:
- `src/components/admin/`: Código do framework Shadcn Admin Kit
- `src/components/ui/`: Componentes Shadcn UI

#### Configuração via Componente `<CRM>`

O arquivo `src/App.tsx` renderiza o componente `<CRM>`, que aceita props para configuração específica do domínio:
- `contactGender`: Opções de gênero
- `companySectors`: Setores industriais das empresas
- `dealCategories`, `dealStages`, `dealPipelineStatuses`: Configuração de oportunidades
- `noteStatuses`: Opções de status das notas com cores
- `taskTypes`: Opção de tipos de tarefa
- `logo`, `title`: Identidade visual
- `lightTheme`, `darkTheme`: Personalização do tema
- `disableTelemetry`: Opt-out do rastreamento anônimo de uso

#### Visualizações do Banco de Dados

Consultas complexas são tratadas via visualizações do banco de dados para simplificar o código do frontend e reduzir a sobrecarga HTTP. Por exemplo, `contacts_summary` fornece dados consolidados de contatos incluindo contagens de tarefas.

#### Gatilhos do Banco de Dados

Os dados do usuário são sincronizados entre a tabela `auth.users` do Supabase e a tabela `sales` do CRM via gatilhos (veja `supabase/schemas/04_triggers.sql`).

#### Funções Edge

Localizadas em `supabase/functions/`:
- Gerenciamento de usuários (criar/atualizar usuários, desabilitar contas)
- Processamento de webhook de email de entrada

#### Provedores de Dados

Dois provedores de dados estão disponíveis:
1. **Supabase** (padrão): Backend de produção usando PostgreSQL
2. **FakeRest**: API falsa no navegador para desenvolvimento/demonstrações, reinicia ao recarregar a página

Ao usar FakeRest, as visualizações do banco de dados são emuladas no frontend. Os geradores de dados de teste estão em `src/components/commandrm/providers/fakerest/dataGenerator/`.

#### Sintaxe de Filtros

Os filtros de lista seguem a convenção `ra-data-postgrest` com concatenação de operadores: `nome_campo@operador` (por exemplo, `first_name@eq`). O adaptador FakeRest mapeia esses para a sintaxe do FakeRest em tempo de execução.

## Fluxos de Trabalho de Desenvolvimento

### Aliases de Caminho

O projeto usa aliases de caminho TypeScript configurados em `tsconfig.json` e `components.json`:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/components/ui` → `src/components/ui`

### Adicionando Campos Personalizados

Ao modificar estruturas de dados de contatos ou empresas:
1. Edite o arquivo de esquema relevante em `supabase/schemas/` (tabela em `01_tables.sql`, visualizações em `03_views.sql`, etc.)
2. Gere uma migração: `npx supabase db diff --local -f <nome>`
3. Aplique-a: `npx supabase migration up --local`
4. Atualize o CSV de exemplo: `src/components/commandrm/contacts/contacts_export.csv`
5. Atualize a função de importação: `src/components/commandrm/contacts/useContactImport.tsx`
6. Se estiver usando FakeRest, atualize os geradores de dados em `src/components/commandrm/providers/fakerest/dataGenerator/`
7. Não esqueça de atualizar a visualização relacionada (`contacts_summary`, `companies_summary`) em `03_views.sql`
8. Não esqueça das funções de exportação
9. Não esqueça da lógica de fusão de contatos

### Executando com Dados de Teste

Importe `test-data/contacts.csv` via a página de Contatos → Botão Importar.

### Git Hooks

- Pre-commit: Executa automaticamente `make registry-gen` para atualizar `registry.json`

### Acessando Serviços Locais Durante o Desenvolvimento

- Frontend: http://localhost:5173/
- Painel do Supabase: http://localhost:54323/
- API REST: http://127.0.0.1:54321
- Armazenamento (anexos): http://localhost:54323/project/default/storage/buckets/attachments
- Inbucket (teste de email): http://localhost:54324/

## Notas Importantes

- O código fonte é intencionalmente pequeno (~15.000 linhas em `src/components/commandrm`) para facilitar a personalização
- Modifique arquivos em `src/components/admin` e `src/components/ui` diretamente - eles foram feitos para serem personalizados
- Testes unitários podem ser adicionados no diretório `src/` (os arquivos de teste devem ser nomeados `*.test.ts` ou `*.test.tsx`)
- A exclusão de usuários não é suportada para evitar perda de dados; use a desabilitação de contas
- Os operadores de filtro devem ser suportados pelo `supabaseAdapter` ao usar FakeRest
- Saída concisa opcional para trabalho individual: o estilo `concise-dev` está disponível em `.claude/styles/concise-dev.md`. Para ativar apenas para você, copie-o para `.claude/output-styles/` (ou `~/.claude/output-styles/`) e execute `/output-style concise-dev`, ou defina `"outputStyle": "concise-dev"` no seu próprio `.claude/settings.local.json`. Não está ativado no `settings.json` commitado.
