class YellowBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(242, 217, 3);
        super.display();
    }
}