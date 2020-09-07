
function createGridElemnts(){
    let numberOfBoxes = prompt("specify number of boxes");
    let totalBoxes = numberOfBoxes**2;
    const container = document.querySelector('.container');
    for (let index = 0; index < totalBoxes; index++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = ".";
        box.classList.add('boxColor');
        container.appendChild(box);
        
    };
};

function changeBoxColor(){
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach((box) => {
        
        box.addEventListener('mouseover', function (e){
            box.classList.remove('boxColor');
            box.classList.add('colored');
            
        });
    });
}
//resets the coloring pad 
//should also allow to reset pad size
function resetPad(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.classList.remove('colored');
        box.classList.add('boxColor');


    });
    
    };
    
    createGridElemnts();
    changeBoxColor();
    const btn = document.querySelector('#resetbtn');
    btn.addEventListener('click', resetPad);
