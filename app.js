//add data in firebase
function getUserdata() {
    var Name = document.getElementById("Name");
    var FatherName = document.getElementById("FatherName")
    var RegisteredSemester = document.getElementById("RegisteredSemester")
    var Program = document.getElementById("Program")
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;
    var key = firebase.database().ref('students').push().key
        // var key = Math.random()  * 1947194   ;    //.toFixed use to avoid error
    if (Name.value == "") {
        window.alert("Please enter your name.");
        Name.focus();
        return false;
    } else if (FatherName.value == "") {
        window.alert("Please enter your father name.");
        FatherName.focus();
        return false;
    }

    // else if (RegisteredSemester.value == "") {
    //     window.alert("Please enter a current Registered semester");
    //     RegisteredSemester.focus();
    //     return false;
    // }

    // else if (Email.value == "") {
    //     window.alert("Please enter your valid Email");
    //     Email.focus();
    //     return false;
    // }

    // else if (Password.value == "") {
    //     window.alert("Please enter your password");
    //     Password.focus();
    //     return false;
    // }


    firebase.auth().createUserWithEmailAndPassword(Email, Password).then(function() {
        alert('User Registration Successfully!');

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        alert("Error : " + errorMessage);
        // ...
    });

    // var students = {
    //     Name: Name.value,
    //     FatherName: FatherName.value,
    //     RegisteredSemester: RegisteredSemester.value,
    //     Program: Program.value,
    //     Email: Email.value,
    //     Password: Password.value,
    //     key: key
    // }



    // console.log(students)
    // firebase.database().ref('students/' + key).set(students)


    // reload();
    // locate();

}
// console.log(firebase.database)

function reload() {
    window.location.reload();
    alert("Your registretion form submitted Thankyou!")
}

function locate() {
    window.location.href = "successfully.html";
}




//firebase login authentication
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.location.href = 'successfully.html';
        var user = firebase.auth().currentUser;

        if (user != null) {
            var email_id = user.email;
            document.getElementById("para").innerHTML = "welcome user : " + email_id;
        }
    } else {
        // No user is signed in.
    }
});

function formVAlidation() {
    var email = document.getElementById("input1").value;
    var password = document.getElementById("input2").value;
    // alert(useremail + " " + userpassword)
    // if (email.value == "") {
    //     window.alert("Please enter your Email.");
    //     email.focus();
    //     return false;
    // }

    // else if (password.value == "") {
    //     window.alert("Please enter your password.");
    //     password.focus();
    //     return false;
    // }
    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        alert('Succesfully Login');

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;


        window.alert("Error : " + errorMessage);
        // ...
    });

}


//move to registration form
function regiterPage() {
    window.location.href = "register.html"
}


//firebase logout
function logout() {
    firebase.auth().signOut().then(function() {
        window.location.href = 'index.html'
            // Sign-out successful.
        alert("Sign-out successful")
    });
}


//getfirebase data
// function getFirebasedata() {
//     firebase.database().ref('students').on('child_added', function (data) {
//         console.log(data.val())
//     })
// }
// getFirebasedata();