console.log("hello");

function fruit(taste,color){
     this.color = color;
     this.taste = taste;
}

let mango = new fruit("sweet","yellow");
let orange = new fruit("sour","orange");


class FruitClass{
    constructor(taste,color){
         this.color = color;
         this.taste = taste;
    }
}

let kiwi = new FruitClass("sour","green");




var bird ={
   x:100,
   y:200,
   color:"blue",
   eggs:[1,2,3,4],

   fly:function(){
      console.log("bird is flying",this.x,this.y);
   }



};


bird.eggs.forEach(function(idx,val){
    console.log(idx,val);
})