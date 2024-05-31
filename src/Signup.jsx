
function Signup() {
    return(
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SignUp</title>
  <link rel="stylesheet" href="./signup.css" />
  <div className="container">
    <header></header>
    <section>
      <div className="logo">
        <img src="./images.png" />
      </div>
      <a href="#" className="facebook">
        Continue with Facebook
      </a>
      ----------------------OR-----------------------
      <input type="text" placeholder="Mobile number or email" id="name" />
      <input type="text" placeholder="Full name" id="fname" />
      <input type="text" placeholder="User name" id="uname" />
      <input type="password" placeholder="Password" id="password" />
      <input type="password" placeholder="confirmpassword" id="conpassword" />

      <button className="signup">Sign up</button>
    
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

export default Signup;