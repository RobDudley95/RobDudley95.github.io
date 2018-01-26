function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            loadProducts(this);
        }
    };
    xmlhttp.open("GET", "product-list.xml", true);
    xmlhttp.send();
}

function loadProducts(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("phone");
    
    var brand;
    var phone;
    var html = "\n <option value='-'></option> \n";
    
    for (i = 0; i < x.length; i++) {
        brand = x[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue;
        phone = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        
        html += "<option value='" + i + "'>" + brand + " " + phone + "</option> \n";
    }
    
    document.getElementById("selectionBox").innerHTML = html;
}

function getYear () {
    var i;
    
    var d = new Date;
    var year = d.getFullYear();
    var html = "\n";
    
    for (i = 0; i < 10; i++) {
        html += "<option value='" + i + "'>" + year + "</option>\n";
        html += year;
        year++;
    }
    
    document.getElementById("expiryDate2").innerHTML = html;
}