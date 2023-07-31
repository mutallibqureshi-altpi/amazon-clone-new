const imgEl = document.querySelector(".image-el");
const heading = document.querySelector(".heading");
const desc = document.querySelector(".desc");
const price = document.querySelector(".price");
const container = document.querySelector(".container");
const data = JSON.parse(localStorage.getItem("cart-item"));
const cartBox = document.querySelector(".cart-box");

data?.forEach((item) => {
  cartBox.innerHTML += `
  <div class="image-cont">
    <img src=${item.urls.raw} alt=${item.id} class="image-el" height="200px" />
  </div>
  <div class="right">
    <h4 class="desc">${item.alt_description}</h4>
    <p class="price">price: $ ${item.likes}</p>
  </div>
  <button class="remove-item" id =${item.id}>Remove</button>
          `;
});

const removeBtn = document.querySelectorAll(".remove-item");

removeBtn?.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // const index = data.findIndex((item) => item.id !== id);
    // const data1 = data.splice(index, 1);
    // localStorage.setItem("cart-item", JSON.stringify(data1));
    // location.reload();

    const id = e.target.id;
    const newData = data.filter((item) => item.id !== id);
    localStorage.setItem("cart-item", JSON.stringify(newData));
    location.reload();
  });
});

if (cartBox.innerHTML === "") {
  cartBox.innerHTML = "Your cart is empty";
  cartBox.style.fontSize = "5rem";
  cartBox.style.textAlign = "center";
}
