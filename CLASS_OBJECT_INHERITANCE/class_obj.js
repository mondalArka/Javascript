class parent{
   
    constructor(a,b,brand){
         this.a=4;
        this.b=5;
        this.c=brand;
    }


  
    show(){
        return (this.a+this.b)+" "+ this.c;

    }

    display(){
        
       let s="the result is "+this.show()
       console.log(s); 
    }
}

    class child extends parent{
      
        constructor(x,y,br){
            super(x,y,br);
        }
    }
    class baby extends child{
      
        constructor(x1,y1,br1){
            super(x1,y1,br1);
        }
    }

    let z= new baby(2,3,"Webskitters");
   let str= z.display()+"dog"
   console.log(str);
