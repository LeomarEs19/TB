function quince(){
    let resultado = document.getElementById("resultado");
    let cantidad = document.getElementById("cantidad").value;
    let valor = document.getElementById("valor").value;
    let descuento = 0.15 * (valor * cantidad)
    resultado.innerText = descuento
}
function cincuenta(){
    let resultado = document.getElementById("resultado");
    let cantidad = document.getElementById("cantidad").value;
    let valor = document.getElementById("valor").value;
    let descuento = 0.5 * (valor * cantidad)
    resultado.innerText = descuento
}
function nada(){
    let resultado = document.getElementById("resultado");
    let cantidad = document.getElementById("cantidad").value;
    let valor = document.getElementById("valor").value;
    let calculo = valor * cantidad
    resultado.innerText = calculo
}