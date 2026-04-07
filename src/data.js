export const nucleos = {
  nest: {
    id: 'nest',
    name: 'NEST',
    fullName: 'Núcleo de Estudantes de Socioeconómicas e Tecnologias',
    fullNameEn: 'Student Union of Socioeconomics and Technologies',
    flavorText: 'O NEST é o teu espaço para cruzar gestão, economia e sociedade com a revolução digital. Junta-te a uma equipa dinâmica pronta a debater grandes ideias organizacionais e o fator humano da tecnologia.',
    flavorTextEn: 'NEST is your space to cross management, economy, and society with the digital revolution. Join a dynamic team ready to debate great organizational ideas and the human factor of technology.',
    color: '#004225',
    instagram: 'https://www.instagram.com/nestiscte/',
    linktree: 'https://linktr.ee/nestiscte',
    logoFile: 'nest-logo.png'
  },
  netda: {
    id: 'netda',
    name: 'NETDA',
    fullName: 'Núcleo de Estudantes de Tecnologias Digitais e Aplicadas',
    fullNameEn: 'Student Union of Digital and Applied Technologies',
    flavorText: 'Bem-vindo ao centro da inovação e disrupção! O NETDA é onde os apaixonados por código, IA e engenharia se encontram. Prepara-te para hackathons, projetos práticos e construir o futuro com as próprias mãos.',
    flavorTextEn: 'Welcome to the center of innovation and disruption! NETDA is where code, AI, and engineering enthusiasts meet. Prepare for hackathons, practical projects, and building the future with your own hands.',
    color: '#FBB702',
    instagram: 'https://www.instagram.com/netda_iscte',
    linktree: 'https://linktr.ee/NETDA_Iscte',
    logoFile: 'netda-logo.png'
  }
};

