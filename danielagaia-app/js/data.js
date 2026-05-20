// ================================================
//  DATA.JS — Conteúdo das semanas, pautas, calendário
// ================================================

const SEMANAS_DATA = {
  1: {
    tema: "Sua roupa te entrega ou te enterra?",
    mes: "Junho 2026",
    tarefas: [
      { dia: "Segunda", emoji: "📬", titulo: "Planning da semana", hoje: true,
        corpo: "Leia o briefing completo. Separe o look para gravar na terça — cor que te favorece, fundo limpo ou locação com significado. Responde o e-mail do Chefe até as 09h com: "Li. Semana 1 em andamento."" },
      { dia: "Terça", emoji: "🎬", titulo: "Gravar Reel + TikTok",
        corpo: "Tema: "3 erros de imagem que te fazem parecer menos competente"\n\nROTEIRO:\n[0–2s] "Se você chega preparada mas não te levam a sério — pode ser isso."\n[2–10s] Erro 1: Cores que apagam.\n[10–20s] Erro 2: Roupa sem intenção.\n[20–30s] Erro 3: Acessório ausente.\n[30–38s] "Imagem não é vaidade. É comunicação." + CTA: Salva e comenta.\n\nEdita à tarde. 80% bom = pronto para postar." },
      { dia: "Quarta", emoji: "📤", titulo: "Publicar Reel + TikTok",
        corpo: "Posta às 11h ou 19h (escolha um horário e mantenha sempre). Fica 30 minutos respondendo comentários — isso não é opcional. O algoritmo vê seu engajamento inicial." },
      { dia: "Quinta", emoji: "✍️", titulo: "Escrever blog",
        corpo: "Pauta: "O que sua roupa diz sobre você antes de você abrir a boca"\n\nEstrutura: gancho com situação real → o problema → 3 pilares (cor + silhueta + acessório) → CTA para Consultoria de Guarda-Roupa (R$499).\n\nMínimo 400 palavras. Você é jornalista — use essa voz." },
      { dia: "Sexta", emoji: "📱", titulo: "Stories do dia",
        corpo: "Escolha uma opção:\n\n(A) Bastidor: "Montando um look com intenção" — 3 a 4 stories\n(B) Caixinha: "Me manda sua maior dúvida sobre imagem profissional"\n(C) Compartilha o link do blog com frase de destaque" },
      { dia: "Sábado", emoji: "🖼️", titulo: "Post no feed",
        corpo: "Carrossel ou post estático. Sugestão: "3 looks para qualquer reunião de trabalho" — cada slide mostra 1 look com lista de peças. Legenda com pergunta. CTA: Salva." },
      { dia: "Domingo", emoji: "📊", titulo: "Análise + feedback",
        corpo: "Responde o e-mail do Chefe com:\n1. Quantos seguidores novos?\n2. Qual conteúdo teve mais alcance?\n3. Qual teve mais salvamentos?\n4. Recebeu mensagem sobre consultoria?\n5. O que foi difícil executar?" },
    ]
  },
  2: {
    tema: "Coloração pessoal no inverno",
    mes: "Junho 2026",
    tarefas: [
      { dia: "Segunda", emoji: "📬", titulo: "Planning + Enquete nos Stories",
        corpo: "Nos Stories hoje: enquete "Você sabe qual é a sua cartela de cores?" com Sim / Não. Isso aquece o tema da semana antes do Reel. Separe 2 peças de cores diferentes para gravar na terça." },
      { dia: "Terça", emoji: "🎬", titulo: "Gravar Reel + TikTok",
        corpo: "Tema: "Como saber se a cor te favorece em 10 segundos"\n\nROTEIRO:\n[0–2s] "Você sabe por que tem cores que te iluminam e outras que te apagam?"\n[2–15s] O teste: coloca na frente do rosto na luz natural. Pele luminosa = cor certa. Olheira/sombra = cor errada.\n[15–30s] "Isso tem nome: coloração pessoal."\n[30–42s] CTA: "Comenta 'quero saber minhas cores' que explico a consultoria."\n\nLegenda pronta: "Quantas vezes você comprou uma cor ótima na loja e em casa não funcionou? 🎨 #coloracaopessoal #danielagaia"" },
      { dia: "Quarta", emoji: "📤", titulo: "Reel + Carrossel",
        corpo: "Além do Reel, sobe um carrossel: "4 cartelas de cores — qual é a sua?"\n5 slides: Capa + 4 estações com tons de exemplo e 1 linha de descrição. Monte no Canva em 20 min.\nLegenda: "Qual dessas mais tem a ver com você? Salva para não esquecer 📌"" },
      { dia: "Quinta", emoji: "✍️", titulo: "Blog sobre coloração pessoal",
        corpo: "Pauta: "Coloração pessoal no outono/inverno — tudo que você precisa saber"\n600–800 palavras. Estrutura: o que é → as 4 estações → o que muda no inverno → CTA para Análise de Coloração (R$299). Vai ranquear no Google para 'coloração pessoal SP'." },
      { dia: "Sexta", emoji: "💰", titulo: "CTA direto — Consultoria de Coloração",
        corpo: "3 stories vendendo diretamente:\n(1) "Você sabe quais cores te fazem parecer cansada mesmo descansada?"\n(2) "A Análise de Coloração descobre exatamente suas cores. 2h, presencial SP, R$299+"\n(3) "Manda 'CORES' aqui no direct."\n\nSem vergonha. É o seu trabalho." },
      { dia: "Sábado", emoji: "🖼️", titulo: "Carrossel de autoridade",
        corpo: "\"Como a cor errada sabota sua imagem profissional\" — 4 a 6 slides explicando o impacto visual de cores inadequadas vs. cores da cartela. Use paletas de cor ou você mesma como exemplo." },
      { dia: "Domingo", emoji: "📊", titulo: "Análise semanal",
        corpo: "Responde o e-mail com:\n1. O carrossel ou o Reel teve mais salvamentos?\n2. Alguém mandou 'CORES' no direct?\n3. O que as pessoas mais comentaram?\n4. Você se sentiu mais segura para gravar comparado à semana 1?" },
    ]
  },
  3: {
    tema: "O blazer certo muda tudo",
    mes: "Junho 2026",
    tarefas: [
      { dia: "Segunda", emoji: "📬", titulo: "Planning + Caixinha nos Stories",
        corpo: "Stories hoje: "Me manda foto do seu look de trabalho. Vou responder os mais interessantes aqui essa semana." Separe 2 ou 3 blazers diferentes para o Reel de terça." },
      { dia: "Terça", emoji: "🎬", titulo: "Gravar Reel + TikTok",
        corpo: "Tema: "O blazer certo muda tudo — como escolher o seu"\n\nROTEIRO:\n[0–2s] "O blazer errado pode te fazer parecer que está usando o casaco da mãe."\n[2–12s] Blazer estruturado, ombro no lugar certo = silhueta alongada.\n[12–25s] Cor da cartela + comprimento certo para sua proporção.\n[25–38s] "Um blazer bem escolhido substitui o cinto, o colar e o sapato." CTA: "Você tem blazer que te favorece de verdade?"" },
      { dia: "Quarta", emoji: "📤", titulo: "Reel + Responde looks da audiência",
        corpo: "Posta o Reel. Depois dedica 15 min para responder nos Stories fotos que as seguidoras mandaram na segunda. Mesmo que só 2 ou 3 tenham mandado — responda todas. Isso incentiva mais." },
      { dia: "Quinta", emoji: "✍️", titulo: "Blog das 5 peças",
        corpo: "Pauta: "5 peças de inverno que toda profissional precisa ter"\nAs 5: blazer estruturado + calça alfaiataria + tricô de qualidade + bota cano médio + acessório quente intencional.\nPara cada peça: por que importa, como usar, o que evitar. CTA: Consultoria de Guarda-Roupa (R$499)." },
      { dia: "Sexta", emoji: "🖼️", titulo: "Carrossel no feed",
        corpo: '"3 looks com 5 peças" — cada slide: 1 look (trabalho / casual / evento) com lista de peças e dica da Dani. Altíssimo salvamento. Legenda: "Salva aqui que você vai usar isso amanhã de manhã 📌"' },
      { dia: "Sábado", emoji: "📱", titulo: "Stories de bastidor",
        corpo: "Mostra como você montou um dos looks do carrossel. Ou mostra o processo de escolher um look para um compromisso real seu. Humaniza — mostra que você passa pelo mesmo que as clientes." },
      { dia: "Domingo", emoji: "📊", titulo: "Análise semanal",
        corpo: "Responde com:\n1. A audiência mandou looks? Quantos?\n2. Qual post teve mais engajamento?\n3. Alguém perguntou sobre consultoria de guarda-roupa?\n4. Número de seguidores vs. início?" },
    ]
  },
  4: {
    tema: "Acessórios como protagonistas",
    mes: "Junho 2026",
    tarefas: [
      { dia: "Segunda", emoji: "📬", titulo: "Planning + Mood board",
        corpo: "Stories hoje: mood board de acessórios de inverno — lenços, broches, colares longos. Pergunta: "Você usa acessórios com intenção ou coloca qualquer coisa?" Separe 3 combinações para o Reel: look básico → com acessório = transformação." },
      { dia: "Terça", emoji: "🎬", titulo: "Gravar Reel + TikTok",
        corpo: 'Tema: "O acessório certo eleva qualquer look básico — 3 exemplos"\n\nROTEIRO:\n[0–2s] "Você não precisa de roupa nova. Você precisa de um acessório com intenção."\n[2–15s] Ex 1: blusa branca + calça preta → com colar = presença imediata.\n[15–28s] Ex 2: blazer neutro → com broche = personalidade e memória visual.\n[28–40s] Ex 3: tricô + lenço = sofisticação em 30 segundos. CTA: "Salva e me conta qual dos 3 vai testar."' },
      { dia: "Quarta", emoji: "📤", titulo: "Publicar Reel + TikTok",
        corpo: "Posta hoje. 30 min de engajamento ativo. Este Reel tem alto potencial de compartilhamento — se alguém marcar uma amiga, responda e agradeça. Isso amplifica o alcance organicamente." },
      { dia: "Quinta", emoji: "✍️", titulo: "Blog sobre acessórios",
        corpo: 'Pauta: "Lenços, broches e colares — como usar acessórios para construir imagem profissional". Contextualiza tendência OI 2026. Explica como usar cada tipo com intenção. CTA: Consultoria de Guarda-Roupa.' },
      { dia: "Sexta", emoji: "💰", titulo: "CTA — Consultoria de Guarda-Roupa",
        corpo: 'Stories de venda direta:\n(1) "Seu closet está cheio mas nada funciona junto?"\n(2) "A Consultoria de Guarda-Roupa resolve isso. 3h, presencial SP, R$499+"\n(3) "Manda \'CLOSET\' aqui no direct." Simples, direto.' },
      { dia: "Sábado", emoji: "🖼️", titulo: "Carrossel de fechamento do mês",
        corpo: '"Os melhores looks do mês" ou "O que aprendi sobre imagem em junho" — carrossel que resume os temas e serve de portfólio para novos seguidores.' },
      { dia: "Domingo", emoji: "📊", titulo: "Análise de JUNHO completa",
        corpo: "Análise do mês inteiro. Responde com:\n1. Seguidores em 01/06 vs. hoje\n2. Melhor Reel do mês\n3. Mensagens sobre consultoria recebidas\n4. Agendou alguma consultoria pelo conteúdo?\n5. O que quer mudar em julho?" },
    ]
  },
};

const PAUTAS_DATA = [
  {
    prioridade: "hot", tipo: "hot",
    semana: "Outono/Inverno 2026 · Alta prioridade",
    titulo: "Acessórios como protagonistas: lenços, broches e colares sobre tricô",
    desc: "Tendência confirmada nas passarelas internacionais. Consultora explica como usar para construir imagem profissional sem gastar muito. Alto salvamento.",
    tags: ["Reel", "Carrossel", "Blog"], tagTipos: ["gold", "blue", ""]
  },
  {
    prioridade: "trend", tipo: "trend",
    semana: "Comportamento · Qualquer semana",
    titulo: "Power Dressing 2026: ombreiras voltaram — e o que isso diz sobre você",
    desc: "Estética dos anos 80 com nova leitura. Ótimo ângulo para contextualizar tendência e orientar uso com personalidade e propósito profissional.",
    tags: ["Reel", "Blog"], tagTipos: ["gold", ""]
  },
  {
    prioridade: "hot", tipo: "personal",
    semana: "Pessoal · Quando sentir confortável",
    titulo: "Voltei ao trabalho depois do bebê — e minha imagem parou de funcionar",
    desc: "Sua história real. Altíssimo potencial emocional e de compartilhamento. Fala com mães em transição de carreira — segmento crescendo no Brasil.",
    tags: ["Reel pessoal", "Blog"], tagTipos: ["gold", ""]
  },
  {
    prioridade: "trend", tipo: "trend",
    semana: "TikTok 2026 · Alta performance",
    titulo: '"Chá de realidade": o que sua imagem comunica de verdade, sem filtro',
    desc: "Tendência dominante TikTok 2026 — autenticidade sem perfume. Daniela fala honestamente sobre imagem real vs. imagem projetada.",
    tags: ["TikTok", "Reel"], tagTipos: ["gold", "sage"]
  },
  {
    prioridade: "hot", tipo: "hot",
    semana: "Sazonal · Julho 2026",
    titulo: "Mala de viagem perfeita para julho: viaje com menos e chegue impecável",
    desc: "Alto volume de busca em julho. Cruza expertise de organização de mala com consultoria. Abre venda do serviço Mala Express (R$299).",
    tags: ["Reel", "Carrossel"], tagTipos: ["gold", "blue"]
  },
  {
    prioridade: "trend", tipo: "trend",
    semana: "Internacional · Julho",
    titulo: "O que executivas europeias usam para parecer poderosas sem parecer formais demais",
    desc: "Quiet luxury adaptado para a brasileira profissional. Daniela tem autoridade pela formação IED Milano. Público aspiracional corporativo.",
    tags: ["Reel", "Blog"], tagTipos: ["gold", ""]
  },
  {
    prioridade: "hot", tipo: "hot",
    semana: "Produto · Alta conversão",
    titulo: "Achadinhos de inverno: peças até R$200 que parecem custar o dobro",
    desc: "Formato 'achado' performa muito bem em Reels e TikTok. Alta viralização. Inclui lojas físicas em SP. Mostra curadoria sem precisar vender.",
    tags: ["Reel", "Stories"], tagTipos: ["gold", "sage"]
  },
  {
    prioridade: "trend", tipo: "personal",
    semana: "Autoridade · Qualquer semana",
    titulo: "O consultor de imagem de 2026 não é stylist — é estrategista visual",
    desc: "Posicionamento forte: diferencia o trabalho da Daniela do senso comum de 'escolher roupas'. Excelente para atrair cliente corporativo.",
    tags: ["Reel", "Blog", "LinkedIn"], tagTipos: ["gold", "", "blue"]
  },
];

const CAL_DATA = {
  "2026-06": {
    "2": [{ tipo:"brief", texto:"📬 Briefing S1" }, { tipo:"story", texto:"Planning nos Stories" }],
    "3": [{ tipo:"reel", texto:"Grava: 3 erros de imagem" }],
    "4": [{ tipo:"reel", texto:"📤 Reel + TikTok" }],
    "5": [{ tipo:"blog", texto:"Blog: O que sua roupa diz" }],
    "6": [{ tipo:"story", texto:"Stories: bastidor closet" }],
    "8": [{ tipo:"brief", texto:"📊 Análise S1 + briefing S2" }],
    "9": [{ tipo:"story", texto:"Enquete: cartela de cores?" }],
    "10": [{ tipo:"reel", texto:"Grava: cor em 10 segundos" }],
    "11": [{ tipo:"reel", texto:"📤 Reel + Carrossel 4 cartelas" }],
    "12": [{ tipo:"blog", texto:"Blog: Coloração no inverno" }],
    "13": [{ tipo:"story", texto:"CTA: Análise de Coloração" }],
    "15": [{ tipo:"brief", texto:"📊 Análise S2 + briefing S3" }],
    "16": [{ tipo:"story", texto:"Caixinha: me manda seu look" }],
    "17": [{ tipo:"reel", texto:"Grava: O blazer certo" }],
    "18": [{ tipo:"reel", texto:"📤 Reel + responde looks" }],
    "19": [{ tipo:"blog", texto:"Blog: 5 peças de inverno" }],
    "20": [{ tipo:"story", texto:"Carrossel: 3 looks 5 peças" }],
    "22": [{ tipo:"brief", texto:"📊 Análise S3 + briefing S4" }],
    "23": [{ tipo:"story", texto:"Mood board acessórios" }],
    "24": [{ tipo:"reel", texto:"Grava: acessório eleva tudo" }],
    "25": [{ tipo:"reel", texto:"📤 Reel + TikTok" }],
    "26": [{ tipo:"blog", texto:"Blog: lenços e broches" }],
    "27": [{ tipo:"story", texto:"CTA: Guarda-Roupa R$499" }],
    "29": [{ tipo:"brief", texto:"📊 Análise junho + julio S5" }],
  },
  "2026-07": {
    "6": [{ tipo:"story", texto:"Caixinha: erro ao comprar?" }],
    "7": [{ tipo:"reel", texto:"Grava: por que compra e não usa" }],
    "8": [{ tipo:"reel", texto:"📤 Reel + Carrossel checklist" }],
    "9": [{ tipo:"blog", texto:"Blog: O que é personal shopping" }],
    "10": [{ tipo:"story", texto:"Bastidor: dia de personal shopping" }],
    "12": [{ tipo:"brief", texto:"📊 Análise S5 + briefing S6" }],
    "13": [{ tipo:"story", texto:"Perdeu oportunidade por imagem?" }],
    "14": [{ tipo:"reel", texto:"Grava: imagem no LinkedIn" }],
    "15": [{ tipo:"reel", texto:"📤 Reel + TikTok" }],
    "16": [{ tipo:"blog", texto:"Blog: imagem corporativa autêntica" }],
    "17": [{ tipo:"story", texto:"Antes/depois consultoria corporativa" }],
    "19": [{ tipo:"brief", texto:"📊 Análise S6 + briefing S7" }],
    "20": [{ tipo:"story", texto:"Enquete: viaja em julho?" }],
    "21": [{ tipo:"reel", texto:"Grava: 7 looks com 10 peças" }],
    "22": [{ tipo:"reel", texto:"📤 Reel + CTA Mala Express" }],
    "23": [{ tipo:"blog", texto:"Blog: mala para viagem de negócios" }],
    "24": [{ tipo:"story", texto:"Carrossel: checklist de mala" }],
    "26": [{ tipo:"brief", texto:"📊 Análise S7 + briefing S8" }],
    "27": [{ tipo:"story", texto:"Bastidor: 2 meses de rotina" }],
    "28": [{ tipo:"reel", texto:"Grava: 5 coisas de posicionamento" }],
    "29": [{ tipo:"reel", texto:"📤 Reel + TikTok" }],
    "30": [{ tipo:"blog", texto:"Blog: o que mudou na minha imagem" }],
    "31": [{ tipo:"story", texto:"Agradecimento + convite agosto" }],
  }
};
