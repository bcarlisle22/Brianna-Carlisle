
// show or hide on button click 01

const divContainer = document.querySelector ('#linksandinfo');
let isClicked = true;


function showHide(){
    if(isClicked){
        divContainer.style.display = 'block';
        isClicked = false;
    }else{
        divContainer.style.display ='none';
        isClicked = true;
}
}


// // rotate on click button  

// let divSign = document.getElementById ('#plussign');

// function rotatePlus(){
//     if(isClicking){
//         divSign.style.transform = 'rotate(90deg)';
//         isClicking = false;
//     }else{
//         divSign.style.transform = 'rotate(-90deg)';
//         isClicking = true;
//     }
// }

// show or hide button 02

const clickPlus = document.querySelector ('#linksandinfotwo');

let isClickedtwo =  true;

function showHidetwo(){
    if(isClickedtwo){
        clickPlus.style.display ='block';
        isClickedtwo = false;
    }else{
        clickPlus.style.display ='none';
        isClickedtwo = true;
    }
}
// show or hide button 03

const clickPlustwo = document.querySelector ('#linksandinfothree');

let isClickedthree = true;

function showHidethree(){
    if(isClickedthree){
        clickPlustwo.style.display='block';
        isClickedthree = false;
    }else{
        clickPlustwo.style.display='none';
        isClickedthree = true;
    }
}

// show or hide button 04 

const clickPlusthree = document.querySelector('#linksandinfofour');
let isClickedfour = true;

function showHidefour(){
    if(isClickedfour){
        clickPlusthree.style.display ='block';
        isClickedfour = false;
    }else{
        clickPlusthree.style.display ='none';
        isClickedfour = true;
    }
}

// show or hide button 05

const clickPlusFive = document.querySelector('#linksandinfofive');

let isClickedFive = true;

function showHidefive(){
    if(isClickedFive){
        clickPlusFive.style.display='block';
        isClickedFive = false;
    } else{
        clickPlusFive.style.display='none';
        isClickedFive = true;
    }
}

// show or hide button 06


const clickPlusSix = document.querySelector('#linksandinfosix');

let isClickedSix = true;

function showHidesix(){
    if(isClickedSix){
        clickPlusSix.style.display='block';
        isClickedSix = false;
    } else{
        clickPlusSix.style.display='none';
        isClickedSix = true;
    }
}


