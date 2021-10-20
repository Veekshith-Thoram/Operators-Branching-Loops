//ex01
const btnClick = document.querySelector("#btn-click");
const outputEl = document.querySelector("#output");

const fizzBuzz = () => {
    var a=[];
    //Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", 
    //for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
    for(let i=0;i<100;i++){
        a[i]=i+1;
        if(a[i]%3===0 && a[i]%5===0){
            a[i]="FizzBuzz";
        }
        else if(a[i]%5===0){
            a[i]="Buzz";
        }
        else if(a[i]%3===0){
            a[i]="Fizz";
        }
        // else{
        //     a[i]=i
        // }
    }
    console.log(a);
}

btnClick.addEventListener("click", fizzBuzz)