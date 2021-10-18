//EASY
//ex01
const inputs = document.querySelectorAll(".inputs");
const add = document.querySelector("#submit");
const outputEl = document.querySelector("#output");
const addFinder = () => {
    var addValue = Number(inputs[0].value)+Number(inputs[1].value)+Number(inputs[2].value)
    +Number(inputs[3].value)+Number(inputs[4].value);
    outputEl.innerText = `The value of the addition is ${addValue}`;
}

add.addEventListener("click", addFinder);

//ex02
const check = document.querySelector("#check");
const evenIp = document.querySelector("#evenIp");
const outputEven = document.querySelector("#outputEven");
const evenOrOdd = () =>{
    var checkNumber = Number(evenIp.value);
    if(checkNumber%2 == 0){
        outputEven.innerText = "The number you entered is even";
    }
    else if(checkNumber%2 != 0){
        outputEven.innerText = "The number you entered is odd";
    }
    else{
        outputEven.innerText = "Please enter a number";
    }
}
check.addEventListener("click", evenOrOdd)