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
    
    // initialise product list variables
    var brand;
    var phone;
    var image;
    var upfrontcost;
    var price;
    var features;
    var html = "\n";
            
    // populate product list
    for (i = 0; i < x.length; i++) {
        brand = x[i].getElementsByTagName("brand")[0].childNodes[0].nodeValue;
        phone = x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        image = x[i].getElementsByTagName("image")[0].childNodes[0].nodeValue;
        upfrontcost = "&pound;" + x[i].getElementsByTagName("upfrontcost")[0].childNodes[0].nodeValue;
        price = "&pound;" + x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
        features = x[i].getElementsByTagName("features")[0].childNodes[0].nodeValue;
            
        // add values to product list
        html += "<div class='product'>";
        html += "\n <h2 class='brand'>" + brand + "</h2>";
        html += "\n <h2 class='name'>" + phone + "</h2>";
        html += "\n <img src='" + image + "' alt='" + phone + "'> <br> \n";
        if (features.includes("..") == true) {
            html += "<img style='height:35px; width:35px; margin: 5px;' src='images/placeholder.png' alt='4G'>" 
        }
        if (features.includes("4G") == true) {
            html += "<img style='height:35px; width:35px; margin: 5px;' src='images/4G.png' alt='4G'>"
        }
        if (features.includes("iOS") == true) {
            html += "<img style='height:35px; width:35px; margin: 5px;' src='images/ios.png' alt='iOS'>"
        }
        if (features.includes("Android") == true) {
            html += "<img style='height:35px; width:35px; margin: 5px;' src='images/android.png' alt='Android'>"
        }
        html += "<p class='caption'>Upfront cost</p>\n <p class='cost'>" + upfrontcost + "</p>";
        html += "<p class='caption'>Price per month</p>\n <p class='cost'>" + price + "</p>";
        html += "</div> \n";
    }
                
    // populate product list
    document.getElementById("product-list").innerHTML = html; 
}