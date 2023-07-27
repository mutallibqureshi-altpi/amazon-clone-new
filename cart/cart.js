const imgEl = document.querySelector(".image-el");
const heading = document.querySelector(".heading");
const desc = document.querySelector(".desc");
const price = document.querySelector(".price");
const removeBtn = document.querySelector(".remove-item");
const container = document.querySelector(".container");
const data = JSON.parse(localStorage.getItem("cartItem"));

setTimeout(() => {
  const src = data.urls.raw;
  imgEl.setAttribute("src", src);
  heading.innerHTML = data.alt_description;
  desc.innerHTML = data.alt_description;
  price.innerHTML += data.likes;
}, 1000);

const removeData = () => {
  container.innerHTML = "";
  container.innerHTML = "Your cart is empty";
  localStorage.removeItem("cartItem");
};

removeBtn.addEventListener("click", removeData);

if (data === null) {
  removeData();
}
