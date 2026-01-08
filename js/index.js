let burguer = document.querySelector('.burguer');
let wings = document.querySelector('.wings');
let wraps = document.querySelector('.wraps');
let hotDogs = document.querySelector('.hotDogs');
let pizzas = document.querySelector('.pizzas');
let sandwiches = document.querySelector('.sandwiches');
let fries = document.querySelector('.fries');
let drinks = document.querySelector('.drinks');
let extras = document.querySelector('.extras');
let desserts = document.querySelector('.desserts');

const backGround = document.querySelector('.background__food');
const tittle = document.getElementsByTagName('h2');


burguer.addEventListener('mouseenter', () => {
    burguer.style.color = '#ffff';
    backGround.style.backgroundImage = "url('./assets/burguer.jpg')";
    console.log('El mouse entró en la tarjeta');
});

// 3. Escuchamos cuando el mouse sale (para revertir el cambio)
burguer.addEventListener('mouseleave', () => {
    burguer.style.color = 'inherit';
    backGround.style.backgroundColor = 'rgb(24, 23, 23);';
    console.log('El mouse salió');
});

const items = document.querySelectorAll('.background__info_items');

items.forEach(item => {
  // Al poner el mouse encima
  item.addEventListener('mouseenter', () => {
    const rutaImagen = item.getAttribute('data-image');
    
    // Cambiamos el fondo. Usamos backticks `` para insertar la variable
    document..background__food.style.backgroundImage = `url('${rutaImagen}')`;
  });

  // Al quitar el mouse
  item.addEventListener('mouseleave', () => {
    // Volvemos al fondo negro (quitando la imagen)
    document.body.style.backgroundImage = 'none';
  });
});