// list variables
var bluebtn = document.querySelector(".blue");
bluebtn.dataset.value = 10;

bluebtn.addEventListener("click", function (event) {
    var blueVal = bluebtn.dataset.value
    console.log("blue")
    console.log(blueVal)
})

var purpbtn = document.querySelector(".purple");
purpbtn.dataset.value = Math.floor(Math.random() * 11);

purpbtn.addEventListener("click", function (event) {
    var purpleVal = purpbtn.dataset.value
    console.log("purple")
    console.log(purpleVal)
})

var opalbtn = document.querySelector(".opal");
opalbtn.dataset.value = 10;

opalbtn.addEventListener("click", function (event) {
    var opalVal = opalbtn.dataset.value
    console.log("opal")
    console.log(opalVal)
})

var pinkbtn = document.querySelector(".pink");
pinkbtn.dataset.value = 10;

pinkbtn.addEventListener("click", function (event) {
    var pinkVal = pinkbtn.dataset.value
    console.log("pink")
    console.log(pinkVal)
})


//functions

//call functions
//click