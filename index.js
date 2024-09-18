// chatper 1 
// Variables for Strings

// var fullName='faraz shah'; /*String*/
// var age=20; /*number*/
// var Null=null; /*Null*/
// var cnic; /*undefined*/
// var unFollew=true; /*Boolean*/ 

// console.log(fullName,"  ",age,"  ",cnic,"  ",Null,"  ",unFollew,"  " );

// // Variables  Object

// // object called “profile”

// const profile = {

//     fullName:'faraz shah',
//     post:195,
//     isFollow:true,
//     userName:'@farazshah',
//     des:'expamle ......',


// }

// console.log(profile);
// console.log(profile.fullName);
// console.log(profile['fullName']);
// console.log(typeof(profile['fullName']));
// console.log(typeof(profile['post']));


// let, const & var

// var fullName='farazshah';
//  var fullName='fayyaz shah';

// let x=10;
//  x=5;
  
//  const a=2;
//  const b=3;
// console.log(fullName);
// console.log(x);
// console.log(b);



// chapter 2

// Comments in Js

// 2 type of commit

// console.log(typeof(profile['post'])); first type 
/*console.log(profile['fullName']); second type
.log(typeof(profile['fullName']));
console.log(typeof(profile['post']));*/


// Operators in JS

// = * - / +

//  var a = 10;
//  var b =20;
//  console.log(a+b);
//  console.log(a*b);
//  console.log(a+b);
//  console.log(a/b);


//  Modulus
// var a = 10;
//  var b =20;
//  console.log(a%b); //reminder//

//  Exponentiation

// var a = 10;
//  var b =20;
//  console.log(a**b);

//  Increment Decrement/

// var a = 10;
//  a++;
//  console.log(a);

// var a = 10;
//  a--;
//  console.log(a);



// Operators in JS 

// var a =10;
// a +=10;
 
//  console.log(a);
//  console.log(a-=5);
//  console.log(a*-8);
//  console.log(a/=6);


// Comparison Operators 


// var a=10;
// var b=20;

// console.log(a==20);
// console.log(a==10);
// console.log(b>=30);


// Logical Operators 


// var a =10;
// var b = 30;

// console.log(!(a==10) );


// Conditional Statements 


// var a=50;
// if(a==10){
//     document.write(" a equal to 10");
// }
// if (a<=20) {
//     document.write(" a <= equal to 20");
// } else {
    
// }{

//     document.write(" a not equal to 10");
// }


// prompt

// var a=prompt("my is user age");
// console.log(a);


// Ternary Operators


// var age=20;

// var result = age == 18 || age >= 20 ? 'young' : "not young";

// console.log(result);

// var a=49;
// if(a >= 90 && a <= 100){
//     console.log("grader is A");
// }
// else if(a >= 70 && a <= 89){
//     console.log("grader is B");
    
// } else if(a >= 69 && a <= 79){
//     console.log("grader is C");
    
// } 
// else if(a >= 50 && a <= 69){
//     console.log("grader is D");
    
// }else if(a >= 0 && a <= 49){
//     console.log("grader is F");
    
// } 
// sum=1

// for(i=1;i<=5;i++){
//    sum=sum+i;
// }
// console.log(sum);

// let i=1;
// while(i<=5){
//    console.log('farazshah');
//    i++;
// }


// let i = 1;
// do{
//    console.log('farzshah');
//    i++;
// }while(i<=4);

// let str="farazShah";
// let size=0;
// for(let val of str){
//    console.log(val);
//    size++;
   
// }
// console.log(size);

//  const profile = {

//     fullName:'faraz shah',
//     post:195,
//     isFollow:true,
//     userName:'@farazshah',
//     des:'expamle ......',


//  }

// for(let key in profile){
//    console.log("Key is ", key ,"value is ",profile[key]);
   
// }

// let str = "farazshah";
// console.log(str[0]);


//  const profile = {

//     fullName:'faraz shah',
//     post:195,
//     isFollow:true,
//     userName:'@farazshah',
//     des:'expamle ......',


//  }

//  let output=`the ${profile.userName} and ${profile.fullName} post is ${profile.post} is follow ${profile.isFollow}`;
//  console.log(output);



// let str="farazshah";
// str=str.toUpperCase()
// console.log(str);

// let str2="farazshah";
// str2=str2.toLowerCase()
// console.log(str2);

// let str="farazshah";
// str=str.replace("faraz","fayyaz");
// console.log(str);

// let str="farazshah";
// str=str.slice(2);
// console.log(str);