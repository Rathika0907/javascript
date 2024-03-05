let display = () => {
    fetch("https://fakestoreapi.com/products")

        .then((res) => res.json())
        .then((data) => displayProducts(data));

    console.log("data show in Card");
}

 
function displayProducts(products) {
   
    var container = document.getElementById("product");

    
    products.forEach((product) => {
        var card = document.createElement("div");
        card.className = "card";

       
        card.innerHTML = `<img src="${product.image}"/><h3>${product.title}</h3><p>${product.description}</p><p>Price: $${product.price}</p>  `;

        
        container.appendChild(card);
    });
}