export const cursos = [
  {
    id: 'pes',
    title: 'Política, Economia e Sociedade',
    titleEn: 'Politics, Economics and Society',
    nucleo: 'nest',
    description: 'Prepara profissionais capazes de compreender a complexidade das sociedades contemporâneas, cruzando conhecimentos para atuarem em organizações com foco no plano de políticas e visão estratégica.',
    descriptionEn: 'Prepares professionals capable of understanding the complexity of contemporary societies, crossing knowledge to act in organizations focused on policies and strategic vision.',
    themes: ['Ciência política', 'Sociologia', 'Políticas públicas'],
    themesEn: ['Political science', 'Sociology', 'Public policies'],
    careers: ['Analista de políticas públicas', 'Técnico de administração pública', 'Trabalho em ONGs'],
    careersEn: ['Public policy analyst', 'Public administration technician', 'NGO work'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0394'
  },
  {
    id: 'tdg',
    title: 'Tecnologias Digitais e Gestão',
    titleEn: 'Digital Technologies and Management',
    nucleo: 'nest',
    description: 'A simbiose perfeita entre a liderança organizacional e a inovação tecnológica. Aprenderás a transpor tecnologias emergentes para os modelos de negócio, unindo as equipas técnicas à gestão corporativa.',
    descriptionEn: 'The perfect symbiosis between organizational leadership and technological innovation. You will learn to translate emerging technologies into business models, connecting technical teams to corporate management.',
    themes: ['Gestão', 'Transformação digital', 'Marketing digital'],
    themesEn: ['Management', 'Digital transformation', 'Digital marketing'],
    careers: ['Gestor de transformação digital', 'Analista de negócios', 'Empreendedor'],
    careersEn: ['Digital transformation manager', 'Business analyst', 'Entrepreneur'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0391'
  },
  {
    id: 'dsa',
    title: 'Desenvolvimento de Software e Aplicações',
    titleEn: 'Software Development and Applications',
    nucleo: 'netda',
    description: 'Mergulha na criação do futuro digital. Como programador e arquiteto de software, serás tu a construir as aplicações e plataformas transversais de alto impacto que movem o mundo digital.',
    descriptionEn: 'Dive into the creation of the digital future. As a programmer and software architect, you will be the one building high-impact cross-cutting applications and platforms that move the digital world.',
    themes: ['Programação', 'Engenharia de software', 'Web/Mobile'],
    themesEn: ['Programming', 'Software engineering', 'Web/Mobile'],
    careers: ['Programador', 'Engenheiro de software', 'Arquiteto de software'],
    careersEn: ['Programmer', 'Software engineer', 'Software architect'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0385'
  },
  {
    id: 'matd',
    title: 'Matemática Aplicada e Tecnologias Digitais',
    titleEn: 'Applied Mathematics and Digital Technologies',
    nucleo: 'netda',
    description: 'Transforma dados complexos e estatística em descobrimentos exatos. Prepara-te para resolver desafios analíticos de Big Data e fornecer otimização garantida às necessidades das organizações de topo.',
    descriptionEn: 'Transform complex data and statistics into exact discoveries. Prepare to solve Big Data analytical challenges and provide guaranteed optimization to the needs of top organizations.',
    themes: ['Estatística', 'Big Data', 'Modelação matemática'],
    themesEn: ['Statistics', 'Big Data', 'Mathematical modeling'],
    careers: ['Analista de dados', 'Cientista de dados', 'Consultor'],
    careersEn: ['Data analyst', 'Data scientist', 'Consultant'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0426'
  },
  {
    id: 'tda',
    title: 'Tecnologias Digitais e Automação',
    titleEn: 'Digital Technologies and Automation',
    nucleo: 'netda',
    description: 'A ponte entre o mundo de software e a reality física. Projeta sistemas autónomos, braços robóticos industriais ou conectividade IoT para garantir infraestruturas cada vez mais eficientes e seguras.',
    descriptionEn: 'The bridge between the software world and physical reality. Design autonomous systems, industrial robotic arms, or IoT connectivity to ensure increasingly efficient and secure infrastructures.',
    themes: ['Robótica', 'IoT (Internet das Coisas)', 'Controlo industrial'],
    themesEn: ['Robotics', 'IoT (Internet of Things)', 'Industrial control'],
    careers: ['Engenheiro de automação', 'Técnico de robótica', 'Especialista em IoT'],
    careersEn: ['Automation engineer', 'Robotics technician', 'IoT specialist'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0389'
  },
  {
    id: 'tdecs',
    title: 'Tecnologias Digitais, Edifícios e Construção Sustentável',
    titleEn: 'Digital Technologies, Buildings and Sustainable Construction',
    nucleo: 'netda',
    description: 'Alia a transição energética global à revolução tecnológica. Desenharás as chamadas Smart Cities e infraestruturas sustentáveis de amanhã usando BIM e sensores interativos inteligentes.',
    descriptionEn: 'Combines the global energy transition with the technological revolution. You will design tomorrow\'s Smart Cities and sustainable infrastructures using BIM and smart interactive sensors.',
    themes: ['BIM', 'Sustentabilidade', 'Eficiência energética'],
    themesEn: ['BIM', 'Sustainability', 'Energy efficiency'],
    careers: ['Gestor de projetos sustentáveis', 'Especialista em smart buildings'],
    careersEn: ['Sustainable projects manager', 'Smart buildings specialist'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0429'
  },
  {
    id: 'tde',
    title: 'Tecnologias Digitais Educativas',
    titleEn: 'Educational Digital Technologies',
    nucleo: 'netda',
    description: 'Onde o saber encontra a imersão moderna. Redesenha a maneira como partilhamos conhecimentos utilizando o E-learning, mecânicas de gamificação e o design focado no aluno da nova era.',
    descriptionEn: 'Where knowledge meets modern immersion. Redesign how we share knowledge using E-learning, gamification mechanics, and student-focused design of the new era.',
    themes: ['E-learning', 'Gamificação', 'Design instrucional'],
    themesEn: ['E-learning', 'Gamification', 'Instructional design'],
    careers: ['Designer instrucional', 'Gestor de plataformas de ensino'],
    careersEn: ['Instructional designer', 'Educational platform manager'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0386'
  },
  {
    id: 'tdia',
    title: 'Tecnologias Digitais e Inteligência Artificial',
    titleEn: 'Digital Technologies and Artificial Intelligence',
    nucleo: 'netda',
    description: 'O epicentro natural da disrupção que domina o século. Foca-se em dotar sistemas e máquinas corporativas de capacidades avançadas (Machine Learning e IA) para processar variáveis que transcendem os humanos.',
    descriptionEn: 'The natural epicenter of the disruption dominating the century. Focuses on equipping corporate systems and machines with advanced capabilities (Machine Learning and AI) to process variables that transcend humans.',
    themes: ['Machine learning', 'Inteligência Artificial', 'Algoritmos avançados'],
    themesEn: ['Machine learning', 'Artificial Intelligence', 'Advanced algorithms'],
    careers: ['Especialista em IA', 'Engenheiro de machine learning'],
    careersEn: ['AI specialist', 'Machine learning engineer'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0387'
  },
  {
    id: 'tds',
    title: 'Tecnologias Digitais e Saúde',
    titleEn: 'Digital Technologies and Health',
    nucleo: 'netda',
    description: 'Um autêntico catalisador do bem-estar. Desde bioinformática até a telemedicina, aprenderás a potenciar o acompanhamento clínico e equipamentos médicos através da agilidade da digitalização.',
    descriptionEn: 'A genuine catalyst for well-being. From bioinformatics to telemedicine, you will learn to boost clinical monitoring and medical equipment through the agility of digitalization.',
    themes: ['Telemedicina', 'Bioinformática', 'Dados clínicos'],
    themesEn: ['Telemedicine', 'Bioinformatics', 'Clinical data'],
    careers: ['Gestor de sistemas de saúde', 'Analista de dados clínicos'],
    careersEn: ['Health systems manager', 'Clinical data analyst'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0392'
  },
  {
    id: 'tdsi',
    title: 'Tecnologias Digitais e Segurança de Informação',
    titleEn: 'Digital Technologies and Information Security',
    nucleo: 'netda',
    description: 'Torna-te um guardião das redes virtuais da sociedade. Com base principal em cibersegurança e criptografia, lutarás contra vulnerabilidades para proteger informação altamente crítica num mundo ligado.',
    descriptionEn: 'Become a guardian of society\'s virtual networks. Based mainly on cybersecurity and cryptography, you will fight vulnerabilities to protect highly critical information in a connected world.',
    themes: ['Cibersegurança', 'Criptografia', 'Gestão de risco'],
    themesEn: ['Cybersecurity', 'Cryptography', 'Risk management'],
    careers: ['Especialista em cibersegurança', 'Auditor de segurança', 'Consultor IT'],
    careersEn: ['Cybersecurity specialist', 'Security auditor', 'IT consultant'],
    link: 'https://www.iscte-iul.pt/localize/pt?override_redirect=%2Fcursos%2Fcurso%2F0430'
  }
];

export const questions = [
  {
    id: 1,
    text: "O que te atrai mais num projeto escolar ou profissional?",
    textEn: "What attracts you most to a school or professional project?",
    options: [
      { text: "Compreender o impacto que tem na vida das pessoas.", textEn: "Understanding its impact on people's lives.", points: ['pes', 'tds', 'tde'] },
      { text: "Encontrar uma forma de o tornar lucrativo ou mais eficiente.", textEn: "Finding a way to make it profitable or more efficient.", points: ['tdg', 'matd'] },
      { text: "Escrever o código ou desenhar a lógica por trás de tudo.", textEn: "Writing the code or designing the logic behind it all.", points: ['dsa', 'tdia'] },
      { text: "Garantir que a solução é construída fisicamente ou automatizada.", textEn: "Ensuring the solution is physically built or automated.", points: ['tda', 'tdecs'] }
    ]
  },
  {
    id: 2,
    text: "Como reages quando te deparas com um problema complexo?",
    textEn: "How do you react when faced with a complex problem?",
    options: [
      { text: "Analiso os factos, recolho bastantes dados e procuro padrões.", textEn: "I analyze facts, gather data, and look for patterns.", points: ['matd', 'tdia'] },
      { text: "Tento proteger a informação e garantir que o mesmo não se repete.", textEn: "I try to protect information and ensure it doesn't happen again.", points: ['tdsi'] },
      { text: "Procuro ferramentas para criar algo novo ou melhorar o que existe.", textEn: "I look for tools to create something new or improve what exists.", points: ['dsa', 'tdg'] },
      { text: "Estudo como esse problema afeta os diferentes grupos da sociedade.", textEn: "I study how the problem affects different groups in society.", points: ['pes'] }
    ]
  },
  {
    id: 3,
    text: "Pensa no futuro da medicina e saúde. O que te entusiasma mais?",
    textEn: "Think about the future of medicine and health. What excites you most?",
    options: [
      { text: "Encontrar tratamentos baseados na análise de dados e bioinformática.", textEn: "Finding treatments based on data analysis and bioinformatics.", points: ['tds', 'matd'] },
      { text: "A democratização do acesso a cuidados em todo o lado.", textEn: "Democratizing access to care everywhere.", points: ['pes', 'tds'] },
      { text: "Desenvolver apps para conectar médicos aos pacientes.", textEn: "Developing apps to connect doctors with patients.", points: ['dsa', 'tds'] },
      { text: "Modelar IA capaz de diagnosticar doenças raras.", textEn: "Modeling AI capable of diagnosing rare diseases.", points: ['tdia'] }
    ]
  },
  {
    id: 4,
    text: "Se pudesses desenhar a tua cidade de sonho, o destaque seria:",
    textEn: "If you could design your dream city, the highlight would be:",
    options: [
      { text: "Edifícios super sustentáveis geridos inteligentemente (Smart City).", textEn: "Super sustainable intelligently managed buildings (Smart City).", points: ['tdecs', 'tda'] },
      { text: "Um sistema económico robusto com forte apoio social.", textEn: "A robust economic system with strong social support.", points: ['pes', 'tdg'] },
      { text: "Sistemas em que tu controlavas toda a rede via software.", textEn: "Systems where you controlled the whole network via software.", points: ['dsa', 'tdsi'] },
      { text: "Uma enorme escola interativa e gamificada.", textEn: "A massive interactive and gamified school.", points: ['tde'] }
    ]
  },
  {
    id: 5,
    text: "Qual destas tecnologias te desperta maior curiosidade?",
    textEn: "Which of these technologies sparks your curiosity most?",
    options: [
      { text: "Criptomoedas, Blockchain e defesa contra hackers.", textEn: "Cryptocurrencies, Blockchain, and hacker defense.", points: ['tdsi'] },
      { text: "Robots industriais e automação.", textEn: "Industrial robots and automation.", points: ['tda', 'tdia'] },
      { text: "Plataformas de E-learning e Realidade Virtual no ensino.", textEn: "E-learning platforms and Virtual Reality in education.", points: ['tde'] },
      { text: "Métricas digitais para alavancar um negócio ou startup.", textEn: "Digital metrics to leverage a business or startup.", points: ['tdg'] }
    ]
  },
  {
    id: 6,
    text: "Como preferes trabalhar no teu dia-a-dia?",
    textEn: "How do you prefer to work on a daily basis?",
    options: [
      { text: "A desenvolver novos produtos digitais ou apps com a equipa.", textEn: "Developing new digital products or apps with the team.", points: ['dsa'] },
      { text: "Mergulhado em equações para prever o próximo grande evento.", textEn: "Immersed in equations to predict the next big event.", points: ['matd'] },
      { text: "A gerir projetos físicos, infraestruturas ou sensores IoT.", textEn: "Managing physical projects, infrastructures, or IoT sensors.", points: ['tda', 'tdecs'] },
      { text: "A liderar equipas, definir estratégias e compreender pessoas.", textEn: "Leading teams, defining strategies, and understanding people.", points: ['tdg', 'pes'] }
    ]
  },
  {
    id: 7,
    text: "Se tivesses um superpoder, qual escolherias?",
    textEn: "If you had a superpower, which one would you choose?",
    options: [
      { text: "Ler e antever a mente do mercado/sociedade.", textEn: "Read and anticipate the mind of the market/society.", points: ['tdg', 'pes'] },
      { text: "A capacidade de comunicar instantaneamente com qualquer máquina.", textEn: "The ability to communicate instantly with any machine.", points: ['dsa', 'tdia'] },
      { text: "Um escudo digital inviolável.", textEn: "An inviolable digital shield.", points: ['tdsi'] },
      { text: "Aptidão para sarar ou ajudar a curar usando tecnologia.", textEn: "Aptitude to heal or help heal using technology.", points: ['tds'] }
    ]
  },
  {
    id: 8,
    text: "Num jogo de vídeo, tu és aquele que...",
    textEn: "In a video game, you are the one who...",
    options: [
      { text: "Analisa exaustivamente os status para otimizar os recursos.", textEn: "Thoroughly analyzes stats to optimize resources.", points: ['matd'] },
      { text: "Explora os menus de definições para tentar aldrabar o jogo.", textEn: "Explores settings menus to bypass game limits.", points: ['dsa', 'tdsi'] },
      { text: "Constrói bases espetaculares, seguras e sustentáveis.", textEn: "Builds spectacular, secure, and sustainable bases.", points: ['tdecs', 'tda'] },
      { text: "Se maravilha com a narrativa, lore ou é o líder da guild.", textEn: "Marvels at narrative, lore, or is the guild leader.", points: ['tde', 'pes'] }
    ]
  },
  {
    id: 9,
    text: "Qual a tua opinião sobre Inteligência Artificial?",
    textEn: "What is your opinion on Artificial Intelligence?",
    options: [
      { text: "Quero saber desenhar a matemática atrás desses algoritmos.", textEn: "I want to know how to design the math behind these algorithms.", points: ['tdia', 'matd'] },
      { text: "Como é que a podemos usar para ajudar as empresas a crescer?", textEn: "How can we use it to help companies grow?", points: ['tdg'] },
      { text: "Temos de legislar bem o seu impacto nos governos e cidadãos.", textEn: "We must legislate its impact on governments and citizens effectively.", points: ['pes'] },
      { text: "Pode ser um tutor excelente e revolucionar a educação.", textEn: "It can be an excellent tutor and revolutionize education.", points: ['tde'] }
    ]
  },
  {
    id: 10,
    text: "Finalmente... no fundo, qual achas que é o teu objetivo principal?",
    textEn: "Finally... deep down, what do you think is your main goal?",
    options: [
      { text: "Escrever bom código, criar infraestruturas e inovar em IT.", textEn: "Write good code, create infrastructures, and innovate in IT.", points: ['dsa', 'tda'] },
      { text: "Modelar a forma como aprendemos, cuidamos ou protegemos o nosso futuro.", textEn: "Shape how we learn, care, or protect our future.", points: ['tds', 'tdsi', 'tde'] },
      { text: "Estar na vanguarda da matemática, IA e otimização.", textEn: "Be at the forefront of mathematics, AI, and optimization.", points: ['matd', 'tdia'] },
      { text: "Estar no meio corporativo/sociedade, liderar e tomar decisões.", textEn: "Be in the corporate/society environment, lead, and make decisions.", points: ['pes', 'tdg', 'tdecs'] }
    ]
  }
];
