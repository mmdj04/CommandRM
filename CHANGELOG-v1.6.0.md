## v1.6.0 - 06/08/2026

### O que mudou

* Feat: Adicionar localização em Português Brasileiro (pt-BR) com mais de 570 traduções
* Feat: Criar contato diretamente da tela de oportunidade (Issue #286)
* Feat: Adicionar botão de criação de oportunidade no menu móvel (Issue #285)
* Feat: Pré-selecionar empresa ao adicionar contato a partir da página da empresa (Issue #128)
* Fix: Permitir criar oportunidade sem empresa obrigatória (Issue #129)
* Fix: Corrigir página de login para mostrar opções SSO quando configurado (Issue #326)
* Fix: Corrigir link "Esqueceu sua senha?" em Português
* Fix: Traduzir botões de ordenação ("Ordenar por", "crescente", "decrescente")
* Fix: Traduzir datas relativas para PT-BR ("hoje às", "há 3 dias")
* Fix: Traduzir menu de tema (Claro/Escuro/Sistema)
* Fix: Atualizar configuração do banco de dados com labels em PT-BR (status, estágios, categorias, setores, tipos de tarefa)
* Doc: Adicionar documentação completa do schema do banco de dados (Issue #264)
* Tradução: CHANGELOG.md traduzido para Português Brasileiro
* Tradução: Interface de login 100% em Português (Entrar, Senha, Esqueceu sua senha?)
* Tradução: Detecção automática de idioma do navegador (pt-BR padrão)

### Commits do CommandRM

* Initial commit: CommandRM base
* Add Portuguese (Brazil) localization
* Traduz login page para PT-BR
* Fix forgot password text
* Fix forgot_password translation key
* Fix forgot_password PT-BR
* Traduz CHANGELOG.md para PT-BR
* Fix: complete PT-BR translations - sort, dates, theme toggle, DB config

### Issues resolvidas

* #286 - Adicionar contato na página de oportunidade
* #264 - Documentar schema do banco para integradores
* #326 - Login mostra username/password mesmo com SSO
* #285 - Não cria oportunidade no mobile
* #129 - Criar oportunidade sem empresa falha
* #128 - "Adicionar contato" da empresa não pré-seleciona empresa
