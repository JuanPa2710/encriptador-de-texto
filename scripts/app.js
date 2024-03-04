//Diccionario de opciones para poder saber que vocales hay que encriptar
const ENCRYPT_VOCALS = {
    a: 'ai', e: 'enter', i: 'imes', o: 'ober', u: 'ufat'
};

const ACCENT_VOCALS = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ü' : 'u'
};

//Se obtiene el texto que se va a encriptar o desencriptar
let textArea = document.getElementById('input');

textArea.addEventListener("input", limpiarTexto);

//Lugares donde se va a mostar el texto
let textEmpty = document.getElementById('empty-input');
let textResult = document.getElementById('result-input');
let textOutput = document.getElementById('output');
let btnCopiar = document.getElementById('btn-copy');

let btnEncrypt = document.getElementById('btn-encrypt');
let btnDecrypt = document.getElementById('btn-decrypt');

let estado = 0;

function encriptarTexto() {
    if(textArea.value.trim() == "") {
        alert("No se ingresó ningún texto. No se puede realizaresta operación")
        textArea.value = "";
        textArea.focus();
    }
    else {
        btnEncrypt.disabled = true;
        btnDecrypt.disabled = true;
        btnEncrypt.title = "Boton inactivo"
        btnDecrypt.title = "Boton inactivo"
        let textoEncriptado = "";
        
        for(i = 0; i <= (textArea.value.length - 1); i++) {
            textoEncriptado += ENCRYPT_VOCALS[textArea.value[i]] || textArea.value[i];        
        };    
        
        establecerTextoResultante(textoEncriptado.toLowerCase());
    }
    
};

function desencriptarTexto() {
    if(textArea.value.trim() == "") {
        alert("No se ingresó ningún texto. No se puede realizaresta operación")
        textArea.value = "";
        textArea.focus();
    }
    else {
        btnEncrypt.disabled = true;
        btnDecrypt.disabled = true;
        btnEncrypt.title = "Boton inactivo"
        btnDecrypt.title = "Boton inactivo"
        let texto = textArea.value;
        let textoDesencriptado = "";

        textoDesencriptado = texto.replace(/ai/igm, "a");
        textoDesencriptado = textoDesencriptado.replace(/enter/igm, "e");
        textoDesencriptado = textoDesencriptado.replace(/imes/igm, "i");
        textoDesencriptado = textoDesencriptado.replace(/ober/igm, "o");
        textoDesencriptado = textoDesencriptado.replace(/ufat/igm, "u");
                
        establecerTextoResultante(textoDesencriptado.toLowerCase());
    }
};

function restablecerValores() {
    textEmpty.style.display = "flex";
    textResult.style.display = "none"
    textOutput.value = '';

    textArea.value = '';
    textArea.focus();

    btnEncrypt.disabled = false;
    btnDecrypt.disabled = false;

    btnEncrypt.title = "Botón de encriptar texto"
    btnDecrypt.title = "Botón de desencriptar texto"
};

function establecerTextoResultante(texto) {
    textEmpty.style.display = "none";
    textResult.style.display = "flex"
    textOutput.value = texto;
};

function copiarTexto() {
    navigator.clipboard.writeText(textOutput.value);
    restablecerValores();
};

function check() {
    textoIngresado = textArea.value;
    textoFinal = '';

    textoFinal = textoIngresado.replace(/á/igm, "a");
    textoFinal = textoFinal.replace(/é/igm, "e");
    textoFinal = textoFinal.replace(/í/igm, "i");
    textoFinal = textoFinal.replace(/ó/igm, "o");
    textoFinal = textoFinal.replace(/ú/igm, "u");

    textArea.value = textoFinal;
}

function limpiarTexto(e) {
    if(e.srcElement.value == "") {
        restablecerValores();
    }
}