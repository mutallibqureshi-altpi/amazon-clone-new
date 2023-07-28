const imgEl = document.querySelector(".image-el");
const heading = document.querySelector(".heading");
const desc = document.querySelector(".desc");
const price = document.querySelector(".price");
const container = document.querySelector(".container");
const data = JSON.parse(localStorage.getItem("cart-item"));
const cartBox = document.querySelector(".cart-box");
console.log(data);

data?.forEach((item) => {
  cartBox.innerHTML += `
  <div class="image-cont">
  <img src=${item.urls.raw} alt=${item.id} class="image-el" height="200px" />
  </div>
        <div class="right">
        <h4 class="desc">${item.alt_description}</h4>
          <p class="price">price: $ ${item.likes}</p>
          </div>
          <button class="remove-item">Remove</button>
          `;
});

const removeBtn = document.querySelector(".remove-item");
const removeData = (id) => {
  console.log(id);
  console.log("click");
  // container.innerHTML = "";
  // container.innerHTML = "Your cart is empty";
  // localStorage.removeItem("cart-item");
};

removeBtn?.addEventListener("click", function (e) {
  const idd = e.target;
  console.log(idd);
  const id = data.forEach((val) => val.id);
  const value = data.find((item) => item.id == id);

  console.log("remove");
});

// if (data === null) {
//   removeData();
// }
