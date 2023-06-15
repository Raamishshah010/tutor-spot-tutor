


let tutorToken = localStorage.getItem('teacherID')

function addCourse() {


    let title = document.getElementById('title').value;
    let price = document.getElementById('price').value;
    let description = document.getElementById('description').value;

    if(title === "" || price === "" || description === "") return window.alert("Please enter all fields")

    var settings = {
        "url": "http://localhost:5000/api/course/add",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "x-auth-token": tutorToken,
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            "title": title,
            "description": description,
            "price": parseInt(price)
        }),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        window.alert('Course Added Successfully');
        window.location.reload();
    });
}