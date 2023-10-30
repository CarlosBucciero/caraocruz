var boton = document.getElementById("btn");
var imagen = document.getElementById("images");
var texto = document.getElementById("txt");
var numeroRandom;

let magia = (max, min) => {
    return Math.round(Math.random() * (max - min) + min);
};

boton.addEventListener("click", () => {
    // console.log(magia(1,0));
    imagen.src = "images/tirando_monedad.gif.webp"
    txt.innerHTML = "Tirando la moneda"
    setTimeout(function() {
        var moneda = magia (1, 0);
    if (moneda == 1){
        txt.innerHTML = "CARA"
        imagen.src = "images/superman.jpeg"
    } else {
        txt.innerHTML = "SECA"
        imagen.src = "images/batman.jpeg"
    }

    }, 2000);
    
});