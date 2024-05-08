function calcCircleGeometries(radius) {
    const pi = Math.PI;
    var area = pi * radius * radius;
    var circumference = 2 * pi * radius;
    var diameter = 2 * radius;
    var output = [area, circumference, diameter];
    document.getElementById("area").textContent = "Area: " + output[0];
    document.getElementById("circumference").textContent = "Circumference: " + output[1];
    document.getElementById("diameter").textContent = "Diameter: " + output[2];
    return output;
}