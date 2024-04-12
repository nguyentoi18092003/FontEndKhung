export const getListProduct=async()=>{
    const response=await fetch("http://localhost:5000/");
    const result=await response.json()
    return result;
}