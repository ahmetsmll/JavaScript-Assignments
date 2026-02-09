let sayi = Number(prompt("Please enter a number"));
let sonuc = true;
for (let i=2; i<= Math.floor(sayi/2); i++){
    if(sayi%i==0){
        sonuc=false;
        break;
    }
}
if(sonuc==true){
    alert(sayi+" asaldır.");
}else{
    alert(sayi+" asal değildir!");
}