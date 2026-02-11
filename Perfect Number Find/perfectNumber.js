let number = Number(prompt("Please enter a positive number (+) "));
if(number<=0){
    alert("Lütfen pozitif bir sayi giriniz");
}else{
let sum = number;
let result = perfectNumber(number);

function perfectNumber(number){

for (let i=1;i<=number/2;i++){
    if(number%i==0){
        sum = sum + i;
    }
}

return sum ;
}

if(result == number*2){
    alert(number+ " a perfect number because  " +sum+ " = "+ number+"*2"+"("+number*2+")"  );
}else{
    alert(number + " not perfect number because  " +sum+ " not equlas to "+ number+"*2");
}
}