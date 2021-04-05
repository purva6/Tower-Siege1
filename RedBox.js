class RedBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(233, 119, 121);
        super.display();
    }
}