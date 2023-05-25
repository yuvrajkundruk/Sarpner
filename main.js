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
function removeItem(){ //deletes item from localStorage
  var key = document.getElementById('removeKey').value; //gets key from user
  localStorage.removeItem(key) //passes key to the removeItem method
  console.log("remove items");
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
  document.getElementById("carForm").onsubmit = store
  document.getElementById("removeButton").onclick = removeItem
  
}
