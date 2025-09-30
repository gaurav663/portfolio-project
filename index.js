let modebtn = document.querySelector("#modebtn");
let currMode = "light";

modebtn.addEventListener("click",() => {
    if(currMode === "light") {
        currMode = "dark";
        document.body.style.background = "black";
        document.body.style.color = "pink"

    }
    else 
        {
        currMode = "light";
        document.body.style.background = "#191f36"
        document.body.style.color = "#fff"
        
    }
    console.log(currMode);
});