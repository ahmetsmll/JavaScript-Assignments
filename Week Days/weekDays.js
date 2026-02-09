let input = Number(prompt("Please enter the number day (1-7) !!"));

switch(input){
    case 1:
        alert(input + " numaralı gün Pazartesidir.");
    break;
    case 2:
        alert(input + " numaralı gün Salıdır.");
    break;
    case 3:
        alert(input + " numaralı gün Çarşambadır.");
    break;
    case 4:
        alert(input + " numaralı gün Perşembedir.");
    break;
    case 5:
        alert(input + " numaralı gün Cumadır.");
    break;
    case 6:
        alert(input + " numaralı gün Cumartesidir.");
    break;
    case 7:
        alert(input + " numaralı gün Pazardır.");
    break;
    default:
        alert("You must enter the number 1 to 7 !");
    break;

}