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


// mark=[0,25,45,78,12,65,52];
// mark[0]=55
// console.log(mark);
// console.log(mark.length);

// mark=[0,25,45,78,12,65,52];
// for(let ind=0;ind < mark.length;ind++){
//     console.log(mark[ind]);

// }

// mark=[0,25,45,78,12,65,52];
// for(let ind of mark){
//     console.log(ind);

// }


// for loop

// for(let i = 10;i<=10;i++){

//     console.log("i=",i);
// }

// while Loop
// let i=0;
// while(i<=10){
//   console.log("i=",i);

//     i++;
// }


// do-while Loop

// let i=0;

// do{
//  console.log("i=",i);

//    i++;

// }while(i<=20);


// for-of Loop 


// let str="apna collage";

// for(let val of str){
//     console.log(val);
// }

// for-in Loop 
// const profile = {

//     fullName:'faraz shah',
//     post:195,
//     isFollow:true,
//     userName:'@farazshah',
//     des:'expamle ......',


// }

// for(let val in profile){
//     console.log(val);
//     console.log(profile[val]);
// }

// Strings in JS 

// let str="farazshah";
// let str2="fayyazshah";

// console.log(str.length);
// console.log(str[0]);
// console.log(str.toLocaleLowerCase());
// console.log(str.toUpperCase());
// console.log(str.trim());
// console.log(str.slice(5));
// console.log(str+str2);
// console.log(str.replace("faraz","fayyaz"));


// const profile = {

//     fullName:'faraz shah',
//     post:195,
//     isFollow:true,
//     userName:'@farazshah',
//     des:'expamle ......',


// }

// let output = `this is a ${profile.fullName} `;
// console.log(output);


// // Arrays in JS 

// let heroes = ["ironman","hulk","thor","batman" ];
// // heroes[0]="farazman";
// // heroes.push("siderman","supman","batman");
// // heroes.pop();
// // let str=heroes.toString();
// // console.log(str);
// // heroes.unshift("siderman","supman","batman");
// // heroes.shift("ironman","hulk");
// heroes.splice(1,0,"farazshah");
// console.log(heroes);


// // for(val in heroes){
// //     console.log(heroes[val]);
// // }


// function

// function math(num1,num2) {
//     let num3=num1+num2;
//     console.log(num3);
// }

// math(10,50);

// function math(num1,num2) {
//         let num3=num1+num2;
//         return num3;
//     }
    
//     // let output=math(10,50);
//     console.log(math(100,50));


// const sum = ( a, b ) => {    
//     return a + b; 
// }
// console.log(sum(1,2));

// const num=(a,b)=>{
//     return a + b; 

// }
// console.log(num(10,2));



// let arr = ["ironman","hulk","thor","batman" ];

//  arr.forEach((val)=>{
//     console.log(cat);
// })


// let arr = ["ironman","hulk","thor","batman" ];

// let newarr=arr.map((val)=>{
// return val;
// });

// console.log(newarr);


// dom

 //    let head= document.getElementById('head');
    //    let head2 =document.getElementsByClassName('head2')
    //    let tag=document.getElementsByTagName('button')
    //     console.log(head);
    //     console.log(head2);
    //     console.log(tag);

//   let red=document.querySelector('.red');
//   console.log(red);
//   let green =red.setAttribute('class','green');
//   let style= green.style.backgroundColor='red';
//   console.log(green);
// let red =document.querySelector('h2').style.backgroundColor='red';

// let btn =document.createElement('button');
// btn.innerText='click me';
// console.log(btn);
// let add=document.querySelector('div').prepend();
// console.log(add);


// let btn=document.createElement('button');
// btn.innerText="click me";
// btn.style.backgroundColor='black';
// btn.style.color='white';

// let body=document.querySelector('body').prepend(btn);
  

// let para=document.querySelector(".mypara");
// let man=para.getAttribute('class');
// para.classList.add('newpara');
// // para.classList.remove('newpara');
// console.log(para);


// let btn=document.querySelector('#click')
// let body=document.querySelector('body')
// let mode='light';
// btn.addEventListener("click",()=>{
// if(mode==='light'){
//     mode='dark';
//   body.style.backgroundColor='black'
// }else{
//     mode='light';
//     body.style.backgroundColor='white'
// }
//   console.log(mode);
// })

// let div=document.querySelector('#para');

// div.onmouseover =()=>{
//     alert('div was hover');
    
// }

// let soces=document.querySelector('#ysorce').innerText='faraz';
// let red=document.getElementById('ysorce');
// console.log(red);
// console.log(soces);
