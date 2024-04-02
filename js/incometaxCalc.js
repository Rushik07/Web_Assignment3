const $ = (selector)=>{
    return document.querySelector(selector);
};

const processEntry = (input)=>{
    let userIncome = $("#userIncome").value;

    if (isNaN(userIncome) || userIncome < 0 || userIncome == ""){
        alert("Enter valid Income");
    }
    else{
        $("#taxtobepaid").value=calculateTax(userIncome);
        input.preventDefault();
    }
    $("#userIncome").focus();
    
};

const calculateTax=(userIncome)=>{
    let incomeAmount = parseInt(userIncome);
    if (incomeAmount <= 9875){
        return (incomeAmount*0.1).toFixed(2);
    }
    else if (incomeAmount <= 40125){
        return (987.50+((incomeAmount-9875)*0.12)).toFixed(2);
    }
    else if (incomeAmount <= 85525){
        return (4617.50+((incomeAmount-40125)*0.22)).toFixed(2);
    }
    else if (incomeAmount <= 163300){
        return (14605.50+((incomeAmount-85525)*0.24)).toFixed(2);
    }
    else if (incomeAmount < 207350){
        return (33271.50+((incomeAmount-163300)*0.32)).toFixed(2);
    }
    else if (incomeAmount < 518400){
        return (47367.50+((incomeAmount-207350)*0.35)).toFixed(2);
    }
    else{
        return (156235+((incomeAmount-518400)*0.37)).toFixed(2);
    }
};
    


document.addEventListener("DOMContentLoaded",()=>{
    $("#submit").addEventListener("click",processEntry);
});