
  (function () {
    const SESSAO_KEY = "usuarioLogado";

    const dadosSessao = sessionStorage.getItem(SESSAO_KEY);

    // Se não tiver sessão, manda pra tela de login
    if (!dadosSessao) {
      window.location.href = "../login/telalogin.html";
      return;
    }
  })();

