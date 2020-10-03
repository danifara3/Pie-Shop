window.addEventListener("DOMContentLoaded", function(e){
const order = localStorage.getItem("order");


if(order){
    // get data from local storage
    const pieOrder = JSON.parse(order);

    // element in the current page
    const pie = document.querySelector(".pie");

    const title = pie.querySelector(".title");
    const price = pie.querySelector(".price");
    const desc = pie.querySelector(".desc");

    // setting element on the current page to data from json to 
    title.innerText = pieOrder.title;
    price.innerText = pieOrder.price;
    desc.innerText = pieOrder.desc;

    const img = pie.querySelector("img");
    img.setAttribute("src",`/images/${pieOrder.id}.png`);
    img.setAttribute("alt", pieOrder.title);
}
});