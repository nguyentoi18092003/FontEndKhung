import React from 'react';
import "./index.css";
import {Link} from "react-router-dom"
import Detail from '../Detail';
function Home(){
    return (
        <>
        <header className="header">
            Amlopabe
            </header>
        <ul>
            {/* <li><Link to={<Detail/>}>Thông tin chi tiết</Link></li> */}
            <li><Link to="/detail">Thông tin chi tiết</Link></li>
            <li><Link to="/baidang">Bài đăng</Link></li>
            <li><Link to="/home">Trang chu</Link></li>


            
            
        </ul>
        </>
    )
}
export default Home