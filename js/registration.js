let formName = document.getElementsByClassName('Name');
let formSurname = document.getElementsByClassName('Surname');
let formEmail = document.getElementsByClassName('Email');
let btn = document.querySelectorAll('.btn');

class newUser {
    name;
    surname;
    email;

    constructor(name, surname,email) {    
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}

sendJson();

async function sendJson() {


    for (let i = 0; i < btn.length; i++) {


        btn[i].onclick = async function () {
            let user = new newUser(formName[i].value, formSurname[i].value, formEmail[i].value);
            alert(JSON.stringify(user));
            let  responce = await fetch('http://localhost:3000', {
                method: 'POST',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                body: JSON.stringify(user)

            });

            let result = await responce.json();
            alert(result.message)
        }
    }

}
 




