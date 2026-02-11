let metin = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

let input = prompt("Harf giriniz:");
alert(input + " harfi bu metinde "+ harfSayacı(input)+ " kere geçiyor.");

function harfSayacı(input){
    let sayac=0;
    for(let i=0; i<metin.length;i++){
        if(metin.charAt(i).toLowerCase()===input.toLowerCase()){
            sayac= sayac +1;
        }
    }
    return sayac;
}