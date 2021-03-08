
function phoneValidate() {
    var text = document.getElementById('Phone').value;
    var regx = /^(971)[0-9]{2}\d{7}$/;
    if (regx.test(text)) {
        document.getElementById('phoneText').innerHTML="Valid";
        document.getElementById('phoneText').style.visibility="visible";
        document.getElementById('phoneText').style.color="green";
        document.getElementById('Phone').style.border="2px solid green";
    } else {
      document.getElementById('phoneText').style.visibility="visible";
      document.getElementById('phoneText').style.color="red";
      document.getElementById('Phone').style.border="2px solid red";
    }
}

function emailValidate() {
    var email = document.getElementById('email').value;
    var regx = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    console.log(regx.test(email));
    if (regx.test(email)) {
        document.getElementById('emailText').innerHTML="Valid";
        document.getElementById('emailText').style.visibility="visible";
        document.getElementById('emailText').style.color="green";
        document.getElementById('email').style.border="2px solid green";
    } else {
        document.getElementById('emailText').style.visibility="visible";
        document.getElementById('emailText').style.color="red";
        document.getElementById('email').style.border="2px solid red";
    }
}

