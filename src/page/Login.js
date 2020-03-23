import React,{Component} from "react";
import axios from "axios";
import Toast from "../component/Toast";
import $ from "jquery";
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message: ""
    }
  }

  bind = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  Login = (event) => {
    event.preventDefault();
    let url = "http://localhost/eproduk/public/user/auth";
    let form = new FormData();
    form.append("email", this.state.email);
    form.append("password", this.state.password);
    axios.post(url, form)
    .then(response => {
      let logged = response.data.status;
      let role = response.data.role;
      if (logged) {

        if(role === "Admin"){
          window.location = "/admin";
        }else{
          window.location = "/";

        }

        this.setState({message: "Login Berhasil"});
        //menyimpan data token pada local storage
        localStorage.setItem("Token", response.data.token);
        //direct ke halaman data siswa
        localStorage.setItem("role", response.data.role);
        
        localStorage.setItem("id_user", JSON.stringify(response.data.user.id_user));
        
        
      } else {
        this.setState({message: "Login Gagal"});
      }
      $("#message").toast("show");
    })
    .catch(error => {
      console.log(error);
    })
  }

  render(){
    return(
      <div className="container" style={{width: 24 + "rem", paddingTop : 6 + '%'}}>
        <div className="card-body">
          <div className="# ">
            <h2 className="#" style={{textAlign: "center"}}>Login User</h2>
          </div>
          <div className="card-body">
            <Toast id="message" autohide="false" title="informasi">
            {this.state.message}
            </Toast>
            <form onSubmit={this.Login}>
              <input type="text" className="form-control my-3" name="email"
                value={this.state.email} onChange={this.bind}
                required placeholder="Masukkan Username" />
              <input type="password" className="form-control my-4" name="password"
                value={this.state.password} onChange={this.bind}
                required placeholder="Masukkan Password" />
                
              <button className="mt-2 btn btn-block btn-success" type="submit">
                <span className="#"></span> Login
                </button>
                <Link to="/register">
                  Belum punya akun?
                </Link>
              </form>
            </div>
          </div>
        </div>
    );
  }
}
export default Login;
