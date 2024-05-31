import './login.css';
function Login() {
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Login</title>
  <link rel="stylesheet" href="./login.css" />
  <div className="container">
    <header>
      <a href="#" className="eng">
        English
      </a>
    </header>
    <section>
      <div className="logo">
        <img src="./images.png" />
      </div>
      <a href="#" className="facebook">
        Continue with Facebook
      </a>
      ----------------------OR-----------------------
      <input
        type="text"
        placeholder="Phone number,username,or email"
        id="name"
      />
      <input type="password" placeholder="Password" id="password" />
      <a href="#" className="forget">
        Forget password?
      </a>
      <button className="login">Login</button>
      <p>
        Don't have an account?
        <a href="#" className="signup">
          Sign up
        </a>
      </p>
    </section>
    <footer>
      <div>
        <p>from</p>
      </div>
      <div>
        <img src="./7c43837296f2b6ffc183286b20d3afa2.jpg" className="meta" />
      </div>
    </footer>
  </div>
</>

    )
}
export default Login;