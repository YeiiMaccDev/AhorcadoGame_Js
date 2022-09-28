import '../css/pixelsImage.css';

let partsBody = [];


const createPixelsImage = () => {
    partsBody = ['parts-head', 'parts-shirt', 'parts-pants', 'parts-arm1', 'parts-arm2', 'parts-leg1', 'parts-leg2'];
    
    const divGameImage = document.getElementById('game-image');

    const imagePartsHTML = `
        <div class="parts">
                            
            <div class="parts-vertical"></div>
            <div class="parts-horizontal"></div>
            <div class="parts-horizontal"></div>
            <div class="parts-horizontal"></div>
            <div class="parts-blank"></div>

            <div class="parts-vertical"></div>
            <div class="parts-blank"></div>
            <div class="parts-blank"></div>
            <div class="parts-blank"></div>
            <div class="parts-blank"></div>

            <div class="parts-vertical"></div>
            <div class="parts-blank"></div>
            <div class="parts-blank"></div>
            <div class="parts-head"></div>
            <div class="parts-blank"></div>

            <div class="parts-vertical"></div>
            <div class="parts-blank"></div>
            <div class="parts-arm1"></div>
            <div class="parts-shirt"></div>
            <div class="parts-arm2"></div>

            <div class="parts-vertical"></div>
            <div class="parts-blank"></div>
            <div class="parts-blank"></div>
            <div class="parts-pants"></div>
            <div class="parts-blank"></div>
            
            <div class="parts-vertical"></div>
            <div class="parts-blank"></div>
            <div class="parts-leg1"></div>
            <div class="parts-blank"></div>
            <div class="parts-leg2"></div>

            <div class="parts-vertical"></div>
            <div class="parts-blank"></div>
            <div class="parts-blank"></div>
            <div class="parts-blank"></div>
            <div class="parts-blank"></div>

            <div class="parts-base"></div>
            <div class="parts-base"></div>
            <div class="parts-base"></div>
            <div class="parts-base"></div>
            <div class="parts-base"></div>
        </div>
    `;

    divGameImage.innerHTML = imagePartsHTML;

}

const removeLife = () => {
    if (!partsBody.length) return false;

    const part = partsBody.shift();
    const partHTML = document.querySelector(`.${part}`);
    if (part == 'parts-shirt' || part == 'parts-pants') {
        partHTML.classList.add('show-clothes');
    } else {
        partHTML.classList.add('show-body');
    }
    return true;
}


export {
    createPixelsImage,
    removeLife,
}
