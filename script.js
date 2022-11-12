let bangla=prompt("Enter your bangla mark");
let english=prompt("Enter your english mark");
let math=prompt("Enter your mmath mark");

if(bangla>= 33 &&  english>= 33 && math>= 33){
console.log("you have passed");
}else{
console.log("Sorry, you have failed");
}


function div(name,age,skill){
console.log(`my name is ${name} and i am ${age} years old and i love ${skill}`);
}
div("jihan",67,"html");
div("Sihan",34,"css");
div("Dihan",44,"bootstarp");


function me(name="jihan",age=23,skill="javascript"){

   return `my name is ${name} & i am ${age} years old & i love ${skill}`;


}
console.log(me("jihan",23,"python"));