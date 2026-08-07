# CommandRM

Um CRM completo construído com React, shadcn-admin-kit e Supabase.

<https://github.com/user-attachments/assets/0d7554b5-49ef-41c6-bcc9-a76214fc5c99>

CommandRM é gratuito e de código aberto. Você pode testar online em <https://command-rm.vercel.app>.

## Funcionalidades

- **Organizar Contatos**: Mantenha todos os seus contatos em um local facilmente acessível.
- **Criar Tarefas e Definir Lembretes**: Nunca perca um acompanhamento ou prazo.
- **Anotar**: Registre detalhes e insights importantes com facilidade.
- **Capturar Emails**: Encaminhe para o CommandRM para salvar comunicações automaticamente como notas.
- **Gerenciar Oportunidades**: Visualize e acompanhe seu pipeline de vendas em um quadro Kanban.
- **Importar e Exportar Dados**: Facilmente transfira contatos para dentro e fora do sistema.
- **Controle de Acesso**: Faça login com Google, Azure, Keycloak e Auth0.
- **Rastrear Histórico de Atividades**: Visualize todas as interações em logs de atividade consolidados.
- **Integrar via API**: Conecte-se perfeitamente com outros sistemas usando nossa API.
- **Personalizar Tudo**: Adicione campos personalizados, mude o tema e substitua qualquer componente para atender as suas necessidades.

## Instalação

Para executar este projeto localmente, você precisará das seguintes ferramentas instaladas no seu computador:

- Make
- Node 22 LTS
- Docker (necessário para o Supabase)

Fork o repositório [`mmdj04/CommandRM`](https://github.com/mmdj04/CommandRM) para o seu usuário/organização e clone-o localmente:

```sh
git clone https://github.com/[username]/CommandRM.git
```

Instale as dependências:

```sh
cd CommandRM
make install
```

Isso instalará as dependências do frontend e do backend, incluindo uma instância local do Supabase.

Após configurar seu aplicativo, inicie-o localmente com o seguinte comando:

```sh
make start
```

Isso iniciará o servidor de desenvolvimento Vite para o frontend, a instância local do Supabase para a API e um banco de dados Postgres (graças ao Docker).

Você pode acessar o aplicativo via [http://localhost:5173/](http://localhost:5173/). Será solicitado que você crie o primeiro usuário.

Se precisar depurar o backend, você pode acessar os seguintes serviços:

- Painel do Supabase: [http://localhost:54323/](http://localhost:54323/)
- API REST: [http://127.0.0.1:54321](http://127.0.0.1:54321)
- Armazenamento de anexos: [http://localhost:54323/project/default/storage/buckets/attachments](http://localhost:54323/project/default/storage/buckets/attachments)
- Serviço de teste de email Inbucket: [http://localhost:54324/](http://localhost:54324/)

## Documentação

A documentação do usuário e desenvolvedor para este projeto está disponível [no diretório `doc/`](./doc/).

## Testando Alterações

Este projeto contém testes unitários e e2e.
Execute testes unitários com o seguinte comando:

```sh
make test
```

Execute testes e2e com:

```sh
make test-e2e
```

Nota: o `make test-e2e` executará o teste e2e no modo ui contra um servidor vite com hot reload para facilitar o desenvolvimento. No CI, o teste e2e será executado contra o aplicativo compilado. Se precisar executar o teste contra o arquivo compilado, você pode executar:

```sh
make start-e2e-ci # Para iniciar o ambiente e2e CI (servindo o aplicativo compilado)
# seguido por
npx playwright test --ui
```

Você pode adicionar seus próprios testes unitários usando Vitest em qualquer lugar do diretório `src`. Os arquivos de teste devem ser nomeados `*.test.tsx` ou `*.test.ts`.
E você também pode adicionar seus próprios testes e2e. Os arquivos de teste e2e devem ser colocados dentro da pasta `./e2e`

## Obtendo Atualizações

Os componentes do CommandRM são publicados como um arquivo de Registro Shadcn. Isso significa que você pode atualizar sua instalação chamando o seguinte comando:

```sh
npx shadcn add https://command-rm.vercel.app/r/commandrm.json -o
```

## Registro

O arquivo de Registro é mantido atualizado quando arquivos são adicionados ou removidos:

- O arquivo `registry.json` é gerado automaticamente pelo script `scripts/generate-registry.mjs` como um hook pre-commit.
- O arquivo `http://command-rm.vercel.app/r/commandrm.json` é publicado automaticamente pelo pipeline CI/CD

> [!WARNING]
> Se o `registry.json` faltar algumas alterações que você fez, você DEVE atualizar o `scripts/generate-registry.mjs` para incluir essas alterações.

## Contribuindo

Contribuições são bem-vindas! Por favor, leia nosso [guia de contribuição](./.github/CONTRIBUTING.md) antes de enviar um Pull Request.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE.md](./LICENSE.md) para detalhes.

## Desenvolvido por

**Matheus Moraes**
- WhatsApp: [+55 21 97469-9723](https://wa.me/5521974699723)
- GitHub: [mmdj04](https://github.com/mmdj04)
