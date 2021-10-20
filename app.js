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
check.addEventListener("click", evenOrOdd);

//ex03
const minMax1 = document.querySelector("#min-max1");
const minMax2 = document.querySelector("#min-max2");
const findMinMax = document.querySelector("#min-max-sub");
const minMaxOutput = document.querySelector("#min-max-output");

const calcMinMax = () => {
    if(Number(minMax1.value)>Number(minMax2.value)){
        minMaxOutput.innerText = `${minMax1.value} is the Max and ${minMax2.value} is the Min`
    } else if(Number(minMax1.value)<Number(minMax2.value)){
        minMaxOutput.innerText = `${minMax2.value} is the Max and ${minMax1.value} is the Min`
    } else{
        minMaxOutput.innerText = `Both are equal!!`;
    }
}

findMinMax.addEventListener("click", calcMinMax);

//ex04
const monthInput = document.querySelector("#month-ip");
const findDays =document.querySelector("#find-days");
const monthOp = document.querySelector("#month-op");

const daysInMonth = () => {
    var month = monthInput.value.toUpperCase();
    switch(month){
        case "JANUARY":
            monthOp.innerText = `The number of days in ${monthInput.value} is 31`;
            break;
        case "FEBRUARY":
            monthOp.innerText = `The number of days in ${monthInput.value} is 28/29`;
            break;
        case "MARCH":
            monthOp.innerText = `The number of days in ${monthInput.value} is 31`;
            break;
        case "APRIL":
            monthOp.innerText = `The number of days in ${monthInput.value} is 30`;
            break;
        case "MAY":
            monthOp.innerText = `The number of days in ${monthInput.value} is 31`;
            break;
        case "JUNE":
            monthOp.innerText = `The number of days in ${monthInput.value} is 30`;
            break;
        case "JULY":
            monthOp.innerText = `The number of days in ${monthInput.value} is 31`;
            break;
        case "AUGUST":
            monthOp.innerText = `The number of days in ${monthInput.value} is 31`;
            break;
        case "SEPTEMBER":
            monthOp.innerText = `The number of days in ${monthInput.value} is 30`;
            break;
        case "OCTOBER":
            monthOp.innerText = `The number of days in ${monthInput.value} is 31`;
            break;
        case "NOVEMBER":
            monthOp.innerText = `The number of days in ${monthInput.value} is 30`;
            break;
        case "DECEMBER":
            monthOp.innerText = `The number of days in ${monthInput.value} is 31`;
            break;
        default:
            monthOp.innerText = "Please enter a valid month";
    }
}

findDays.addEventListener("click", daysInMonth);