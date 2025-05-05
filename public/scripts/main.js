const input = document.querySelector("#input-message");
const form = document.querySelector(".chat-input");
const messagesContainer = document.querySelector(".chat-messages");
const logo = document.querySelector(".logo");

function adicionarMensagem(texto, tipo) {
  const msg = document.createElement("div");
  msg.classList.add("message", `${tipo}-message`);
  msg.innerHTML = texto;
  messagesContainer.appendChild(msg);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

const mensagemBoasVindas = `Olá! 👋 Meu nome é FuriaBOT, o assistente oficial dos fãs da FURIA! 🐆
Digite "ajuda" a qualquer momento para ver o que você pode perguntar!`;

const sugestoes = `
📌 Exemplos de perguntas que você pode fazer:
• Próximo jogo
• Fundadores da FURIA
• Quantos títulos a FURIA tem?
• Curiosidades da FURIA
• Redes sociais da FURIA
• Ranking mundial
• História da FURIA
• Elenco atual
• Horários dos jogos
`;

function responder(perguntaOriginal) {
  const pergunta = normalizarTexto(perguntaOriginal);
  let resposta = "";

  if (pergunta.includes("ola") || pergunta.includes("oi") || pergunta.includes("bom dia") || pergunta.includes("boa tarde") || pergunta.includes("boa noite")) {
    resposta = `Olá! Eu sou o FuriaBOT, o seu assistente oficial sobre a FURIA Esports! 🔥<br><br>Me pergunte sobre títulos, elenco, próximos jogos, curiosidades e mais.<br><br>Dica: digite "ajuda" para ver tudo o que posso responder.`;

  } else if (pergunta.includes("ajuda") || pergunta.includes("comandos")) {
    resposta = `📌 Você pode me perguntar sobre:<br>• Próximo jogo<br>• Títulos<br>• Elenco atual<br>• História da FURIA<br>• Redes sociais<br>• Curiosidades<br>• Fundadores<br><br>Tente algo como: "Qual o próximo jogo?" ou "Fale sobre os títulos da FURIA."`;

  } else if (pergunta.includes("proximo jogo")) {
    resposta = `O próximo jogo da FURIA será anunciado em breve nos canais oficiais! 👀<br>Fique de olho em <a href="https://www.furia.gg" target="_blank">furia.gg</a> ou no Instagram <a href="https://www.instagram.com/furiagg" target="_blank">@furiagg</a> para não perder nada.`;

  } else if (pergunta.includes("titulo") || pergunta.includes("campeonato") || pergunta.includes("conquista")) {
    resposta = `A FURIA já conquistou diversos títulos importantes! 💥<br>No CS:GO, venceu torneios como:<br>• DreamHack Open Summer 2020<br>• ESL Pro League NA (Season 12)<br>• Elisa Masters Espoo 2022<br><br>A equipe também compete com excelência em outros games como Valorant, League of Legends e até no xadrez! Uma verdadeira potência dos esports! 🏆`;

  } else if (pergunta.includes("elenco") || pergunta.includes("jogadores")) {
    resposta = `O elenco da FURIA no CS:GO tem jogadores incríveis que representam o Brasil com garra! 🐆<br>Entre os nomes mais marcantes estão: KSCERATO, yuurih, arT, chelo e FalleN (dependendo da data, o elenco pode mudar).<br>Esses caras são pura adrenalina dentro do servidor!`;

  } else if (pergunta.includes("historia") || pergunta.includes("origem")) {
    resposta = `A FURIA foi fundada em 2017 por Jaime "raizen" Pádua e André Akkari, com a missão de revolucionar os esports no Brasil.<br><br>Com foco em performance, identidade forte e inovação, a FURIA se destacou mundialmente no CS:GO e expandiu para diversas modalidades.<br>Hoje, é uma das organizações mais respeitadas e queridas do planeta! 💜🖤`;

  } else if (pergunta.includes("curiosidade") || pergunta.includes("sabia")) {
    resposta = `Você sabia que a FURIA foi a primeira organização brasileira a abrir uma gaming house nos Estados Unidos? 🏠🇺🇸<br><br>Além disso, eles têm um estilo de jogo super agressivo que virou marca registrada, conquistando torcedores no mundo todo!`;

  } else if (pergunta.includes("fundador") || pergunta.includes("criador")) {
    resposta = `A FURIA foi fundada por Jaime Pádua e André Akkari em 2017.<br>O Akkari é um jogador de pôquer muito conhecido, e o Jaime trouxe a visão empresarial. Juntos, criaram uma das marcas mais fortes do cenário!`;

  } else if (pergunta.includes("sociais") || pergunta.includes("social") || pergunta.includes("instagram") || pergunta.includes("twitter") || pergunta.includes("twitch")
  ) {
    resposta = `Claro! Aqui estão as redes sociais da FURIA:<br><br>` +
      `<a href="https://www.instagram.com/furiagg" target="_blank">📸 Instagram</a><br>` +
      `<a href="https://www.twitch.tv/furiagg" target="_blank">🎮 Twitch</a><br>` +
      `<a href="https://www.linkedin.com/company/furiagg/?originalSubdomain=br" target="_blank">💼 LinkedIn</a><br>` +
      `<a href="https://www.furia.gg/" target="_blank">🌐 Site oficial</a>`;
  }
  

  adicionarMensagem(resposta, "bot");
}

window.addEventListener("DOMContentLoaded", () => {
  adicionarMensagem(mensagemBoasVindas, "bot");
  setTimeout(() => adicionarMensagem(sugestoes, "bot"), 500);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const texto = input.value.trim();
  if (texto) {
    adicionarMensagem(texto, "user");
    responder(texto);
    input.value = "";
  }
});

logo.addEventListener("mouseenter", () => {
  logo.style.animation = "none";
  logo.offsetHeight;
  logo.style.animation = "attack 1s ease-in-out";
});
