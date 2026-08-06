# CommandRM

Um CRM completo construido com React, shadcn-admin-kit e Supabase.

<https://github.com/user-attachments/assets/0d7554b5-49ef-41c6-bcc9-a76214fc5c99>

CommandRM e gratuito e de codigo aberto. Voce pode testar online em <https://marmelab.com/commandrm-demo>.

## Funcionalidades

- **Organizar Contatos**: Mantenha todos os seus contatos em um local facilmente acessivel.
- **Criar Tarefas e Definir Lembretes**: Nunca perca um acompanhamento ou prazo.
- **Anotar**: Registre detalhes e insights importantes com facilidade.
- **Capturar Emails**: Encaminhe para o CommandRM para salvar comunicacoes automaticamente como notas.
- **Gerenciar Oportunidades**: Visualize e acompanhe seu pipeline de vendas em um quadro Kanban.
- **Importar e Exportar Dados**: Facilmente transfira contatos para dentro e fora do sistema.
- **Controle de Acesso**: Faca login com Google, Azure, Keycloak e Auth0.
- **Rastrear Historico de Atividades**: Visualize todas as interacoes em logs de atividade consolidados.
- **Integrar via API**: Conecte-se perfeitamente com outros sistemas usando nossa API.
- **Personalizar Tudo**: Adicione campos personalizados, mude o tema e substitua qualquer componente para atender as suas necessidades.

## Instalacao

Para executar este projeto localmente, voce precisara das seguintes ferramentas instaladas no seu computador:

- Make
- Node 22 LTS
- Docker (necessario para o Supabase)

Fork o repositorio [`marmelab/commandrm`](https://github.com/marmelab/commandrm) para o seu usuario/organizacao e clone-o localmente:

```sh
git clone https://github.com/[username]/commandrm.git
```

Instale as dependencias:

```sh
cd commandrm
make install
```

Isso instalará as dependencias do frontend e do backend, incluindo uma instancia local do Supabase.

Apos configurar seu aplicativo, inicie-o localmente com o seguinte comando:

```sh
make start
```

Isso iniciara o servidor de desenvolvimento Vite para o frontend, a instancia local do Supabase para a API e um banco de dados Postgres (graças ao Docker).

Voce pode acessar o aplicativo via [http://localhost:5173/](http://localhost:5173/). Sera solicitado que voce crie o primeiro usuario.

Se precisar depurar o backend, voce pode acessar os seguintes servicos:

- Painel do Supabase: [http://localhost:54323/](http://localhost:54323/)
- API REST: [http://127.0.0.1:54321](http://127.0.0.1:54321)
- Armazenamento de anexos: [http://localhost:54323/project/default/storage/buckets/attachments](http://localhost:54323/project/default/storage/buckets/attachments)
- Servico de teste de email Inbucket: [http://localhost:54324/](http://localhost:54324/)

## Documentacao

A documentacao do usuario e desenvolvedor para este projeto esta disponivel [no diretorio `doc/`](./doc/). Voce tambem pode ler online em [https://marmelab.com/commandrm/doc/](https://marmelab.com/commandrm/doc/).

## Testando Alteracoes

Este projeto contem testes unitarios e e2e.
Execute testes unitarios com o seguinte comando:

```sh
make test
```

Execute testes e2e com:

```sh
make test-e2e
```

Nota: o `make test-e2e` executara o teste e2e no modo ui contra um servidor vite com hot reload para facilitar o desenvolvimento. No CI, o teste e2e sera executado contra o aplicativo compilado. Se precisar executar o teste contra o arquivo compilado, voce pode executar:

```sh
make start-e2e-ci # Para iniciar o ambiente e2e CI (servindo o aplicativo compilado)
# seguido por
npx playwright test --ui
```

Voce pode adicionar seus proprios testes unitarios usando Jest em qualquer lugar do diretorio `src`. Os arquivos de teste devem ser nomeados `*.test.tsx` ou `*.test.ts`.
E voce tambem pode adicionar seus proprios testes e2e. Os arquivos de teste e2e devem ser colocados dentro da pasta `./e2e`

## Obtendo Atualizacoes

Os componentes do CommandRM sao publicados como um arquivo de Registro Shadcn. Isso significa que voce pode atualizar sua instalacao chamando o seguinte comando:

```sh
npx shadcn add https://marmelab.com/commandrm/r/commandrm.json -o
```

## Registro

O arquivo de Registro e mantido atualizado quando arquivos sao adicionados ou removidos:

- O arquivo `registry.json` e gerado automaticamente pelo script `scripts/generate-registry.mjs` como um hook pre-commit.
- O arquivo `http://marmelab.com/commandrm/r/commandrm.json` e publicado automaticamente pelo pipeline CI/CD

> [!WARNING]
> Se o `registry.json` faltar algumas alteracoes que voce fez, voce DEVE atualizar o `scripts/generate-registry.mjs` para incluir essas alteracoes.

## Licenca

Este projeto e licenciado sob a Licenca MIT, cortesia da [Marmelab](https://marmelab.com). Veja o arquivo [LICENSE.md](./LICENSE.md) para detalhes.
