const $ = (selector)=>{
    return document.querySelector(selector);
};

const makeChange=(amount)=>{
    let q = parseInt(amount/25);
    let d = parseInt((amount-q*25)/10);
    let n = parseInt((amount-(q*25 + d*10))/5);
    let p = amount-(q*25 + d*10 + n*5);
    $("#quarters").value=q;
    $("#dimes").value=d;
    $("#nickels").value=n;
    $("#pennies").value=p;
    
};

const processEntry = (e) =>{
    let amt = $("#amount").value;
    if(isNaN(amt) || amt < 0 || amt > 99){
        alert("Enter valid amount");
    }
    else{
        makeChange(amt);
        e.preventDefault();
    }
};

document.addEventListener("DOMContentLoaded",()=>{
    $("#submit").addEventListener("click",processEntry);
});

