import type { SiteContent } from '../types/siteContent'

export const siteContent: SiteContent = {
  navbar: {
    brand: {
      label: 'EnvironTools',
      href: '/',
    },
    navItems: [
      {
        label: 'Home',
        href: '/',
      },
      {
        type: 'dropdown',
        label: 'Módulos',
        groups: [
          {
            heading: 'Conformidade & Licenciamento',
            items: [
              {
                label: 'Gestão de Documentos',
                href: '/modules/document-management',
              },
              {
                label: 'Monitoramento Ambiental',
                href: '/modules/environmental-monitoring',
              },
              {
                label: 'Aspectos e Impactos Ambientais',
                href: '/modules/aspects-and-impacts',
              },
            ],
          },
          {
            heading: 'Operação & Resíduos',
            items: [
              {
                label: 'Gestão de Resíduos',
                href: '/modules/waste-management',
              },
              {
                label: 'Gestão de Produtos Químicos',
                href: '/modules/chemical-products',
              },
            ],
          },
          {
            heading: 'Melhoria Contínua & Auditoria',
            items: [
              {
                label: 'Não Conformidades & Plano de Ação',
                href: '/modules/non-conformities-action-plan',
              },
              {
                label: 'Ocorrências Ambientais',
                href: '/modules/environmental-incidents',
              },
            ],
          },
        ],
      },
      {
        label: 'Planos',
        href: '/plans',
      },
      {
        label: 'Sobre nós',
        href: '/#about',
      },
    ],
    cta: {
      label: 'Começar',
      href: '/plans',
    },
  },
  hero: {
    badge: 'Sistema de gestão ambiental completo',
    title:
      'Simplifique a gestão ambiental da sua empresa em uma única plataforma.',
    description:
      'Automatize a emissão de MTRs com integração SINIR, controle condicionantes de licenças, monitore efluentes e garanta 100% de conformidade legal sem planilhas.',
    primaryCta: {
      label: 'Agendar demonstração',
      href: '#contact',
    },
    secondaryCta: {
      label: 'Conhecer módulos',
      href: '#features',
    },
    card: {
      title: 'Por que a EnvironTools?',
      items: [
        'Integração direta com o SINIR para emissão rápida de MTR',
        'Alertas automáticos para renovação de licenças e condicionantes',
        'Dashboards em tempo real para resíduos, consumo e emissões',
        'Pronto para auditorias de conformidade e ISO 14001',
      ],
    },
  },
  features: {
    sectionId: 'features',
    aboutAnchorId: 'about',
    items: [
      {
        id: 'waste-management',
        title: 'Gestão de Resíduos',
        description:
          'Rastreabilidade completa da geração à destinação final de resíduos.',
        resources: [
          'Emissão de MTR',
          'Integração SINIR',
          'Dashboard analítico',
          'Filtros avançados',
        ],
        benefit:
          'Elimina erros na emissão de MTRs, evita penalidades ambientais e simplifica a prestação de contas aos órgãos fiscalizadores.',
      },
      {
        id: 'document-management',
        title: 'Gestão de Documentos',
        description:
          'Controle rigoroso de validades, licenças e documentação da empresa e de terceiros.',
        resources: [
          'Documentos da empresa',
          'Gestão de prestadores (PSA)',
          'Alertas inteligentes',
        ],
        benefit:
          'Fim do risco de operar com licenças expiradas ou contratar fornecedores irregulares.',
      },
      {
        id: 'environmental-monitoring',
        title: 'Monitoramento Ambiental',
        description:
          'Centralização de todas as variáveis, medições operacionais e requisitos normativos em um só local.',
        resources: [
          'Condicionantes ambientais',
          'Monitoramento de consumo',
          'Monitoramento de efluentes',
          'Monitoramento de ruído',
          'Produtos controlados',
          'Emissões atmosféricas',
        ],
        benefit:
          'Garantia de conformidade técnica contínua e histórico consolidado para auditorias e perícias.',
      },
      {
        id: 'chemical-products',
        title: 'Gestão de Produtos Químicos',
        description:
          'Segurança, padronização e controle do ciclo de vida dos insumos químicos.',
        resources: [
          'Cadastro e FDS/FISPQ',
          'Fluxo de aprovação',
          'Dashboard de controle',
        ],
        benefit:
          'Prevenção de acidentes, controle de estocagem adequada e uso homologado de químicos na planta.',
      },
      {
        id: 'non-conformities-action-plan',
        title: 'Não Conformidades & Plano de Ação',
        description:
          'Tratamento padronizado de desvios e garantia do ciclo de melhoria contínua.',
        resources: [
          'Registro de não conformidades',
          'Gestão de planos de ação',
        ],
        benefit:
          'Agilidade na correção de desvios e comprovação de tratativa em auditorias ISO 14001.',
      },
      {
        id: 'environmental-incidents',
        title: 'Ocorrências Ambientais',
        description:
          'Resposta rápida a incidentes e mitigação de impactos no meio ambiente.',
        resources: [
          'Registro de incidentes e acidentes',
          'Análise de causa raiz',
          'Planos de mitigação',
        ],
        benefit:
          'Estrutura clara para agir em emergências, reduzindo passivos ambientais e danos reputacionais.',
      },
      {
        id: 'aspects-and-impacts',
        title: 'Aspectos e Impactos Ambientais',
        description:
          'Mapeamento de riscos e avaliação do impacto das atividades da empresa no ecossistema.',
        resources: [
          'Cadastro de aspectos e impactos',
          'Matriz de avaliação',
          'Dashboard de riscos',
        ],
        benefit:
          'Tomada de decisão estratégica baseada em dados, atendendo integralmente aos requisitos de SGIA (ISO 14001).',
      },
    ],
  },
  process: {
    sectionId: 'process',
    eyebrow: 'Como funciona',
    title: 'Da implantação à conformidade contínua em quatro etapas',
    description:
      'Um caminho estruturado para tirar a gestão ambiental das planilhas e colocar a operação sob controle, com responsáveis, prazos e evidências.',
    steps: [
      {
        title: 'Diagnóstico ambiental',
        description:
          'Mapeamos licenças, condicionantes, resíduos e rotinas atuais para identificar riscos e prioridades da sua operação.',
      },
      {
        title: 'Configuração da plataforma',
        description:
          'Ativamos os módulos necessários, cadastramos unidades, usuários e integramos o SINIR para emissão de MTR.',
      },
      {
        title: 'Migração e treinamento',
        description:
          'Importamos documentos e históricos existentes e capacitamos as equipes de meio ambiente, operação e qualidade.',
      },
      {
        title: 'Monitoramento contínuo',
        description:
          'Alertas, dashboards e planos de ação mantêm a conformidade viva e sua empresa sempre pronta para auditorias.',
      },
    ],
  },
  plans: {
    sectionId: 'plans',
    title: 'Planos pensados para cada etapa da sua operação',
    subtitle:
      'Escolha o nível de maturidade que combina com a sua exigência ambiental e complexidade operacional.',
    items: [
      {
        name: 'Starter',
        price: 'R$ 790,00',
        description:
          'Ideal para pequenas empresas ou consultorias que precisam organizar o essencial.',
        features: [
          'Até 3 módulos inclusos',
          '1 usuário incluso',
          'Valor mensal: R$ 790,00',
          'Implementação: R$ 3.500,00',
        ],
        ctaLabel: 'Começar',
      },
      {
        name: 'Professional',
        price: 'R$ 1.450,00',
        description:
          'O plano principal para indústrias de médio porte que precisam de integração total e controle.',
        features: [
          'Até 6 módulos inclusos',
          '5 usuários inclusos',
          'Valor mensal: R$ 1.450,00',
          'Implementação: R$ 5.000,00',
        ],
        highlight: true,
        ctaLabel: 'Mais popular',
      },
      {
        name: 'Enterprise',
        price: 'R$ 2.200,00 - R$ 2.800,00',
        description:
          'Para grandes corporações com múltiplas unidades e alta complexidade operacional.',
        features: [
          'Todos os 7 módulos inclusos',
          '15 usuários inclusos',
          'Implementação: R$ 6.500,00',
          'Suporte personalizado e governança avançada',
        ],
        ctaLabel: 'Falar com vendas',
      },
    ],
  },
  about: {
    sectionId: 'about',
    title:
      'Construímos software que ajuda empresas a agir com responsabilidade ambiental.',
    description:
      'A EnvironTools nasceu para conectar gestão ambiental, conformidade e operação em uma mesma plataforma, ajudando empresas a reduzir riscos, ganhar eficiência e demonstrar controle com clareza.',
    values: [
      'Foco em traçabilidade da operação',
      'Decisões baseadas em evidência e dados',
      'Simplificação da conformidade ambiental',
    ],
    stats: [
      { value: '7', label: 'módulos integrados' },
      { value: '24/7', label: 'visibilidade operacional' },
      { value: '100%', label: 'controle documental' },
    ],
  },
  testimonials: {
    sectionId: 'testimonials',
    eyebrow: 'Depoimentos',
    title: 'Times ambientais que trocaram planilhas por controle real',
    description:
      'Resultados relatados por gestores ambientais, coordenadores de qualidade e consultorias que utilizam a plataforma no dia a dia.',
    items: [
      {
        quote:
          'A emissão de MTR deixou de ser um gargalo. O que antes consumia um turno inteiro hoje é resolvido em minutos, com rastreabilidade completa.',
        author: 'Marina Alves',
        role: 'Coordenadora de Meio Ambiente · Indústria alimentícia',
      },
      {
        quote:
          'Os alertas de condicionantes mudaram nossa rotina. Nenhum prazo de licença passa despercebido e a auditoria ISO 14001 ficou muito mais tranquila.',
        author: 'Rafael Menezes',
        role: 'Gerente de SGI · Metalurgia',
      },
      {
        quote:
          'Atendemos várias plantas com a mesma equipe. Ter documentos, monitoramentos e planos de ação centralizados reduziu drasticamente o retrabalho.',
        author: 'Carolina Prado',
        role: 'Sócia · Consultoria ambiental',
      },
    ],
  },
  faq: {
    sectionId: 'faq',
    eyebrow: 'Dúvidas frequentes',
    title: 'O que as empresas costumam perguntar antes de começar',
    description:
      'Se a sua dúvida não estiver aqui, fale com nosso time: respondemos com base no cenário real da sua operação.',
    items: [
      {
        question: 'Quanto tempo leva a implantação?',
        answer:
          'O período varia conforme o número de módulos e unidades. Operações de porte médio costumam iniciar o uso produtivo já nas primeiras semanas, começando pelos módulos mais críticos.',
      },
      {
        question: 'A plataforma integra com o SINIR?',
        answer:
          'Sim. A emissão de MTR é feita com integração direta ao SINIR, eliminando o retrabalho de digitar os mesmos dados em dois sistemas e reduzindo erros de preenchimento.',
      },
      {
        question: 'Consigo migrar meus documentos e históricos atuais?',
        answer:
          'Sim. Durante a implantação importamos licenças, condicionantes, laudos e planilhas existentes para que o histórico da operação não seja perdido.',
      },
      {
        question: 'A solução atende múltiplas unidades?',
        answer:
          'Sim. É possível organizar unidades, filiais e áreas com permissões específicas, mantendo visão consolidada para a matriz e visão detalhada para cada planta.',
      },
      {
        question: 'A plataforma ajuda em auditorias e na ISO 14001?',
        answer:
          'Todos os registros ficam versionados e rastreáveis, com evidências de tratativa de não conformidades e planos de ação — exatamente o que auditores solicitam.',
      },
      {
        question: 'Posso contratar apenas alguns módulos?',
        answer:
          'Sim. Os planos permitem começar pelos módulos essenciais e ampliar conforme a maturidade ambiental da empresa evolui.',
      },
    ],
  },
  contact: {
    sectionId: 'contact',
    badge: 'Fale com um especialista',
    title: 'Descubra a melhor solução para sua operação',
    description:
      'Nossa equipe entende os desafios de conformidade ambiental, operação e documentação. Agende uma conversa para entender o melhor plano para sua empresa.',
    primaryCta: {
      label: 'Agendar reunião',
      href: 'mailto:contato@environtools.com.br?subject=Agendar%20reuni%C3%A3o',
    },
    secondaryCta: {
      label: 'Falar por WhatsApp',
      href: 'https://wa.me/5511999999999',
    },
    items: [
      {
        label: 'E-mail',
        value: 'contato@environtools.com.br',
        href: 'mailto:contato@environtools.com.br',
      },
      {
        label: 'Telefone',
        value: '(11) 99999-9999',
        href: 'tel:+5511999999999',
      },
      {
        label: 'Atendimento',
        value: 'Segunda a sexta · 08h às 18h',
        href: '#contact',
      },
    ],
  },
  footer: {
    sectionId: 'start',
    copyright: '© 2026 EnvironTools. Todos os direitos reservados.',
    backToTop: {
      label: 'Voltar ao topo',
      href: '/',
    },
  },
}
