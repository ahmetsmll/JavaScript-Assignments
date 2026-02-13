let product1 ={
    name : "Lenovo" ,
    price: 35000,
    category : "Computer"
};
let product2 ={
    name : "HP" ,
    price: 45000,
    category : "Computer"
};
let product3 ={
    name : "Acer" ,
    price: 25000,
    category : "Computer"
};
let product4 ={
    name : "HP Victus" ,
    price: 30000,
    category : "Computer"
};
let product5 ={
    name : "Lenovo Ideapad" ,
    price: 32000,
    category : "Computer"
};

let products =[product1,product2,product3,product4,product5];
let filterProducts =[];
let inputProduct = prompt("Please enter a product name : ");
filterProduct(products);
filterProductWrite(filterProducts);

function filterProduct(products) {
    products.forEach(product => {
       if(product.name.toUpperCase().includes(inputProduct.toUpperCase(),0)){
        filterProducts.push(product);
       }
    });



}

function filterProductWrite(filterProducts){
    filterProducts.forEach(product =>{
        document.writeln(product.name +" | "+product.price+" | "+product.category + "<br>");

    } );
   
} 
