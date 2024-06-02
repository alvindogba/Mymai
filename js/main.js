
//Getting the password Reset page
    function resetPassWord(){
        document.getElementById("password_reset_form").addEventListener("submit", (e)=> {
            e.preventDefault();
        let newPassword = document.getElementById("newpassword").value;
        let confirmPassword = document.getElementById("confirm_newpassword").value;
        //get hold of signup data
        
        if (newPassword === confirmPassword){
            let nPassword = confirmPassword;
            console.log(`Password has been reset, this is your new password  ${nPassword}`);
              //Getting sign up data from the localStorage
              let signUp_data = JSON.parse(localStorage.getItem("signUp_data"));
              signUp_data.password = nPassword;

              let updatedData = JSON.stringify(signUp_data);
              // Turning the data back to local storage
              localStorage.setItem("signUp_data", updatedData);
              console.log("UpdatedData:", localStorage.getItem("signUp_data"));
              location.href="login.html";
        

    
        }
        else{
            console.log("Password not match");
            
        }
  
    })
    }
   

    //Logging Out
document.getElementById("logout").addEventListener("click", (e) =>{
    alert("Are you show you want to log out")
  location.href="login.html";

})



function bugetSetting(){
    document.getElementById("bud_setting_form").addEventListener("submit", (e) => {
        e.preventDefault();

let userBudget = JSON.parse(localStorage.getItem("userBudget")) || {};

let month = document.querySelector("#set_buget_month").value; 
let income = document.querySelector("#income").value;  
let currencyType = document.querySelector("#currencyType").value;
let houseCategory = document.querySelector("#housing").value;   
let transCategory = document.querySelector("#transpotation").value; 
let foodCategory = document.querySelector("#food").value; 
let insuranceCategory = document.querySelector("#insurance").value;  
let entCategory = document.querySelector("#entertainment").value;  
let helthCategory = document.querySelector("#healthcare").value;
let savings = document.querySelector("#saving").value;   
let mesilunous = document.querySelector("#mesilunous").value; 
 
   
        
            let newBudget={
                period: month,
                income: income,
                currency: currencyType,
                housing:  houseCategory,
                transportation: transCategory,       
                food: foodCategory,
                insurance: insuranceCategory,
                entertainment: entCategory,
                healthCare : helthCategory,
                saving: savings,
                mesilunious:  mesilunous
            }
            userBudget[month] = newBudget;
        localStorage.setItem("userBudget", JSON.stringify(userBudget));
        location.href="budget_summary.html";

    }) 
}

// Sending the the set Budget to the budget summary view so that the user can see or eddit distribution
 
function budgetSummary(){
    document.getElementById("bud_summary_form").addEventListener("submit", (e) => {
        e.preventDefault();
        
           //Assigning the budgetData to the   category limit
    let hLimit = document.getElementById("h_limit");
    let tLimit =  document.getElementById("t_limit");
    let fLimit =   document.getElementById("f_limit");
    let iLimit = document.getElementById("i_limit");
    let entLimit = document.getElementById("ent_limit");
    let hthLimit = document.getElementById("hth_limit");
    let sLimit = document.getElementById("s_limit");
    let mLimit = document.getElementById("m_limit");

//Assigning the Amount spent
let hspent = document.getElementById("h_spent");
let tSpent = document.getElementById("t_spent");
let fSpent = document.getElementById("f_spent"); 
let iSpent = document.getElementById("i_spent");
let entSpent = document.getElementById("ent_spent");  
let hthSpent = document.getElementById("hth_spent");
let sSpent = document.getElementById("s_spent"); 
let mSpent = document.getElementById("m_spent");

//Assign the Remaining
let hremaining = document.getElementById("h_remaining");
let tRemaining = document.getElementById("t_remaining");
let fRemaining = document.getElementById("f_remaining");
let iRemaining = document.getElementById("i_remaining");
let entRemaining = document.getElementById("ent_remaining");
let hthRemaining = document.getElementById("hth_remaining");
let sRemaining = document.getElementById("s_remaining");
let mRemaining = document.getElementById("m_remaining");
  // Getting the Set Budget      
        let userBudget = JSON.parse(localStorage.getItem("userBudget"));
        let budKey = document.getElementById("bud_period").value;
        let budgetData = userBudget[budKey];
       if (budgetData){
            hLimit.value = budgetData.housing;
    tLimit.value = budgetData.transportation;
    fLimit.value = budgetData.food;
    iLimit.value = budgetData.insurance;
    entLimit.value = budgetData.entertainment;
    hthLimit.value = budgetData.healthCare;
    sLimit.value = budgetData.saving;
    mLimit.value = budgetData.mesilunious;
       }
       else{ 
      
        alert("Budget Not found")
        this.target.reset();
       
        
       }
// Getting the expense data save in local storage
let expenses_data = JSON.parse(localStorage.getItem("expenses_data")) || [];
    for(let index =0; index < expenses_data.length; index++){
      let expkey=expenses_data[index];
      switch (expkey.category) {
        case "Housing":
            let hNumberLimit = Number(hLimit.value);
            let expkeyNumberAmount = Number(expkey.amount) + Number(expkey.amount);
            // the addition of the amount spent
            
            hspent.value = expkeyNumberAmount;
            let sSpentNumber = Number(hspent.value);
            console.log(sSpentNumber)
            hremaining.value = hNumberLimit - sSpentNumber;
            

            break;
        case "Transpotation":    
        tSpent.value = (tLimit.value - expkey.amount)
        tRemaining.value = tLimit.value - tSpent.value;
            break;
        case  "Food":
            fSpent.value = (fLimit.value - expkey.amount)
            fRemaining.value = fLimit.value - fSpent.value;
            break;
        case  "Insurrance":
            iSpent.value = (iLimit.value - expkey.amount)
            iRemaining.value = iLimit.value - iSpent.value;
            break;
        case "Entertainment":    
            entSpent.value = (entLimit.value - expkey.amount)
            entRemaining.value = entLimit.value - entSpent.value;
            break;
        case "HealthCare":
            hthSpent.value = (hthLimit.value - expkey.amount)
            hthRemaining.value = hthLimit.value - hthSpent.value;
 
            break;
        case "Saving":
            sSpent.value = (sLimit.value - expkey.amount)
            sRemaining.value = sLimit.value - sSpent.value;

            break;
        case "Mesilunious":
            mSpent.value = (mLimit.value - expkey.amount)
            mRemaining.value = mLimit.value - mSpent.value;

 
        default:
            break;
      }
    }
          
    })
}

