let numberOfBoxes = prompt("specify number of boxes");

function createGridElemnts(numberOfBoxes){
    let totalBoxes = numberOfBoxes**2;
    const container = document.querySelector('.container');
    for (let index = 1; index < totalBoxes; index++) {
        const box = document.createElement('div');
        box.classList.add('box')
        box.textContent = " .";
        container.appendChild(box);
        //box.style['gridColumn']=index+'/'+index;
        //box.style['gridRow']=`${index}/${index}`;
    }
};
createGridElemnts(numberOfBoxes);

function changeBoxColor(){
    const boxes = document.querySelectorAll('.box');

    boxes.forEach((box) => {

        box.addEventListener('mouseover', function (e){
            box.classList.add('colored');
        
    });
});
}

changeBoxColor();

