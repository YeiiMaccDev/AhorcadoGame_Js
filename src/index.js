import { createPixelsImage, removeLife } from './js/pixelsImage';
import { createPhraseToDisplay, getKeysLetters } from './js/phrase';
import { createKeyboard, getKeysButtons } from './js/keyboard';



import './styles.css';

//  Global variables
const btnStart = document.querySelector('#btn-start');
const btnNewPhrase = document.querySelector('#btn-new-phrase');
const btnBackHome = document.querySelector('#btn-back-home');
const btnFormNewPhrase = document.querySelector('#btn-form-new-phrase');
const inputPhrase = document.querySelector('#input-phrase');
const pInputPhraseMessage = document.querySelector('#input-phrase-message');
const displayStart = document.querySelector('#start-section');
const displayForm = document.querySelector('#form-section');
const displayGame = document.querySelector('#game-section');
displayStart.style.display = 'flex';

// NodeList elements
let keysLetters = [];
let keysButtons = [];



//  Start Phrase
let phrase = '';
const arrInitialPhrases = [
    'java',
    'python',
    'java script',
    'alura latam',
    'desarrollo web',
    'desarrollo movil',
    'desarrollo de sofware',
    'inteligencia artificial'
];

const getRandomPhrase = (arrInitialPhrase) => {
    const randomPosition = Math.floor(Math.random() * arrInitialPhrase.length);
    return arrInitialPhrase[randomPosition];
}

const checkLeter = (phrase, letter) => {
    if (phrase.includes(letter)) {
        return true;
    }
    return false;
}


const showMatchedLetter = (keysLetters, letter) => {
    keysLetters.forEach((key) => {
        if (key.innerText == letter) {
            key.classList.remove('hidden');
            key.classList.add('show');
        }
    });
}

const hideAndShowSection = (hideSection, showSection) => {
    hideSection.style.display = 'none';
    showSection.style.display = 'flex';
}

const winnerAndLoserBackground = (winner) => {
    if (winner) {
        displayStart.classList.remove('start-loser');
        displayStart.classList.add('start-winner');
    } else {
        displayStart.classList.remove('start-winner');
        displayStart.classList.add('start-loser');
    }
}

const theEndGame = (winner) => {
    const divMessage = document.getElementById('start-message');

    const messageWinnerHTML = `
            <h1 class="theEnd-title">Felicidades gano el juego!!!</h1>
            <p class="theEnd-description"> Una palabra descubierta, eres genial para adivinar, ¿vamos a por una nueva?</p>'
        `;
    const messageLoserHTML = `                         
            <h1 class="theEnd-title">Sigue intentándolo!!!</h1>
            <p class="theEnd-description">La frase es: <strong>" ${phrase} "</strong></p>
            <p class="theEnd-description"> Una palabra difícil, la próxima vez tendrás éxito, ¿vamos a por una nueva?</p>' 
        `;

    divMessage.innerHTML = (winner) ? messageWinnerHTML : messageLoserHTML;

    winnerAndLoserBackground(winner);
}

const gameWinner = () => {
    theEndGame(true);
    hideAndShowSection(displayGame, displayStart);
}

const gameOver = () => {
    theEndGame(false);
    hideAndShowSection(displayGame, displayStart);
}

const evaluateWinner = (lives) => {
    if (!lives) gameOver();
    const lettersHiddens = document.querySelectorAll('.hidden');
    if (!lettersHiddens.length) {
        gameWinner();
    }
}

const handleButtonInteraction = (keysLetters, btn) => {
    let lives = true;
    if (checkLeter(phrase, btn.innerText)) {
        btn.classList.add('chosen');
        showMatchedLetter(keysLetters, btn.innerText);        
    } else {
        btn.classList.add('wrong');
        lives = removeLife();
    }
    btn.disabled = true;
    evaluateWinner(lives);   
}










const startGame = () => {
    document.getElementById('phrase-container').innerHTML = '';

    phrase = getRandomPhrase(arrInitialPhrases);
    createPixelsImage();
    createPhraseToDisplay(phrase);
    createKeyboard();
    keysLetters = getKeysLetters();
    keysButtons = getKeysButtons();

    addEventListenerKeyboard(keysButtons, keysLetters);
}






// Events
/* Adding an event listener to each button in the keyboard. */

const addEventListenerKeyboard = (keysButtons, keysLetters) => {
    keysButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            handleButtonInteraction(keysLetters, btn);
        });
    });
}

btnStart.addEventListener('click', () => {
    startGame();
    hideAndShowSection(displayStart, displayGame);
});

btnNewPhrase.addEventListener('click', () => {
    hideAndShowSection(displayStart, displayForm);
});


btnFormNewPhrase.addEventListener('click', (event) => {
    event.preventDefault();
    try {
        const newPhrase = (inputPhrase.value).toLowerCase();
        if (newPhrase.length >= 4 && newPhrase.length <= 25) {
            arrInitialPhrases.push(newPhrase);
            inputPhrase.value = '';
            pInputPhraseMessage.classList.remove('input-phrase-message-error');
            alert(`Nueva frase: ${newPhrase}`);
            hideAndShowSection(displayForm, displayStart);
        } else {
            pInputPhraseMessage.classList.add('input-phrase-message-error');
        }
    } catch (error) {
        pInputPhraseMessage.classList.add('input-phrase-message-error');
    }

});


btnBackHome.addEventListener('click', () => {
    inputPhrase.value = '';
    pInputPhraseMessage.classList.remove('input-phrase-message-error');
    hideAndShowSection(displayForm, displayStart);
});