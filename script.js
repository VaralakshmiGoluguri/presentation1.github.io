a=10;
var a;
let b;
b=20;
const c=40;
a+=10;
b+=10;
//c+=10 //error 
const varu={
    firstName:"Varalakshmi",
    lastName:"Goluguri",
    age:21
};
document.getElementById("demo").innerHTML =varu.firstName + " is " + varu.age + " years old.";
hello = function() {
    return "Hello World!";
}
hello = () => {return "Hello World!";}
function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
}