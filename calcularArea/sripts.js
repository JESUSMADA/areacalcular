//boton
function calcularArea() {
    
    //seleccionar figura
    const figura = document.getElementById("figura").value;
    //resultado
    const resultado = document.getElementById("resultado");
    //altura y base
    const altura = parseFloat(document.getElementById("altura").value);
    const base = parseFloat(document.getElementById("base").value);

    let area;

    //calcular
    if (figura == "cuadro") {
        area = altura * altura;
    } else if (figura == "rectangulo") {
        area = altura * base;
    } else if (figura == "triangulo") {
        area = (altura * base) / 2;
    }

    //resultado
    resultado.textContent = `El area es: ${area}`;
}