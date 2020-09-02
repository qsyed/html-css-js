const iconSpace = document.querySelector('.icons');
const instructionSpace = document.querySelector('.instructions');


let level = 0;
let icons;
let clickCount = 0;
let timeoutId;



const failSpace = document.querySelector('.fail-space')

failSpace.addEventListener('click', failScene);


function startGame(){
    level = 1;
    nextScene();
}

function drawScene(level) {
    mapIcons(level);
    mapInstructions(level);
}

function playScene() {
    if (scene[level].start) {
        scene[level].start();
    }

    icons = document.querySelectorAll('i');
    let iconsArr = [...icons];
    iconsArr.forEach(function (icon, indx) {
        icon.addEventListener('click', function () {
            check(icon, indx);
        })
    })
}

function nextScene() {
    clearIcons();
    clearInstruction();
    drawScene(level);
    clickCount = 0;
    playScene();
}

function check(icon, indx) {
    let answer = scene[level].answer[clickCount];
    let clicksNeeded = scene[level].answer.length;
    if (indx === answer) {
        clickCount++
        scene[level].main(icon, indx);
        if (clickCount === clicksNeeded) {
            if (scene[level].finish) {
                scene[level].finish();
            } else {
                console.log('scene complete');
                level++
                nextScene();
            }

        }
    } else {
        failScene();
    }
}








function clearIcons() {
    while (iconSpace.firstElementChild) {
        iconSpace.removeChild(iconSpace.firstElementChild);
    }
}


function mapIcons(level) {
    scene[level].icons.forEach(function (iconObj) {
        iconSpace.appendChild(build(iconObj));
    })
}



function mapInstructions(level) {
    let newInstr = document.createElement('h2');
    newInstr.textContent = scene[level].instructions[0];
    instructionSpace.appendChild(newInstr);
}


function changeInstructions(text) {
    let instr = document.querySelector('.instructions h2');
    instr.textContent = text;
}


function build(icon) {
    let i = document.createElement("i");

    i.classList.add(...icon.class);
    i.style.color = icon.color;
    i.textContent = icon.content;
    i.style.fontSize = `${icon.size}rem`;
    i.style.left = `${icon.position[0]}%`;
    i.style.top = `${icon.position[1]}%`;
    i.style.transform = `translate(-50%, -50%) ${icon.transform}`;
    i.style.filter = icon.filter;

    return i;
}



//helper functions: 




function hide(el) {
    el.classList.add('hidden');
}


function unhide(el) {
    el.classList.remove('hidden');
}

function moveIcon(indx, left, top) {
    icons[indx].style.left = `${left}%`;
    icons[indx].style.top = `${top}%`;
}

function clearInstruction() {
    while (instructionSpace.firstElementChild) {
        instructionSpace.removeChild(instructionSpace.firstElementChild);
    }
}






// fail scence 


function failScene(){
    if(timeoutId){
        clearTimeout(timeoutId)
    }
    clearIcons();
    clearInstruction();
    fail[0].icons.forEach(function (iconObj) {
        iconSpace.appendChild(build(iconObj));
    })


    let failIcons = document.querySelectorAll('i');
    failIcons[3].addEventListener('click', nextScene)
}




