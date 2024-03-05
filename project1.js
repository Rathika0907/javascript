// Function to display products in table
function displayProducts(products) {
  const tableBody = document.querySelector("#productTable tbody");
  tableBody.innerHTML = ""; 
  products.forEach(product => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${product.name}</td>
      <td>$${product.price.toFixed(2)}</td>
      <td>${product.quantity}</td>
      
    `;
  });
}

// Function to add product to list
function addProduct() {
  const productName = document.getElementById("productName").value.trim();
  const productPrice = parseFloat(document.getElementById("productPrice").value);
  const productQuantity = parseInt(document.getElementById("productQuantity").value);

  if (!productName || isNaN(productPrice) || isNaN(productQuantity) || productPrice <= 0 || productQuantity <= 0) {
    alert("Please enter valid product details.");
    return;
  }
  
  const product = { name: productName, price: productPrice, quantity: productQuantity };
  
  const products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  
  displayProducts(products);
  
  // Clear input fields
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productQuantity").value = "1";
}


// Call displayProducts function to populate table on page load
const products = JSON.parse(localStorage.getItem("products")) || [];
displayProducts(products);