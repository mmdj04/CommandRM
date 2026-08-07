## v1.8.2 - 07/08/2026

### Correções de Bugs

* Corrigir Edge Function `update_password`: remover lógica de retry que agravava rate limits (429)
* Corrigir Edge Function `update_password`: retornar erro 429 claro quando email rate limit é atingido
* Corrigir Edge Function `users`: adicionar `.select("*")` em `updateSaleDisabled` para retornar dados
* Adicionar `beforeDelete` no dataProvider Supabase para `sales`: reatribuir empresas, contatos, anotações de contatos, oportunidades e anotações de oportunidades antes de excluir
* Resolver conflitos de foreign key ao excluir usuários (409 Conflict)

### Correções de Interface

* Corrigir props `dashboard` e `layout` no CRM.tsx: wrapper function incorreta impedia renderização do Painel de Controle

### Performance

* Suspense granular por rota no DesktopAdmin e MobileAdmin (remove tela branca "Carregando" na carga inicial)

### Validação

* Validar formato de email no formulário de login antes de enviar ao Supabase
* Validar senha mínima (6 caracteres) no formulário de login

### Supabase

* Deploy das Edge Functions `update_password` e `users` com correções
* Remover retry desnecessário que causava cascata de 429s

### Localização (PT-BR)

* Corrigir meses em inglês no gráfico "Receita de Oportunidades Futuras": locale `en-US` → `pt-BR` com `date-fns/locale`
* Corrigir fallback "Won"/"Lost" para "Ganhou"/"Perdido" no gráfico de oportunidades
* Traduzir "Forgot password?" → "Esqueceu sua senha?" na página de login
* Traduzir "Create the first user account..." → "Crie a primeira conta de usuário..." no cadastro
* Traduzir 3 mensagens em inglês no `SalesCreate` (criação de usuário)
* Traduzir mensagem de erro em inglês no `SalesEdit`
* Traduzir "More" → "Mais" no botão de menu do contato
* Corrigir locale padrão `"en"` → `"pt-BR"` em `dealUtils.ts`, `RelativeDate.tsx`, `CompanyShow.tsx`, `CompanyAside.tsx`, `ContactBackgroundInfo.tsx`, `ContactListContent.tsx`, `DealArchivedList.tsx`

### Dados de Teste

* Adicionar script `test-data/seed.cjs` para popular dados de teste realistas via Supabase API
* Documentação em `doc/seed-script.md` com uso, configuração e estrutura do script

### Documentação

* Corrigir `AGENTS.md`: `Teléfono` (espanhol) → `Telefone`, `Sôfregu` → `Sôfrego`
* Corrigir `README.md`: referência incorreta "Jest" → "Vitest"
* Corrigir `CHANGELOG.md`: `formulario` → `formulário` (2 ocorrências), `Fix:` → `Correção:` (3 ocorrências), adicionar backticks em nomes de arquivos
* Corrigir `SECURITY.md`: versão suportada `1.6.x` → `1.8.x`
* Corrigir `docs/learnings/patterns.md`: acentos faltando (`Padroes` → `Padrões`, `Indice` → `Índice`, `ate` → `até`), path hardcoded
* Corrigir `doc/seed-script.md`: formatação do valor `5`

---

## v1.8.1 - 07/08/2026

### Performance

* Implementar lazy loading com `React.lazy` para todas as rotas (reduz JavaScript não utilizado em ~400 KiB)
* Adicionar `<Suspense>` com fallback "Carregando..." para carregamento assíncrono
* Habilitar source maps para JavaScript grande (depuração em produção)
* Mover `<main>` landmark para dentro do React App (correção do Accessibility 100/100)

### Acessibilidade

* Adicionar `<main>` wrapper no componente React para garantir landmark SEMPRE presente
* Corrigir Issue: "Document does not have a main landmark"

### SEO

* Atualizar referências no `README.md` para `mmdj04/CommandRM`
* Atualizar links de demo para `command-rm.vercel.app`
* Atualizar email de contato para `matheusmoraesdj2025@gmail.com`
* Adicionar crédito do desenvolvedor Matheus Moraes com WhatsApp

### Documentação

* Atualizar `CHANGELOG.md` com referências corretas ao repositório
* Atualizar `CODE_OF_CONDUCT.md` com informações de contato
* Atualizar `.github/CONTRIBUTING.md` com referências corretas
* Atualizar `.github/CODE_OF_CONDUCT.md` com informações de contato
* Atualizar `.github/pull_request_template.md` com links corretos

