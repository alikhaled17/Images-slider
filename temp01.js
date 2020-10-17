
var sliderImages = Array.from(document.querySelectorAll('.slider-container img')),
    slidesCount = sliderImages.length,
    currentSlide = 1,
    sliderNumElement = document.getElementById('slider-num'),
    nextButton = document.getElementById('next'),
    prevButton = document.getElementById('prev');


var paginationElemment = document.createElement('ul');
paginationElemment.setAttribute('id', 'pagination-ul');

for ( i = 1; i <= slidesCount; i++) {
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index', i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElemment.appendChild(paginationItem);
    paginationItem.onclick = function () {
        notCheaker();
        currentSlide = this.textContent;
        cheaker();
    }
}

var indecators = document.getElementById('indectors');
indecators.appendChild(paginationElemment);


nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

function nextSlide() {
    'use strict';
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        notCheaker();
        currentSlide++;
        cheaker();
    }
}

function prevSlide() {

    'use strict';
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        notCheaker();
        currentSlide--;
        cheaker();
    }
}


function cheaker() {
    'use strict';
    sliderNumElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);
    sliderImages[currentSlide - 1].classList.add('active');
    paginationElemment.children[currentSlide - 1].classList.add('active');   
    if (currentSlide == 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (currentSlide == slidesCount) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}
cheaker();
function notCheaker() {
    'use strict';
    sliderImages[currentSlide - 1].classList.remove('active');
    paginationElemment.children[currentSlide - 1].classList.remove('active');
}