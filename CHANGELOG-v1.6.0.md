## v1.6.0 - 06/08/2026

### O que mudou

* Feat: Adicionar localizacao em Portugues Brasileiro (pt-BR) com mais de 570 traducoes
* Feat: Criar contato diretamente da tela de oportunidade (Issue #286)
* Feat: Adicionar botao de criacao de oportunidade no menu movel (Issue #285)
* Feat: Pre-selecionar empresa ao adicionar contato a partir da pagina da empresa (Issue #128)
* Fix: Permitir criar oportunidade sem empresa obrigatoria (Issue #129)
* Fix: Corrigir pagina de login para mostrar opcoes SSO quando configurado (Issue #326)
* Fix: Corrigir link "Esqueceu sua senha?" em Portugues
* Fix: Traduzir botoes de ordenacao ("Ordenar por", "crescente", "decrescente")
* Fix: Traduzir datas relativas para PT-BR ("hoje as", "ha 3 dias")
* Fix: Traduzir menu de tema (Claro/Escuro/Sistema)
* Fix: Atualizar configuracao do banco de dados com labels em PT-BR (status, estagios, categorias, setores, tipos de tarefa)
* Doc: Adicionar documentacao completa do schema do banco de dados (Issue #264)
* Traducao: CHANGELOG.md traduzido para Portugues Brasileiro
* Traducao: Interface de login 100% em Portugues (Entrar, Senha, Esqueceu sua senha?)
* Traducao: Deteccao automatica de idioma do navegador (pt-BR padrao)

### Commits do CommandRM

* Initial commit: Atomic CRM base
* Add Portuguese (Brazil) localization
* Traduz login page para PT-BR
* Fix forgot password text
* Fix forgot_password translation key
* Fix forgot_password PT-BR
* Traduz CHANGELOG.md para PT-BR
* Fix: complete PT-BR translations - sort, dates, theme toggle, DB config

### Issues resolvidas

* #286 - Adicionar contato na pagina de oportunidade
* #264 - Documentar schema do banco para integradores
* #326 - Login mostra username/password mesmo com SSO
* #285 - Nao cria oportunidade no mobile
* #129 - Criar oportunidade sem empresa falha
* #128 - "Adicionar contato" da empresa nao pre-seleciona empresa
