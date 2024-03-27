import {Component} from "react"
import "./NavbarApp.css"
import {MenuItems} from "./MenuItems"
import {Link} from "react-router-dom"

class Navbar extends Component{
  state = { clicked: false};
  handleClicked = () =>{
    this.setState({ clicked: !this.state.clicked})
  }
  render(){
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Bursa Büyükşehir Belediyesi</h1>
        
        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) =>{
            return(
              <li key={index}>
            <Link className={item.cName} to={item.url}>
            <i className={item.icon}></i>{item.title}
            </Link>
          </li>
            )
          })}
          <button>Wifi Noktaları</button>
        </ul>

      </nav>
    )
  }
}


export default Navbar;