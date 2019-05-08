function log(message){
    console.log(message)

}

var message='Hello World';
log(message);

//type assertion

let messager;
messager='abc';
let endsWithC=(<string>messager.endsWith('c');

//arrow functions
let doLet=(message)=>console.log(message);

//custom types
//annotating and passing objects

let drawPoint=(point:{x:number,y:number})=>{  //inline annotations

}

//but if points are used in many places in the code it is easier to make interfaces
interface Point{
    x:number,
    y:number
}

let drawPoint=(point:Point)=>{  //inline annotations

}

