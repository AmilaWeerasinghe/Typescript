class Point{
  x:number;
  y:number;

    constructor(x?:number,y?:number){ // ? to make parameters optional
        this.x=x;
        this.y=y;

    }

    draw(){
        console.log('X is '+this.x+" , "+'Y is '+this.y);
    }
    getDistance(another:Point){
        //..........
    }
}

let point =new Point(1,2); //memory allocation

point.draw();