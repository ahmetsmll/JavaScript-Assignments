let binary = prompt("please enter a number in binary type (0 - 1)");
let decimal = binaryToDecimal(binary);
alert(binary+" = "+ decimal);


function binaryToDecimal(binary){
    let sum =0;

    for(let i = 0; i<=binary.length-1;i++){
        sum = sum + ( Number(binary.charAt(i)) ) *  Math.pow(2,binary.length-1-i);
        
    }
    return sum ;

}
