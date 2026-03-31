document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const first = document.getElementById("firstnameInput").value;
    const email = document.getElementById("emailInput").value;
    const password = document.getElementById("passwordInput").value;
    const age = document.getElementById("age").value;
    const state = document.getElementById("state").value;
    const comments = document.getElementById("comments").value;

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!first || !email || !password) {
        alert("Please fill in all required fields.");
        return;
    }

    if (first.length < 3) {
        alert("First name must be at least 3 characters.");
        return;
    }

    if (!age || age < 18 || age > 60) {
        alert("Age must be between 18 and 60.");
        return;
    }

    if (!gender) {
        alert("Please select a gender.");
        return;
    }

    const data = {
        firstname: first,
        email: email,
        password: password,
        age: age,
        gender: gender.value,
        state: state,
        comments: comments
    };

    console.log(data);

    // AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true); // use GET for GitHub

    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            document.getElementById("responseMessage").innerText = response.message;
            document.getElementById("myForm").reset();
        }
    };

    xhr.send();
});