//C
var temperatures = [
    {x:23,y:15},
    {x:24,y:16},
    {x:20,y:13},
    {x:24,y:07},
]
//F
var temperatures2 = [
    {x:75,y:65},
    {x:80,y:66},
    {x:69,y:61},
    {x:78,y:70},
]

const changeTemp =()=>{
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue==='f'){
        
        var elements = document.getElementsByClassName("temp");

        for(var i = 0; i < elements.length; i++) {

            elements[i].firstElementChild.textContent = temperatures2[i].x
            elements[i].lastElementChild.textContent =  temperatures2[i].y

        }

        }else{

                    
        var elements = document.getElementsByClassName("temp");
        for(var i = 0; i < elements.length; i++) {

            elements[i].firstElementChild.textContent = temperatures[i].x
            elements[i].lastElementChild.textContent =  temperatures[i].y

        }

        }
   
}

// cargar cada temperatura a su respectivo dia 

//find all temps container



const showAlert = ()=>{
    alert("has clickeado en una ciudad")
}

const dismissCookies = ()=>{
    let el = document.getElementById('cookie')
    el.remove()
}


