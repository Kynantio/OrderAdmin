import React,{Component} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import $ from "jquery";
import Toast from "../component/Toast";

export default class Product extends React.Component {

    constructor() {
        super();
        this.state = {
            action:"insert",
            id_user:"",
            nama_user:"",
            email:"",
            password:"",
            password2: "",
            role:"User",
            message:""
        }
    }

    bind = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    Save = (event) => {
        event.preventDefault();
        let url = "http://localhost/eproduk/public/user/save";
        let form = new FormData();
        form.append("action", this.state.action);
        form.append("id_user", this.state.id_user);
        form.append("nama_user", this.state.nama_user);
        form.append("email", this.state.email);
        form.append("password", this.state.password);
        form.append("role", this.state.role);
        // form.append("img_user", this.state.img_user, this.state.img_user.name);
        axios.post(url, form)
  
        .then(response => {
          this.setState({message: response.data.message});
          $("#message").toast("show");
          window.location = "/login";
        })
        .catch(error => {
          console.log(error);
        });
      }

    render() {
        return (
          <div className="container" style={{width: 24 + "rem", paddingTop : 6 + '%'}}>
        <div className="card-body">
          <div className="# ">
            <h2 className="#" style={{textAlign: "center"}}>Register User</h2>
          </div>
          <div className="card-body">
            <form onSubmit={this.Save}>
               Nama
               <input type="text" className="form-control" name="nama_user"
                 value={this.state.nama_user} onChange={this.bind} required />
               Email
               <input type="text" className="form-control" name="email"
                 value={this.state.email} onChange={this.bind} required />
               Password
               <input type="text" className="form-control" name="password"
                 value={this.state.password} onChange={this.bind} required />
               Check Password
               <input type="text" className="form-control" name="password"
                 value={this.state.password} onChange={this.bind} required />  
                
            
              <button type="submit" className="btn btn-info pull-right m-2" >
                 <span className="fa fa-check"></span> Simpan
               </button>
              </form>
              <Link to="/login">
                  Sudah punya akun?
              </Link>
              <Toast id="message" autohide="true" title="Informasi">
                {this.state.message}
              </Toast>
            </div>
          </div>
        </div>
        );
    }

    


}
