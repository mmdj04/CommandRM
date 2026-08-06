export const portugueseCrmMessages = {
  resources: {
    companies: {
      name: "Empresa |||| Empresas",
      forcedCaseName: "Empresa",
      fields: {
        name: "Nome da empresa",
        website: "Site",
        linkedin_url: "URL do LinkedIn",
        phone_number: "Telefone",
        created_at: "Criado em",
        nb_contacts: "Número de contatos",
        revenue: "Faturamento",
        sector: "Setor",
        size: "Porte",
        tax_identifier: "CNPJ",
        address: "Endereço",
        city: "Cidade",
        zipcode: "CEP",
        state_abbr: "Estado",
        country: "País",
        description: "Descrição",
        context_links: "Links de contexto",
        sales_id: "Gerente de conta",
      },
      empty: {
        description: "Parece que sua lista de empresas está vazia.",
        title: "Nenhuma empresa encontrada",
      },
      field_categories: {
        contact: "Contato",
        additional_info: "Informações adicionais",
        address: "Endereço",
        context: "Contexto",
      },
      action: {
        create: "Criar Empresa",
        edit: "Editar empresa",
        new: "Nova Empresa",
        show: "Ver empresa",
      },
      added_on: "Adicionado em %{date}",
      followed_by: "Acompanhado por %{name}",
      followed_by_you: "Acompanhado por você",
      no_contacts: "Nenhum contato",
      nb_contacts: "%{smart_count} contato |||| %{smart_count} contatos",
      nb_deals: "%{smart_count} oportunidade |||| %{smart_count} oportunidades",
      sizes: {
        one_employee: "1 funcionário",
        two_to_nine_employees: "2-9 funcionários",
        ten_to_forty_nine_employees: "10-49 funcionários",
        fifty_to_two_hundred_forty_nine_employees: "50-249 funcionários",
        two_hundred_fifty_or_more_employees: "250 ou mais funcionários",
      },
      autocomplete: {
        create_error: "Ocorreu um erro ao criar a empresa",
        create_item: "Criar %{item}",
        create_label: "Comece a digitar para criar uma nova empresa",
      },
      filters: {
        only_mine: "Apenas empresas que eu gerencio",
      },
    },
    contacts: {
      name: "Contato |||| Contatos",
      forcedCaseName: "Contato",
      field_categories: {
        background_info: "Informações básicas",
        identity: "Identidade",
        misc: "Diversos",
        personal_info: "Informações pessoais",
        position: "Cargo",
      },
      fields: {
        first_name: "Nome",
        last_name: "Sobrenome",
        last_seen: "Último acesso",
        title: "Cargo",
        company_id: "Empresa",
        email_jsonb: "Endereços de email",
        email: "Email",
        phone_jsonb: "Telefones",
        phone_number: "Telefone",
        linkedin_url: "URL do LinkedIn",
        background: "Informações adicionais (bio, como se conheceram, etc)",
        has_newsletter: "Recebe newsletter",
        sales_id: "Gerente de conta",
      },
      action: {
        add: "Adicionar contato",
        add_first: "Adicione seu primeiro contato",
        create: "Criar contato",
        edit: "Editar contato",
        export_vcard: "Exportar para vCard",
        new: "Novo Contato",
        show: "Ver contato",
      },
      background: {
        last_activity_on: "Última atividade em %{date}",
        added_on: "Adicionado em %{date}",
        followed_by: "Acompanhado por %{name}",
        followed_by_you: "Acompanhado por você",
        status_none: "Nenhum",
      },
      position_at: "%{title} na",
      position_at_company: "%{title} na %{company}",
      empty: {
        description: "Parece que sua lista de contatos está vazia.",
        title: "Nenhum contato encontrado",
      },
      import: {
        title: "Importar contatos",
        button: "Importar CSV",
        complete:
          "Importação de contatos concluída. %{importCount} contatos importados, com %{errorCount} erros",
        progress:
          "Importados %{importCount} / %{rowCount} contatos, com %{errorCount} erros.",
        error:
          "Falha ao importar este arquivo, verifique se você forneceu um arquivo CSV válido.",
        imported: "Importados",
        remaining_time: "Tempo estimado restante:",
        running: "A importação está em andamento, não feche esta aba.",
        sample_download: "Baixar exemplo de CSV",
        sample_hint: "Aqui está um arquivo CSV de exemplo que você pode usar como modelo",
        stop: "Parar importação",
        csv_file: "Arquivo CSV",
        contacts_label: "contato |||| contatos",
      },
      inputs: {
        genders: {
          male: "Ele/Dele",
          female: "Ela/Dela",
          nonbinary: "Elu/Delu",
        },
        personal_info_types: {
          work: "Trabalho",
          home: "Pessoal",
          other: "Outro",
        },
      },
      list: {
        error_loading: "Erro ao carregar contatos",
      },
      bulk_tag: {
        action: "Etiquetar",
        back: "Voltar para etiquetas",
        create_description:
          "Crie uma nova etiqueta e aplique-a aos contatos selecionados.",
        description:
          "Escolha uma etiqueta existente ou crie uma nova para os contatos selecionados.",
        empty: "Nenhuma etiqueta ainda. Crie uma para etiquetar os contatos selecionados.",
        error: "Falha ao adicionar etiqueta aos contatos",
        noop: "Os contatos selecionados já possuem esta etiqueta",
        success:
          "Etiqueta adicionada a %{smart_count} contato |||| Etiqueta adicionada a %{smart_count} contatos",
        title: "Adicionar etiqueta aos contatos",
      },
      merge: {
        action: "Mesclar com outro contato",
        confirm: "Mesclar Contatos",
        current_contact: "Contato Atual (será excluído)",
        description: "Mesclar este contato com outro.",
        error: "Falha ao mesclar contatos",
        merging: "Mesclando...",
        no_additional_data: "Sem dados adicionais para mesclar",
        select_target: "Por favor, selecione um contato para mesclar",
        success: "Contatos mesclados com sucesso",
        target_contact: "Contato de Destino (será mantido)",
        title: "Mesclar Contato",
        warning_description:
          "Todos os dados serão transferidos para o segundo contato. Esta ação não pode ser desfeita.",
        warning_title: "Aviso: Operação Destrutiva",
        what_will_be_merged: "O que será mesclado:",
      },
      filters: {
        before_last_month: "Antes do mês passado",
        before_this_month: "Antes deste mês",
        before_this_week: "Antes desta semana",
        managed_by_me: "Gerenciados por mim",
        search: "Buscar nome, empresa...",
        this_week: "Esta semana",
        today: "Hoje",
        tags: "Etiquetas",
        tasks: "Tarefas",
      },
      hot: {
        empty_change_status:
          'Altere o status de um contato adicionando uma nota a esse contato e clicando em "mostrar opções".',
        empty_hint: 'Contatos com status "quente" aparecerão aqui.',
        title: "Contatos Quentes",
      },
    },
    deals: {
      name: "Oportunidade |||| Oportunidades",
      forcedCaseName: "Oportunidade",
      fields: {
        name: "Nome",
        description: "Descrição",
        company_id: "Empresa",
        contact_ids: "Contatos",
        category: "Categoria",
        amount: "Valor",
        expected_closing_date: "Data prevista de fechamento",
        stage: "Estágio",
      },
      action: {
        back_to_deal: "Voltar para a oportunidade",
        create: "Criar oportunidade",
        new: "Nova Oportunidade",
      },
      field_categories: {
        misc: "Diversos",
      },
      archived: {
        action: "Arquivar",
        error: "Erro: oportunidade não arquivada",
        list_title: "Oportunidades Arquivadas",
        success: "Oportunidade arquivada",
        title: "Oportunidade Arquivada",
        view: "Ver oportunidades arquivadas",
      },
      inputs: {
        linked_to: "Vinculada a",
      },
      unarchived: {
        action: "Devolver ao quadro",
        error: "Erro: oportunidade não restaurada",
        success: "Oportunidade restaurada",
      },
      updated: "Oportunidade atualizada",
      empty: {
        before_create: "antes de criar uma oportunidade.",
        description: "Parece que sua lista de oportunidades está vazia.",
        title: "Nenhuma oportunidade encontrada",
      },
      invalid_date: "Data inválida",
    },
    notes: {
      name: "Nota |||| Notas",
      forcedCaseName: "Nota",
      fields: {
        status: "Status",
        date: "Data",
        attachments: "Anexos",
        contact_id: "Contato",
        deal_id: "Oportunidade",
      },
      action: {
        add: "Adicionar nota",
        add_first: "Adicione sua primeira nota",
        delete: "Excluir nota",
        edit: "Editar nota",
        update: "Atualizar nota",
        add_this: "Adicionar esta nota",
      },
      sheet: {
        create: "Criar nota",
        create_for: "Criar nota para %{name}",
        edit: "Editar nota",
        edit_for: "Editar nota para %{name}",
      },
      deleted: "Nota excluída",
      empty: "Nenhuma nota ainda",
      author_added: "%{name} adicionou uma nota",
      you_added: "Você adicionou uma nota",
      me: "Eu",
      list: {
        error_loading: "Erro ao carregar notas",
      },
      note_for_contact: "Nota para %{name}",
      stepper: {
        hint: "Acesse a página de um contato e adicione uma nota",
      },
      added: "Nota adicionada",
      inputs: {
        add_note: "Adicionar uma nota",
        options_hint: "(anexar arquivos ou alterar detalhes)",
        show_options: "Mostrar opções",
      },
      actions: {
        attach_document: "Anexar documento",
      },
      validation: {
        note_or_attachment_required: "Uma nota ou um anexo é obrigatório",
      },
    },
    sales: {
      name: "Usuário |||| Usuários",
      fields: {
        first_name: "Nome",
        last_name: "Sobrenome",
        email: "Email",
        administrator: "Administrador",
        disabled: "Desativado",
      },
      create: {
        error: "Ocorreu um erro ao criar o usuário.",
        success:
          "Usuário criado. Ele receberá um email em breve para definir sua senha.",
        title: "Criar um novo usuário",
      },
      edit: {
        error: "Ocorreu um erro. Por favor, tente novamente.",
        record_not_found: "Registro não encontrado",
        success: "Usuário atualizado com sucesso",
        title: "Editar %{name}",
      },
      action: {
        new: "Novo usuário",
      },
    },
    tasks: {
      name: "Tarefa |||| Tarefas",
      forcedCaseName: "Tarefa",
      fields: {
        text: "Descrição",
        due_date: "Data de vencimento",
        type: "Tipo",
        contact_id: "Contato",
        due_short: "vence",
      },
      action: {
        add: "Adicionar tarefa",
        create: "Criar tarefa",
        edit: "Editar tarefa",
      },
      actions: {
        postpone_next_week: "Adiar para próxima semana",
        postpone_tomorrow: "Adiar para amanhã",
        title: "ações da tarefa",
      },
      added: "Tarefa adicionada",
      deleted: "Tarefa excluída com sucesso",
      dialog: {
        create: "Criar tarefa",
        create_for: "Criar tarefa para %{name}",
      },
      sheet: {
        edit: "Editar tarefa",
        edit_for: "Editar tarefa para %{name}",
      },
      empty: "Nenhuma tarefa ainda",
      empty_list_hint: "Tarefas adicionadas aos seus contatos aparecerão aqui.",
      filters: {
        later: "Depois",
        overdue: "Atrasada",
        this_week: "Esta semana",
        today: "Hoje",
        tomorrow: "Amanhã",
        with_pending: "Com tarefas pendentes",
      },
      regarding_contact: "(Ref: %{name})",
      updated: "Tarefa atualizada",
    },
    tags: {
      name: "Etiqueta |||| Etiquetas",
      action: {
        add: "Adicionar etiqueta",
        create: "Criar nova etiqueta",
      },
      dialog: {
        color: "Cor",
        create_title: "Criar uma nova etiqueta",
        edit_title: "Editar etiqueta",
        name_label: "Nome da etiqueta",
        name_placeholder: "Digite o nome da etiqueta",
      },
    },
  },
  crm: {
    action: {
      reset_password: "Redefinir Senha",
    },
    auth: {
      first_name: "Nome",
      last_name: "Sobrenome",
      confirm_password: "Confirmar senha",
      confirmation_required:
        "Por favor, siga o link que acabamos de enviar por email para confirmar sua conta.",
      recovery_email_sent:
        "Se você for um usuário registrado, deverá receber um email de recuperação de senha em breve.",
      sign_in_failed: "Falha ao fazer login.",
      sign_in_google_workspace: "Entrar com Google Workspace",
      forgot_password: "Esqueceu sua senha?",
      signup: {
        create_account: "Criar conta",
        create_first_user:
          "Crie a primeira conta de usuário para concluir a configuração.",
        creating: "Criando...",
        initial_user_created: "Primeiro usuário criado com sucesso",
      },
      welcome_title: "Bem-vindo ao Atomic CRM",
    },
    common: {
      activity: "Atividade",
      added: "adicionou",
      details: "Detalhes",
      last_activity_with_date: "última atividade %{date}",
      load_more: "Carregar mais",
      misc: "Diversos",
      past: "Passado",
      read_more: "Ler mais",
      retry: "Tentar novamente",
      show_less: "Mostrar menos",
      copied: "Copiado!",
      copy: "Copiar",
      loading: "Carregando...",
      me: "Eu",
      task_count: "%{smart_count} tarefa |||| %{smart_count} tarefas",
    },
    changelog: {
      title: "Histórico de alterações",
    },
    activity: {
      added_company: "%{name} adicionou a empresa",
      you_added_company: "Você adicionou a empresa",
      added_contact: "%{name} adicionou",
      you_added_contact: "Você adicionou",
      added_note: "%{name} adicionou uma nota sobre",
      you_added_note: "Você adicionou uma nota sobre",
      added_note_about_deal: "%{name} adicionou uma nota sobre a oportunidade",
      you_added_note_about_deal: "Você adicionou uma nota sobre a oportunidade",
      added_deal: "%{name} adicionou a oportunidade",
      you_added_deal: "Você adicionou a oportunidade",
      at_company: "na",
      to: "para",
      load_more: "Carregar mais atividade",
    },
    dashboard: {
      deals_chart: "Receita de Oportunidades Futuras",
      deals_pipeline: "Pipeline de Oportunidades",
      latest_activity: "Última Atividade",
      latest_activity_error: "Erro ao carregar última atividade",
      latest_notes: "Minhas Últimas Notas",
      latest_notes_added_ago: "adicionada %{timeAgo}",
      stepper: {
        install: "Instalar Atomic CRM",
        progress: "%{step}/3 concluído",
        whats_next: "O que vem depois?",
      },
      upcoming_tasks: "Próximas Tarefas",
    },
    header: {
      import_data: "Importar dados",
    },
    image_editor: {
      change: "Alterar",
      drop_hint: "Arraste um arquivo para enviar ou clique para selecioná-lo.",
      editable_content: "Conteúdo editável",
      title: "Enviar e redimensionar imagem",
      update_image: "Atualizar Imagem",
    },
    import: {
      action: {
        download_error_report: "Baixar relatório de erros",
        import: "Importar",
        import_another: "Importar outro arquivo",
      },
      error: {
        unable: "Não foi possível importar este arquivo.",
      },
      idle: {
        description_1:
          "Você pode importar vendedores, empresas, contatos, notas e tarefas.",
        description_2:
          "Os dados devem estar em um arquivo JSON seguindo o seguinte modelo:",
      },
      status: {
        all_success: "Todos os registros foram importados com sucesso.",
        complete: "Importação concluída.",
        failed: "Falhou",
        imported: "Importados",
        in_progress:
          "Importação em andamento, por favor não navegue para outra página.",
        some_failed: "Alguns registros não foram importados.",
        table_caption: "Status da importação",
      },
      title: "Importar Dados",
    },
    settings: {
      about: "Sobre",
      companies: {
        sectors: "Setores",
      },
      dark_mode_logo: "Logo para Modo Escuro",
      deals: {
        categories: "Categorias",
        currency: "Moeda",
        pipeline_help:
          "Selecione quais estágios de oportunidade devem contar como pipeline.",
        pipeline_statuses: "Status do Pipeline",
        stages: "Estágios",
      },
      light_mode_logo: "Logo para Modo Claro",
      notes: {
        statuses: "Status",
      },
      reset_defaults: "Restaurar Padrões",
      save_error: "Falha ao salvar configuração",
      saved: "Configuração salva com sucesso",
      saving: "Salvando...",
      tasks: {
        types: "Tipos",
      },
      preferences: "Preferências",
      title: "Configurações",
      app_title: "Título do App",
      sections: {
        branding: "Identidade Visual",
      },
      validation: {
        duplicate: "Duplicar %{display_name}: %{items}",
        in_use:
          "Não é possível remover %{display_name} que ainda são usados por oportunidades: %{items}",
        validating: "Validando\u2026",
        entities: {
          categories: "categorias",
          stages: "estágios",
        },
      },
    },
    theme: {
      dark: "Escuro",
      label: "Tema",
      light: "Claro",
      system: "Sistema",
    },
    language: "Idioma",
    navigation: {
      label: "Navegação do CRM",
    },
    profile: {
      inbound: {
        description:
          "Você pode começar a enviar emails para o endereço de email de entrada do seu servidor, por exemplo, adicionando-o ao campo %{field}. O Atomic CRM processará os emails e adicionará notas aos contatos correspondentes.",
        title: "Email de entrada",
      },
      mcp: {
        title: "Servidor MCP",
        description:
          "Use esta URL para conectar seu assistente de IA aos dados do seu CRM via Model Context Protocol (MCP).",
      },
      password: {
        change: "Alterar senha",
      },
      password_reset_sent:
        "Um email de redefinição de senha foi enviado para o seu endereço de email",
      record_not_found: "Registro não encontrado",
      title: "Perfil",
      updated: "Seu perfil foi atualizado",
      update_error: "Ocorreu um erro. Por favor, tente novamente",
    },
    validation: {
      invalid_url: "Deve ser uma URL válida",
      invalid_linkedin_url: "A URL deve ser do linkedin.com",
    },
  },
} as const;

type MessageSchema<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends Record<string, unknown>
      ? MessageSchema<T[K]>
      : never;
};

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown>
    ? DeepPartial<T[K]>
    : T[K];
};

export type CrmMessagesPtBr = MessageSchema<typeof portugueseCrmMessages>;
export type PartialCrmMessagesPtBr = DeepPartial<CrmMessagesPtBr>;
