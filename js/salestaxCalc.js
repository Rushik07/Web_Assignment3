const $ = (selector) => {
    return document.querySelector(selector);
}

const validate=(taxIncome,taxRate)=>{
    let char="";
    if ( isNaN(taxIncome) || taxIncome <= 0 || taxIncome >=10000){
        char += "Sub Total range should be between 0 and  10000";
    }

    if (isNaN(taxRate) || taxRate <= 0 || taxRate >= 12){
        char += "\nTax Rate rang should be between 0 and 12";
    }
    return char;
};

const processEntries=(char) =>{
    const taxIncome = parseInt($("#taxIncome").value);
    const taxRate = parseInt($("#taxrate").value);
    

    if (validate(taxIncome,taxRate) == ""){
        $("#usersaletax").value = (taxIncome*taxRate*0.01).toFixed(2);

        $("#total").value = (taxIncome*(1+(taxRate*0.01))).toFixed(2);
        char.preventDefault();
    }
    else{
        alert(validate(taxIncome,taxRate));
    }
    
    
}

const cleartaxIncome = ()=>{
    $("#taxIncome").value = "";
    $("#taxIncome").focus();
}

const cleartaxrate = ()=>{
    $("#taxrate").value = "";
    $("#taxrate").focus();
}

const clear = ()=>{
    cleartaxIncome();
    cleartaxrate();
    $("#usersaletax").value = "";
    $("#total").value = "";
    $("#taxIncome").focus();
}

document.addEventListener("DOMContentLoaded",()=>{
    $("#taxIncome").focus();
    $("#submit").addEventListener("click",processEntries);
    $("#clear").addEventListener("click",clear);
    $("#taxIncome").addEventListener("click",cleartaxIncome);
    $("#taxrate").addEventListener("click",cleartaxrate);
});