function getUser() {
    var location = window.location.href;
    var index = location.indexOf('=');
    var username = location.slice(index + 1);
    return username;
}

function getData() {
    var db = firebase.database();

    db.ref(getUser()).once("value", value => {
        user.innerHTML = value.val().user;
        name1.innerHTML = value.val().name;
        mail.innerHTML = value.val().mail;
        bio.innerHTML = value.val().bio;
    });
}
