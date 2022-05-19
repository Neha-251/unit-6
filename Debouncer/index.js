

//api =>www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

const getData = async() => {
    try{
        let inp = document.getElementById("inp").value;
        console.log('inp', inp)

        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`);
        let data = await res.json();
        console.log('data', data)

        appendData(data.meals)

    } catch(err) {
        console.log('err', err)

    }
}


const callFunc = (func, de) => {
    let timer;

    return function () {

        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, args);
        }, de)
    }
}

const callData = callFunc(getData, 500);



const appendData = (data) => {
    let showDiv = document.getElementById("showDiv");
    showDiv.innerHTML = null;
    showDiv.style.display = "block";

    data.forEach((el) => {


        
       
       

        let mainDiv = document.createElement("div");
        mainDiv.style.fontSize = "20px";
        mainDiv.style.marginTop = "10px";    
        mainDiv.style.marginBottom = "10px";
        mainDiv.innerHTML = el.strMeal;

        showDiv.append(mainDiv);


    })
}


