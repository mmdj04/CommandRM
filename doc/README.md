# Kit Inicial Starlight: Fundamentos

[![Construido com Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
npm create astro@latest -- --template starlight
```

> **Astronauta experiente?** Exclua este arquivo. Divirta-se!

## Estrutura do Projeto

Dentro do seu projeto Astro + Starlight, voce vera as seguintes pastas e arquivos:

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

O Starlight procura por arquivos `.md` ou `.mdx` no diretorio `src/content/docs/`. Cada arquivo e exposto como uma rota baseada no nome do arquivo.

Imagens podem ser adicionadas a `src/assets/` e incorporadas no Markdown com um link relativo.

Ativos estaticos, como favicons, podem ser colocados no diretorio `public/`.

## Comandos

Todos os comandos sao executados a partir da raiz do projeto, em um terminal:

| Comando                   | Acao                                             |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia servidor de desenvolvimento local em `localhost:4321` |
| `npm run build`           | Compila seu site de producao para `./dist/`      |
| `npm run preview`         | Visualiza sua compilacao localmente, antes de publicar |
| `npm run astro ...`       | Executa comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help` | Obtem ajuda usando o CLI do Astro                |

## Quer saber mais?

Consulte a [documentacao do Starlight](https://starlight.astro.build/), leia a [documentacao do Astro](https://docs.astro.build) ou entre no [servidor Discord do Astro](https://astro.build/chat).
