emailjs.init("QhNfZ1vRp8MSo-efE");

document.addEventListener("DOMContentLoaded",function(){
    const form= document.getElementById("contactForm");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        emailjs.sendForm("service_gwz8j0y","template_lp0s19j", this)
        .then(() => {
            alert("Message envoyé ! ");
            form.reset();
        },(err) => {
            alert("Erreur : " + JSON.stringify(err));
        });
    });
});
