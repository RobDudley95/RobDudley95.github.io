function loadXMLDoc1() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            populateSelection(this);
        }
    };
    xmlhttp.open("GET", "product-list.xml", true);
    xmlhttp.send();
}
            
function populateSelection(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("phone");
    
    // initialise product list variables
    var brand;
    var phone;
    var image;
    var upfrontcost;
    var price;
    var html = "\n";
    if (document.getElementById("selectionBox").value == "-") {
        html = "<p>You need to select a phone first</p>";
        total = 0;
        
        document.getElementById("selection").innerHTML = html;
        document.getElementById("total").innerHTML = "&pound;" + total;
        document.getElementById("readytopay").style.display = "none";
    }
    else {
        // populate HTML
        i = parseInt(document.getElementById("selectionBox").value);
        brand = x[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue;
        phone = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        image = x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        upfrontcost = x[i].getElementsByTagName("upfrontcost")[0].childNodes[0].nodeValue;
        price = x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
        
        html += "<br><h3>" + brand + " " + phone + "</h3>\n";
        html += "<img src='" + image + "' alt='" + phone + "'>\n";
        html += "<p class='caption'>Upfront cost</p>\n";
        html += "<p class='cost'>&pound;" + upfrontcost + "</p>\n";
        html += "<p class='caption'>Price per month</p>\n";
        html += "<p class='cost'>&pound;" + price + "</p><br>\n";
        
        total = parseInt(upfrontcost) + parseInt(price);
        
        document.getElementById("selection").innerHTML = html;
        document.getElementById("total").innerHTML = "&pound;" + total;
        document.getElementById("readytopay").style.display = "block";
    }
                
    // display result

}