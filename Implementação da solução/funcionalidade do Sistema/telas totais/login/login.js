/// Chave usada no localStorage para guardar os usuários
const STORAGE_KEY = "usuariosMediAgenda";

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
    const dataNascimento = document.getElementById("dataNascimento").value.trim();

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
      alert("Já existe um usuário cadastrado com esse e-mail.");
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

    alert("Cadastro realizado com sucesso!");

    // Limpar campos
    document.getElementById("nomecompleto").value = "";
    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmarSenha").value = "";
    document.getElementById("dataNascimento").value = "";
  });
}

// ---------- LOGIN (caso exista outra página) ---------- //

const botaoLogin = document.getElementById("btnLogin");

if (botaoLogin) {
  botaoLogin.addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById("emailLogin").value.trim().toLowerCase();
    const senha = document.getElementById("senhaLogin").value;

    if (!email || !senha) {
      alert("Informe e-mail e senha!");
      return;
    }

    const usuario = encontrarUsuarioPorEmail(email);

    if (!usuario || usuario.senha !== senha) {
      alert("E-mail ou senha inválidos.");
      return;
    }

    localStorage.setItem(
      "usuarioLogado",
      JSON.stringify({ nome: usuario.nome, email: usuario.email })
    );

    alert("Login realizado com sucesso!");
    // window.location.href = "menu.html";
  });
}
