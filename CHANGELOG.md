## v1.6.0 - 06/08/2026

### O que mudou

* Feat: Adicionar localizacao em Portugues Brasileiro (pt-BR) com mais de 570 traducoes
* Feat: Criar contato diretamente da tela de oportunidade (Issue #286)
* Feat: Adicionar botao de criacao de oportunidade no menu movel (Issue #285)
* Feat: Pre-selecionar empresa ao adicionar contato a partir da pagina da empresa (Issue #128)
* Fix: Permitir criar oportunidade sem empresa obrigatoria (Issue #129)
* Fix: Corrigir pagina de login para mostrar opcoes SSO quando configurado (Issue #326)
* Fix: Corrigir link "Esqueceu sua senha?" em Portugues
* Fix: Corrigir import react-router-dom para react-router
* Fix: Adicionar chave de traducao deals.forcedCaseName em EN/FR/PT-BR
* Fix: Traduzir botoes de ordenacao ("Ordenar por", "crescente", "decrescente")
* Fix: Traduzir datas relativas para PT-BR ("hoje as", "ha 3 dias")
* Fix: Traduzir menu de tema (Claro/Escuro/Sistema)
* Fix: Atualizar configuracao do banco de dados com labels em PT-BR (status, estagios, categorias, setores, tipos de tarefa)
* Doc: Adicionar documentacao completa do schema do banco de dados (Issue #264)
* Traducao: CHANGELOG.md traduzido para Portugues Brasileiro
* Traducao: Interface de login 100% em Portugues (Entrar, Senha, Esqueceu sua senha?)
* Traducao: Deteccao automatica de idioma do navegador (pt-BR padrao)

### Issues resolvidas

* #286 - Adicionar contato na pagina de oportunidade
* #264 - Documentar schema do banco para integradores
* #326 - Login mostra username/password mesmo com SSO
* #285 - Nao cria oportunidade no mobile
* #129 - Criar oportunidade sem empresa falha
* #128 - "Adicionar contato" da empresa nao pre-seleciona empresa

---

## v1.5.0 - 10/03/2026

Leia sobre as atualizacoes online: [Atomic CRM Atualizacoes Marco 2026](https://marmelab.com/blog/2026/03/13/atomic-crm-march-updates.html)

## Alteracao importante

* tabela `contactNotes` foi renomeada para `contact_notes`
* tabela `dealNotes` foi renomeada para `deal_notes`
* coluna `stateAbbr` na tabela `companies` foi renomeada para `state_abbr`

Voce deve executar a migracao para atualizar o schema do banco:

```
make supabase-migrate-database
```

## O que mudou

* Substituir React Admin pelo Shadcn Admin Kit por @Madeorsk em #104
* Adicionar suporte a SSO e documentacao por @djhi em #159, #161
* Adicionar pagina de Configuracoes por @fzaninotto em #162
* Adicionar encaminhamento de emails por @ThieryMichel em #185
* Adicionar capacidade de importar dados de outro CRM por @djhi em #133
* Adicionar suporte a anexos em emails recebidos por @slax57 em #158
* Adicionar aplicacao movel por @slax57 em #134
* Adicionar suporte a multiplos emails e telefones por contato por @slax57 em #80
* Adicionar novos campos para importacao JSON por @slax57 em #179
* Adicionar capacidade de carregar notas anteriores sob demanda por @ThieryMichel em #177
* Adicionar telemetria personalizada por @djhi em #79
* Adicionar pagina de confirmacao quando o primeiro usuario precisa confirmar seu email por @Madeorsk em #155
* Adicionar controle de acesso por @djhi em #70
* Corrigir consistencia nos nomes de tabelas e campos por @djhi em #136
* Corrigir datas que apareciam deslocadas em 1 dia por @ThieryMichel em #190
* Corrigir mensagem de erro quando criacao de usuario falha por @Madeorsk em #151
* Corrigir desempenho da lista de notas no celular por @fzaninotto em #160
* Corrigir visualizacao de anexos por @djhi em #154
* Corrigir politicas RLS na tabela sales por @djhi em #74
* Corrigir criacao de empresa em tempo real por @fzaninotto em #120
* Corrigir erro na lista de Oportunidades por @djhi em #122
* Corrigir dialog de Nova Tarefa fechando mesmo com tarefa invalida por @fzaninotto em #85
* Corrigir notificacao de erro no cadastro nao sendo exibida por @WiXSL em #132
* Corrigir notificacao de email de recuperacao de senha nao aparecendo por @WiXSL em #165
* Corrigir sistema de autenticacao Supabase para edge functions por @Madeorsk em #152
* Corrigir JWT localmente por @Madeorsk em #153
* Corrigir altura de sheets movel no Google Pixel por @slax57 em #172
* Corrigir headers movel de nota/tarefa/contato para usar reticencias por @WiXSL em #176
* Corrigir truncamento do header de edicao de contato no celular por @WiXSL em #178
* Corrigir DateInput e DateTimeInput no Safari movel por @slax57 em #180
* Corrigir ContactInput que nao podia ser scrollado no celular por @slax57 em #181
* Corrigir exclusao de anexo de nota ao remover nota por @WiXSL em #171
* Corrigir script de inicializacao remota pedindo org e regiao por @ThieryMichel em #191
* Corrigir scripts supabase-remote-init e prod-start por @slax57 em #143
* Corrigir importacoes de componentes do registro Atomic por @djhi em #118
* Corrigir registry.json com arquivos e dependencias faltando por @slax57 em #197
* Corrigir campo de busca e filtro de contato por @mpsalunggg em #107
* Corrigir erros de digitacao e remover importacoes nao utilizadas por @eithe em #69
* Atualizar varias dependencias por @dependabot[bot] em #67, #87, #130, #135, #137, #138, #142, #148, #149, #157, #166, #173, #174, #186, #187, #188, #189, #194, #196
* [Doc] Melhorar documentacao sobre configuracao inicial de producao por @djhi em #77
* [Doc] Documentar configuracao de email por @djhi em #71
* [Doc] Adicionar documentacao Starlight por @jonathanarnault em #110
* [Doc] Corrigir links de documentacao por @main-uk em #116, @djhi em #127
* [Doc] Adicionar link de inicio ao menu e corrigir tamanho do logo por @jonathanarnault em #111
* [Chore] Refatorar script de inicializacao remota por @djhi em #76
* [Chore] Adicionar arquivo de registro para Atomic CRM por @jonathanarnault em #115
* [Chore] Adicionar comando build-lib para publicar modulo node atomic-crm por @ThieryMichel em #66
* [Chore] Permitir sourcemaps TS em producao por @djhi em #88
* [Chore] Melhorar padroes da comunidade GitHub por @arimet em #73

## Novos Contribuidores

* @dependabot[bot] fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/67
* @eithe fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/69
* @djhi fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/70
* @SxMShaDoW fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/78
* @fzaninotto fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/85
* @anthonycmain fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/86
* @0xflotus fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/93
* @erwanMarmelab fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/96
* @Madeorsk fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/104
* @mpsalunggg fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/107
* @main-uk fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/116
* @CMiksche fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/123
* @WiXSL fez sua primeira contribuicao em https://github.com/marmelab/atomic-crm/pull/132

**Changelog completo**: https://github.com/marmelab/atomic-crm/compare/v1.0.0...v1.5.0

## v1.0.0 - 10/03/2026

## O que mudou

* Fix(ops): Atualizar pacotes por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/1
* Feat(cadastro): Adicionar suporte a cadastro de usuarios por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/3
* Feat(upload): Enviar arquivos para storage do Supabase por @arimet em https://github.com/marmelab/atomic-crm/pull/4
* Fix(db): Adicionar politicas de linha faltando ao banco por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/5
* Feat(crm): Portar funcionalidades demo para atomic-crm por @arimet em https://github.com/marmelab/atomic-crm/pull/7
* Feat(banco): Atualizar colunas para corresponder aos tipos do demo CRM por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/2
* Feat(supabase): Atualizar script de inicializacao do projeto por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/6
* Feat(atomic): Criar visualizacao para empresas e contatos + banir usuarios por @arimet em https://github.com/marmelab/atomic-crm/pull/10
* Feat(crm): Adicionar scripts de deploy do Supabase por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/9
* Feat(ops): Adicionar script de deploy por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/8
* Feat(ops): Adicionar pipeline CI/CD por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/11
* Fix(init): Remover notificacao de login obrigatorio se CRM nao foi inicializado por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/13
* Feat(crm): Definir isImage no dataProvider por @arimet em https://github.com/marmelab/atomic-crm/pull/12
* Fix(crm): Gerenciar etiquetas para exportacao de contatos por @arimet em https://github.com/marmelab/atomic-crm/pull/15
* Fix(crm): Definir telefone em campos separados + atualizar getCompanyAvatar por @arimet em https://github.com/marmelab/atomic-crm/pull/14
* Fix(contatos): Retornar todos os vendedores no seletor por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/16
* Fix(crm): Validacao de data + refatorar uploadToBucket por @arimet em https://github.com/marmelab/atomic-crm/pull/19
* Fix(contato): Exibir perfil LinkedIn como label URL no aside por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/18
* Fix(ops): Paginas GitHub nao foram enviadas como esperado por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/22
* Fix(crm): Aplicar sugestoes de revisoes por @arimet em https://github.com/marmelab/atomic-crm/pull/21
* Fix(ops): Paginas Github nao foram enviadas como esperado por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/24
* Fix(config): Atualizar informacoes do usuario atual no Supabase por @arimet em https://github.com/marmelab/atomic-crm/pull/23
* Feat(auth): Adicionar redefinicao de senha para Vendedores por @arimet em https://github.com/marmelab/atomic-crm/pull/26
* Fix(crm): Gerenciar deploy para Browser Router por @arimet em https://github.com/marmelab/atomic-crm/pull/30
* Fix(views): Adicionar security invokers para evitar vazamento de dados por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/29
* Fix(deploy) por @arimet em https://github.com/marmelab/atomic-crm/pull/31
* Fix(deploy): Adicionar URL e chave anon do projeto Supabase ao CI/CD por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/32
* Fix(login): Corrigir nome base do admin por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/33
* Fix: Buscar contato + melhorar importacao de contato por @arimet em https://github.com/marmelab/atomic-crm/pull/28
* Feat(tarefa): Associar tarefa a um sales_id + melhorar documentacao por @arimet em https://github.com/marmelab/atomic-crm/pull/25
* Fix(migracoes): recriar visualizacao contact_summary na migracao de remocao de acquisition por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/35
* Feat(crm): Substituir browserRouter por HashRouter e gerenciar reset cal... por @arimet em https://github.com/marmelab/atomic-crm/pull/36
* Feat(auth): Atualizar senha do Supabase via interface do CRM por @arimet em https://github.com/marmelab/atomic-crm/pull/34
* Feat(dataProvider): Adicionar adaptador de filtro supabase para fakerest por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/20
* Fix(oportunidades): Nome da empresa nao aparecia no modal de detalhes por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/38
* Fix(macOS): Atualizar package lock para incluir binarios nativos do rollup por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/41
* Adicionar provedor fake rest por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/27
* Feat(ops): Adicionar opcao para deploy em outro repositorio por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/37
* Feat(UI): Melhorar Dashboard e exibir Paginas Vazias apenas sem filtros por @arimet em https://github.com/marmelab/atomic-crm/pull/40
* Feat(doc): Adicionar guia de configuracao do Supabase vinculado por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/39
* Fix(ux): Reduzir tempo de carregamento inicial por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/42
* Feat(mail): Adicionar nota de contato via email por @slax57 em https://github.com/marmelab/atomic-crm/pull/17
* Fix(perf): Deslogar usuario se banco foi resetado e melhorar desempenho da pagina de login por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/45
* Seg(init_state): visualizacao init_state nao vaza mais quantidade de vendedores por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/46
* fix(crm): Corrigir cor do logo na pagina de cadastro por @slax57 em https://github.com/marmelab/atomic-crm/pull/44
* Fix(avatar): Upload de avatar nao falha mais sem alteracao no arquivo por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/48
* Feat(auth): Gerenciar redefinicao de senha e Convidar usuario por @arimet em https://github.com/marmelab/atomic-crm/pull/43
* Feat(auth): Para redefinir senha do usuario, enviar email de redefinicao por @arimet em https://github.com/marmelab/atomic-crm/pull/47
* Fix(ops): Atualizar documentacao de deploy cruzado por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/50
* Fix(import): etiquetas e empresas nao sao mais duplicadas durante importacoes por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/53
* fix(mail): Suportar destinatario com nome vazio por @slax57 em https://github.com/marmelab/atomic-crm/pull/52
* Feat(crm): Atualizar templates de email por @arimet em https://github.com/marmelab/atomic-crm/pull/51
* fix(login): Corrigir usuario nao logando automaticamente apos cadastro por @slax57 em https://github.com/marmelab/atomic-crm/pull/49
* Fix(nota): Melhorar espacamento de notas por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/55
* Fix(mail): Adicionar log de debug ao criar usuario e documentar limite de taxa de email por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/56
* Feat(tarefa): Exibir Tarefas para semana atual e nao por sete... por @arimet em https://github.com/marmelab/atomic-crm/pull/54
* Feat(config): Exibir email de entrada para usuario por @arimet em https://github.com/marmelab/atomic-crm/pull/59
* Fix(avatar): Exclusao de avatar agora e persistida corretamente por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/57
* Fix(contato): Atualizar last_seen quando uma nota e adicionada ao contato por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/58
* Feat(mailing): Adicionar suporte a multiplos destinatarios e corrigir erros de digitacao por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/60
* Feat(tarefas): Atualizar ultimo acesso do contato ao criar tarefa por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/61
* Feat(tarefa): Adicionar suporte a edicao de tarefas por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/63
* Feat(doc): Melhorar documentacao por @jonathanarnault em https://github.com/marmelab/atomic-crm/pull/64
* pular tarefa do gh action quando secrets necessarios estao faltando por @ThieryMichel em https://github.com/marmelab/atomic-crm/pull/65


**Changelog completo**: https://github.com/marmelab/atomic-crm/commits/v1.0.0
