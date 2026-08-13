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
    badge: 'Base React + Bootstrap',
    title: 'Construa com rapidez e estilo com confiança.',
    description:
      'Um ponto de partida limpo com seções reutilizáveis, comportamento responsivo e utilitários do Bootstrap prontos para páginas de produto e dashboards.',
    primaryCta: {
      label: 'Começar a construir',
      href: '#start',
    },
    secondaryCta: {
      label: 'Explorar componentes',
      href: '#features',
    },
    card: {
      title: 'A base inclui',
      items: [
        'Navbar responsiva e seção hero',
        'Utilitários e grid do Bootstrap',
        'Tokens visuais personalizados em variáveis CSS',
        'Seções prontas para escalar',
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
