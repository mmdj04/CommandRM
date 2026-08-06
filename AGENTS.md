# AGENTS.md

## Visao Geral do Projeto

CommandRM e um CRM completo construido com React, shadcn-admin-kit e Supabase. Ele fornece gerenciamento de contatos, acompanhamento de tarefas, anotacoes, captura de emails e gerenciamento de oportunidades com um quadro Kanban.

## Comandos de Desenvolvimento

### Configuracao
```bash
make install          # Instalar dependencias (frontend, backend, Supabase local)
make start            # Iniciar stack completo com API real (Supabase + servidor de desenvolvimento Vite)
make stop             # Parar o stack
make start-demo       # Iniciar stack completo com provedor de dados FakeRest
```

### Testes e Qualidade do Codigo

```bash
make test             # Executar testes unitarios (vitest)
make typecheck        # Executar verificacao de tipos TypeScript
make lint             # Executar verificacoes ESLint e Prettier
```

### Compilacao

```bash
make build            # Compilar pacote de producao (executa tsc + vite build)
```

### Gerenciamento de Banco de Dados

O esquema do banco de dados e definido declarativamente em `supabase/schemas/` (fonte da verdade). As migracoes em `supabase/migrations/`, geradas automaticamente, nao devem ser editadas diretamente - mas as vezes e necessario um ajuste manual (por exemplo, substituir um DROP+CREATE por um ALTER TABLE RENAME para renomear colunas). As definicoes de funcoes em `02_functions.sql` devem usar exatamente o formato `pg_dump` (execute `npx supabase db dump --local --schema public`) para evitar diferencas fantasma.

```bash
npx supabase db diff --local -f <nome>  # Gerar migracao a partir de alteracoes no esquema
npx supabase migration up --local       # Aplicar migracoes localmente
npx supabase db push                    # Enviar migracoes para o remoto
npx supabase db reset --local           # Redefinir banco de dados local (destrutivo)
```

### Registro (Componentes Shadcn)

```bash
make registry-gen     # Gerar registry.json (executa automaticamente no pre-commit)
make registry-build   # Compilar registro Shadcn
```

## Arquitetura

### Stack Tecnologico

- **Frontend**: React 19 + TypeScript + Vite
- **Roteamento**: React Router v7
- **Busca de Dados**: React Query (TanStack Query)
- **Formularios**: React Hook Form
- **Logica da Aplicacao**: shadcn-admin-kit + ra-core (react-admin headless)
- **Componentes de UI**: Shadcn UI + Radix UI
- **Estilizacao**: Tailwind CSS v4
- **Backend**: Supabase (PostgreSQL + API REST + Autenticacao + Armazenamento + Funcoes Edge)
- **Testes**: Vitest

### Estrutura de Diretorios

```
src/
├── components/
│   ├── admin/              # Componentes Shadcn Admin Kit (dependencia mutavel)
│   ├── commandrm/          # Codigo principal do CRM (~15.000 linhas)
│   │   ├── activity/       # Logs de atividade
│   │   ├── companies/      # Gerenciamento de empresas
│   │   ├── contacts/       # Gerenciamento de contatos (inclui import/export CSV)
│   │   ├── dashboard/      # Widgets do painel
│   │   ├── deals/          # Pipeline de oportunidades (Kanban)
│   │   ├── filters/        # Filtros de lista
│   │   ├── layout/         # Componentes de layout do app
│   │   ├── login/          # Paginas de autenticacao
│   │   ├── misc/           # Utilitarios compartilhados
│   │   ├── notes/          # Gerenciamento de notas
│   │   ├── providers/      # Provedores de dados (Supabase + FakeRest)
│   │   ├── root/           # Componente raiz do CRM
│   │   ├── sales/          # Gerenciamento da equipe de vendas
│   │   ├── settings/       # Pagina de configuracoes
│   │   ├── simple-list/    # Componentes de lista
│   │   ├── tags/           # Gerenciamento de etiquetas
│   │   └── tasks/          # Gerenciamento de tarefas
│   ├── supabase/           # Componentes de autenticacao especificos do Supabase
│   └── ui/                 # Componentes Shadcn UI (dependencia mutavel)
├── hooks/                  # Hooks React personalizados
├── lib/                    # Funcoes utilitarias
└── App.tsx                 # Ponto de entrada da aplicacao

supabase/
├── functions/              # Funcoes Edge (gerenciamento de usuarios, email de entrada)
├── migrations/             # Migracoes do banco de dados (geradas automaticamente, nao edite diretamente)
└── schemas/                # Esquema declarativo (fonte da verdade para a estrutura do DB)
```

### Padroes Principais de Arquitetura

Para mais detalhes, consulte o documento doc/src/content/docs/developers/architecture-choices.mdx.

#### Dependencias Mutaveis

O codigo fonte inclui dependencias mutaveis que devem ser modificadas diretamente se necessario:
- `src/components/admin/`: Codigo do framework Shadcn Admin Kit
- `src/components/ui/`: Componentes Shadcn UI

