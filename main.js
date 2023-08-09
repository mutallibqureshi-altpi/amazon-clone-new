const ACCESS_KEY = "70LQWJ3D7MSDJUx7lIjM_ww9Du02SS8nF-RfhU7n3Us";
const input = document.querySelector("input");
const btn = document.querySelector(".search-icon");
const main = document.querySelector(".main-container");
const cont1 = document.querySelector(".hero-section");
const cont2 = document.querySelector(".shop-section");
const cartNumber = document.querySelector(".cart-number");
const leftArrow = document.getElementById("left");
const rightArrow = document.getElementById("right");
const slider = document.querySelectorAll(".slider");

let inputData = "";
let page = 1;

let data = [];

cartNotification();

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    generateData();
  }
});

const generateData = async () => {
  inputData = input.value;

  const url = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${ACCESS_KEY}`
  );
  const res = await url.json();
  data = res.results;

  data.map((prev) => {
    // console.log(prev);
    // main.innerHTML = "";
    cont1.style.display = "none";
    cont2.innerHTML = "";
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-cont");
    const title = document.createElement("h3");
    title.innerHTML = prev.alt_description;
    const image = document.createElement("img");
    image.src = prev.urls.small;
    image.alt = prev.id;
    image.style.height = "200px";
    const price = document.createElement("p");
    price.innerHTML = `Prices:$${prev.likes}`;
    const cartBtn = document.createElement("button");
    cartBtn.classList.add("btn-cart");
    cartBtn.innerHTML = "cart";

    imageWrapper.appendChild(title);
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(price);
    imageWrapper.appendChild(cartBtn);
    main.appendChild(imageWrapper);
  });
  page++;
};

function cartNotification() {
  let cartLength = JSON.parse(localStorage.getItem("cart-item"));
  cartNumber.innerHTML = cartLength.length;
}

const arr = [];
main.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-cart")) {
    const id = e.target.previousSibling.previousSibling.getAttribute("alt");
    const item = data.find((item) => item.id == id);
    arr.push(item);
    localStorage.setItem("cart-item", JSON.stringify(arr));
    cartNotification();
  }
});

btn.addEventListener("click", generateData);

let activeSlide = 0;

const slideLeft = () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slider.length - 1;
  }

  setBgToBody();
  setActiveSlides();
};

leftArrow.addEventListener("click", slideLeft);

const slideRight = () => {
  activeSlide++;

  if (activeSlide > slider.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlides();
};

rightArrow.addEventListener("click", slideRight);

setBgToBody();

function setBgToBody() {
  cont1.style.backgroundImage = slider[activeSlide].style.backgroundImage;
}

function setActiveSlides() {
  slider.forEach((slide) => {
    slide.classList.remove("active");
  });
  slider[activeSlide].classList.add("active");
}

setInterval(slideRight, 2000);
