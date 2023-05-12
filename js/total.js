let valortotal (){
    resultado1 = document.getElementById("resultado1");
    resultado2 = document.getElementById("resultado2");
    resultado3 = document.getElementById("resultado3");
    let cantidad1 = document.getElementById("valor1").value;
    let sumatotal1 = valor1 * cantidad1
    let cantidad2 = document.getElementById("cantidad2").value;
    let valor2 = document.getElementById("valor2").value;
    let sumatotal2 = valor2 * cantidad2
    resultado1.innerText = sumatotal1
    resultado2.innerText = sumatotal2
    resultado3.innerText = sumatotal1 * sumatotal2
} 
