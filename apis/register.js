


function register() {
    let fullName = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('name').value;

    if (fullName === '' || email === '' || password === '') return window.alert('Please enter all required fields')


    var settings = {
        "url": "http://localhost:5000/api/teacher/add",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "fullName": fullName,
            "email": email,
            "password": password
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        window.alert('Registred Successfully');
        window.location.href = '../login.html'
    });
}