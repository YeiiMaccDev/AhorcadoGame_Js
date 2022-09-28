import '../css/keyboard.css';


const createKeyboard = () => {
    const divPhrase = document.getElementById('phrase-container');
    const divKeyboard = document.createElement('div');

    const keyboardHTML = `
        <div class="keyboard" id="keyboard">
            <div class="keyrow">
                <button class="key">q</button>
                <button class="key">w</button>
                <button class="key">e</button>
                <button class="key">r</button>
                <button class="key">t</button>
                <button class="key">y</button>
                <button class="key">u</button>
                <button class="key">i</button>
                <button class="key">o</button>
                <button class="key">p</button>
            </div>

            <div class="keyrow">
                <button class="key">a</button>
                <button class="key">s</button>
                <button class="key">d</button>
                <button class="key">f</button>
                <button class="key">g</button>
                <button class="key">h</button>
                <button class="key">j</button>
                <button class="key">k</button>
                <button class="key">l</button>
            </div>

            <div class="keyrow">
                <button class="key">z</button>
                <button class="key">x</button>
                <button class="key">c</button>
                <button class="key">v</button>
                <button class="key">b</button>
                <button class="key">n</button>
                <button class="key">m</button>
            </div>
        </div>
    `;

    divKeyboard.innerHTML = keyboardHTML;

    divPhrase.append(divKeyboard.lastElementChild);
}

const getKeysButtons  = () => document.querySelectorAll('.key');

export {
    createKeyboard,
    getKeysButtons,
}
