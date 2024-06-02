
function signUp(){
    //Getting the signup form and preventing the default behaviour when it is submitted
   document.getElementById("create_account_form").addEventListener("submit", (e) =>{
        e.preventDefault();

        let signUp_data =JSON.parse(localStorage.getItem("signUp_data")) || {}; 

    //Getting all the user input value and saving it in their respective value
        let userName101 = document.getElementById("userName").value;
        let password101= document.getElementById("password").value;
        let firstName101 = document.getElementById("firstName").value;
        let lastName101 = document.getElementById("lastName").value;
        let email101 = document.getElementById("email").value;
    
    //Creating the user object
      let  newUser= {
        userName: userName101,
        userPassword: password101,
        userFirstName: firstName101,
        userLastName: lastName101,
        userEmail: email101,
    
       }
     
     signUp_data[userName101] = newUser


     
       console.log(signUp_data);
        //Saving javaScript obj as string to be save in local storage
        // so that when the browser gets reload or have a session the data can still be save with a key in local storage
        localStorage.setItem("signUp_data", JSON.stringify(signUp_data));
       location.href="login.html";

     
    })
}

signUp();