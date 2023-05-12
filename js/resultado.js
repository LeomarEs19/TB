//mostrar el resultado HTML

const n = document.querySelector("#datoproducto")
const a = document.querySelector("#datosistema")
const c = document.querySelector("#datodescrip")
const d = document.querySelector("#datoobjetivo")
const t = document.querySelector("#datofisico")
const e = document.querySelector("#datorecom")
const r = document.querySelector("#datocliente")
const p = document.querySelector("#datoespec")
const q = document.querySelector("#datoreque")
const f = document.querySelector("#datofecha")

function almacenarDatos(){

    //capturar el html

    let nom = document.getElementById("producto").value
    let ape = document.getElementById("sistema").value
    let cor = document.getElementById("descrip").value
    let dic = document.getElementById("objetivo").value
    let tel = document.getElementById("fisico").value
    let cha = document.getElementById("recom").value
    let cli = document.getElementById("cliente").value
    let esp = document.getElementById("espec").value
    let req = document.getElementById("reque").value
    let fec = document.getElementById("fecha").value
   
    //almacenamiento de la datos

    localStorage.setItem("producto", nom)
    localStorage.setItem("sistema", ape)
    localStorage.setItem("descrip", cor)
    localStorage.setItem("objetivo", dic)
    localStorage.setItem("fisico", tel)
    localStorage.setItem("recom", cha)
    localStorage.setItem("cliente", cli)
    localStorage.setItem("espec", esp)
    localStorage.setItem("reque", req)
    localStorage.setItem("fecha", fec)

 
    /*Limpiando o inputs*/

    document.getElementById("producto").value = ""
    document.getElementById("sistema").value = ""
    document.getElementById("descrip").value = "";
    document.getElementById("objetivo").value = "";
    document.getElementById("fisico").value = "";
    document.getElementById("recom").value = "";
    document.getElementById("cliente").value = "";
    document.getElementById("espec").value = "";
    document.getElementById("reque").value = "";
    document.getElementById("fecha").value = "";
    
}

function cargarData(){

    let producto,sistema
    producto = localStorage.getItem("producto")
    sistema = localStorage.getItem("sistema")
    descrip = localStorage.getItem("descrip");
    objetivo = localStorage.getItem("objetivo");
    fisico = localStorage.getItem("fisico");
    recom = localStorage.getItem("recom");
    cliente = localStorage.getItem("cliente");
    espec = localStorage.getItem("espec");
    reque = localStorage.getItem("reque");
    fecha = localStorage.getItem("fecha");
 
    /*Mostrar datos Que se  almacenados*/   

    n.innerHTML = "<b>"+producto+"</b>"
    a.innerHTML = "<b>"+sistema+"</b>";
    c.innerHTML = "<b>"+descrip+"</b>";
    d.innerHTML = "<b>"+objetivo+"</b>";
    t.innerHTML = "<b>"+fisico+"</b>";
    e.innerHTML = "<b>"+recom+"</b>";
    r.innerHTML = "<b>"+cliente+"</b>";
    p.innerHTML = "<b>"+espec+"</b>";
    q.innerHTML = "<b>"+reque+"</b>";
    f.innerHTML = "<b>"+fecha+"</b>";
}

document.getElementById('resetBtn').addEventListener('click', function() {
    localStorage.clear();
  }); fdre