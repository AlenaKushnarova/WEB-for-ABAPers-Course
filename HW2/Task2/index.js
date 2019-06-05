document.getElementById('btn1').addEventListener("click", content_name);

function content_name() {
    var cont = document.getElementById('orangeForm-name').value;
    check_username(cont);
}

function check_username(cnt) {
    if (cnt == "") {
       alert("Please, enter User name!");

    } else if (check_number(cnt)) {
        reverse_username(cnt);
    } else {
        translate_user_name(cnt)
    }
}

function check_number(UserName) {
    return /\d/.test(UserName);
}

function reverse_username(UsNam){
    alert("User name contains the number! Reverse user name:   " + UsNam.split("").reverse().join(""));
}

function translate_user_name(UsN) {
    let resalt = '';
    for (var i = 0; i < UsN.length; ++i) {
        l = UsN[i];
        if (i % 2 == 0) {
            resalt += l.toUpperCase();
        } else {
            resalt += l.toLowerCase();
        }
    }
    alert("User name was changed:   " + resalt); 
}