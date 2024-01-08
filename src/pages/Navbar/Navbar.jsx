import { useState } from "react"

import { NavItems, Logo } from "../../constants"
import ChevronDown from "../../assets/icons/ChevronDown.svg"
import wallet from "../../assets/icons/wallet.svg"

import "./Navbar.css"


const Navbar = () => {
  const [activePage, setActivePage] = useState("Payments")

  return (
    <div className="side-nav">
      <div className="outer-div">
        <div className="nav-top">
          <div className="company-icon-main">
            <img src={Logo.src} alt="Logo" />
            <div className="company-name-outer">
              <span className="company-name">Nishyam</span>
              <a href="#">Visit store</a>
            </div>
            <div className="down-icon">
              <img src={ChevronDown} alt="down-arrow" />
            </div>
          </div>
          <div className="nav-pages">
            {
              NavItems.map((item, index)=>(
                <a href="#" key={index} className={(activePage === item.navItem && " activeLink") + " nav-items"}>
                  <img src={item.icon} alt={item.navItem} />
                  <span>{item.navItem}</span>
                </a>
              ))
            }
          </div>
        </div>
        <div className="nav-bottom">
          <div className="wallet-balance-outer">
            <div className="wallet-img"><img src={wallet} alt="wallet" /></div>
            <div className="wallet-balance">
              <span className="normal-text">Available Credits</span>
              <span className="balance">222.10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
