let slideIndexArray = [0, 0, 0]

function getClass(name) {
    return document.getElementsByClassName(name);
}

function hideAll(slides) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
}

function resetSpinnerOnLastImage(slides, index) {
    if (slideIndexArray[index] > slides.length) {
        slideIndexArray[index] = 1
    }
}

function removeActiveClass(dots) {
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
}

function changeImageEveryTwoSecond(slide) {
    return setTimeout(slide, 2000);
}

function showOnePictureWhenActive(slides, index) {
    slides[slideIndexArray[index] - 1].style.display = "block";
}

function activatesColorOnClassActive(dots, index) {
    dots[slideIndexArray[index] - 1].className += " active";
}

const spinners = [
    {
        slide: getClass("mySlideOne"),
        dots: getClass("dot"),
        index: 0
    },
    {
        slide: getClass("mySlideTwo"),
        dots: getClass("dot-two"),
        index: 1
    },
    {
        slide: getClass("mySlideThree"),
        dots: getClass("dot-three"),
        index: 2
    }
]

function choseSlideOne() {
    showSlide(0)
}

function choseSlideTwo() {
    showSlide(1)
}

function choseSlideThree() {
    showSlide(2)
}

function showSlide(indexZ) {
    let slides = spinners[indexZ].slide
    let dots = spinners[indexZ].dots
    let index = spinners[indexZ].index
    hideAll(slides)
    slideIndexArray[index]++;
    resetSpinnerOnLastImage(slides, index)
    removeActiveClass(dots)
    showOnePictureWhenActive(slides, index)
    activatesColorOnClassActive(dots, index)
    if (indexZ === 0) {
        changeImageEveryTwoSecond(choseSlideOne);
    } else if (indexZ === 1) {
        changeImageEveryTwoSecond(choseSlideTwo);
    } else if (indexZ === 2) {
        changeImageEveryTwoSecond(choseSlideThree);
    }
}

function triggerSlides(){
    for (let i = 0; i < spinners.length; i++) {
        showSlide(i)
    }
}

triggerSlides()
// showSlide(0)
// showSlide(1)
// showSlide(2)
//
//
// function showSlideOne() {
//     let slides = getClass("mySlideOne")
//     let dots = getClass("dot");
//     let index = 0
//     hideAll(slides)
//     slideIndexArray[index]++;
//     resetSpinnerOnLastImage(slides, index)
//     removeActiveClass(dots)
//     showOnePictureWhenActive(slides, index)
//     activatesColorOnClassActive(dots, index)
//     changeImageEveryTwoSecond(showSlideOne)
// }
//
// function showSlideTwo() {
//     let slides = getClass("mySlideTwo")
//     let dots = getClass("dot-two");
//     let index = 1
//     hideAll(slides)
//     slideIndexArray[index]++;
//     resetSpinnerOnLastImage(slides, index)
//     removeActiveClass(dots)
//     showOnePictureWhenActive(slides, index)
//     activatesColorOnClassActive(dots, index)
//     changeImageEveryTwoSecond(showSlideTwo)
// }
//
// function showSlideThree() {
//     let slides = getClass("mySlideThree")
//     let dots = getClass("dot-three");
//     let index = 2
//     hideAll(slides)
//     slideIndexArray[index]++;
//     resetSpinnerOnLastImage(slides, index)
//     removeActiveClass(dots)
//     showOnePictureWhenActive(slides, index)
//     activatesColorOnClassActive(dots, index)
//     changeImageEveryTwoSecond(showSlideThree)
// }
//
// // showSlideOne();
// // showSlideTwo();
// // showSlideThree();