let body = document.body
let h1 = document.getElementById("container")
console.log("Hello")
window.addEventListener("resize",()=>{
    console.log("hey")
    let red=parseInt(Math.random()*255)
    let green=parseInt(Math.random()*255)
    let blue=parseInt(Math.random()*255)
    console.log(red)
    console.log(green)
    console.log(blue)
    body.style.cssText=`background-color:rgb(${red},${green},${blue});`
    h1.style.cssText=`color:rgb(${blue},${red},${green})`
    h1.style.transition="all 0.5s"
    body.style.transition="all 0.5s"
    
})