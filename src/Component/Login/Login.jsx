import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const {logIn, gitHub, google} =useContext(AuthContext)
  

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

  

    const handleLogIn = event => {
        event.preventDefault()
        const form=event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        logIn(email, password)
        .then(result =>{
          const loggedUser = result.user
          console.log(loggedUser)
          navigate(from, {replace:true})
        })
        .catch(error =>{
          console.log(error.message)
        })

     
    }

    const handleGitHub = () =>{
      gitHub()
      .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error =>{
        console.log(error.message)
      })
    }

    const handleGoogle =()=>{
      google()
      .then(result =>{
        const loggedUser = result.user
        console.log(loggedUser)
      })
      .catch(error =>{
        console.log(error.message)
      })
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn}  className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary mb-4">Login</button>
              <button onClick={handleGitHub} className="mb-4 btn btn-success">Github</button>
                <button onClick={handleGoogle} className="btn btn-dark">Google</button>
              Don't Have An Account? Please <Link to='/register'> <span className="text-blue-400 font-semibold">Register</span> </Link>
            </div> 
          </form>
        </div>
      </div>
    
    </div>
  );
};

export default Login;
