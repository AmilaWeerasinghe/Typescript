export class Point{


    constructor( private x?:number, private y?:number){ // ? to make parameters optional
        

    }

    draw(){
        console.log('X is '+this.x+" , "+'Y is '+this.y);
    }
    getDistance(another:Point){
        //..........
    }
}



//properties
//set method Set (name of the property) (values){this.x=values}
//get method get (name of property){return this.x}
//getter and setter for properties