# Componentes de UI

Os componentes neste diretorio vêm do [shadcn/ui](https://ui.shadcn.com/). Sao blocos de construcao de nivel baixo para criar interfaces de usuario, incluindo:

- Distintivos
- Botoes
- Cartoes
- Dialogos
- Entradas de Formulario
- Menus de Navegacao
- Tabelas
- Abas
- Dicas de Ferramentas
- E mais...

Esses componentes sao construidos sobre [Radix UI](https://www.radix-ui.com/) e estilizados usando [Tailwind CSS](https://tailwindcss.com/).

## Documentacao

Voce pode encontrar a documentacao desses componentes no [site do shadcn/ui](https://ui.shadcn.com/docs).

## Personalizacao

No CommandRM, esses componentes as vezes sao ligeiramente modificados para se adequar a aparencia e sensacao da aplicacao. Voce pode personaliza-los ainda mais editando os arquivos de codigo fonte neste diretorio.

## Atualizacoes

Os componentes do shadcn/ui sao ativamente mantidos e atualizados. Para adicionar ou atualizar um componente de UI no CommandRM, digite o seguinte comando:

```
npx shadcn@latest add [nome-do-componente]
```

Os componentes admin tem uma dependencia de alguns componentes de UI, entao se voce atualizar os componentes admin, isso tambem atualizara os componentes de UI. Consulte [o readme dos componentes admin](../admin/Readme.md) para o comando para atualiza-los.
