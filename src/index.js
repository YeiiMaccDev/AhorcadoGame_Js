import { createPixelsImage } from './js/pixelsImage';
import { createPhraseToDisplay } from './js/phrase';
import { createKeyboard } from './js/keyboard';

import './styles.css';


createPixelsImage();

const arrInitialPhrases = ['alua latam', 'java script', 'java', 'python'];
const getRandomPhrase = (arrInitialPhrase) => {
    const randomPosition = Math.floor(Math.random() * arrInitialPhrase.length);
    return arrInitialPhrase[randomPosition];
}
const phrase = getRandomPhrase(arrInitialPhrases);
createPhraseToDisplay(phrase);
const keysLetters = document.querySelectorAll('.letter');


createKeyboard();
const keysButtons = document.querySelectorAll('.key');


const checkLeter = (phrase, letter) => {
    if (phrase.includes(letter)) {
        return true;
    }
    return false;
}

const showMatchedLetter = (keysLetters, letter) => {
    keysLetters.forEach( (key) => {
        if (key.innerText == letter) {
            key.classList.remove('hidden');
            key.classList.add('show');      
        }
    });
}

const partsBody = ['parts-head', 'parts-shirt', 'parts-pants', 'parts-arm1', 'parts-arm2', 'parts-leg1', 'parts-leg2']
const removeLife = () => {
    if(!partsBody.length) return false;

    const part = partsBody.shift();
    const partHTML = document.querySelector(`.${part}`);
    if (part == 'parts-shirt' || part == 'parts-pants') {
        partHTML.classList.add('show-clothes');
    } else {
        partHTML.classList.add('show-body');
    }
    return true;       
}

const gameWinner = () => {
    alert('Felicidades Gano el Juego!!!');
}

const gameOver = () => {
    alert('Game Over. Sigue intentándolo!!!');
}

const evaluateWinner = () => {
    const lettersHiddens = document.querySelectorAll('.hidden');
    if(!lettersHiddens.length) {
        gameWinner();
    }
}

const handleButtonInteraction = (keysLetters, btn) => {
    let lives = true;
    if (checkLeter(phrase, btn.innerText)) {
        btn.classList.add('chosen');
        showMatchedLetter(keysLetters, btn.innerText);
        evaluateWinner();
    } else {
        btn.classList.add('wrong');
        lives = removeLife();
    }
    btn.disabled = true;

    if (!lives) gameOver();
}




// Events
/* Adding an event listener to each button in the keyboard. */
keysButtons.forEach( (btn) => {
    btn.addEventListener('click', () => {
        handleButtonInteraction(keysLetters, btn);
    });
});