let height = prompt("please enter the height(metre) For Example= 1.75");
let weight = prompt("please enter the weight(kg)");

let bki = weight/height**2;

if(bki<18.5){
    alert("ideal kilonun altındasınız. Bki = "+ bki);
}else if(bki>=18.5 && bki<25){
    alert("İdeal kilodasınız. Bki = "+ bki);
}else if(bki>=25 && bki<30){
    alert("İdeal kilonun üstündesiniz. Bki = "+ bki);
}else if(bki>=30 && bki<40){
    alert("İdeal kilodnun çok üstündesiniz(obez). Bki = "+ bki);
}else{
    alert("İdeal kilonun çok çok  fazla üstündesiniz . Bki =  "+bki);
}