#### Configuracao via Componente `<CRM>`

O arquivo `src/App.tsx` renderiza o componente `<CRM>`, que aceita props para configuracao especifica do dominio:
- `contactGender`: Opcoes de genero
- `companySectors`: Setores industriais das empresas
- `dealCategories`, `dealStages`, `dealPipelineStatuses`: Configuracao de oportunidades
- `noteStatuses`: Opcoes de status das notas com cores
- `taskTypes`: Opcoes de tipos de tarefa
- `logo`, `title`: Identidade visual
- `lightTheme`, `darkTheme`: Personalizacao do tema
- `disableTelemetry`: Opt-out do rastreamento anonimo de uso

#### Visualizacoes do Banco de Dados

Consultas complexas sao tratadas via visualizacoes do banco de dados para simplificar o codigo do frontend e reduzir a sobrecarga HTTP. Por exemplo, `contacts_summary` fornece dados consolidados de contatos incluindo contagens de tarefas.

#### Gatilhos do Banco de Dados

Os dados do usuario sao sincronizados entre a tabela `auth.users` do Supabase e a tabela `sales` do CRM via gatilhos (veja `supabase/schemas/04_triggers.sql`).

#### Funcoes Edge

Localizadas em `supabase/functions/`:
- Gerenciamento de usuarios (criar/atualizar usuarios, desabilitar contas)
- Processamento de webhook de email de entrada

#### Provedores de Dados

Dois provedores de dados estao disponiveis:
1. **Supabase** (padrao): Backend de producao usando PostgreSQL
2. **FakeRest**: API falsa no navegador para desenvolvimento/demonstracoes, reinicia ao recarregar a pagina

Ao usar FakeRest, as visualizacoes do banco de dados sao emuladas no frontend. Os geradores de dados de teste estao em `src/components/commandrm/providers/fakerest/dataGenerator/`.

#### Sintaxe de Filtros

Os filtros de lista seguem a convencao `ra-data-postgrest` com concatenacao de operadores: `nome_campo@operador` (por exemplo, `first_name@eq`). O adaptador FakeRest mapeia esses para a sintaxe do FakeRest em tempo de execucao.

## Fluxos de Trabalho de Desenvolvimento

### Aliases de Caminho

O projeto usa aliases de caminho TypeScript configurados em `tsconfig.json` e `components.json`:
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/components/ui` → `src/components/ui`

### Adicionando Campos Personalizados

Ao modificar estruturas de dados de contatos ou empresas:
1. Edite o arquivo de esquema relevante em `supabase/schemas/` (tabela em `01_tables.sql`, visualizacoes em `03_views.sql`, etc.)
2. Gere uma migracao: `npx supabase db diff --local -f <nome>`
3. Aplique-a: `npx supabase migration up --local`
4. Atualize o CSV de exemplo: `src/components/commandrm/contacts/contacts_export.csv`
5. Atualize a funcao de importacao: `src/components/commandrm/contacts/useContactImport.tsx`
6. Se estiver usando FakeRest, atualize os geradores de dados em `src/components/commandrm/providers/fakerest/dataGenerator/`
7. Nao esqueca de atualizar a visualizacao relacionada (`contacts_summary`, `companies_summary`) em `03_views.sql`
8. Nao esqueca das funcoes de exportacao
9. Nao esqueca da logica de fusao de contatos

### Executando com Dados de Teste

Importe `test-data/contacts.csv` via a pagina de Contatos → Botao Importar.

### Git Hooks

- Pre-commit: Executa automaticamente `make registry-gen` para atualizar `registry.json`

### Acessando Servicos Locais Durante o Desenvolvimento

- Frontend: http://localhost:5173/
- Painel do Supabase: http://localhost:54323/
- API REST: http://127.0.0.1:54321
- Armazenamento (anexos): http://localhost:54323/project/default/storage/buckets/attachments
- Inbucket (teste de email): http://localhost:54324/

## Notas Importantes

- O codigo fonte e intencionalmente pequeno (~15.000 linhas em `src/components/commandrm`) para facilitar a personalizacao
- Modifique arquivos em `src/components/admin` e `src/components/ui` diretamente - eles foram feitos para serem personalizados
- Testes unitarios podem ser adicionados no diretorio `src/` (os arquivos de teste devem ser nomeados `*.test.ts` ou `*.test.tsx`)
- A exclusao de usuarios nao e suportada para evitar perda de dados; use a desabilitacao de contas
- Os operadores de filtro devem ser suportados pelo `supabaseAdapter` ao usar FakeRest
- Saida concisa opcional para trabalho individual: o estilo `concise-dev` esta disponivel em `.claude/styles/concise-dev.md`. Para ativa-lo apenas para voce, copie-o para `.claude/output-styles/` (ou `~/.claude/output-styles/`) e execute `/output-style concise-dev`, ou defina `"outputStyle": "concise-dev"` no seu proprio `.claude/settings.local.json`. Nao esta ativado no `settings.json` commitado.
