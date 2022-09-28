import '../css/phrase.css';

const  getKeysLetters = () =>  document.querySelectorAll('.letter');

const createPhraseToDisplay = (phrase) => {
    const divPhrase = document.getElementById('phrase-container');
    const ulPhrase = document.createElement('ul');

    ulPhrase.classList.add('phrase');

    let phraseHTML = ``;

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === " ") {
            phraseHTML += `<li class="space"> </li>`;
        } else {
            phraseHTML += `<li class="letter hidden">${phrase[i]}</li>`;
        }
    }
    
    ulPhrase.innerHTML = phraseHTML;
    divPhrase.append(ulPhrase);
}

export {
    createPhraseToDisplay,
    getKeysLetters,
}
