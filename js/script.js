
function validation() {
    var user = document.getElementById('username').value;

    var email = document.getElementById('emailaddress').value;

    var sub = document.getElementById('subject').value;

    var textarea = document.getElementById('message').value;

    //username
    if (user == "") {
        document.getElementById('user').innerHTML = "** Please fill the username field";
        return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('user').innerHTML = "** User length must be between 2 and 20 letters";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById('user').innerHTML = "** Only characters are available not number";
        return false;
    }

    //email 

    if (email == "") {
        document.getElementById('email').innerHTML = "** Please fill the email field";
        return false;
    }
    if (email.indexof('@') <= 0) {
        document.getElementById('email').innerHTML = "** @ Invalid position";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('email').innerHTML = "** . Invalid position";
        return false;
    }
    // subject

    if (sub == "") {
        document.getElementById('subjects').innerHTML = "** Please fill the Subject field";
        return false;
    }

    // textarea

    if (textarea == "") {
        document.getElementById('textarea').innerHTML = "** Leave Message....";
        return false;
    }


}


function Sendrequest(){
    var yname = document.getElementById('name').value;

    var mail = document.getElementById('mailid').value;

    var mobile = document.getElementById('phnumber').value;

    var message = document.getElementById('sometext').value;

    //username
    if (yname == "") {
        document.getElementById('yname').innerHTML = "** Please fill the username field";
        return false;
    }
    if ((yname.length <= 2) || (yname.length > 20)) {
        document.getElementById('yname').innerHTML = "** User length must be between 2 and 20 letters";
        return false;
    }
    if (!isNaN(yname)) {
        document.getElementById('yname').innerHTML = "** Only characters are available not number";
        return false;
    }

    //email 

    if (mail == "") {
        document.getElementById('mail').innerHTML = "** Please fill the email field";
        return false;
    }
    if (mail.indexof('@') <= 0) {
        document.getElementById('mail').innerHTML = "** @ Invalid position";
        return false;
    }
    if ((mail.charAt(mail.length - 4) != '.') && (mail.charAt(mail.length - 3) != '.')) {
        document.getElementById('mail').innerHTML = "** Invalid position";
        return false;
    }
    // mobile number

    if (mobile == "") {
        document.getElementById('mobile').innerHTML = "** Please fill the mobile no field";
        return false;
    }
    if (isNaN(mobile)) {
        document.getElementById('mobile').innerHTML = "** Must write digits only not characters";
        return false;
    }
    if (mobile.length != 10) {
        document.getElementById('mobile').innerHTML = "** Mobile number must be 10 digit only";
        return false;
    }

    // textarea

    if (message == "") {
        document.getElementById('message').innerHTML = "** Leave Message....";
        return false;
    }

}