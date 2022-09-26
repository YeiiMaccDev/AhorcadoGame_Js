import '../css/pixelsImage.css';

export const createPixelsImage = () => {
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
