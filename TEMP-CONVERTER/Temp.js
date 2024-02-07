

// var  celsius = document.getElementById("celsius"); 

// var  farhenheit = document.getElementById("Fahrenheit");


// celsius.addEventListener('input' , function(){
//    console.log("value updated !")
//    let c = this.value ;
//    let f = (c*9/5) +32 ;
//    farhenheit.value = f;
// });

// farhenheit.addEventListener('input' , function(){
//   console.log("value updated !")
//   let f = this.value;
//   let c = (f-32)*5/9 ;
//   celsius.value = c;
// });




let celsius = document.getElementById("celsius");
let farhenheit = document.getElementById("Fahrenheit");

celsius.addEventListener('click', function(){
    console.log("value updated")
    let c = this.value;   
    let f = (c*9/5) +32;
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    farhenheit.value = f;
})


farhenheit.addEventListener('click', function(){
  console.log("value updated");
  let f = this.value;
  let c = (f-32)*5/9;
  if(!Number.isInteger(c)){
    c = c.toFixed(4);
}
  celsius.value = c;
})
