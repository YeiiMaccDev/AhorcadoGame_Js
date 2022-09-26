import '../css/phrase.css';


export const createPhraseToDisplay = (phrase) => {
    const divPhrase = document.getElementById('phrase-container');
    const ulPhrase = document.createElement('ul');

    ulPhrase.classList.add('phrase');

    let phraseHTML = ``;

    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === " ") {
            phraseHTML += `<li class="space"> </li>`;
        } else {
            phraseHTML += `<li class="hidden letter ">${phrase[i]}</li>`;
        }
    }
    
    ulPhrase.innerHTML = phraseHTML;
    divPhrase.append(ulPhrase);
}


