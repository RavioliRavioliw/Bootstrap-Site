const mov = document.querySelector(".ea")

let clicked
let mov2
let scroll

mov.addEventListener("mousedown", (e) => {

  clicked = true
  mov2 = e.pageX - mov.offsetLeft;
  scroll = mov.scrollLeft;
})

mov.addEventListener("mouseover", () => {
    
})

mov.addEventListener("mouseup", () => {
    clicked = false
})

mov.addEventListener("mousemove", (e) => {
    e.preventDefault()
    let x = e.pageX - mov.offsetLeft;
    let idk = x - mov2
    if(clicked == true){
        mov.scrollLeft = scroll - idk

    }

})