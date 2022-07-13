import React, { useEffect, useState } from 'react';

//import menuLinksData from './data/menu_links.json'
interface MenuLink {
  "class": string,
  "href": string,
  "text": string,
}

const Header: React.FC = () => {

const [menuLinksData, setMenuLinksData] = useState([] as MenuLink[]);

const loadMenuLinksData = async()=> {
//call api gateway
const resp = await fetch('https://2wymgld4d3.execute-api.us-east-1.amazonaws.com/Production/menu_links');
let jsonData = await resp.json();

//assign response to state variable
setMenuLinksData(jsonData);
}

   useEffect(() => {
     //load the menu links data from API gateway
     loadMenuLinksData();
   }, [])
   

    return ( <header id="intro">
    <article className="fullheight">
      <div className="hgroup">
        <h1>Landon Hotel</h1>
        <h2>West London</h2>
        <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
      </div>
    </article>

    <nav id="nav">
      <div className="navbar">
        <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
        <ul>
        {
              menuLinksData.map((link) =>
                <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
              )
            }
        </ul>
      </div>
    </nav>
  </header> );
}

export default Header;