const ACCESS_KEY = "70LQWJ3D7MSDJUx7lIjM_ww9Du02SS8nF-RfhU7n3Us";
const input = document.querySelector("input");
const btn = document.querySelector(".search-icon");
const main = document.querySelector(".main-container");
const cont1 = document.querySelector(".hero-section");
const cont2 = document.querySelector(".shop-section");

let inputData = "";
let page = 1;

const generateData = async () => {
  inputData = input.value;

  const url = await fetch(
    `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${ACCESS_KEY}`
  );
  const res = await url.json();
  const data = res.results;

  data.map((prev) => {
    console.log(prev);
    // main.innerHTML = "";
    cont1.style.display = "none";
    cont2.innerHTML = "";
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-cont");
    const title = document.createElement("h3");
    title.innerHTML = prev.alt_description;
    const image = document.createElement("img");
    image.src = prev.urls.small;
    image.alt = prev.alt_description;
    image.style.height = "200px";
    const price = document.createElement("p");
    price.innerHTML = `Prices:$${prev.likes}`;

    imageWrapper.appendChild(title);
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(price);
    main.appendChild(imageWrapper);
  });
  page++;
};

btn.addEventListener("click", generateData);
