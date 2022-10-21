var user = document.getElementById('user');
var name1 = document.getElementById('name');
var mail = document.getElementById('mail');
var bio = document.getElementById('bio');
var db = firebase.database();

function send() {
    db.ref(user.value).push({
        user: user.value,
        name: name1.value,
        mail: mail.value,
        bio: bio.value,
    });
}