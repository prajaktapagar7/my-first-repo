
function add(a,b){
    return (a+b);
}
function sub(a,b){
    return (a-b);
}
function div(a,b){
    let divsion = (a/b).toFixed(2);
    return divsion;
}
function mult(a,b){
    return (a*b);
}
export default add;
export {sub,div,mult};