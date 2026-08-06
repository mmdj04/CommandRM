# MEMORIA

Conhecimento duradouro do CommandRM. Uma frase por item, mais recente primeiro. Mantido pelo agente `documentator` — veja [.claude/agents/documentator.md](.claude/agents/documentator.md).

## Conhecimento de Negocios

- Recursos principais: contatos, empresas, oportunidades (pipeline Kanban), tarefas, notas, etiquetas e vendedores (membros da equipe).
- Opcoes de dominio (generos, setores, estagios/categorias de oportunidades, status de notas, tipos de tarefa) sao props do `<CRM>` em `src/App.tsx`, nao sao hardcoded.
- Vendedores sao sincronizados com o `auth.users` do Supabase via gatilhos; exclusao nao e suportada — contas sao desabilitadas.
- Leituras consolidadas usam visualizacoes do banco de dados (`contacts_summary`, `companies_summary`), que o FakeRest emula no frontend.
- Dois provedores de dados intercambiaveis: Supabase (producao) e FakeRest (demonstracao no navegador, reinicia ao recarregar).
- Filtros usam sintaxe `ra-data-postgrest` (`nome_campo@operador`); operadores devem ser suportados pelo `supabaseAdapter` do FakeRest.
