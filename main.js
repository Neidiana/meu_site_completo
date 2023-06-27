function Enviar(){
    var nome= document.getElementById("Nome");
    var idade = document.getElementById("Idade");
 
    if(nome.value !=""){
        alert("Agradeço sua mensagem,"+ nome.value+"Seus dados foram encaminhados com sucesso!");
    }
    if (idade.value != "") {
        alert("Agradeço sua mensagem," + idade.value + "Seus dados foram encaminhados com sucesso!");
    }
}