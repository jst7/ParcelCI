const name = 'init file';
console.log(`Hello ${name}`);

var categorias = document.getElementsByClassName("cat-item");


Object.keys(categorias).forEach(item => {
    categorias[item].addEventListener("click", function() {
        window.location = categorias[item].getAttribute("href")
    });
});