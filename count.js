function myfun(s,c) {
    let temp=0; 
    for(let i=0;i<s.length;i++) {
    if(s.charAt(i)==c)  
    temp++; 

} 
return temp;
} 
let str="geeksforgeeks"; 
let c='e'; 
console.log(myfun(str,c));
