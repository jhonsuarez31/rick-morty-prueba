  import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";


const initialForm = {
  email: '',
  password:''
}

export const Login = () => {
  
  const { login } = useContext ( AuthContext )
  const navigate = useNavigate();

  const {email, password,onInputChange,
    onResetForm,} = useForm( initialForm )
 
  const onLogin = (event) =>{
    event.preventDefault()  
    if(email !== 'example@gmail.com' && password !== '123456789') return
    login(email,password)
    navigate ('/',{
      replace:true
    })
  }
  
 
  
  return (
    <main className="conet" >
    <div className="form-signin w-100 m-auto">
      <form className="form-content">
        <img
          src="https://i.ibb.co/1M7yfpc/logo.png"
          width="350"
          height="80"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="name@example.com"
            required
            onChange={onInputChange}
          />
          <label>Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required
          />
          <label>Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" onClick={onLogin}>
          Sign in
        </button>
      </form>
      </div>
    </main>
  );
};
