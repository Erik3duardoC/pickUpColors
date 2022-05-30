let colors = document.getElementById("color1");
let valCol = colors.value;


colors.addEventListener("input", () => {
    
    document.getElementById("choose").innerHTML = colors.value;
});

//limpiar datos
const limpiar = (e) => {
    e.prevenDefault();
    document.getElementById("form1").reset("");
}