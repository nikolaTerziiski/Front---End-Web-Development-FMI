function validationLogin() {
    let err = document.getElementById("errors");
     err.innerHTML = '';

    var valueOfMail = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let p = document.createElement("p");

    if(valueOfMail.length == 0 || valueOfMail.length < 5){
        p.innerText += "The email is too short";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    let index = valueOfMail.indexOf("@");
    if(index == -1){
        p.innerText += "The email must contain \'@\'";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    if(index == 0){
        p.innerText += "The email cant start with \'@\'";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    let dot = valueOfMail.indexOf(".");
    if(dot == -1){
        p.innerText += "The email must contain \'.\' before domain";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    if(dot < index){
        p.innerText += "Invalid email";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    if(dot == valueOfMail.length-1){
        p.innerText += "Invalid domain";
        document.getElementById("errors").appendChild(p);
        return false;
    }
    if(password.match(/[A-Z]/g) && password.match(/[^a-zA-Z/]/g) && password.match(/[0-9]/g) && password.length >= 6)
    {
        if(password.indexOf('!') == -1 && password.indexOf('@') == -1 && password.indexOf('$') == -1 && password.indexOf('%') == -1 && password.indexOf('#') == -1 && password.indexOf('^') == -1 && password.indexOf('&') == -1 )
        {
            p.innerText += "Invalid password";
             document.getElementById("errors").appendChild(p);
            return false;
        }

        alert("login succesfful!");
        window.login(valueOfMail, password);
        return setTimeout(returnTrue, 2000);
    }
    p.innerText += "Invalid password";
    document.getElementById("errors").appendChild(p);
    return false;
}

function validationRegister() {
    //reseting the error list
    var err = document.getElementById("errors");
     err.innerHTML = '';

    var username = document.getElementById("registerUserName");
    var email = document.getElementById("registerEmail");
    var password = document.getElementById("registerPassword").value;

    let valueOfMail = email.value;
    let p = document.createElement("p");

    //Making validations for every case and giving back for every case different message
    if(valueOfMail.length == 0 || valueOfMail.length < 5){
        p.innerText += "The email is too short";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    //Taking the index and checking if its in the right place.
    var index = valueOfMail.indexOf("@");
    if(index == -1){
        p.innerText += "The email must contain \'@\'";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    if(index == 0){
        p.innerText += "The email cant start with \'@\'";
        document.getElementById("errors").appendChild(p);
        return false;
    }
    //Taking the dot and checking if exists + if its behind @
    var dot = valueOfMail.indexOf(".");
    if(dot == -1){
        p.innerText += "The email must contain \'.\' before domain";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    if(dot < index){
        p.innerText += "Invalid email";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    if(dot == valueOfMail.length-1){
        p.innerText += "Invalid domain";
        document.getElementById("errors").appendChild(p);
        return false;
    }

    if(password.match(/[A-Z]/g) && password.match(/[^a-zA-Z/]/g) && password.match(/[0-9]/g) && password.length >= 6)
    {
        if(password.indexOf('!') == -1 && password.indexOf('@') == -1 && password.indexOf('$') == -1 && password.indexOf('%') == -1 && password.indexOf('#') == -1 && password.indexOf('^') == -1 && password.indexOf('&') == -1 )
        {
            p.innerText += "Invalid password";
             document.getElementById("errors").appendChild(p);
            return false;
        }

        window.register(username, email,password);
        alert("registration succesfful!");
        return setTimeout(returnTrue, 2000);
    }
    p.innerText += "Invalid password";
    document.getElementById("errors").appendChild(p);
    return false;
}
function returnTrue() {
    return true;
}

