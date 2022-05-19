//Dejamos que cargue el documento para mostrar el preloader
window.onload = function(){
    setTimeout(function(){ 
    $('#onload').fadeOut(); //el loader
    $('body').removeClass('heiden');//Removenos la clase heiden de la etiqueta body
    }, 1000);//Después de 1s ocultar el preload
    
  };


  const generatePassword = (base, length) => {
    let password = "";
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};

const generate = () => {
    let length = parseInt(inputLength.value);

    let base = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = ".?+-_¡!¿*%&$/()[]{}|@><";


    if (checkbox1.checked) base += numbers;

    if (checkbox2.checked) base += symbols;

    generatedPassword.innerText = generatePassword(base, length);
};

var value=$.trim($(".form-control").val());
if(value.length>0)
{
    $("#user-data-next-button").attr('disabled', true);
} else{
    $("#user-data-next-button").attr('disabled', false);
}

window.addEventListener("DOMContentLoaded", () => {
    btnGenerate.addEventListener("click", () => {
        generate();
    });
});


