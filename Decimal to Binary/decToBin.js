let number = Number(prompt("Please enter a number"));

if(number<0){
    alert("!!! Lütfen negatif sayı girmeyiniz. !!!")
}else{

let binary = decimalToBinary(number);
alert(binary);


function decimalToBinary(number){
    let binary="";
    if(number == 0) return 0;
    
    while(number > 0 ){
        binary = (number%2).toString() + binary ;
        number = Math.floor(number/2);

        if(number ==1){
            binary = "1" + binary ;
            break;
        }
    }
    
   return binary;

}


}
