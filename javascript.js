console.log("javascript is working");

const button = document.getElementById("button");
const hidden = document.getElementById("hidden");

let clicked = false;

button.addEventListener("click" , function(){
   
   
   if(!clicked) {hidden.style.display= "flex";
    clicked=true;
   }
   else{
    hidden.style.display="none";
    clicked=false;
   }

})


let arr = [0,1,2,3,4,5] 

for(let i=0;i<arr.length/2;i++){
   let temp = arr[i];
   arr[i]=arr[arr.length-1-i]
   arr[arr.length-1-i]=temp;
}


console.log(arr)


for(let i=0;i<arr.length;i++){

}

let checked = "null";

let mat = [[1,2,3],[4,3,5],[5,6,8]];

console.log(typeof mat)
console.log(mat)
console.log(mat[0][2])

let x = 12;
let y =12;
let z = "10";

console.log(typeof (x+y+z),x+y+z)
console.log(typeof (parseInt(x+y+z)))

console.log(x+y)
console.log(z+y)
console.log(x+y+z)

console.log(parseInt(x+y+z))

function hello(){
    console.log("hello there");
}


hello();