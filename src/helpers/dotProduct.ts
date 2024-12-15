
const dotProduct=(a:any,b:any)=>{
    let result=0;
    for(let i=0;i<a.length;i++){
        result +=a[i]*b[i];
    }
    return result
}
export default dotProduct;