let form = document.querySelector('form');


form.addEventListener('submit', function (event) {

    event.preventDefault();
    let userEmail = document.getElementById('user-email').value;
    let userPassword = document.getElementById('user-password').value;
    switch (userEmail, userPassword){
        case userEmail === 'nome@admdente.com.br' && userPassword === '10203040@dente':
            window.location.assign(adm-)

    }
})

