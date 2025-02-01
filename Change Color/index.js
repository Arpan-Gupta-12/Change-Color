// let butten = document.getElementById("btn")
let body =document.querySelector("body")

// // btn.onclick =()=>{
// //     console.log("" This butten is clicked")

// btn.addEventListener('click', (f) =>
// { 
// const cngclr= confirm(" Do you want to change the color ?")

// if(cngclr)
// {
//    const colorName = prompt( "Which color?");
//    body.style.backgroundColor =`${colorName}`
// }



//     f.target.innerText="Daba Dia"
//     console.log(f.target)
// console.log(" This butten is clicked")
// })
const submit = document.getElementById("submit");
const namecolor = document.getElementById("namecolor");


submit.addEventListener("click", (f) => {
    f.preventDefault();
     body.style.backgroundColor =`${namecolor.value}`
     
})
