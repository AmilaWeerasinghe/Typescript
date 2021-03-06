import Point

function showlog(message){
    console.log(message)

}

var message='Hello World';
showlog(message);

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

let drawiPoint=(point:Point)=>{  //inline annotations

}

//object oriented programming concept of cohesiom
    class Points{
        x:number;
        y:number;

        draw(){
            //........
        }
        getDistance(another:Points){
            //..........
        }
    }

    

    let point =new Point(1,2); //memory allocation

    point.draw();