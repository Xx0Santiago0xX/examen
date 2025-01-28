const boton = document.getElementById('botoncito');
const colores = document.getElementById('colores');
const nombre = document.getElementById('Nombre');
const mensaje = document.getElementById('mensaje'); 

colores.addEventListener('click', () => {
    console.log(`color ingresado: ${colores.value}`);
});
nombre.addEventListener('click', () => {
    console.log(`Nombre ingresado: ${nombre.value}`);
});
boton.addEventListener('click', () => {
    console.log('Botón presionado inicio interacción');
    if (boton.textContent === "Iiniciar interacion") {
        boton.textContent = "Finalizar Interaccion";
        colores.disabled = true;
        nombre.disabled = true;
    } else if (boton.textContent === "Finalizar Interaccion") {
        console.log('Boton presionado finalizar interacción');
        boton.textContent = "Iniciar Interaccion";
        colores.disabled = false;
        nombre.disabled = false;
        
     mensaje.textContent = `Hola, ${nombre.value} has elegido el color ${colores.value}`;
        console.log(`Hola, ${nombre.value}has elegido el color ${colores.value}`);
    }
});
