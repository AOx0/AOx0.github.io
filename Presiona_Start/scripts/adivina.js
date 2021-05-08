function checarPalabra() {
    var resultado = document.getElementById("resultado");
    var palabra = document.getElementById("palabra").value.toLocaleLowerCase();
    console.log(palabra);
    switch (palabra) {
        case "rosa":
            resultado.innerHTML = "<div><p>Muy bien!</p>"
            resultado.innerHTML += '<a href="https://drive.google.com/file/d/1bSAeToZ1k0OHAt3m04pOQNPGNv4HcGZB/view?usp=sharing">Toma!</a>';
            break;
        case "italia":
            resultado.innerHTML = "<div><p>Excelente, </p>"
            resultado.innerHTML += '<a href="https://docs.google.com/document/d/19IY6Im-WzDF-x-ksERVbo6q9ZE-BswutJq4EXLXXsY0/edit?usp=sharing">Aqui tienes</a></div>';
            break;
        case "cuervo":
            resultado.innerHTML = "<div><p>Okay...</p>"
            resultado.innerHTML += '<a href="https://drive.google.com/file/d/1LJVBAUpWyFmH2wADIVdh70bOZhv1HBdI/view?usp=sharing">Lo adivinaste</a></div>';
            break;
        case "presiona start":
            resultado.innerHTML = "<div><p>O le atinaste o has conseguido finalizar el juego, de cualquier forma. Muchas Felicidades! </p>"
            resultado.innerHTML += '<a href="https://www.canva.com/design/DAEdxNoOs4I/cKZqVqaR3WGqC0DIRCbFYg/view?utm_content=DAEdxNoOs4I&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton">Aqui encontraras tu recompensa\n</a></div>';
            break;
        case "easter egg":
            resultado.innerHTML = "Felicidades, encontraste el easter egg xD ";
            break;    
        default: 
            resultado.innerHTML = "Dato incorrecto jeje vuelve a intentarlo";
            break;
    }
}