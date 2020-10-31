const name = 'init file';
console.log(`Hello ${name}`);

var url = new URL(window.location);
var valor = url.searchParams.get('valor');
var detalle = url.searchParams.get('detail');

var categorias = document.getElementsByClassName('cat-item');

Object.keys(categorias).forEach(item => {
    categorias[item].addEventListener('click', function() {
        window.location = categorias[item].getAttribute('href')
    });
});

var libros = document.getElementsByClassName('book-item');

Object.keys(libros).forEach(item => {
    libros[item].addEventListener('click', function() {
        window.location = libros[item].getAttribute('href') + `&valor=${valor}`
    });
});


if (!valor) {
    valor = '';
}

if (!detalle) {
    detalle = '';
}

document.getElementById('breadcrumb').innerHTML = `
<ul class='location'>
    <li>
        <p> Inicio</p>
    </li>
    <li>
        <p>${valor}<p/>
    </li>
    <li>
        <p>${detalle}<p/>
    </li>
</ul>
`;

var titulo = document.getElementById('titulo-libro');

if (titulo) {
    titulo.outerHTML = `<h1> ${detalle} </h1>`;
}