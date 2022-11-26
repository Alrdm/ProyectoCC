const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit" , e=>{
    e.preventDefault()
    let warnings=""
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if (nombre.value.lenght <3){
        warnings += 'El nombre no es valido <br>'
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += 'El email no es valido <br>'
    }
})

    function sendEmail(){
        Email.send({
    Host : "smtp.elasticemail.com",
    Username : "aldanardmn@gmail.com",
    Password : "A91335C957BBBEB8F9EF9F4C0EBC2A5119F2",
    To : 'aldanardmn@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById("nombre").value,
    Body : document.getElementById("mensaje").value,
            
}).then(
  message => alert("Enviado!")
);
    }


