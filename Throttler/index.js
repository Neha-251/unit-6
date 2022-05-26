
const throttle = (fn, delay) => {
    let last = 0;
    return (...args) => {
        const now = new Date().getTime();
        if(now - last < delay){
            return
        }
        last = now;
        return fn(...args);
    }

}

let con = document.getElementById("container");

con.addEventListener("click", throttle((e) => {
    console.log("Clicked Me")
}, 5000))