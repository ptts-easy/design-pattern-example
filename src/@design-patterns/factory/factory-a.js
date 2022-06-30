import "./factory-interface.js"

class FactoryA extends FactoryInterface {
   public Shape getShape(String shapeType){    
      if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();         
      }else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new Square();
      }  
      return null;
   }
}


class ClassA extends ClassInterface {
  constructor(instancename) {
    super(instancename);
  }
  print_me() {
    return "Called " + this.instancename + " : ClassA";
  }
}