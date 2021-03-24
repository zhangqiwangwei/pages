import React,{ useState } from 'react';
import { Link } from "react-router-dom";
function Header() {
    const [index, setIndex] = useState(0);
    return (
        <header>
            <div className="logo-name">Frontend System</div>
            <div className="menu-items">
                <div className="menu-item">
                    <Link to="/" className={ index==0?"activeLink":'' } onClick={ ()=>setIndex(0) }>首页</Link>
                </div>
                <div className="menu-item">
                    <Link to="/block" className={ index==1?"activeLink":'' } onClick={ ()=>setIndex(1) }>block</Link>
                </div>
            </div>
        </header>
    )
}
export default Header