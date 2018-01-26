var formError = true;

function selectVal() {
    var phone = document.getElementById("selectionBox");
    var selection = phone.options[phone.selectedIndex].index;
    if (selection == 0) {
        document.getElementById("select_val").innerHTML = "Please select a phone";
    }
    else {
        document.getElementById("select_val").innerHTML = "";
    }
}

function firstnameVal() {
    var firstname = document.forms["orderForm"]["firstname"].value;
    if (firstname == "") {
        document.getElementById("fn_val").innerHTML = "Please enter your first name";
    }
    else {
        document.getElementById("fn_val").innerHTML = "";
    }
}

function surnameVal() {
    var surname = document.forms["orderForm"]["surname"].value;
    if (surname == "") {
        document.getElementById("sn_val").innerHTML = "Please enter your surname";
    }
    else {
        document.getElementById("sn_val").innerHTML = "";
    }
}

function phoneVal() {
    var number = document.forms["orderForm"]["phoneNumber"].value;
    var regex = /^([0-9]){7,15}$/;
    if (number == "") {
        document.getElementById("num_val").innerHTML = "Please enter your phone number";
    }
    else if (regex.test(number)) {
        document.getElementById("num_val").innerHTML = "";
    }
    else {
        document.getElementById("num_val").innerHTML = "Please enter a valid phone number";
    }
}

function emailVal() {
    var email = document.forms["orderForm"]["email"].value;
    var regex = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (email == "") {
        document.getElementById("email_val").innerHTML = "Please enter your e-mail address";
        document.getElementById("confirmemail_hidden").style.display = "none";
    }
    else if (regex.test(email)) {
        document.getElementById("email_val").innerHTML = "";
        document.getElementById("confirmemail_hidden").style.display = "block";
    }
    else {
        document.getElementById("email_val").innerHTML = "Please enter a valid e-mail address";
        document.getElementById("confirmemail_hidden").style.display = "none";
    }
}

function emailVal2() {
    var email = document.forms["orderForm"]["email"].value;
    var confirmemail = document.forms["orderForm"]["confirmemail"].value;
    if (email != confirmemail) {
        document.getElementById("email_val2").innerHTML = "E-mail addresses must match";
    }
    else {
        document.getElementById("email_val2").innerHTML = "";
    }
}

function addressVal() {
    var address = document.forms["orderForm"]["addressline1"].value;
    if (address == "") {
        document.getElementById("address_val").innerHTML = "Please enter the first line of your address";
    }
    else {
        document.getElementById("address_val").innerHTML = "";
    }
}

function addressTownVal() {
    var town = document.forms["orderForm"]["town"].value;
    if (town == "") {
        document.getElementById("town_val").innerHTML = "Please enter a town/city";
    }
    else {
        document.getElementById("town_val").innerHTML = "";
    }
}

function addressPostcodeVal() {
    var postcode = document.forms["orderForm"]["postcode"].value;
    var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
    if (postcode == "") {
        document.getElementById("postcode_val").innerHTML = "Please enter your postcode";
    }
    else if (regex.test(postcode)) {
        document.getElementById("postcode_val").innerHTML = "";
    }
    else {
        document.getElementById("postcode_val").innerHTML = "Please enter a valid postcode";
    }
}

function cardVal() {
    var card = document.forms["orderForm"]["cardNumber"].value;
     
    if (card.startsWith("34") || card.startsWith("37")) {
        document.getElementById("card_val").innerHTML = "<i class='fa fa-cc-amex' style='font-size: 18pt;' aria-hidden='true'></i>";
    }
    else if (card.startsWith("4")) {
        document.getElementById("card_val").innerHTML = "<i class='fa fa-cc-visa' style='font-size: 18pt;' aria-hidden='true'></i>";
    }
    else if (card.startsWith("51") || card.startsWith("52") || card.startsWith("53") || card.startsWith("54") || card.startsWith("55")) {
        document.getElementById("card_val").innerHTML = "<i class='fa fa-cc-mastercard' style='font-size: 18pt;' aria-hidden='true'></i>";
    }
    else {
        document.getElementById("card_val").innerHTML = "";
    }
}

function cardVal2() {
    var card = document.forms["orderForm"]["cardNumber"].value;
    var amex = /^(?:3[47][0-9]{13})$/;
    var visa = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var mastercard = /^(?:5[1-5][0-9]{14})$/
    
    if (card.match(amex)) {
        document.getElementById("card_val2").innerHTML = "";
    }
    else {
        if (card.match(visa)) {
            document.getElementById("card_val2").innerHTML = "";
        }
        else {
            if (card.match(mastercard)) {
                document.getElementById("card_val2").innerHTML = "";
            }
            else {
                if (card == "") {
                    document.getElementById("card_val2").innerHTML = "Please enter your card number";
                }
                else {
                    document.getElementById("card_val2").innerHTML = "Please enter a valid card number"
                }
            }
        }
    }
}

function cvvVal() {
    var cvv = document.forms["orderForm"]["cvv"].value;
    
    if (cvv.length != 3 && cvv.length != 0) {
        document.getElementById("cvv_val").innerHTML = "Please enter a valid CVV code";
    }
    else if (cvv == "") {
        document.getElementById("cvv_val").innerHTML = "Please enter your CVV";
    }
    else {
        document.getElementById("cvv_val").innerHTML = "";
    }
}

function runAllTests() {
    selectVal();
    firstnameVal();
    surnameVal();
    phoneVal();
    emailVal();
    emailVal2();
    addressVal();
    addressTownVal();
    addressPostcodeVal();
    cardVal();
    cardVal2();
    cvvVal();
}

function submitVal() {
    var phone = document.getElementById("selectionBox");
    var selection = phone.options[phone.selectedIndex].index;
    var firstname = document.forms["orderForm"]["firstname"].value;
    var surname = document.forms["orderForm"]["surname"].value;
    var number = document.forms["orderForm"]["phoneNumber"].value;
    var email = document.forms["orderForm"]["email"].value;
    var confirmemail = document.forms["orderForm"]["confirmemail"].value;
    var address = document.forms["orderForm"]["addressline1"].value;
    var town = document.forms["orderForm"]["town"].value;
    var postcode = document.forms["orderForm"]["postcode"].value;
    var card = document.forms["orderForm"]["cardNumber"].value;
    var cvv = document.forms["orderForm"]["cvv"].value;   
    
    if (selection == 0 || firstname == "" || surname == "" || number == "" || email == "" || confirmemail == "" || address == "" || town == "" || postcode == "" || card == "" || cvv == "") {
        runAllTests();
        alert("There are errors in the form\nPlease correct them and try again");
        return false;
    }
    else if (cvv.length != 3) {
        runAllTests();
        alert("There are errors in the form\nPlease correct them and try again");
        return false;
    }
    else if (email != confirmemail) {
        runAllTests();
        alert("There are errors in the form\nPlease correct them and try again");
        return false;
    }
}