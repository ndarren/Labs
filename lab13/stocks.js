const companies = [
    {
        name: "Microsoft",
        marketCap: "$381.7 B",
        sales: "$86.8 B",
        ROIC: "20.6%",
        freeCash: "$26.7 B"
    },
    {
        name: "Symetra Financial",
        marketCap: "$2.7 B",
        sales: "$2.2 B",
        ROIC: "6.8%",
        freeCash: "$978.3 M"
    },
    {
        name: "Micron Technology",
        marketCap: "$37.6 B",
        sales: "$16.4 B",
        ROIC: "20.7%",
        freeCash: "$3.0 B"
    },
    {
        name: "F5 Networks",
        marketCap: "$10.8 B",
        sales: "$1.7 B",
        ROIC: "23.7%",
        freeCash: "$526.3 M"
    },
    {
        name: "Expedia",
        marketCap: "$10.8 B",
        sales: "$5.8 B",
        ROIC: "9.3%",
        freeCash: "$1.0 B"
    },
    {
        name: "Nautilus",
        marketCap: "$476 M",
        sales: "$274.4 M",
        ROIC: "35.9%",
        freeCash: "$31.2 M"
    },
    {
        name: "Heritage Financial",
        marketCap: "$531 M",
        sales: "$137.6 M",
        ROIC: "8.8%",
        freeCash: "$47.4 M"
    },
    {
        name: "Cascade Microtech",
        marketCap: "$239 M",
        sales: "$136 M",
        ROIC: "11.3%",
        freeCash: "$19.3 M"
    },
    {
        name: "Nike",
        marketCap: "$83.1 B",
        sales: "$27.8 B",
        ROIC: "19%",
        freeCash: "$2.1 B"
    },
    {
        name: "Alaska Air Group",
        marketCap: "$7.9 B",
        sale: "$5.4 B",
        ROIC: "14.1%",
        freeCash: "$336 M"
    }
]
function tableFill() {
    var table = document.getElementById("tableDisplay");
    companies.forEach(function (rowData) {
        var row = table.insertRow();
        Object.keys(rowData).forEach(function (key, index) {
            var cell = row.insertCell(index);
            cell.innerHTML = rowData[key];
        });
    });
}
window.onload = tableFill;