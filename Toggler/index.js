
let btn = document.getElementById("btn");

function toggler(a, b, c) {
    let container = document.getElementById("container");
    container.innerHTML = ` ${a} ${b} ${c} Toggled`;
}



btn.addEventListener("click", () => {
   const toggle = toggler(1, 2, 3)

})
