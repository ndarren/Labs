function carArrays() {
    const cars = [["Toyota", "RAV4", "White", 2003, "$15,000"], ["Subaru", "WRX", "Red", 2006, "$12,000"], ["Jeep", "Wrangler", "Black", 2005, "$10,000"]];
    //First Car
    document.getElementById("make1").innerHTML = cars[0][0];
    document.getElementById("model1").innerHTML = cars[0][1];
    document.getElementById("color1").innerHTML = cars[0][2];
    document.getElementById("year1").innerHTML = cars[0][3];
    document.getElementById("price1").innerHTML = cars[0][4];
    //Second Car
    document.getElementById("make2").innerHTML = cars[1][0];
    document.getElementById("model2").innerHTML = cars[1][1];
    document.getElementById("color2").innerHTML = cars[1][2];
    document.getElementById("year2").innerHTML = cars[1][3];
    document.getElementById("price2").innerHTML = cars[1][4];
    //Third Car
    document.getElementById("make3").innerHTML = cars[2][0];
    document.getElementById("model3").innerHTML = cars[2][1];
    document.getElementById("color3").innerHTML = cars[2][2];
    document.getElementById("year3").innerHTML = cars[2][3];
    document.getElementById("price3").innerHTML = cars[2][4];
}
