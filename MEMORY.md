# MEMÓRIA

Conhecimento duradouro do CommandRM. Uma frase por item, mais recente primeiro. Mantido pelo agente `documentator` — veja [.claude/agents/documentator.md](.claude/agents/documentator.md).

## Conhecimento de Negócios

- Recursos principais: contatos, empresas, oportunidades (pipeline Kanban), tarefas, notas, etiquetas e vendedores (membros da equipe).
- Opções de domínio (gêneros, setores, estágios/categorias de oportunidades, status de notas, tipos de tarefa) são props do `<CRM>` em `src/App.tsx`, não são hardcoded.
- Vendedores são sincronizados com o `auth.users` do Supabase via gatilhos; exclusão não é suportada — contas são desabilitadas.
- Leituras consolidadas usam visualizações do banco de dados (`contacts_summary`, `companies_summary`), que o FakeRest emula no frontend.
- Dois provedores de dados intercambiáveis: Supabase (produção) e FakeRest (demonstração no navegador, reinicia ao recarregar).
- Filtros usam sintaxe `ra-data-postgrest` (`nome_campo@operador`); operadores devem ser suportados pelo `supabaseAdapter` do FakeRest.
