export const nucleos = {
  nest: {
    id: 'nest',
    name: 'NEST',
    fullName: 'Núcleo de Estudantes de Socioeconómicas e Tecnologias',
    color: '#008000',
    instagram: '#',
    linktree: '#',
    logoFile: 'nest-logo.png'
  },
  netda: {
    id: 'netda',
    name: 'NETDA',
    fullName: 'Núcleo de Estudantes de Tecnologias Digitais e Aplicadas',
    color: '#FBB702',
    instagram: '#',
    linktree: '#',
    logoFile: 'netda-logo.png'
  }
};

export const cursos = [
  {
    id: 'pes',
    title: 'Política, Economia e Sociedade',
    nucleo: 'nest',
    themes: ['Ciência política', 'Sociologia', 'Políticas públicas'],
    careers: ['Analista de políticas públicas', 'Técnico de administração pública', 'Trabalho em ONGs']
  },
  {
    id: 'tdg',
    title: 'Tecnologias Digitais e Gestão',
    nucleo: 'nest',
    themes: ['Gestão', 'Transformação digital', 'Marketing digital'],
    careers: ['Gestor de transformação digital', 'Analista de negócios', 'Empreendedor']
  },
  {
    id: 'dsa',
    title: 'Desenvolvimento de Software e Aplicações',
    nucleo: 'netda',
    themes: ['Programação', 'Engenharia de software', 'Web/Mobile'],
    careers: ['Programador', 'Engenheiro de software', 'Arquiteto de software']
  },
  {
    id: 'matd',
    title: 'Matemática Aplicada e Tecnologias Digitais',
    nucleo: 'netda',
    themes: ['Estatística', 'Big Data', 'Modelação matemática'],
    careers: ['Analista de dados', 'Cientista de dados', 'Consultor']
  },
  {
    id: 'tda',
    title: 'Tecnologias Digitais e Automação',
    nucleo: 'netda',
    themes: ['Robótica', 'IoT (Internet das Coisas)', 'Controlo industrial'],
    careers: ['Engenheiro de automação', 'Técnico de robótica', 'Especialista em IoT']
  },
  {
    id: 'tdecs',
    title: 'Tecnologias Digitais, Edifícios e Construção Sustentável',
    nucleo: 'netda',
    themes: ['BIM', 'Sustentabilidade', 'Eficiência energética'],
    careers: ['Gestor de projetos sustentáveis', 'Especialista em smart buildings']
  },
  {
    id: 'tde',
    title: 'Tecnologias Digitais Educativas',
    nucleo: 'netda',
    themes: ['E-learning', 'Gamificação', 'Design instrucional'],
    careers: ['Designer instrucional', 'Gestor de plataformas de ensino']
  },
  {
    id: 'tdia',
    title: 'Tecnologias Digitais e Inteligência Artificial',
    nucleo: 'netda',
    themes: ['Machine learning', 'Inteligência Artificial', 'Algoritmos avançados'],
    careers: ['Especialista em IA', 'Engenheiro de machine learning']
  },
  {
    id: 'tds',
    title: 'Tecnologias Digitais e Saúde',
    nucleo: 'netda',
    themes: ['Telemedicina', 'Bioinformática', 'Dados clínicos'],
    careers: ['Gestor de sistemas de saúde', 'Analista de dados clínicos']
  },
  {
    id: 'tdsi',
    title: 'Tecnologias Digitais e Segurança de Informação',
    nucleo: 'netda',
    themes: ['Cibersegurança', 'Criptografia', 'Gestão de risco'],
    careers: ['Especialista em cibersegurança', 'Auditor de segurança', 'Consultor IT']
  }
];

