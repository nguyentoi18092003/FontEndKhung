import Home from "../Home"
import { getListProduct } from "../../service/ProductService";
import {useEffect,useState} from "react";
function Detail(){
    const [pr,setProducts]=useState([]);
    //khai bao product rong
    useEffect(()=>{
        const fetchApi=async ()=>{
            //getListProduct dc import tu 1
            const response= await getListProduct();
            console.log("result", response);
            // set lai mang product =data chung ta nhan dc
            setProducts(response);
        }
        fetchApi();
    },[]);
    // console.log(pr);
    // console.log(pr.products[0].title);
    // console.log((pr.products)[0].title)
    console.log(pr)
    return(
        <>
        <Home/>
        <div>Trang thông tin chi tiết của Amlopabe
        <div className="product_list">
                {pr.map(product => (
                    <div >
                        <p>{product.title}</p>
                        
                        <div className="image">
                            <img src={product.thumbnail} alt="Loi"/>
                        </div>
                        <button onclick="">Thêm </button>
                        {/* Hiển thị các thông tin khác của sản phẩm */}
                    </div>
                ))}
            </div>
        </div>
        <div className="product_list">
            
            </div>
        </>

        
    )
}
export default Detail;
