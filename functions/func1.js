function add(a,b){
    return a+b;
    }
    let x= add(2,4);
    console.log(x);

    function multi(a,b=5){
      return a*b
        }
        let y= multi(2);
    console.log(y);

    function multi2(a,b=5){
        return a*b
          }
          let z= multi2(2,7);
      console.log(z);

      function add2(...c){
        let sum =0;
        for(let d of c)
        sum=sum+d;

        return sum;
      }
      console.log(add2(1,2,3,4,1));

      function add3(...c){
        let sum =0;
        for(let d in c)
        sum=sum+c[d];

        return sum;
      }
      console.log(add3(1,2,3,4,2));

      let multi3=function(v,n){
        return v*n;
      }
      console.log(multi3(2,9));

      let hello=(a,b)=>{
        return a+b;
      }
      console.log(hello(9,3));

      let hello2=(...k)=>{
        let sum =0;
        for(let g of k)
        sum= sum+g;

        return sum  
      }

      console.log(hello2(1,2));

      