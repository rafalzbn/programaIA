
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acorda em um quarto desconhecido. Não há janelas, e apenas uma porta trancada. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Ficar calmo e tentar lembrar como chegou ali.",
                afirmacao: "Sua mente busca controle e lógica diante do desconhecido."
            },
            {
                texto: "Entrar em pânico e bater na porta repetidamente.",
                afirmacao: "Você tende a reagir emocionalmente diante de situações estressantes."
            }
        ]
    },
    {
        enunciado: "Ao conseguir sair, encontra duas estradas. Uma é clara e aberta; a outra é escura e fechada por árvores. Qual caminho escolhe?",
        alternativas: [
            {
                texto: "Caminho claro e aberto, pois prefere o seguro e previsível.",
                afirmacao: "Você valoriza segurança e clareza nas suas decisões."
            },
            {
                texto: "Caminho escuro e fechado, atraído pelo mistério e desafio.",
                afirmacao: "Você tem uma tendência aventureira e busca crescimento em desafios."
            }
        ]
    },
    {
        enunciado: "Durante a caminhada, uma pessoa precisa de ajuda, mas você está com pouco tempo. O que faz?",
        alternativas: [
            {
                texto: "Ajuda a pessoa, mesmo que isso atrase seus planos.",
                afirmacao: "Sua empatia e altruísmo guiam suas ações, mesmo sob pressão."
            },
            {
                texto: "Segue seu caminho, priorizando seus objetivos.",
                afirmacao: "Você é focado em suas metas e sabe estabelecer limites."
            }
        ]
    },
    {
        enunciado: "Você encontra um espelho que reflete não só seu rosto, mas seus medos mais profundos. Como reage?",
        alternativas: [
            {
                texto: "Encarar o reflexo e tentar entender esses medos.",
                afirmacao: "Você busca autoconhecimento e está disposto a enfrentar suas sombras."
            },
            {
                texto: "Desvia o olhar, preferindo não confrontar esses sentimentos.",
                afirmacao: "Você tende a evitar emoções desconfortáveis para manter sua estabilidade."
            }
        ]
    },
    {
        enunciado: "No fim da jornada, surge uma escolha: voltar para o conforto conhecido ou seguir rumo ao desconhecido. Qual escolhe?",
        alternativas: [
            {
                texto: "Voltar para o conforto, buscando paz e estabilidade.",
                afirmacao: "Você valoriza segurança emocional e prefere ambientes previsíveis."
            },
            {
                texto: "Seguir para o desconhecido, aberto a novas experiências.",
                afirmacao: "Você tem coragem para crescer e explorar novos horizontes."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu perfil psicológico revelado:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