### Configuração

* Renomear branch `master` para `main`
* Proteger branch `main` no GitHub (requer PR, sem force push)

---

## v1.8.0 - 07/08/2026

### Segurança

* Restringir grants do role `anon` (apenas `init_state` e `is_admin()`)
* Remover função SQL `merge_contacts` morta do schema (duplicada na Edge Function)
* Adicionar `vercel.json` com headers de segurança (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
* Configurar cache imutável para assets estáticos (1 ano)

### Supabase

* Deploy da Edge Function `update_password` com URL via variável de ambiente `CRM_BASE_URL`
* Logs detalhados de erro na Edge Function `update_password`
* Configurar secrets `CRM_BASE_URL`, `SB_JWT_ISSUER`, `SB_PUBLISHABLE_KEY` no Supabase remoto
* Melhorar tratamento de erros no `update_password` com retry automático para rate limits (429)

### Performance

* Adicionar code splitting com `manualChunks` para vendor, ra-core, UI, charts e utils
* Configurar Terser minification com `drop_console` e `drop_debugger`
* Adicionar preconnect e DNS-prefetch para Supabase
* Adicionar `defer` no script principal para reduzir render-blocking resources

### Acessibilidade

* Adicionar `<main>` landmark no HTML para pontuação 100/100

### SEO

* Adicionar meta description, keywords e author
* Configurar idioma `pt-BR` no HTML e manifest
* Atualizar título para "CommandRM - Sistema CRM Completo"

### PWA

* Adicionar descrição e categories no manifest.json
* Configurar lang `pt-BR` no manifest

### Tradução

* Traduzir templates de email para PT-BR (`invite.html` e `recovery.html`)
* Corrigir assunto dos emails ("You been invited" → "Você foi convidado(a) para o CommandRM")

### UI

* Corrigir bug do logo removido aparecendo no cabeçalho (renderizar `<img>` condicionalmente)
* Corrigir MobileDashboard, layout supabase e login-page para não renderizar logos vazios

---

## v1.7.0 - 07/08/2026

### Atualizações de Dependências

* Atualizar **118 dependências** (53 minor/patch via npm update)
* Atualizar **22 pacotes Radix UI** para última versão
* Atualizar **TanStack Query** (react-query, persist-client, async-storage-persister)
* Atualizar **Tailwind CSS** (core + vite plugin) para v4.3.3
* Atualizar **react-admin** (ra-core, ra-i18n-polyglot, ra-language-english, ra-language-french) para v5.15.0
* Atualizar **65+ tipos** (@types/*) para últimas versões
* Atualizar **12 dev tools** (playwright, vitest-browser, lint-staged, typescript-eslint, etc.)
* Atualizar **lucide-react** para v1.29.0
* Atualizar **zod** para v4.4.3
* Atualizar **dompurify** para v3.4.13
* Atualizar **marked** para v18.0.9
* Atualizar **qs** para v6.15.3
* Atualizar **papaparse** para v5.5.4
* Atualizar **prettier** para v3.9.6
* Atualizar **tldts** para v7.4.10
* Adicionar **react-router-dom** v7.18.2 (necessário para ra-core)
* Atualizar **React** para v19.2.8
* Atualizar **vitest** para v4.1.10 (corrigir 5 vulnerabilidades críticas)
* Atualizar **ESLint** de v9 para v10 (migrar `.eslintignore` para `eslint.config.js`)
* Atualizar **@eslint/js** de v9 para v10
* Atualizar **shadcn CLI** de v3 para v4
* Atualizar **recharts** de v3.8 para v3.10
* Atualizar **vite-plugin-pwa** para v1.3.0
* Atualizar dependências do **/doc** (sharp, astro, starlight, postcss, js-yaml, svgo)

### Componentes shadcn UI

* Adicionar **25 novos componentes** shadcn UI (total: 59 componentes)
* Novos: aspect-ratio, attachment, bubble, button-group, calendar, carousel, chart, collapsible, combobox, context-menu, direction, empty, field, hover-card, input-group, input-otp, kbd, marker, menubar, message, message-scroller, native-select, resizable, scroll-area, slider

### Storybook

* Atualizar **Storybook** de v9.1.19 para **v10.5.7** (última versão)
* Atualizar **@storybook/react-vite** para v10.5.7
* Adicionar **@storybook/addon-links** v10.5.7
* Atualizar **eslint-plugin-storybook** para v10.5.7

### Rebrand

* Renomear projeto de Atomic CRM para CommandRM (diretórios, imports, títulos, i18n, templates de email, configs Supabase, documentação)

### Localização (PT-BR)

* Traduzir ~100+ strings hardcoded em inglês para Português Brasileiro em ~30 arquivos de componentes
* Traduzir labels de configuração do banco de dados (noteStatuses, taskTypes, dealStages, companySectors, dealCategories)
* Adicionar traduções de ordenação (ra.sort.sort_by, ra.sort.ASC, ra.sort.DESC)
* Adicionar locale date-fns para datas relativas ("hoje às", "há 3 dias")
* Traduzir ThemeModeToggle (Claro/Escuro/Sistema)
* Atualizar testes i18n para incluir locale pt-BR (i18nProvider, ContactShow, NoteInputs)

### Correções

* Correção: Corrigir imports `react-router-dom` para `react-router` em 3 arquivos
* Correção: Corrigir ícone `Linkedin` removido do lucide-react v1.x (substituído por `ExternalLink`)
* Correção: Corrigir compilação TypeScript após atualizações
* Melhorias no CRUD: formatação de moeda seguindo locale do usuário, exclusão de tags, nova visualização de vendas (SalesShow)
* Remover emojis de todos os arquivos do projeto
* Corrigir caracteres especiais do Português Brasileiro em toda a documentação
* Corrigir erros de lint do React Hooks (refs, imutabilidade, useMemo)
* Corrigir caracteres PT-BR em CLAUDE.md (250+ correções), AGENTS.md e CODE_OF_CONDUCT.md
* Corrigir transição de tema: remover `transition-all` de 8 componentes UI para troca instantânea light/dark

### Personalização

* Sidebar: exibir nome do CRM dinamicamente (substituir "Acme Inc." por configuração)
* Sidebar: adicionar crédito "desenvolvido por Matheus Moraes" com link WhatsApp (+55 21 97469-9723)
* Login: adicionar crédito do desenvolvedor na tela de fundo
* Remover logotipo padrão (clientes personalizam nome e imagem)
* Navegação mobile: espaçamento responsivo com flex-1, botão "+" reduzido de 64px para 48px
* Navegação mobile: impedir corte do texto nos botões (overflow-visible, min-h-12)
* Fonte **Inter Variable** servida localmente via @fontsource (7 arquivos woff2, ~180KB total)

### CI/CD

* Atualizar **actions/checkout** de v4 para v7
* Atualizar **actions/setup-node** de v4 para v7
* Atualizar **wearerequired/lint-action** de v2 para v3
* Atualizar **github/codeql-action** de v3 para v4
* Atualizar **supabase/setup-cli** de v1 para v3

### Segurança

* Reduzir vulnerabilidades de 19 para 2 (remanescentes: react-router 7.12-8.2.0)
* Configurar **Dependabot** para atualizações automáticas de dependências
* Configurar **CodeQL** para análise de código estática
* Adicionar **dependency review** workflow para pull requests
* Adicionar `SECURITY.md` com política de relatório de vulnerabilidades

---

## v1.6.0 - 06/08/2026

### O que mudou

* Feat: Adicionar localização em Português Brasileiro (pt-BR) com mais de 570 traduções
* Feat: Criar contato diretamente da tela de oportunidade (Issue #286)
* Feat: Adicionar botão de criação de oportunidade no menu móvel (Issue #285)
* Feat: Pré-selecionar empresa ao adicionar contato a partir da página da empresa (Issue #128)
* Fix: Permitir criar oportunidade sem empresa obrigatória (Issue #129)
* Fix: Corrigir página de login para mostrar opções SSO quando configurado (Issue #326)
* Fix: Corrigir link "Esqueceu sua senha?" em Português
* Fix: Corrigir import react-router-dom para react-router
* Fix: Adicionar chave de tradução deals.forcedCaseName em EN/FR/PT-BR
* Fix: Traduzir botões de ordenação ("Ordenar por", "crescente", "decrescente")
* Fix: Traduzir datas relativas para PT-BR ("hoje às", "há 3 dias")
* Fix: Traduzir menu de tema (Claro/Escuro/Sistema)
* Fix: Atualizar configuração do banco de dados com labels em PT-BR (status, estágios, categorias, setores, tipos de tarefa)
* Doc: Adicionar documentação completa do schema do banco de dados (Issue #264)
* Tradução: CHANGELOG.md traduzido para Português Brasileiro
* Tradução: Interface de login 100% em Português (Entrar, Senha, Esqueceu sua senha?)
* Tradução: Detecção automática de idioma do navegador (pt-BR padrão)

### Issues resolvidas

* #286 - Adicionar contato na página de oportunidade
* #264 - Documentar schema do banco para integradores
* #326 - Login mostra username/password mesmo com SSO
* #285 - Não cria oportunidade no mobile
* #129 - Criar oportunidade sem empresa falha
* #128 - "Adicionar contato" da empresa não pré-seleciona empresa

---

## v1.5.0 - 10/03/2026

Leia sobre as atualizações online: [CommandRM Atualizações Março 2026](https://marmelab.com/blog/2026/03/13/commandrm-march-updates.html)

## Alteração importante

* tabela `contactNotes` foi renomeada para `contact_notes`
* tabela `dealNotes` foi renomeada para `deal_notes`
* coluna `stateAbbr` na tabela `companies` foi renomeada para `state_abbr`

Você deve executar a migração para atualizar o schema do banco:

```
make supabase-migrate-database
```

## O que mudou

* Substituir React Admin pelo Shadcn Admin Kit por @Madeorsk em #104
* Adicionar suporte a SSO e documentação por @djhi em #159, #161
* Adicionar página de Configurações por @fzaninotto em #162
* Adicionar encaminhamento de emails por @ThieryMichel em #185
* Adicionar capacidade de importar dados de outro CRM por @djhi em #133
* Adicionar suporte a anexos em emails recebidos por @slax57 em #158
* Adicionar aplicação móvel por @slax57 em #134
* Adicionar suporte a múltiplos emails e telefones por contato por @slax57 em #80
* Adicionar novos campos para importação JSON por @slax57 em #179
* Adicionar capacidade de carregar notas anteriores sob demanda por @ThieryMichel em #177
* Adicionar telemetria personalizada por @djhi em #79
* Adicionar página de confirmação quando o primeiro usuário precisa confirmar seu email por @Madeorsk em #155
* Adicionar controle de acesso por @djhi em #70
* Corrigir consistência nos nomes de tabelas e campos por @djhi em #136
* Corrigir datas que apareciam deslocadas em 1 dia por @ThieryMichel em #190
* Corrigir mensagem de erro quando criação de usuário falha por @Madeorsk em #151
* Corrigir desempenho da lista de notas no celular por @fzaninotto em #160
* Corrigir visualização de anexos por @djhi em #154
* Corrigir políticas RLS na tabela sales por @djhi em #74
* Corrigir criação de empresa em tempo real por @fzaninotto em #120
* Corrigir erro na lista de Oportunidades por @djhi em #122
* Corrigir dialog de Nova Tarefa fechando mesmo com tarefa inválida por @fzaninotto em #85
* Corrigir notificação de erro no cadastro não sendo exibida por @WiXSL em #132
* Corrigir notificação de email de recuperação de senha não aparecendo por @WiXSL em #165
* Corrigir sistema de autenticação Supabase para edge functions por @Madeorsk em #152
* Corrigir JWT localmente por @Madeorsk em #153
* Corrigir altura de sheets móvel no Google Pixel por @slax57 em #172
* Corrigir headers móvel de nota/tarefa/contato para usar reticências por @WiXSL em #176
* Corrigir truncamento do header de edição de contato no celular por @WiXSL em #178
* Corrigir DateInput e DateTimeInput no Safari móvel por @slax57 em #180
* Corrigir ContactInput que não podia ser scrollado no celular por @slax57 em #181
* Corrigir exclusão de anexo de nota ao remover nota por @WiXSL em #171
* Corrigir script de inicialização remota pedindo org e região por @ThieryMichel em #191
* Corrigir scripts supabase-remote-init e prod-start por @slax57 em #143
* Corrigir importações de componentes do registro Atomic por @djhi em #118
* Corrigir registry.json com arquivos e dependências faltando por @slax57 em #197
* Corrigir campo de busca e filtro de contato por @mpsalunggg em #107
* Corrigir erros de digitação e remover importações não utilizadas por @eithe em #69
* Atualizar várias dependências por @dependabot[bot] em #67, #87, #130, #135, #137, #138, #142, #148, #149, #157, #166, #173, #174, #186, #187, #188, #189, #194, #196
* [Doc] Melhorar documentação sobre configuração inicial de produção por @djhi em #77
* [Doc] Documentar configuração de email por @djhi em #71
* [Doc] Adicionar documentação Starlight por @jonathanarnault em #110
* [Doc] Corrigir links de documentação por @main-uk em #116, @djhi em #127
* [Doc] Adicionar link de início ao menu e corrigir tamanho do logo por @jonathanarnault em #111
* [Chore] Refatorar script de inicialização remota por @djhi em #76
* [Chore] Adicionar arquivo de registro para CommandRM por @jonathanarnault em #115
* [Chore] Adicionar comando build-lib para publicar módulo node commandrm por @ThieryMichel em #66
* [Chore] Permitir sourcemaps TS em produção por @djhi em #88
* [Chore] Melhorar padrões da comunidade GitHub por @arimet em #73

## Novos Contribuidores

* @dependabot[bot] fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/67
* @eithe fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/69
* @djhi fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/70
* @SxMShaDoW fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/78
* @fzaninotto fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/85
* @anthonycmain fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/86
* @0xflotus fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/93
* @erwanMarmelab fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/96
* @Madeorsk fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/104
* @mpsalunggg fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/107
* @main-uk fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/116
* @CMiksche fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/123
* @WiXSL fez sua primeira contribuição em https://github.com/mmdj04/CommandRM/pull/132

**Changelog completo**: https://github.com/mmdj04/CommandRM/compare/v1.0.0...v1.5.0

---

## v1.0.0 - 10/03/2026

## O que mudou

* Fix(ops): Atualizar pacotes por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/1
* Feat(cadastro): Adicionar suporte a cadastro de usuários por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/3
* Feat(upload): Enviar arquivos para storage do Supabase por @arimet em https://github.com/mmdj04/CommandRM/pull/4
* Fix(db): Adicionar políticas de linha faltando ao banco por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/5
* Feat(crm): Portar funcionalidades demo para commandrm por @arimet em https://github.com/mmdj04/CommandRM/pull/7
* Feat(banco): Atualizar colunas para corresponder aos tipos do demo CRM por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/2
* Feat(supabase): Atualizar script de inicialização do projeto por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/6
* Feat(atomic): Criar visualização para empresas e contatos + banir usuários por @arimet em https://github.com/mmdj04/CommandRM/pull/10
* Feat(crm): Adicionar scripts de deploy do Supabase por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/9
* Feat(ops): Adicionar script de deploy por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/8
* Feat(ops): Adicionar pipeline CI/CD por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/11
* Fix(init): Remover notificação de login obrigatório se CRM não foi inicializado por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/13
* Feat(crm): Definir isImage no dataProvider por @arimet em https://github.com/mmdj04/CommandRM/pull/12
* Fix(crm): Gerenciar etiquetas para exportação de contatos por @arimet em https://github.com/mmdj04/CommandRM/pull/15
* Fix(crm): Definir telefone em campos separados + atualizar getCompanyAvatar por @arimet em https://github.com/mmdj04/CommandRM/pull/14
* Fix(contatos): Retornar todos os vendedores no seletor por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/16
* Fix(crm): Validação de data + refatorar uploadToBucket por @arimet em https://github.com/mmdj04/CommandRM/pull/19
* Fix(contato): Exibir perfil LinkedIn como label URL no aside por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/18
* Fix(ops): Páginas GitHub não foram enviadas como esperado por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/22
* Fix(crm): Aplicar sugestões de revisões por @arimet em https://github.com/mmdj04/CommandRM/pull/21
* Fix(ops): Páginas Github não foram enviadas como esperado por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/24
* Fix(config): Atualizar informações do usuário atual no Supabase por @arimet em https://github.com/mmdj04/CommandRM/pull/23
* Feat(auth): Adicionar redefinição de senha para Vendedores por @arimet em https://github.com/mmdj04/CommandRM/pull/26
* Fix(crm): Gerenciar deploy para Browser Router por @arimet em https://github.com/mmdj04/CommandRM/pull/30
* Fix(views): Adicionar security invokers para evitar vazamento de dados por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/29
* Fix(deploy) por @arimet em https://github.com/mmdj04/CommandRM/pull/31
* Fix(deploy): Adicionar URL e chave anon do projeto Supabase ao CI/CD por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/32
* Fix(login): Corrigir nome base do admin por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/33
* Fix: Buscar contato + melhorar importação de contato por @arimet em https://github.com/mmdj04/CommandRM/pull/28
* Feat(tarefa): Associar tarefa a um sales_id + melhorar documentação por @arimet em https://github.com/mmdj04/CommandRM/pull/25
* Fix(migrações): recriar visualização contact_summary na migração de remoção de acquisition por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/35
* Feat(crm): Substituir browserRouter por HashRouter e gerenciar reset cal... por @arimet em https://github.com/mmdj04/CommandRM/pull/36
* Feat(auth): Atualizar senha do Supabase via interface do CRM por @arimet em https://github.com/mmdj04/CommandRM/pull/34
* Feat(dataProvider): Adicionar adaptador de filtro supabase para fakerest por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/20
* Fix(oportunidades): Nome da empresa não aparecia no modal de detalhes por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/38
* Fix(macOS): Atualizar package lock para incluir binários nativos do rollup por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/41
* Adicionar provedor fake rest por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/27
* Feat(ops): Adicionar opção para deploy em outro repositório por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/37
* Feat(UI): Melhorar Dashboard e exibir Páginas Vazias apenas sem filtros por @arimet em https://github.com/mmdj04/CommandRM/pull/40
* Feat(doc): Adicionar guia de configuração do Supabase vinculado por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/39
* Fix(ux): Reduzir tempo de carregamento inicial por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/42
* Feat(mail): Adicionar nota de contato via email por @slax57 em https://github.com/mmdj04/CommandRM/pull/17
* Fix(perf): Deslogar usuário se banco foi resetado e melhorar desempenho da página de login por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/45
* Seg(init_state): visualização init_state não vaza mais quantidade de vendedores por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/46
* fix(crm): Corrigir cor do logo na página de cadastro por @slax57 em https://github.com/mmdj04/CommandRM/pull/44
* Fix(avatar): Upload de avatar não falha mais sem alteração no arquivo por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/48
* Feat(auth): Gerenciar redefinição de senha e Convidar usuário por @arimet em https://github.com/mmdj04/CommandRM/pull/43
* Feat(auth): Para redefinir senha do usuário, enviar email de redefinição por @arimet em https://github.com/mmdj04/CommandRM/pull/47
* Fix(ops): Atualizar documentação de deploy cruzado por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/50
* Fix(import): etiquetas e empresas não são mais duplicadas durante importações por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/53
* fix(mail): Suportar destinatário com nome vazio por @slax57 em https://github.com/mmdj04/CommandRM/pull/52
* Feat(crm): Atualizar templates de email por @arimet em https://github.com/mmdj04/CommandRM/pull/51
* fix(login): Corrigir usuário não logando automaticamente após cadastro por @slax57 em https://github.com/mmdj04/CommandRM/pull/49
* Fix(nota): Melhorar espaçamento de notas por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/55
* Fix(mail): Adicionar log de debug ao criar usuário e documentar limite de taxa de email por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/56
* Feat(tarefa): Exibir Tarefas para semana atual e não por sete... por @arimet em https://github.com/mmdj04/CommandRM/pull/54
* Feat(config): Exibir email de entrada para usuário por @arimet em https://github.com/mmdj04/CommandRM/pull/59
* Fix(avatar): Exclusão de avatar agora é persistida corretamente por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/57
* Fix(contato): Atualizar last_seen quando uma nota é adicionada ao contato por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/58
* Feat(mailing): Adicionar suporte a múltiplos destinatários e corrigir erros de digitação por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/60
* Feat(tarefas): Atualizar último acesso do contato ao criar tarefa por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/61
* Feat(tarefa): Adicionar suporte a edição de tarefas por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/63
* Feat(doc): Melhorar documentação por @jonathanarnault em https://github.com/mmdj04/CommandRM/pull/64
* pular tarefa do gh action quando secrets necessários estão faltando por @ThieryMichel em https://github.com/mmdj04/CommandRM/pull/65


**Changelog completo**: https://github.com/mmdj04/CommandRM/commits/v1.0.0
