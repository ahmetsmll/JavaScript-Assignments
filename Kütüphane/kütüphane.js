let kitap1 = {isim:"Dünyaya Düşen Adam",               fiyat:"30 $", raf:"5.Raf 1.Bölüm"};
let kitap2 = {isim:"Bir Psikiyatristin Gizli Defteri", fiyat:"25 $", raf:"3.Raf 4.Bölüm"};
let kitap3 = {isim:"Kırmızı ve Siyah",                 fiyat:"40 $", raf:"4.Raf 2.Bölüm"};
let kitap4 = {isim:"Yürümenin Felsefesi",              fiyat:"20 $", raf:"1.Raf 5.Bölüm"};
let kitap5 = {isim:"Güneşi Uyandıralım",               fiyat:"30 $", raf:"2.Raf 3.Bölüm"};
let kitap6 = {isim:"Veronika Ölmek İstiyor",           fiyat:"50 $", raf:"4.Raf 3.Bölüm"};
let kitap7 = {isim:"Kelile ve Dimne",                  fiyat:"15 $", raf:"1.Raf 3.Bölüm"};
let kitap8 = {isim:"Dorian Gray’in Portresi",          fiyat:"35 $", raf:"2.Raf 4.Bölüm"};

let kitaplar = [kitap1,kitap2,kitap3,kitap4,kitap5,kitap6,kitap7,kitap8];


let raf11 = {message:"📍IN HERE", göster: false, kod:"1.Raf 1.Bölüm"};
let raf12 = {message:"📍IN HERE", göster: false, kod:"1.Raf 2.Bölüm"};
let raf13 = {message:"📍IN HERE", göster: false, kod:"1.Raf 3.Bölüm"};
let raf14 = {message:"📍IN HERE", göster: false, kod:"1.Raf 4.Bölüm"};
let raf15 = {message:"📍IN HERE", göster: false, kod:"1.Raf 5.Bölüm"};

let raf21 = {message:"📍IN HERE", göster: false, kod:"2.Raf 1.Bölüm"};
let raf22 = {message:"📍IN HERE", göster: false, kod:"2.Raf 2.Bölüm"};
let raf23 = {message:"📍IN HERE", göster: false, kod:"2.Raf 3.Bölüm"};
let raf24 = {message:"📍IN HERE", göster: false, kod:"2.Raf 4.Bölüm"};
let raf25 = {message:"📍IN HERE", göster: false, kod:"2.Raf 5.Bölüm"};

let raf31 = {message:"📍IN HERE", göster: false, kod:"3.Raf 1.Bölüm"};
let raf32 = {message:"📍IN HERE", göster: false, kod:"3.Raf 2.Bölüm"};
let raf33 = {message:"📍IN HERE", göster: false, kod:"3.Raf 3.Bölüm"};
let raf34 = {message:"📍IN HERE", göster: false, kod:"3.Raf 4.Bölüm"};
let raf35 = {message:"📍IN HERE", göster: false, kod:"3.Raf 5.Bölüm"};

let raf41 = {message:"📍IN HERE", göster: false, kod:"4.Raf 1.Bölüm"};
let raf42 = {message:"📍IN HERE", göster: false, kod:"4.Raf 2.Bölüm"};
let raf43 = {message:"📍IN HERE", göster: false, kod:"4.Raf 3.Bölüm"};
let raf44 = {message:"📍IN HERE", göster: false, kod:"4.Raf 4.Bölüm"};
let raf45 = {message:"📍IN HERE", göster: false, kod:"4.Raf 5.Bölüm"};

let raf51 = {message:"📍IN HERE", göster: false, kod:"5.Raf 1.Bölüm"};
let raf52 = {message:"📍IN HERE", göster: false, kod:"5.Raf 2.Bölüm"};
let raf53 = {message:"📍IN HERE", göster: false, kod:"5.Raf 3.Bölüm"};
let raf54 = {message:"📍IN HERE", göster: false, kod:"5.Raf 4.Bölüm"};
let raf55 = {message:"📍IN HERE", göster: false, kod:"5.Raf 5.Bölüm"};

let raflar = [
    [raf51,raf52,raf53,raf54,raf55],
    [raf41,raf42,raf43,raf44,raf45],
    [raf31,raf32,raf33,raf34,raf35],
    [raf21,raf22,raf23,raf24,raf25],
    [raf11,raf12,raf13,raf14,raf15]
];

let inputKitap = prompt("Lütfen kitap ismi giriniz...");
let rafkod = kitapArama(inputKitap);


if (rafkod!= ""){
    düzenle();
    rafOlustur();
    secilenKitap(inputKitap);
}else{
    alert("Aradığınız kitap bu kütüphanede bulunmuyor. ")
}


function rafOlustur(){
    for(let i=0;i<raflar.length;i++){
        document.writeln(raflar.length-i +". Raf ➜  ");
        for(let j=0;j<5;j++){
            document.writeln( "| " + (raflar[i][j].göster ? raflar[i][j].message  : "----------------") );
            
        }
        document.writeln("|<br>");
        document.writeln("<br>");
        
    }
    
}


function kitapArama(inputKitap){
    let rafKod="";
    kitaplar.forEach(kitap =>{
        if(kitap.isim.toUpperCase().includes(inputKitap.toUpperCase(),0)) {
            rafKod=kitap.raf;
        }
    }
);
return rafKod;
}

function düzenle(){
   
    for(let i=0;i<raflar.length;i++){
        for(let j=0;j<5;j++){
            if(rafkod== raflar[i][j].kod){
                raflar[i][j].göster = true;
               break;
            }

        }
    }

}

function secilenKitap(inputKitap){
    kitaplar.forEach(kitap=>{
        if(kitap.isim.toUpperCase().includes(inputKitap.toUpperCase(),0)){
            document.writeln("'"+ kitap.isim +"'" +" adlı kitabı seçtiniz. Bu kitabın fiyatı " + kitap.fiyat+ " ' dır.");
        }



    })
    

}

