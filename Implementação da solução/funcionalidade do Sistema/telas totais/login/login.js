/// Chave usada no localStorage para guardar os usuários
const STORAGE_KEY = "usuariosMediAgenda";
const SESSAO_KEY = "usuarioLogado";

// ---------- FUNÇÕES UTILITÁRIAS ---------- //

// Pega todos os usuários salvos
function getUsuarios() {
  const dados = localStorage.getItem(STORAGE_KEY);
  return dados ? JSON.parse(dados) : [];
}

// Salva a lista de usuários
function salvarUsuarios(usuarios) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
}

// Procura um usuário pelo e-mail
function encontrarUsuarioPorEmail(email) {
  const usuarios = getUsuarios();
  return usuarios.find((u) => u.email === email);
}

// ---------- SESSÃO (válida só enquanto a aba/navegador estiver aberto) ---------- //

function criarSessao(usuario) {
  // sessionStorage some ao fechar a aba ou navegador
  sessionStorage.setItem(
    SESSAO_KEY,
    JSON.stringify({
      nome: usuario.nome,
      email: usuario.email,
    })
  );
}

// Retorna a sessão se existir; senão, null
function pegarSessaoValida() {
  const dados = sessionStorage.getItem(SESSAO_KEY);
  if (!dados) return null;

  try {
    return JSON.parse(dados);
  } catch (e) {
    sessionStorage.removeItem(SESSAO_KEY);
    return null;
  }
}

// (Opcional) Função para logout, caso queira usar em outro botão/página
function logout() {
  sessionStorage.removeItem(SESSAO_KEY);
}

// ---------- FUNÇÃO: verificar força da senha ---------- //
function senhaForte(senha) {
  const temMaiuscula = /[A-Z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);
  const temSimbolo = /[^A-Za-z0-9]/.test(senha);
  const tamanhoMinimo = senha.length >= 6;

  return temMaiuscula && temNumero && temSimbolo && tamanhoMinimo;
}

// ---------- CADASTRO ---------- //

const botaoCadastrar = document.querySelector(
  ".principal__formulario button[type='submit']"
);

if (botaoCadastrar) {
  botaoCadastrar.addEventListener("click", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nomecompleto").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
    const dataNascimento = document
      .getElementById("dataNascimento")
      .value.trim();

    // Validação dos campos
    if (!nome || !email || !senha || !confirmarSenha || !dataNascimento) {
      alert("Preencha todos os campos!");
      return;
    }

    // Senha forte
    if (!senhaForte(senha)) {
      alert(
        "A senha deve ter no mínimo 6 caracteres, incluindo:\n- 1 letra maiúscula\n- 1 número\n- 1 símbolo"
      );
      return;
    }

    // Senhas iguais
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    // E-mail já usado
    if (encontrarUsuarioPorEmail(email)) {
      alert("Já existe um usuário cadastrado com esse e-mail. Faça login.");
      return;
    }

    // Criando usuário
    const usuarios = getUsuarios();
    const novoUsuario = {
      nome,
      email,
      senha,
      dataNascimento,
      criadoEm: new Date().toISOString(),
    };

    usuarios.push(novoUsuario);
    salvarUsuarios(usuarios);

    // Cria sessão (dura só até fechar a aba/navegador)
    criarSessao(novoUsuario);

    alert("Cadastro realizado com sucesso!");

    // Redireciona direto para o menu
    window.location.href = "../menu/menu.html";
  });
}

// ---------- LOGIN ---------- //

const botaoLogin = document.getElementById("btnLogin");

// Se já tiver sessão válida e a página for a de login, pula direto pro menu
const sessaoAtual = pegarSessaoValida();
if (sessaoAtual && botaoLogin) {
  window.location.href = "../menu/menu.html";
}

if (botaoLogin) {
  botaoLogin.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document
      .getElementById("emailLogin")
      .value.trim()
      .toLowerCase();
    const senha = document.getElementById("senhaLogin").value;

    if (!email || !senha) {
      alert("Informe e-mail e senha!");
      return;
    }

    const usuario = encontrarUsuarioPorEmail(email);

    if (!usuario) {
      alert("Usuário não encontrado. Faça seu cadastro.");
      return;
    }

    if (usuario.senha !== senha) {
      alert("Senha incorreta.");
      return;
    }

    // Cria/renova sessão (dura só até fechar a aba/navegador)
    criarSessao(usuario);

    alert("Login realizado com sucesso!");

    // Redireciona para a página de menu após o login aprovado
    window.location.href = "../menu/menu.html";
  });
}

// ver a senha (uma única função)
function toggleSenha(idCampo, elemento) {
  const input = document.getElementById(idCampo);
  const icone = elemento.querySelector("i");

  if (input.type === "password") {
    input.type = "text";
    icone.classList.remove("fa-eye");
    icone.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icone.classList.remove("fa-eye-slash");
    icone.classList.add("fa-eye");
  }
}

// Mostrar tela de login
function mostrarLogin() {
  document.getElementById("formCadastro").style.display = "none";
  document.getElementById("formLogin").style.display = "block";
  document.getElementById("tituloTela").innerText = "FAÇA SEU LOGIN";
}

// Voltar para tela de cadastro
function mostrarCadastro() {
  document.getElementById("formLogin").style.display = "none";
  document.getElementById("formCadastro").style.display = "block";
  document.getElementById("tituloTela").innerText = "CADASTRE-SE AQUI";
}

