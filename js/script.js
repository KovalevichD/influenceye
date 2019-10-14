const timelineBlock = document.getElementById('timelineBlock');
const clider = document.getElementById('clider');

timelineBlock.addEventListener('click', function (event) {
    let targetElement = event.target.classList.contains('span-radio') ? event.target.parentNode : event.target;
    
    const targetClassName = targetElement.className;
    const dataAttr = targetElement.getAttribute('data-label');
    const targetText = document.querySelector(`[data-text-timeline="${dataAttr}"]`);
    const targetImg = document.querySelector(`[data-img-timeline="${dataAttr}"]`);

    if (targetElement.classList.contains('timeline-item__title-text')) {
        removeClassOpenInText('text-expanded');
        removeClassActiveInLabel(targetClassName);
        removeClassOpenInPicture('technology-picture__img');

        if (!targetElement.classList.contains('active-green')) {
            targetElement.classList.add('active-green');
            
        }

        if (!targetText.classList.contains('opened')) {
            targetText.classList.add('opened');
        }

        if (!targetImg.classList.contains('opened')) {
            targetImg.classList.add('opened');
        }
    }
}, false)

clider.addEventListener('click', function (event) {
    if (event.target.className === "reviews-buttons__btn") {
        const targetButtonNumber = event.target.getAttribute('data-slider-btn');
        const targetReview = document.querySelector(`[data-review="${targetButtonNumber}"]`);
        console.log(event.target)
        removeClassOpenInReview('review');
        targetReview.classList.add('opened');
    }
}, false)

function removeClassOpenInText(className) {
    const arrOfTextElements = document.getElementsByClassName(className);

    for (let text of arrOfTextElements) {

        if (text.classList.contains('opened')) {
            text.classList.remove('opened');
        }
    }
}

function removeClassActiveInLabel(className) {
    const arrOfLabelElements = document.getElementsByClassName(className);

    for (let label of arrOfLabelElements) {

        if (label.classList.contains('active-green')) {
            label.classList.remove('active-green');
        }
    }
}

function removeClassOpenInPicture(className) {
    const arrOfImgElements = document.getElementsByClassName(className);

    for (let img of arrOfImgElements) {

        if (img.classList.contains('opened')) {
            img.classList.remove('opened');
        }
    }
}

function removeClassOpenInReview(className) {
    const arrOfReviews = document.getElementsByClassName(className);

    for (let review of arrOfReviews) {

        if (review.classList.contains('opened')) {
            review.classList.remove('opened');
        }
    }
}