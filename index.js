const leftBlockItem = document.querySelectorAll(".left-block-item");
const rightBlockItem = document.querySelectorAll(".right-block-item");
const btnDown = document.querySelector(".down");
const btnUp = document.querySelector(".up");
let index = 0;
function start() {
    if(index < 0) {
        index = leftBlockItem.length-1 ;
    }
    for (let i = 0; i < leftBlockItem.length; i++) {
        leftBlockItem[i].classList.remove("active");
    }
    leftBlockItem[index].classList.add("active");
    }
    start();
    function end() {
        if(index < 0) {
            index = rightBlockItem.length-1 ;
        }
        if(index >= rightBlockItem.length){
            index=0;
        }
        for (let i = 0; i < rightBlockItem.length; i++) {
            rightBlockItem[i].classList.remove("active");
        }
        rightBlockItem[index].classList.add("active");
        }
        end();
    btnDown.addEventListener("click", ()=>{
        index--;
        start();
        end();
    });
    btnUp.addEventListener("click",()=>{
        index++;
        end();
        start();
    })
