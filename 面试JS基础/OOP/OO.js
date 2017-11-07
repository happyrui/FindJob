// 声明 Animal 对象构造器 
function Animal() { } 
// 将Animal 的 prototype 属性指向一个对象， 
// 亦可直接理解为指定 Animal 对象的原型 
Animal.prototype = { 
       name: "animal",
       weight: 0, 
       eat: function() { 
              alert( "Animal is eating!" ); 
       } 
} 
// 声明 Mammal 对象构造器 
function Mammal() { 
       this.name = "mammal";
} 
// 指定 Mammal 对象的原型为一个 Animal 对象。 
// 实际上此处便是在创建 Mammal 对象和Animal 对象之间的原型链
Mammal.prototype = new Animal(); 
// 声明 Horse 对象构造器 
function Horse( height,weight ) { 
       this.name = "horse"; 
       this.height = height; 
       this.weight = weight; 
} 
// 将 Horse对象的原型指定为一个 Mamal 对象，继续构建 Horse 与 Mammal 之间的原型链 
Horse.prototype = new Mammal(); 
// 重新指定 eat方法 , 此方法将覆盖从 Animal 原型继承过来的 eat 方法 
Horse.prototype.eat = function() { 
       alert( "Horse is eating grass!" ); 
} 
// 验证并理解原型链 
var horse = new Horse( 100, 300 ); 
console.log(horse.__proto__ === Horse.prototype ); 
console.log( Horse.prototype.__proto__ === Mammal.prototype );
console.log( Mammal.prototype.__proto__ === Animal.prototype );
