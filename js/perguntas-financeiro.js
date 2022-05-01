const perguntas_financeiro = () => {
  const button = document.getElementById("op1");

  const changeTextButton = () => {
    button.textContent = "teste";
  };

  button.addEventListener("click", changeTextButton);
};

perguntas_financeiro();
