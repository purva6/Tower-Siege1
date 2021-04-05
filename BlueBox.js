class BlueBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
       fill(85,136,238);
       super.display(); 
    }
}