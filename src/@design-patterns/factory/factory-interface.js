import "./class-interface.js"

class FactoryInterface {
  constructor(instancename) {
    this.instancename = instancename;
  }

  print_me() {
    return "Called " + this.instancename + " : ClassInterface";
  }
}

public abstract class AbstractFactory {
   abstract Shape getShape(String shapeType) ;
}

public class ShapeFactory extends AbstractFactory {
   @Override
   public Shape getShape(String shapeType){    
      if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();         
      }else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new Square();
      }  
      return null;
   }
}