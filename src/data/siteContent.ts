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
        id: 'aspects-and-impacts',
        title: 'Matriz Estratégica de Aspectos e Impactos',
        description:
          'Mapeamento inteligente de riscos e oportunidades ambientais integrados ao plano de negócios. Avalie a relevância de cada impacto na cadeia de valor, priorize investimentos de mitigação e tome decisões respaldadas por análises de materialidade.',
        resources: [
          'Riscos e oportunidades',
          'Análise de materialidade',
          'Priorização de investimentos',
        ],
        benefit:
          'Conecte os impactos ambientais às decisões estratégicas e à cadeia de valor do negócio.',
      },
      {
        id: 'environmental-monitoring',
        title: 'Modelagem Preditiva & Indicadores ESG',
        description:
          'Acompanhamento de dados de efluentes, emissões e consumo com inteligência analítica. Projete tendências, antecipe desvios em relação às metas e receba previsões de cenários para agir de forma proativa antes que metas sustentáveis sejam comprometidas.',
        resources: [
          'Efluentes e emissões',
          'Projeção de tendências',
          'Indicadores e metas ESG',
        ],
        benefit:
          'Antecipe desvios e mantenha suas metas sustentáveis sob controle com previsões de cenários.',
      },
      {
        id: 'waste-management',
        title: 'Gestão Estratégica de Resíduos e Economia Circular',
        description:
          'Rastreabilidade end-to-end integrada ao SINIR focada na meta de descarte zero. Transforme dados de destinação em insights estratégicos para redução de custos, otimização da cadeia de suprimentos e valorização de resíduos.',
        resources: [
          'Integração SINIR',
          'Meta de descarte zero',
          'Economia circular',
        ],
        benefit:
          'Reduza custos, otimize a cadeia de suprimentos e valorize resíduos com dados de destinação.',
      },
      {
        id: 'document-management',
        title: 'Governança Regulatória e Previsibilidade de Licenciamento',
        description:
          'Previsão e planejamento do ciclo de vida das condicionantes e licenças. Evite paralisações operacionais e passivos financeiros com um cronograma estratégico de renovações e análise de impacto regulatório.',
        resources: [
          'Licenças e condicionantes',
          'Cronograma de renovações',
          'Impacto regulatório',
        ],
        benefit:
          'Evite paralisações e passivos financeiros com previsibilidade sobre os ciclos regulatórios.',
      },
      {
        id: 'environmental-incidents',
        title: 'Gestão de Incidentes & Mitigação Preditiva de Riscos',
        description:
          'Diagnóstico profundo de causas-raiz com analytics. Identifique padrões operacionais recorrentes para prever potenciais falhas ambientais e implementar planos de contingência de alto impacto.',
        resources: [
          'Causas-raiz',
          'Padrões operacionais',
          'Planos de contingência',
        ],
        benefit:
          'Previna falhas ambientais e fortaleça a resiliência operacional com planos de contingência.',
      },
      {
        id: 'non-conformities-action-plan',
        title: 'Repositório Estratégico e Prontidão para Auditorias ESG',
        description:
          'Centralização e rastreabilidade de dados auditáveis em conformidade com normas como ISO 14001 e frameworks ESG. Garanta transparência técnica total para investidores, conselho e órgãos reguladores.',
        resources: [
          'Dados auditáveis',
          'ISO 14001 e ESG',
          'Transparência técnica',
        ],
        benefit:
          'Demonstre governança e transparência técnica em auditorias e decisões de alto nível.',
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
      href: 'https://wa.me/5541998227111',
    },
    items: [
      {
        label: 'E-mail',
        value: 'contato@environtools.com.br',
        href: 'mailto:contato@environtools.com.br',
      },
      {
        label: 'Telefone',
        value: '(41) 9 9822-7111',
        href: 'tel:+5541998227111',
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
    copyright:
      'Desenvolvido por ToolsDev Technology. © 2026 EnvironTools. Todos os direitos reservados.',
    backToTop: {
      label: 'Política de Privacidade',
      href: '/privacy-policy',
    },
  },
}
