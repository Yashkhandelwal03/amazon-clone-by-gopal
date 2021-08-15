import React,{useState} from "react";
import "./Login.css";
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {

  const history = useHistory();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            if(auth){
                history.push('/');
            }
        })
        .catch(error => alert(error.message));
  }

  const createAccount = (e) =>{
       e.preventDefault();
       auth.createUserWithEmailAndPassword(email,password)
       .then((auth) => {
           if(auth){
            history.push('/');
           }
       })
       .catch(error => alert(error.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img
          className="logo_img"
          src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp"
        ></img>
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input 
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}></input>

          <h5>Password</h5>
          <input 
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}></input>

          <button 
            className="login__signInButton"
            onClick={signIn}
            >Sign In</button>

          <p>
            By signing in you agree the Terms and Conditions of the Amazon fake
            clone. Please see our privacy notice and out cookies policy
          </p>
          <button className="login__registerButton"
          onClick={createAccount} >
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
