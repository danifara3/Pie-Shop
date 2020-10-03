window.addEventListener("DOMContentLoaded", function(e){

    let locationBox = document.querySelector("#location");
    let location = {
        latitude: "unknown",
        longitude: "unknown"
    };

    window.navigator.geolocation.getCurrentPosition(
        function(position){
            location={
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            locationBox.value = JSON.stringify(location);
        },
        function(error){
            locationBox.value = JSON.stringify(location);
        });

    const order = localStorage.getItem("order");


if(order){
    // get data from local storage
    const pieOrder = JSON.parse(order);

    const orderInput = document.querySelector("#pie-order");
    orderInput.value = order;

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