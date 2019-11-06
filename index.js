
//  function multiply(num1,num2)
// {
// return num1*num2;
// }
// let result=multiply(2,3);
// console.log(result);

// // ecmas 5
// let multiply=function(num1,num2)
// {
//  return num1*num2;
//  }
//  let result=multiply(2,3);
//  console.log(result);

// // arrow function
// let multiply=(num1,num2)=>
// {
//     return num1*num2;
// }
// let result=multiply(2,3);
// console.log(result);

// // square
// let square=(num)=>{
//     return num*num;
// }
// let result=square(2);
// console.log(result);

// // call back function
// let getDetails=(id,callback)=>{
//     console.log("inside the function");
//     console.log("id:",+id);
//     callback();
// }
// getDetails(1,()=>{
//     console.log("finished");

// })

// //call back with parameters
// let getDetails=(id,callback)=>{
//     console.log("inside the function");
//     console.log("id:"+id);
//     callback({id:id,name:'maharifa'});
// }
// getDetails(1,(person)=>{
//     console.log(person);
//     console.log("finished");
// });

// //to make asynchronous;
// console.log('before');
// setTimeout(()=>{
// console.log('inside');
// },2000);
// console.log('after');

// function getUser(id)
// {
//     setTimeout(()=>{
//         return({id:id,Name:'maharifa'});
//     },2000);

// }
// console.log('before');
// const user=getUser(1);
// console.log(user);
// console.log('after');

// async with callback
// function getUser(id,callback)
// {
//      setTimeout(()=>{
//         callback({id:id,Name:'maharifa'});
//      },2000);

//  }
//  console.log('before');
//  getUser(1,function(user){;
//  console.log(user);
//  });
//  console.log('after');

// //set and gett method
// var person= new Object();
// person.setValues=function(n,a){
//     this.name=n;
//     this.age=a;
// };
// person.getValues = function(){
//     console.log("name is:" +this.name);
//     console.log("age is:" +this.age);
// };
// person.setValues("rahul",28);
// person.getValues();

// // using constructors
// function person(first_name,last_name){
//     this.first_name=first_name;
//     this.last_name=last_name;
// }
//     person.prototype.getDetails=function()
//     {
//         console.log("the name of the person is" + this.first_name+" " + this.last_name);
//     }
// let person1=new person("mukul","latiyan");
// let person2=new person("rahul","avasti");

// person1.getDetails();
// person2.getDetails();

// // //simple object with some properties
// var coder = {
//     isstudying : false,
//     printintroduction : function(){
//         console.log(`my name is ${this.name}. am i studying?: ${this.isstudying}.`)
//     }

//     }   
// // object create method()
// var m1 = Object.create(coder);

// // "name"is a property set on "me"
// m1.name= 'mukul';

// // inherited properties can be overwritten
// m1.isstudying = 'true';
// m1.printintroduction();




// //defining class using es6; 
// class vehicle{
//     constructor(name,maker,engine){
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails(){
//         return(`The name of the bike is ${this.name}`)
//     }
// }
// // making object with the help of constructors
// let bike1 = new vehicle('hayabusa', 'suzuki', '1340cc');
// let bike2 = new vehicle('ninja', 'kawasaki', '88961');
// console.log(bike1.name);
// console.log(bike2.maker);




// //inheritance example
// class person{
//     constructor(name){
//         this.name = name;

//     }
// }
// class student extends person{
//     constructor(name,id){
//         //super keyword to for calling above class instructor
//         super(name);
//         this.id = id;
//     }

//     toString(){
//         return(`name of person: ${this.name},student ID: ${this.id}`);
//     }
// }
// let student1 = new student('mukul',22);
// console.log(student1.toString());