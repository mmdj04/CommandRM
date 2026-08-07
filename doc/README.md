# Kit Inicial Starlight: Fundamentos

[![Construído com Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

> **Astronauta experiente?** Exclua este arquivo. Divirta-se!

## Estrutura do Projeto

Dentro do seu projeto Astro + Starlight, você verá as seguintes pastas e arquivos:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

O Starlight procura por arquivos `.md` ou `.mdx` no diretório `src/content/docs/`. Cada arquivo é exposto como uma rota baseada no nome do arquivo.

Imagens podem ser adicionadas a `src/assets/` e incorporadas no Markdown com um link relativo.

Ativos estáticos, como favicons, podem ser colocados no diretório `public/`.

## Comandos

Todos os comandos são executados a partir da raiz do projeto, em um terminal:

| Comando                   | Ação                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependências                             |
| `npm run dev`             | Inicia servidor de desenvolvimento local em `localhost:4321` |
| `npm run build`           | Compila seu site de produção para `./dist/`      |
| `npm run preview`         | Visualiza sua compilação localmente, antes de publicar |
| `npm run astro ...`       | Executa comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtém ajuda usando o CLI do Astro                |

## Quer saber mais?

Consulte a [documentação do Starlight](https://starlight.astro.build/), leia a [documentação do Astro](https://docs.astro.build) ou entre no [servidor Discord do Astro](https://astro.build/chat).
