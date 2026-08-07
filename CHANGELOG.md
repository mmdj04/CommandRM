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

* Fix: Corrigir imports `react-router-dom` para `react-router` em 3 arquivos
* Fix: Corrigir ícone `Linkedin` removido do lucide-react v1.x (substituído por `ExternalLink`)
* Fix: Corrigir compilação TypeScript após atualizações
* Melhorias no CRUD: formatação de moeda seguindo locale do usuário, exclusão de tags, nova visualização de vendas (SalesShow)
* Remover emojis de todos os arquivos do projeto
* Corrigir caracteres especiais do Português Brasileiro em toda a documentação
* Corrigir erros de lint do React Hooks (refs, imutabilidade, useMemo)

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

* @dependabot[bot] fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/67
* @eithe fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/69
* @djhi fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/70
* @SxMShaDoW fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/78
* @fzaninotto fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/85
* @anthonycmain fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/86
* @0xflotus fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/93
* @erwanMarmelab fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/96
* @Madeorsk fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/104
* @mpsalunggg fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/107
* @main-uk fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/116
* @CMiksche fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/123
* @WiXSL fez sua primeira contribuição em https://github.com/marmelab/commandrm/pull/132

**Changelog completo**: https://github.com/marmelab/commandrm/compare/v1.0.0...v1.5.0

## v1.0.0 - 10/03/2026

## O que mudou