// O scoreArray indica para quais cursos uma resposta contribui
export const questions = [
  {
    id: 1,
    text: "O que te atrai mais num projeto escolar ou profissional?",
    options: [
      { text: "Compreender o impacto que tem na vida das pessoas.", points: ['pes', 'tds', 'tde'] },
      { text: "Encontrar uma forma de o tornar lucrativo ou mais eficiente.", points: ['tdg', 'matd'] },
      { text: "Escrever o código ou desenhar a lógica por trás de tudo.", points: ['dsa', 'tdia'] },
      { text: "Garantir que a solução é construída fisicamente ou automatizada.", points: ['tda', 'tdecs'] }
    ]
  },
  {
    id: 2,
    text: "Como reages quando te deparas com um problema complexo?",
    options: [
      { text: "Analiso os factos, recolho bastantes dados e procuro padrões.", points: ['matd', 'tdia'] },
      { text: "Tento proteger a informação e garantir que o mesmo não se repete.", points: ['tdsi'] },
      { text: "Procuro ferramentas para criar algo novo ou melhorar o que existe.", points: ['dsa', 'tdg'] },
      { text: "Estudo como esse problema afeta os diferentes grupos da sociedade.", points: ['pes'] }
    ]
  },
  {
    id: 3,
    text: "Pensa no futuro da medicina e saúde. O que te entusiasma mais?",
    options: [
      { text: "Encontrar tratamentos baseados na análise de dados e bioinformática.", points: ['tds', 'matd'] },
      { text: "A democratização do acesso a cuidados em todo o lado.", points: ['pes', 'tds'] },
      { text: "Desenvolver apps para conectar médicos aos pacientes.", points: ['dsa', 'tds'] },
      { text: "Modelar IA capaz de diagnosticar doenças raras.", points: ['tdia'] }
    ]
  },
  {
    id: 4,
    text: "Se pudesses desenhar a tua cidade de sonho, o destaque seria:",
    options: [
      { text: "Edifícios super sustentáveis geridos inteligentemente (Smart City).", points: ['tdecs', 'tda'] },
      { text: "Um sistema económico robusto com forte apoio social.", points: ['pes', 'tdg'] },
      { text: "Sistemas em que tu controlavas toda a rede via software.", points: ['dsa', 'tdsi'] },
      { text: "Uma enorme escola interativa e gamificada.", points: ['tde'] }
    ]
  },
  {
    id: 5,
    text: "Qual destas tecnologias te desperta maior curiosidade?",
    options: [
      { text: "Criptomoedas, Blockchain e defesa contra hackers.", points: ['tdsi'] },
      { text: "Robots industriais e automação.", points: ['tda', 'tdia'] },
      { text: "Plataformas de E-learning e Realidade Virtual no ensino.", points: ['tde'] },
      { text: "Métricas digitais para alavancar um negócio ou startup.", points: ['tdg'] }
    ]
  },
  {
    id: 6,
    text: "Como preferes trabalhar no teu dia-a-dia?",
    options: [
      { text: "A desenvolver novos produtos digitais ou apps com a equipa.", points: ['dsa'] },
      { text: "Mergulhado em equações para prever o próximo grande evento.", points: ['matd'] },
      { text: "A gerir projetos físicos, infraestruturas ou sensores IoT.", points: ['tda', 'tdecs'] },
      { text: "A liderar equipas, definir estratégias e compreender pessoas.", points: ['tdg', 'pes'] }
    ]
  },
  {
    id: 7,
    text: "Se tivesses um superpoder, qual escolherias?",
    options: [
      { text: "Ler e antever a mente do mercado/sociedade.", points: ['tdg', 'pes'] },
      { text: "A capacidade de comunicar instantaneamente com qualquer máquina.", points: ['dsa', 'tdia'] },
      { text: "Um escudo digital inviolável.", points: ['tdsi'] },
      { text: "Aptidão para sarar ou ajudar a curar usando tecnologia.", points: ['tds'] }
    ]
  },
  {
    id: 8,
    text: "Num jogo de vídeo, tu és aquele que...",
    options: [
      { text: "Analisa exaustivamente os status para otimizar os recursos.", points: ['matd'] },
      { text: "Explora os menus de definições à rasca de modificar o jogo.", points: ['dsa', 'tdsi'] },
      { text: "Constrói bases espetaculares, seguras e sustentáveis.", points: ['tdecs', 'tda'] },
      { text: "Se maravilha com a narrativa, lore ou é o líder da guild.", points: ['tde', 'pes'] }
    ]
  },
  {
    id: 9,
    text: "Qual a tua opinião sobre Inteligência Artificial?",
    options: [
      { text: "Quero saber desenhar a matemática atrás desses algoritmos.", points: ['tdia', 'matd'] },
      { text: "Como é que a podemos usar para ajudar as empresas a crescer?", points: ['tdg'] },
      { text: "Temos de legislar bem o seu impacto nos governos e cidadãos.", points: ['pes'] },
      { text: "Pode ser um tutor excelente e revolucionar a educação.", points: ['tde'] }
    ]
  },
  {
    id: 10,
    text: "Finalmente... no fundo, qual achas que é o teu objetivo principal?",
    options: [
      { text: "Escrever bom código, criar infraestruturas e inovar em IT.", points: ['dsa', 'tda'] },
      { text: "Modelar a forma como aprendemos, cuidamos ou protegemos o nosso futuro.", points: ['tds', 'tdsi', 'tde'] },
      { text: "Estar na vanguarda da matemática, IA e otimização.", points: ['matd', 'tdia'] },
      { text: "Estar no meio corporativo/sociedade, liderar e tomar decisões.", points: ['pes', 'tdg', 'tdecs'] }
    ]
  }
];
