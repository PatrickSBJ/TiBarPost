function verifyNumber(){
    let inputNum = document.getElementById("trackingNumber").value;
    
    if(inputNum == "02935478293753"){
        displayShipmentInfo();
    }
}
function displayShipmentInfo(){
    document.getElementById("shipmentDetails").innerHTML = "Date of Arrival: May 31st <br />Height: Pretty tall <br /> Weight: Mập";
}