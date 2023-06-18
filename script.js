var pergunta = document.getElementById("pergunta");
var quizContainer = document.getElementById("quiz-container");
var scorecard = document.getElementById("scorecard");
var opcao0 = document.getElementById("opcao0");
var opcao1 = document.getElementById("opcao1");
var opcao2 = document.getElementById("opcao2");
var opcao3 = document.getElementById("opcao3");
var opcao4 = document.getElementById("opcao4");
var next = document.querySelector(".next");
var pontos = document.getElementById("score");
var span = document.querySelectorAll("span");
var i = 0;
var score = 0;

//perguntas
let perguntaQuiz = [
  {
    pergunta:
      "Em Tinker Bell, quantas fadas compõem o grupo de amigas no 1° filme da série?",
    opcao: ["4 fadas", "5 fadas", "6 fadas", "7 fadas", "8 fadas"],
    resposta: "6 fadas",
  },
  {
    pergunta:
      "Quais as cores das fadas de Tinker Bell respectivamente: Sininho, Rosetta, Fawn, Iridessa, Silvermist, Vidia e Periwinkle?",
    opcao: [
      "Verde, rosa, amarelo, vermelho, cinza, roxo e branco",
      "Azul claro, roxo, verde, laranja, azul escuro, amarelo e vermelho",
      "Verde, rosa, laranja, amarelo, azul escuro, roxo e azul claro",
      "Dourado, roxo, amarelo, laranja, azul claro, verde e vermelho",
      "Verde, rosa, laranja, amarelo, cinza, roxo e azul claro",
    ],
    resposta: "Verde, rosa, laranja, amarelo, azul escuro, roxo e azul claro",
  },
  {
    pergunta:
      "No filme Os Incríveis, quais os nomes dos três irmãos filhos do casal principal?",
    opcao: [
      "Violeta, Gelado e Bochecha",
      "Flecha, Helena e Zezé",
      "Roberto, Viola e Flecha",
      "Violeta, Zezé e Flecha",
      "Gelado, Edna e Zezé",
    ],
    resposta: "Violeta, Zezé e Flecha",
  },
  {
    pergunta:
      "Quais os nomes dos 5 personagens principais do filme Divertidamente?",
    opcao: [
      "Alegria, Medo, Tristeza, Raiva e Nojinho",
      "Medo, Felicidade, Raiva, Amor e Fome",
      "Susto, Alegria, Choro, Riava e Amor",
      "Alegria, Susto, Emoção, Fominha e Tristeza",
      "Timidez, Raiva, Medo, Alegria e Nojo",
    ],
    resposta: "Alegria, Medo, Tristeza, Raiva e Nojinho",
  },
  {
    pergunta:
      "No filme Up! Altas Aventuras, como se chama o lugar em que Carl Fredricksen e sua esposa queriam se mudar?",
    opcao: [
      "Praia da Luz",
      "Paraíso dos Mares",
      "Paraíso das Águas",
      "Parque das Fontes",
      "Paraíso das Cachoeiras",
    ],
    resposta: "Paraíso das Cachoeiras",
  },
  {
    pergunta: "Qual foi a primeira princesa da Disney?",
    opcao: ["Aurora", "Branca de Neve", "Pocahontas", "Cinderela", "Mulan"],
    resposta: "Branca de Neve",
  },
  {
    pergunta: "Para onde os brinquedos vão no começo do filme Toy Story 3?",
    opcao: [
      "Creche",
      "Loja de doces",
      "Loja de brinquedos",
      "Mercado",
      "Baú de brinquedos",
    ],
    resposta: "Creche",
  },
  {
    pergunta: "Quais foram os três desejos de Aladim?",
    opcao: [
      "Casar com Jasmine, ser resgatado do incêndio e libertar Abu",
      "Se tornar um príncipe, se salvar de um afogamento e libertar o gênio",
      "Reviver Jasmine, se casar com ela e mais desejos",
      "Viajar pelo mundo, se tornar um rei e matar Sultão",
      "Dominar o mundo, casar com Jasmine e libertar o gênio",
    ],
    resposta:
      "Se tornar um príncipe, se salvar de um afogamento e libertar o gênio",
  },
  {
    pergunta: "Qual a estação do ano preferida do Olaf?",
    opcao: ["Primavera", "Outono", "Temperatura ambiente", "Verão", "Inverno"],
    resposta: "Verão",
  },
  {
    pergunta: "No desenho animado Encanto, qual era o dom de Dolores?",
    opcao: [
      "Superforça",
      "Criar flores",
      "Super velocidade",
      "Super audição",
      "Falar com os animais",
    ],
    resposta: "Super audição",
  },
];

//função que mostra as perguntas
function mostraPergunta() {
  for (let a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  pergunta.innerHTML = perguntaQuiz[i].pergunta;
  opcao0.innerHTML = perguntaQuiz[i].opcao[0];
  opcao1.innerHTML = perguntaQuiz[i].opcao[1];
  opcao2.innerHTML = perguntaQuiz[i].opcao[2];
  opcao3.innerHTML = perguntaQuiz[i].opcao[3];
  opcao4.innerHTML = perguntaQuiz[i].opcao[4];
  stat.innerHTML =
    "Pergunta" + " " + (i + 1) + " " + "de" + " " + perguntaQuiz.length;
}

//função para calcular a pontuação
function calcPontuacao(e) {
  if (e.innerHTML == perguntaQuiz[i].resposta && score < perguntaQuiz.length) {
    score = score + 1;
    document.getElementById(e.id).style.background = "#00FF7F";
  } else {
    let alternativas = document.querySelectorAll('span[id^="opcao"]');
    for (let j = 0; j < alternativas.length; j++) {
      if (alternativas[j].innerHTML == perguntaQuiz[i].resposta) {
        alternativas[j].style.background = "#00FF7F";
      } else if (alternativas[j].innerHTML == e.innerHTML) {
        alternativas[j].style.background = "#FF6347";
      }
    }
  }
  setTimeout(proximaPergunta, 700);
}

//função próxima pergunta
function proximaPergunta() {
  if (i < perguntaQuiz.length - 1) {
    i = i + 1;
    mostraPergunta();
  } else {
    pontos.innerHTML = score + "/" + perguntaQuiz.length;
    quizContainer.style.display = "none";
    scoreboard.style.display = "block";
  }
}

//botão para pular a pergunta
//OBS: talvez seja melhor tirar p não ter a opção de passar p próxima pergunta
next.addEventListener("click", proximaPergunta);

//função p reiniciar o quiz
function reiniciar() {
  location.reload();
}

//função que confere as resposta
function checkresposta() {
  let respostaQuiz = document.getElementById("respostaQuiz");
  let respostas = document.getElementById("respostas");
  respostaQuiz.style.display = "block";
  scoreboard.style.display = "none";
  for (let a = 0; a < perguntaQuiz.length; a++) {
    let list = document.createElement("li");
    list.innerHTML = perguntaQuiz[a].resposta;
    respostas.appendChild(list);
  }
}

mostraPergunta();
