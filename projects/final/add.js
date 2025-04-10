document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fullname = document.getElementById("fname").value;
    const TreeID = document.getElementById("TreeID").value;
    const DOB = document.getElementById("DOB").value;
    const POB = document.getElementById("POB").value;
    const JOB = document.getElementById("JOB").value;
    const number = document.getElementById("number").value;
    const Gender = document.getElementById("Gender").value;
    const Living = document.getElementById("Living").value;
    const comment = document.getElementById("comments").value; 

    if (!fullname || !TreeID) { 
        alert("Please provide your full name and Family Tree ID.");
        return;
    }

    if (number === "blank") { 
        alert("Select the number of guests.");
        return;
    }

    const data = {
        fullname, TreeID, DOB, POB, JOB, number, Gender, Living, comment
    };

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "add.json", true); 
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