// The Expense Entry
document.getElementById("expense_form").addEventListener("submit", (e) => {
    e.preventDefault();

    let expenseName = document.getElementById("expenseName").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("entry_category").value;
    let amount = document.getElementById("expenseAmount").value;
    let discription= document.getElementById("discription").value;
  
    let expense = {
        expenseName,
        date,
        category,
        amount,
        discription,
      
    };

 // pushing the expense obj to the array in the local storage
    let expenses_data = JSON.parse(localStorage.getItem("expenses_data")) || [];
    expenses_data.push(expense);
    localStorage.setItem("expenses_data", JSON.stringify(expenses_data));
    showExpenses();
document.getElementById("expense_form").reset();
})





//writing a function that display the expense been made
function showExpenses(){
    
    let expenses_data = JSON.parse(localStorage.getItem("expenses_data")) || [];
    let tableBody =document.getElementById("expenses_body");
    tableBody.innerHTML="";
  
//Looping through the expenses_data and displaying the litrate template in the table body
expenses_data.forEach((expense, index) => {
    let row = document.createElement("tr");

    row.innerHTML = `
       <td>${expense.category}</td>
        <td>${expense.expenseName}</td>
        <td>${expense.amount}</td>
        <td class="togg show_hide_detail">${expense.date}</td>
        <td class="togg show_hide_detail">${expense.discription}
        
    
      
        <td>
            <button id="edit" onclick="editExpense(${index})">Edit</button>
            <button id="delete" onclick="deleteExpense(${index})">Delete</button>
            <button class="detail" onclick="showDetail(${index})">View Detail</button>
        </td>
    `;

    tableBody.appendChild(row);
});
}
document.addEventListener("DOMContentLoaded", showExpenses);

function editExpense(index) {
    let expenses = JSON.parse(localStorage.getItem("expenses_data"));
    let expense = expenses[index];

    document.getElementById("expenseName").value = expense.expenseName;
    document.getElementById("entry_category").value = expense.category;
    document.getElementById("expenseAmount").value = expense.amount;
    document.getElementById("date").value = expense.date;
    document.getElementById("discription").value =  expense.discription;


    deleteExpense(index);
}

function deleteExpense(index) {
    let expenses = JSON.parse(localStorage.getItem("expenses_data"));
    expenses.splice(index, 1);
    localStorage.setItem("expenses_data", JSON.stringify(expenses));
    showExpenses();
}

//showing the expense list Detail
function showDetail(){
    let detailList = document.getElementsByClassName("togg");
    for(let i = 0; i < detailList.length; i++){
    detailList[i].classList.toggle("show_hide_detail")
    
    }

    let detailBtn = document.getElementsByClassName("detail");
    for(let i = 0; i < detailBtn.length; i++){
         if(detailBtn[i].innerText === "View Detail"){
        detailBtn[i].innerHTML="Close Detail";
    }
    else if(detailBtn[i].innerHTML ==="Close Detail"){
        detailBtn[i].innerHTML= "View Detail";
    }
    else{
        
    }
        }
  


   
}

