# Componentes de UI

Os componentes neste diretório vêm do [shadcn/ui](https://ui.shadcn.com/). São blocos de construção de nível baixo para criar interfaces de usuário, incluindo:

- Distintivos
- Botões
- Cartões
- Diálogos
- Entradas de Formulário
- Menus de Navegação
- Tabelas
- Abas
- Dicas de Ferramentas
- E mais...

Esses componentes são construídos sobre [Radix UI](https://www.radix-ui.com/) e estilizados usando [Tailwind CSS](https://tailwindcss.com/).

## Documentação

Você pode encontrar a documentação desses componentes no [site do shadcn/ui](https://ui.shadcn.com/docs).

## Personalização

No CommandRM, esses componentes às vezes são ligeiramente modificados para se adequar à aparência e sensação da aplicação. Você pode personalizá-los ainda mais editando os arquivos de código fonte neste diretório.

## Atualizações

Os componentes do shadcn/ui são ativamente mantidos e atualizados. Para adicionar ou atualizar um componente de UI no CommandRM, digite o seguinte comando:

```
npx shadcn@latest add [nome-do-componente]
```

Os componentes admin têm uma dependência de alguns componentes de UI, então se você atualizar os componentes admin, isso também atualizará os componentes de UI. Consulte [o readme dos componentes admin](../admin/Readme.md) para o comando para atualizá-los.
