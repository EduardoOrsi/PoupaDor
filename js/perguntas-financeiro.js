const perguntas_financeiro = () => {
  // seleção dos elementos
  const TelaInicialSection = document.getElementById("tela-inicial");
  const TelaInicialButton = document.getElementById("iniciar-teste-btn");

  const PerguntasSection = document.getElementById("form-pergunta");
  const PerguntasSectionH3 = document.getElementById("form-pergunta-h3");
  const PerguntasSectionH2 = document.getElementById("form-pergunta-h2");
  const PerguntasSectionButtonAlternativa01 = document.getElementById("op1");
  const PerguntasSectionButtonAlternativa02 = document.getElementById("op2");
  const PerguntasSectionButtonAlternativa03 = document.getElementById("op3");

  const ResultadoSection = document.getElementById("tela-resultado");
  const ResultadoSectionPerfilH3 = document.getElementById("perfil-h3");
  const ResultadoSectionPerfilDescricaoP =
    document.getElementById("perfil-descricao-p");
  const ResultadoSectionButtonReiniciar =
    document.getElementById("reiniciar-btn");

  // exibição dos elementos
  const exibirTelaInicialSection = () => {
    TelaInicialSection.style.display = "block";
  };
  const esconderTelaInicialSection = () => {
    TelaInicialSection.style.display = "none";
  };
  const exibirPerguntasSection = () => {
    PerguntasSection.style.display = "block";
  };
  const esconderPerguntasSection = () => {
    PerguntasSection.style.display = "none";
  };
  const exibirResultadoSection = () => {
    ResultadoSection.style.display = "block";
  };
  const esconderResultadoSection = () => {
    ResultadoSection.style.display = "none";
  };

  //Funções do jogo de perguntas
  const iniciarJogoPerguntas = () => {
    esconderTelaInicialSection();
    exibirPerguntasSection();
    passarRodada();
  };

  //Função funcionamento do jogo de perguntas - passagem de rodadas
  const perguntas = [
    "O que você ganha por mês é suficiente para arcar com os seus gastos?",
    "Você tem conseguido pagar suas despesas em dia e à vista?",
    "Você realiza seu orçamento financeiro mensalmente?",
    "Você consegue fazer algum tipo de investimento?",
    "Como você planeja a sua aposentadoria?",
    "O que você entende sobre ser Independente Financeiramente?",
    "Você sabe quais são seus sonhos e objetivos de curto, médio e longo prazos?",
    "Se um imprevisto alterasse a sua situação financeira, qual seria a sua reação?",
    "Se a partir de hoje você não recebesse mais seu ganho, por quanto tempo você conseguiria manter seu atual padrão de vida?",
    "Quando você decide comprar um produto, qual é a sua atitude?",
  ];

  const respostasAlternativa01 = [
    "Consigo pagar minhas contas e ainda guardo mais 10% dos meus ganhos todo mês",
    "Pago em dia, à vista e, em alguns casos, com bons descontos",
    "Faço periodicamente e comparo o orçado com o realizado",
    "Utilizo mais de 10% do meu ganho em linhas de investimentos, que variam de acordo com os meus sonhos",
    "Tenho planos alternativos de previdência privada para garantir minha segurança financeira",
    "Que posso trabalhar por prazer e não por necessidade",
    "Sei quais são, quanto custam e por quanto tempo terei que guardar dinheiro para realizá-los",
    "Faria um bom diagnóstico financeiro, registrando o que ganho e o que gasto, além dos meus investimentos e dívidas, se os tiverem",
    "Conseguiria fazer tudo o que faço por 10 anos ou mais",
    "Planejo uma forma de investimento para comprar à vista e com desconto",
  ];

  const respostasAlternativa02 = [
    "É suficiente, mas não sobra nada",
    "Quase sempre, mas tenho que parcelar as compras de maior valor",
    "Somente registro o realizado, sem analisar os gastos",
    "Quando sobra dinheiro, invisto, normalmente, na poupança",
    "Contribuo para a previdência social, sei que preciso de reserva extra, mas não consigo poupar",
    "Que posso ter dinheiro para viver bem o dia a dia",
    "Tenho muitos sonhos e sei quanto custam, mas não sei como realizá-los",
    "Cortaria despesas e gastos desnecessários",
    "Manteria o meu padrão de vida por, no máximo, um ano",
    "Parcelo dentro do meu orçamento",
  ];
  const respostasAlternativa03 = [
    "Gasto todo o meu dinheiro e ainda uso o limite de cheque especial ou peço emprestado para parentes e amigos",
    "Sempre parcelo meus compromissos e utilizo linhas de crédito como cheque especial, cartão de crédito e crediário",
    "Não faço o meu orçamento financeiro",
    "Nunca sobra dinheiro para esse tipo de ação",
    "Não contribuo para a previdência social e nem para a privada",
    "Que posso curtir a vida intensamente e não pensar no futuro",
    "Sempre acabo deixando os meus sonhos e objetivos para o futuro, porque não consigo guardar dinheiro para eles",
    "Não saberia por onde começar e teria medo de encarar a minha verdadeira situação financeira",
    "Não conseguiria me manter nem por alguns meses",
    "Compro e depois me preocupo como vou pagar",
  ];

  let rodada = 0;

  const passarRodada = () => {
    if (rodada === perguntas.length) {
      definirPerfil();
      esconderPerguntasSection();
      exibirResultadoSection();
      return;
    }

    PerguntasSectionH3.innerText = `Pergunta ${rodada + 1} / 10`;
    PerguntasSectionH2.innerText = perguntas[rodada];
    PerguntasSectionButtonAlternativa01.innerText =
      respostasAlternativa01[rodada];
    PerguntasSectionButtonAlternativa02.innerText =
      respostasAlternativa02[rodada];
    PerguntasSectionButtonAlternativa03.innerText =
      respostasAlternativa03[rodada];
    rodada++;
  };

  let pontosTotal = 0;

  const selecionarResposta01 = () => {
    pontosTotal += 10;
    passarRodada();
  };
  const selecionarResposta02 = () => {
    pontosTotal += 5;
    passarRodada();
  };
  const selecionarResposta03 = () => {
    passarRodada();
  };

  const definirPerfil = () => {
    let perfil = "";
    let descricao = "";

    if (pontosTotal >= 0 && pontosTotal <= 40) {
      perfil = "Endividado";
      descricao =
        "É preciso fazer um diagnóstico financeiro, saber quanto ganha, com o que gasta, descrever e detalhar todos os credores e os valores das dívidas. Mas, atenção, não procure o credor para fazer acordo no primeiro momento; caso ele venha lhe procurar, diga que você está se organizando financeiramente, sabe que deve e pagará quando e como puder.";
    }

    if (pontosTotal >= 45 && pontosTotal <= 65) {
      perfil = "Equilibrado Financeiramente";
      descricao =
        "Pode parecer que tudo está em plena ordem. O fato de não ter dívidas ou, se as tiver, estarem controladas não pode ser objeto de tranquilidade. Isso porque você não criou o hábito de guardar parte do dinheiro que ganha e, consequentemente, quase não consegue acumular reservas financeiras.";
    }

    if (pontosTotal >= 70 && pontosTotal <= 100) {
      perfil = "Investidor";
      descricao =
        "Parabéns, você está no caminho certo! O hábito de poupar é o meio para se tornar uma pessoa sustentável financeiramente. É preciso proteger, poupar e guardar parte do dinheiro que passa por suas mãos, pois é por meio dele que você realizará seus sonhos e objetivos.";
    }

    ResultadoSectionPerfilH3.innerText = perfil;
    ResultadoSectionPerfilDescricaoP.innerText = descricao;
  };

  const reiniciarJogoPeguntas = () => {
    esconderResultadoSection();
    exibirTelaInicialSection();
    rodada = 0;
    pontosTotal = 0;
  };

  // eventos

  TelaInicialButton.addEventListener("click", iniciarJogoPerguntas);

  PerguntasSectionButtonAlternativa01.addEventListener(
    "click",
    selecionarResposta01
  );
  PerguntasSectionButtonAlternativa02.addEventListener(
    "click",
    selecionarResposta02
  );
  PerguntasSectionButtonAlternativa03.addEventListener(
    "click",
    selecionarResposta03
  );

  ResultadoSectionButtonReiniciar.addEventListener(
    "click",
    reiniciarJogoPeguntas
  );
};

perguntas_financeiro();
