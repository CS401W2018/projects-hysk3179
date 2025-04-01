document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const fullname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const indate = document.getElementById("inday").value;
    const outdate = document.getElementById("outday").value;
    const password = document.getElementById("password").value;
    const ppl = document.getElementById("number").value;
    const remember = document.getElementById("remember").value;
    const comment = document.getElementById("comments").value;
    
    if (!fullname || !email) {
        alert("Please provide your full name or email.");
        return;
    }

    if (number === "blank") {
        alert("Select the number of guest.");
        return;
    }

    

    const data = {
        fullname, email, indate, outdate, password, ppl, remember, comment
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState === 4) {
            alert("Error submitting form.");
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
});