(function(){
    emailjs.init("w0Lfa2_5tCvyiHtsk");
})();


document
    .getElementById("contact-form")
    .addEventListener("submit", function(event){

        event.preventDefault();


        emailjs.sendForm(
            "service_nsl3pk6",
            "template_6my3jjj",
            this
        )
        .then(() => {

            alert("Mensagem enviada com sucesso!");

            this.reset();

        })
        .catch((error) => {

            alert("Erro ao enviar mensagem!");

            console.log(error);

        });

    });