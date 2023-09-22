let nota1trim = parseFloat(document.queryselector(".trim1").textContent);
    console.log(nota1trim);
let nota2trim = parseFloat( document.queryselector(".trim2").textContent);
    console.log(nota2trim);
let nota3trim = parseFloat( document.queryselector(".trim3").textContent);
    console.log(nota3trim);
let resultado = nota1trim + nota2trim + nota3trim;
    console.log(resultado);
if(resultado >= 180) {
     resultadofinal.textContent = "sim né, fez o basico!";
} else {
    let notaNecessaria = 180- (nota1trim+nota2trim);
     resultadofinal.textContent = "nao! nao fez nem o basico :c";
}
