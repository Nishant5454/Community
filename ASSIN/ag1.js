function arr(ele,callback){ 
    const temp=ele.map((num)=>{ 
        return callback(num);
    }); 
    return temp;
} 
const array=[1,2,3,4,5]; 
function callback(num){ 
    return num*2;
} 
const temp=arr(array,callback); 
console.log(temp);