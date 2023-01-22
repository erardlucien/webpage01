'use strict';

let figureWrapper = document.querySelector('.figure-wrapper');
let figContainer = document.querySelectorAll('.fig-container');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let animationDuration = 400;
let iterationCounter = 1;
let index = 0;
let sizeFigureWrapper = figContainer.length;
figureWrapper.appendChild(figContainer[0].cloneNode(true));

function moveForward() {

    figureWrapper.animate([
        {
            transform: 'translateX(' + (-100 * index) + '%)'
        },
        {
            transform: 'translateX(' + (-100 * (index + 1)) + '%)'
        }
    ],
    {
        iterations: iterationCounter,
        duration: animationDuration
    }
    );

    ++index;

    figureWrapper.style.transform = 'translateX(' + (-100 * index) + '%)';

    if(index === sizeFigureWrapper) {
        index = 0;
    }

}

function moveBackward() {

    if(index === 0) {
        index = sizeFigureWrapper;
    }
    
    figureWrapper.animate([
        {
            transform: 'translateX(' + (-100 * index) + '%)'
        },
        {
            transform: 'translateX(' + (-100 * (index - 1)) + '%)'
        }
    ],
    {
        iterations: iterationCounter,
        duration: animationDuration
    }
    );

    --index;

    figureWrapper.style.transform = 'translateX(' + (-100 * index) + '%)';

}


rightArrow.addEventListener('click', moveForward);
leftArrow.addEventListener('click', moveBackward);