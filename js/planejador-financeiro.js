const planejador_financeiro = () => {
  // selecao elementos
  const telaPrincipal = document.getElementById("planejamento-tela-principal");
  const telaPrincipalButton = document.getElementById(
    "planejamento-btn-calcular"
  );
  const telaPrincipalSalarioInput = document.getElementById("salario");

  const telaResultado = document.getElementById("planejamento-resultados");
  const telaResultado_50 = document.getElementById("planejamento-resultado-50");
  const telaResultado_30 = document.getElementById("planejamento-resultado-30");
  const telaResultado_20 = document.getElementById("planejamento-resultado-20");
  const telaResultadoCalcularNovamente = document.getElementById(
    "planejamento-btn-calcular-novamente"
  );

  // exibicao elementos
  const exibirTelaPrincipal = () => {
    telaPrincipal.style.display = "block";
  };

  const esconderTelaPrincipal = () => {
    telaPrincipal.style.display = "none";
  };

  const exibirTelaResultado = () => {
    telaResultado.style.display = "block";
  };

  const esconderTelaResultado = () => {
    telaResultado.style.display = "none";
  };

  // funcoes de funcionamento
  const calcularPlanejamentoFinanceiro = () => {
    const inputSalarioValue = telaPrincipalSalarioInput.value;

    if (inputSalarioValue === "") {
      return false;
    }
    const inputValueNotacaoPonto = inputSalarioValue.replace(",", ".");
    const inputValueNumber = parseFloat(inputValueNotacaoPonto);

    if (isNaN(inputValueNumber)) {
      return false;
    }

    const resultado50 = inputValueNumber / 2;
    const resultado30 = inputValueNumber * 0.3;
    const resultado20 = inputValueNumber * 0.2;

    return {
      resultado50,
      resultado30,
      resultado20,
    };
  };

  const definirTelaResultado = () => {
    if (!calcularPlanejamentoFinanceiro()) {
      return;
    }

    const { resultado50, resultado30, resultado20 } =
      calcularPlanejamentoFinanceiro();

    telaResultado_50.innerText = `Use R$${resultado50.toFixed(2)} (50%)`;
    telaResultado_30.innerText = `Use R$${resultado30.toFixed(2)} (30%)`;
    telaResultado_20.innerText = `Use R$${resultado20.toFixed(2)} (20%)`;

    esconderTelaPrincipal();
    exibirTelaResultado();
  };

  const reiniciar = () => {
    esconderTelaResultado();
    exibirTelaPrincipal();
    telaPrincipalSalarioInput.value = "";
  };

  // eventos
  telaPrincipalButton.addEventListener("click", definirTelaResultado);
  telaResultadoCalcularNovamente.addEventListener("click", reiniciar);
};
planejador_financeiro();
