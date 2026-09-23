// Base de dados das perguntas (Mitos e Verdades)
const questions = [
    {
        statement: "O camaleão muda de cor apenas para se camuflar no ambiente.",
        isTrue: false,
        explanation: "MITO! A mudança de cor serve principalmente para regular a temperatura corporal e se comunicar com outros camaleões."
    },
    {
        statement: "A luz do Sol demora cerca de 8 minutos para chegar à Terra.",
        isTrue: true,
        explanation: "VERDADE! Como a luz viaja a cerca de 300.000 km/s, ela leva aproximadamente 8 minutos e 20 segundos para percorrer a distância."
    },
    {
        statement: "Usar o celular enquanto ele carrega estraga a bateria imediatamente.",
        isTrue: false,
        explanation: "MITO! Os aparelhos modernos possuem circuitos de proteção. O maior vilão é o aquecimento excessivo."
    },
    {
        statement: "Os tubarões são imunes a todas as doenças conhecidas.",
        isTrue: false,
        explanation: "MITO! Tubarões podem sim desenvolver várias doenças, incluindo câncer."
    }
];

let currentIndex = 0;
let answered = false;

// Elementos do DOM
const card = document.getElementById('flashcard');
const cardText = document.getElementById('card-text');
const answerTitle = document.getElementById('answer-title');
const answerText = document.getElementById('answer-text');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');

// Carrega a pergunta atual na tela
function loadQuestion() {
    answered = false;
    card.classList.remove('flipped');
    feedback.classList.add('hidden');
    nextBtn.classList.add('hidden');

    const current = questions[currentIndex];
    cardText.innerText = current.statement;
    answerTitle.innerText = current.isTrue ? "VERDADEIRO!" : "MITO!";
    answerText.innerText = current.explanation;
}

// Checa a resposta do usuário
function checkAnswer(userChoice) {
    if (answered) return; // Evita múltiplos cliques
    answered = true;

    const current = questions[currentIndex];
    const isCorrect = (userChoice === current.isTrue);

    // Exibe mensagem com efeito retro/pixel
    feedback.classList.remove('hidden', 'correct', 'wrong');
    if (isCorrect) {
        feedback.innerText = "★ ACERTOU! +100 PTS ★";
        feedback.classList.add('correct');
    } else {
        feedback.innerText = "✖ ERROU! TRY AGAIN ✖";
        feedback.classList.add('wrong');
    }

    // Vira o card após um pequeno delay para revelar a resposta
    setTimeout(() => {
        card.classList.add('flipped');
        nextBtn.classList.remove('hidden');
    }, 600);
}

// Avança para o próximo card
function nextQuestion() {
    currentIndex = (currentIndex + 1) % questions.length;
    loadQuestion();
}

// Inicializa o jogo ao carregar a página
window.onload = loadQuestion;