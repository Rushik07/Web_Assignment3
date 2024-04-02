const $ = (selector)=>{
    return document.querySelector(selector);
};

const focusOnElement = (selector)=>{
    $(selector).focus();
};

const validateEmail = (email)=>{
    return (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email);
}

const validateForm=(e)=>{

    $("#filter-arrivaldate").textContent="";
    $("#filter-nights").textContent = "";
    $("#filter-name").textContent = "";
    $("#filter-email").textContent ="";
    $("#filter-phone").textContent = "";

    let arrival_date = $("#arrivaldate").value;
    let nights = $("#nights").value;
    let name = $("#name").value;
    let email = $("#email").value;
    let phone = $("#phone").value;
    let f = false;

    if (arrival_date == ""){
        $("#filter-arrivaldate").textContent = "This field is required.";
        f = true;
    }

    if (nights == ""){
        $("#filter-nights").textContent = "This field is required.";
        f = true;
    }

    if (name == ""){
        $("#filter-name").textContent = "This field is required.";
        f = true;
    }

    if (email == ""){
        $("#filter-email").textContent = "This field is required.";
        f = true;
    }

    if (phone == ""){
        $("#filter-phone").textContent = "This field is required.";
        f = true;
    }

    if (isNaN(nights)){
        $("#filter-nights").textContent = "Must be numeric.";
        f = true;
    }

    if (validateEmail(email)==false){
        $("#filter-email").textContent = "Must be a valid email address.";
        f = true;
    }

    if (isNaN(phone) || (/[0-9]{10}/).test(phone) == false){
        $("#filter-phone").textContent = "Must be a valid phone number.";
        f = true;
    }

    if(f){
        e.preventDefault();
        if ($("#filter-arrivaldate").textContent != ""){
            focusOnElement("#arrivaldate");
        }

        if ($("#filter-nights").textContent != ""){
            focusOnElement("#nights");
        }

        if ($("#filter-name").textContent != ""){
            focusOnElement("#name");
        }

        if ($("#filter-email").textContent != ""){
            focusOnElement("#email");
        }

        if ($("#filter-phone").textContent != ""){
            focusOnElement("#phone");
        }

    }

};

document.addEventListener("DOMContentLoaded",()=>{
    $("#submit").addEventListener("click",validateForm);
});