* Fix(ops): Atualizar pacotes por @jonathanarnault em https://github.com/marmelab/commandrm/pull/1
* Feat(cadastro): Adicionar suporte a cadastro de usuários por @jonathanarnault em https://github.com/marmelab/commandrm/pull/3
* Feat(upload): Enviar arquivos para storage do Supabase por @arimet em https://github.com/marmelab/commandrm/pull/4
* Fix(db): Adicionar políticas de linha faltando ao banco por @jonathanarnault em https://github.com/marmelab/commandrm/pull/5
* Feat(crm): Portar funcionalidades demo para commandrm por @arimet em https://github.com/marmelab/commandrm/pull/7
* Feat(banco): Atualizar colunas para corresponder aos tipos do demo CRM por @jonathanarnault em https://github.com/marmelab/commandrm/pull/2
* Feat(supabase): Atualizar script de inicialização do projeto por @jonathanarnault em https://github.com/marmelab/commandrm/pull/6
* Feat(atomic): Criar visualização para empresas e contatos + banir usuários por @arimet em https://github.com/marmelab/commandrm/pull/10
* Feat(crm): Adicionar scripts de deploy do Supabase por @jonathanarnault em https://github.com/marmelab/commandrm/pull/9
* Feat(ops): Adicionar script de deploy por @jonathanarnault em https://github.com/marmelab/commandrm/pull/8
* Feat(ops): Adicionar pipeline CI/CD por @jonathanarnault em https://github.com/marmelab/commandrm/pull/11
* Fix(init): Remover notificação de login obrigatório se CRM não foi inicializado por @jonathanarnault em https://github.com/marmelab/commandrm/pull/13
* Feat(crm): Definir isImage no dataProvider por @arimet em https://github.com/marmelab/commandrm/pull/12
* Fix(crm): Gerenciar etiquetas para exportação de contatos por @arimet em https://github.com/marmelab/commandrm/pull/15
* Fix(crm): Definir telefone em campos separados + atualizar getCompanyAvatar por @arimet em https://github.com/marmelab/commandrm/pull/14
* Fix(contatos): Retornar todos os vendedores no seletor por @jonathanarnault em https://github.com/marmelab/commandrm/pull/16
* Fix(crm): Validação de data + refatorar uploadToBucket por @arimet em https://github.com/marmelab/commandrm/pull/19
* Fix(contato): Exibir perfil LinkedIn como label URL no aside por @jonathanarnault em https://github.com/marmelab/commandrm/pull/18
* Fix(ops): Páginas GitHub não foram enviadas como esperado por @jonathanarnault em https://github.com/marmelab/commandrm/pull/22
* Fix(crm): Aplicar sugestões de revisões por @arimet em https://github.com/marmelab/commandrm/pull/21
* Fix(ops): Páginas Github não foram enviadas como esperado por @jonathanarnault em https://github.com/marmelab/commandrm/pull/24
* Fix(config): Atualizar informações do usuário atual no Supabase por @arimet em https://github.com/marmelab/commandrm/pull/23
* Feat(auth): Adicionar redefinição de senha para Vendedores por @arimet em https://github.com/marmelab/commandrm/pull/26
* Fix(crm): Gerenciar deploy para Browser Router por @arimet em https://github.com/marmelab/commandrm/pull/30
* Fix(views): Adicionar security invokers para evitar vazamento de dados por @jonathanarnault em https://github.com/marmelab/commandrm/pull/29
* Fix(deploy) por @arimet em https://github.com/marmelab/commandrm/pull/31
* Fix(deploy): Adicionar URL e chave anon do projeto Supabase ao CI/CD por @jonathanarnault em https://github.com/marmelab/commandrm/pull/32
* Fix(login): Corrigir nome base do admin por @jonathanarnault em https://github.com/marmelab/commandrm/pull/33
* Fix: Buscar contato + melhorar importação de contato por @arimet em https://github.com/marmelab/commandrm/pull/28
* Feat(tarefa): Associar tarefa a um sales_id + melhorar documentação por @arimet em https://github.com/marmelab/commandrm/pull/25
* Fix(migrações): recriar visualização contact_summary na migração de remoção de acquisition por @jonathanarnault em https://github.com/marmelab/commandrm/pull/35
* Feat(crm): Substituir browserRouter por HashRouter e gerenciar reset cal... por @arimet em https://github.com/marmelab/commandrm/pull/36
* Feat(auth): Atualizar senha do Supabase via interface do CRM por @arimet em https://github.com/marmelab/commandrm/pull/34
* Feat(dataProvider): Adicionar adaptador de filtro supabase para fakerest por @jonathanarnault em https://github.com/marmelab/commandrm/pull/20
* Fix(oportunidades): Nome da empresa não aparecia no modal de detalhes por @jonathanarnault em https://github.com/marmelab/commandrm/pull/38
* Fix(macOS): Atualizar package lock para incluir binários nativos do rollup por @jonathanarnault em https://github.com/marmelab/commandrm/pull/41
* Adicionar provedor fake rest por @jonathanarnault em https://github.com/marmelab/commandrm/pull/27
* Feat(ops): Adicionar opção para deploy em outro repositório por @jonathanarnault em https://github.com/marmelab/commandrm/pull/37
* Feat(UI): Melhorar Dashboard e exibir Páginas Vazias apenas sem filtros por @arimet em https://github.com/marmelab/commandrm/pull/40
* Feat(doc): Adicionar guia de configuração do Supabase vinculado por @jonathanarnault em https://github.com/marmelab/commandrm/pull/39
* Fix(ux): Reduzir tempo de carregamento inicial por @jonathanarnault em https://github.com/marmelab/commandrm/pull/42
* Feat(mail): Adicionar nota de contato via email por @slax57 em https://github.com/marmelab/commandrm/pull/17
* Fix(perf): Deslogar usuário se banco foi resetado e melhorar desempenho da página de login por @jonathanarnault em https://github.com/marmelab/commandrm/pull/45
* Seg(init_state): visualização init_state não vaza mais quantidade de vendedores por @jonathanarnault em https://github.com/marmelab/commandrm/pull/46
* fix(crm): Corrigir cor do logo na página de cadastro por @slax57 em https://github.com/marmelab/commandrm/pull/44
* Fix(avatar): Upload de avatar não falha mais sem alteração no arquivo por @jonathanarnault em https://github.com/marmelab/commandrm/pull/48
* Feat(auth): Gerenciar redefinição de senha e Convidar usuário por @arimet em https://github.com/marmelab/commandrm/pull/43
* Feat(auth): Para redefinir senha do usuário, enviar email de redefinição por @arimet em https://github.com/marmelab/commandrm/pull/47
* Fix(ops): Atualizar documentação de deploy cruzado por @jonathanarnault em https://github.com/marmelab/commandrm/pull/50
* Fix(import): etiquetas e empresas não são mais duplicadas durante importações por @jonathanarnault em https://github.com/marmelab/commandrm/pull/53
* fix(mail): Suportar destinatário com nome vazio por @slax57 em https://github.com/marmelab/commandrm/pull/52
* Feat(crm): Atualizar templates de email por @arimet em https://github.com/marmelab/commandrm/pull/51
* fix(login): Corrigir usuário não logando automaticamente após cadastro por @slax57 em https://github.com/marmelab/commandrm/pull/49
* Fix(nota): Melhorar espaçamento de notas por @jonathanarnault em https://github.com/marmelab/commandrm/pull/55
* Fix(mail): Adicionar log de debug ao criar usuário e documentar limite de taxa de email por @jonathanarnault em https://github.com/marmelab/commandrm/pull/56
* Feat(tarefa): Exibir Tarefas para semana atual e não por sete... por @arimet em https://github.com/marmelab/commandrm/pull/54
* Feat(config): Exibir email de entrada para usuário por @arimet em https://github.com/marmelab/commandrm/pull/59
* Fix(avatar): Exclusão de avatar agora é persistida corretamente por @jonathanarnault em https://github.com/marmelab/commandrm/pull/57
* Fix(contato): Atualizar last_seen quando uma nota é adicionada ao contato por @jonathanarnault em https://github.com/marmelab/commandrm/pull/58
* Feat(mailing): Adicionar suporte a múltiplos destinatários e corrigir erros de digitação por @jonathanarnault em https://github.com/marmelab/commandrm/pull/60
* Feat(tarefas): Atualizar último acesso do contato ao criar tarefa por @jonathanarnault em https://github.com/marmelab/commandrm/pull/61
* Feat(tarefa): Adicionar suporte a edição de tarefas por @jonathanarnault em https://github.com/marmelab/commandrm/pull/63
* Feat(doc): Melhorar documentação por @jonathanarnault em https://github.com/marmelab/commandrm/pull/64
* pular tarefa do gh action quando secrets necessários estão faltando por @ThieryMichel em https://github.com/marmelab/commandrm/pull/65


**Changelog completo**: https://github.com/marmelab/commandrm/commits/v1.0.0
