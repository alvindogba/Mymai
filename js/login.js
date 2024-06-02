//The Log in Function 

function logIn(){
    //Getting the Log in form 
document.getElementById("login_form").addEventListener("submit", (e) =>{
    e.preventDefault();
   

    let logIn_username = document.getElementById("userName").value;
    let logIn_password = document.getElementById("password").value;

    // Using JSON.parse to get the save reg data from the local storage
    let signUp_data = JSON.parse(localStorage.getItem("signUp_data"));
   

    let storeUserNameKey = signUp_data[logIn_username];
    let keyUserName = storeUserNameKey.userName;
    let keyUserPassword = storeUserNameKey.userPassword;
    let logFirstName = storeUserNameKey.userFirstName;
    let logLastName = storeUserNameKey.userLastName;

    // validatting the user name and email
    if(keyUserName === logIn_username && keyUserPassword === logIn_password){
        console.log("Log in was succesful");
        localStorage.setItem("isLogedIn", true);
        alert(`Continue as ${logFirstName + " " + logLastName}`);
        location.href="budget_setting.html";
    }
    else{
        alert(storeUserPassword );
        localStorage.setItem("isLogedIn", false)
    }
})
}


logIn();