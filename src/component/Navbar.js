import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Navbar extends Component {
  Logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    localStorage.removeItem("id_user");
    window.location = "/";
  }
  navGuest = () => {
    return(
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-item nav-link text-light mr-4">Product</Link>
        </li>
        <li>
        <Link to="/login" className="nav-item nav-link text-light mr-4">Login</Link>
        </li>
        </ul>
        </div>
    )
  }
  navAdmin = () => {
    return(
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-item nav-link text-light mr-3">Produk</Link>
        </li>
        <li className="nav-item">
        <Link to="/user" className="nav-item nav-link text-light mr-3">User</Link>
        </li>
        <li className="nav-item">
        <Link to="/Admin" className="nav-item nav-link text-light mr-3">Tambah Produk</Link>
        </li>
        <li className="nav-item">
        <Link to="/profil" className="nav-item nav-link text-light mr-3">Profil</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-item nav-link text-light mr-4" onClick={this.Logout}>Logout</Link>
        </li>
        </ul>
        </div>
    )
  }
  navUser = () => {
    return(
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
        <Link to="/" className="nav-item nav-link text-light mr-3">Produk</Link>
        </li>
        <li className="nav-item">
        <Link to="/profil" className="nav-item nav-link text-light mr-3">Profil</Link>
        </li>
        <li className="nav-item">
        <Link to="/orders" className="nav-item nav-link text-light mr-3">Orders</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-item nav-link text-light mr-4" onClick={this.Logout}>Logout</Link>
        </li>
        </ul>
        </div>
    )
  }
  render(){
    let auth = localStorage.getItem("Token")
    let role = localStorage.getItem("role")
      return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand ml-5 text-white" href="#">Belanja</a>
            <button className="navbar-toggler btn-light" type="button" data-toggle="collapse"
            data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            { !auth ? this.navGuest() : role === "Admin" ? this.navAdmin() : this.navUser() }
            </nav>
            </div>
      );
  }
}
export default Navbar;
