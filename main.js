function store(){ //stores items in the localStorage
  var brand = document.getElementById('carBrand').value;
  var price = document.getElementById('carPrice').value;
  var key = document.getElementById('key').value; //gets the key from the user

  const car = {
      brand: brand,
      price: price,
  }

  window.localStorage.setItem(key,JSON.stringify(car));  
  //converting object to string
}
function EditItem(){ 
  var key = document.getElementById('editItem').value; 
  localStorage.store(key) 
  window.localStorage.setItem(key,JSON.stringify(car)); 
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
  document.getElementById("carForm").onsubmit = store
  document.getElementById("EditButton").onclick = EditItem
  
}
