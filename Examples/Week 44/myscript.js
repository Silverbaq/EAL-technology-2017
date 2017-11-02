$(document).ready(function () {
    // Initialize Firebase
    var config = {
        // ***************************
        // Insert your setting here!!!
        // ***************************
    };
    firebase.initializeApp(config);

    var db = firebase.database();

    const txtLoginEmail = document.getElementById('txtLoginEmail');
    const txtLoginPassword = document.getElementById('txtLoginPassword');
    const btnLogin = document.getElementById('btnLogin');

    const txtCreateEmail = document.getElementById('txtCreateEmail');
    const txtCreatePassword = document.getElementById('txtCreatePassword');
    const btnCreate = document.getElementById('btnCreate');

    const btnSignOut = document.getElementById('signOut');

    const txtAnimalName = document.getElementById('animalName');
    const btnAddAnimal = document.getElementById('btnAddAnimal');


    // Create User with email and password
    btnCreate.addEventListener('click', e => {
        let email = $(txtCreateEmail).val();
        let password = $(txtCreatePassword).val();
        console.log(email + ' ' + password);
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error.message);
        });
    });

    // Login with email and password
    btnLogin.addEventListener('click', e => {
        let email = $(txtLoginEmail).val();
        let password = $(txtLoginPassword).val();

        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            console.log(error.message);
        });
    });

    // Sign user out
    btnSignOut.addEventListener('click', e => {
        firebase.auth().signOut();
    });



    // Checks is user is logged in (or not)
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) { // User is signed in.
            // Show logged in data
            console.log(user);
            $('#loginDiv').hide();
            $('#createDiv').hide();
            $('#userData').show();
        } else {
            console.log("User is not logged in");
            $('#loginDiv').show();
            $('#createDiv').show();
            $('#userData').hide();
        }
    });

    
    // Add child to database
    const my_ref = firebase.database().ref().child('animals');
    my_ref.on('child_added',function(snapshot){
        console.log(snapshot.val());
        $('#dataUL').append($("<li>").text(snapshot.val().name));

    });

    // Add animal name to database
    btnAddAnimal.addEventListener('click', e => {
        let name = $(txtAnimalName).val();
        let my_object = {
            name: name,
            age: 100,
        }

        my_ref.push(my_object);
    });

}());