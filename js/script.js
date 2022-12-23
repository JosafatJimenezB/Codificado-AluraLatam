const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const inputArea = document.getElementById('input-area');
const areaOutput = document.querySelector('.result-codification');
const btnCopy = document.querySelector('.btn-copy');

btnEncriptar.addEventListener('click', () => {
    if (inputArea.value != null) {
        encryptation();        
    }
    if(inputArea.value == ''){
        alert('No se ha ingresado texto');
        areaOutput.innerHTML = `<img class="muñeco" src="./assets/Muñeco.svg" alt="" />
        <p>
          <span>Ningún mensaje fue encontrado</span> Ingresa el texto que
          deseas encriptar o desencriptar
        </p>`
    }
});


btnDesencriptar.addEventListener('click', () => {
    if (inputArea.value != null) {
        desencryptation();        
    }
    if(inputArea.value == ''){
        alert('No se ha ingresado texto');
        areaOutput.innerHTML = `<img class="muñeco" src="./assets/Muñeco.svg" alt="" />
        <p>
          <span>Ningún mensaje fue encontrado</span> Ingresa el texto que
          deseas encriptar o desencriptar
        </p>`
    }
});

btnCopy.addEventListener('click', () => {
    // Obtener el texto del elemento textarea
    var texto = inputArea.value;
  
    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto);
});


function encryptation(){
    let aux = ""
    let msgEncrypted = ""

        for(let i = 0; i < inputArea.value.length; i++){
            aux = inputArea.value.charAt(i);
            
            if (aux === "a") {
                aux = "ai";
            }if (aux === "e") {
                aux = "enter";
            }if (aux == "i") {
                aux = "imes";
            }if (aux == "o") {
                aux ="ober";
            }if (aux == "u") {
                aux = "ufat";
            }
               
            msgEncrypted += aux;
            areaOutput.innerHTML =` <p>${msgEncrypted}</p> <button class="btn-copy">Copiar texto</button>`;
        }

    console.log(msgEncrypted);    
}


function desencryptation(){
    let a = inputArea.value;
            let aux = a.replaceAll("ai","a");
            a = aux;
    
            aux = a.replaceAll("enter", "e");
            a = aux
    
            aux = a.replaceAll("imes", "i");
            a = aux
    
            aux = a.replaceAll("ober", "o");
            a = aux
    
            aux = a.replaceAll("ufat", "u");
    
            areaOutput.innerHTML = aux;
}