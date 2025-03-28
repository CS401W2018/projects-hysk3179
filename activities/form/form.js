document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    // alert("Form Submitted");
    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    if(!fullname || !email) {
        alert("You need a name and email.");
        return;
    }
    if (!age || !age <18) {
        alert("You need to be 18");
        return;
    }

    
    const formData = {
        name: fullname,
        email: email,
        password: password,
        age: age,

    }
    console.log(formData);
})