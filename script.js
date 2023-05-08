let form = document.querySelector('form');


form.addEventListener('submit', function (event, userEmail, userPassword) {

    event.preventDefault();
    userEmail = document.getElementById('user-email').value;
    userPassword = document.getElementById('user-password').value;
    switch (userEmail) {
        case userEmail === "adm@dente.com.br":
            windows.location.href = "adm-acess.html";
            break;
        case userEmail === "doctor@dente.com.br"):
            windows.location.href = "doctor-acess.html";
            break;
        case userEmail === "secretary@dente.com.br":
            windows.location.href = "secretary-acess.html";
            break;
        
        case userEmail === "patient@gmail.com":
            windows.location.href = "adm-acess.html";
            break;
    }
        defaut:
            alerta("Usuário não encontrado, tente novamente ou crie uma conta!")

})

