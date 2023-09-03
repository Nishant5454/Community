function stringma(string ,callback){ 
    const temp=string.toUpperCase();  
    callback(temp);

} 
function logstring(temp){
    console.log(`string is :${temp}`);
} 
stringma("learning js",logstring); 