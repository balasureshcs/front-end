import { useState } from 'react';
import Home from './Home.jsx';

import './App.css';

function SignInPage({ setPageTab, setUserId }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit() {
        if (username !== '' && password !== '') {
            // 🔖 API CONNECTION CODE
            // ---------------------------------------------------------------------
            // 🏷️ START 
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            const raw = JSON.stringify({
                "username": username,
                "password": password
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("http://localhost:3434/user/sign-in", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        setUserId(result.data._id);
                        setPageTab("home");
                    }
                    else {
                        alert(result.msg);
                    }
                })
                .catch((error) => console.error(error));
            // 🏷️ end
            // ---------------------------------------------------------------------
            // Actually this user id will be coming from back-end

        }
    }

    return (
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
        placeholder="username"
        id="name" value={username} onChange={(e) => setUsername(e.target.value)}
      />
      <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <a href="#" className="forget">
        Forget password?
      </a>
      <button className="login" onClick={handleSubmit}>Login</button>
      <button onClick={() => setPageTab('sign-up')}>go to sign-up page</button>
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


        // <div>
        //     <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
        //     <br />
        //     <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        //     <br />
        //     <button onClick={handleSubmit}>submit</button>
        //     <br />
        //     <button onClick={() => setPageTab('sign-up')}>go to sign-up page</button>
        // </div>
    );
}

function SignUpPage({ setPageTab, setUserId }) {
    const [mobilenumber, setMobilenumber] = useState("");
    const [fullname, setFullname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");


    function handleSubmit() {
        if (password === ConfirmPassword) {
            // allow only if password and confirmPassword is same.
            // then perform back-end operation and get userId.
            // 🔖 API CONNECTION CODE
            // ---------------------------------------------------------------------
            // 🏷️ START 
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "username": username,
                "password": password
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("http://localhost:3434/user/sign-up", requestOptions)
                .then((response) => response.json())
                .then((result) => {
                    if (result.status) {
                        setUserId(result.data._id);
                        setPageTab("home");
                    } else {
                        alert(result.msg);
                    }
                })
                .catch((error) => console.error(error));
            // ---------------------------------------------------------------------
            // 🏷️ END 
        }
    }
    return (
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
      <input type="text" placeholder="Mobilenumber" id="name" value={mobilenumber} onChange={(e) => setUsername(e.target.value)} />
      <input type="text" placeholder="Fullname" id="fname" value={fullname} onChange={(e) => setFullname(e.target.value)}  />
      <input type="text" placeholder="Username" id="uname"  value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="ConfirmPassword" id="conpassword" value={ConfirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>

      <button className="signup" onClick={handleSubmit}>Sign up</button>
      <button onClick={() => setPageTab('sign-in')}>go to sign-in page</button>
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


        // <div>
        //     <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
        //     <br />
        //     <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        //     <br />
        //     <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='confirm password' />
        //     <br />
        //     <button onClick={handleSubmit}>submit</button>
        //     <br />
        //     <button onClick={() => setPageTab('sign-in')}>go to sign-in page</button>
        // </div>
    );
}

function WelcomePage({ setPageTab }) {
    return (
        <div>
            <button onClick={() => setPageTab("sign-in")}>sign-in</button>
            <button onClick={() => setPageTab("sign-up")}>sign-up</button>
        </div>
    );
}

function MainComp() {
    const [pageTab, setPageTab] = useState("");
    const [userId, setUserId] = useState("");

    switch (pageTab) {
        case "sign-in":
            return <SignInPage setPageTab={setPageTab} setUserId={setUserId} />;
        case "sign-up":
            return <SignUpPage setPageTab={setPageTab} setUserId={setUserId} />;
        case "home":
            return <Home setPageTab={setPageTab} userId={userId} />;
        default:
            return <WelcomePage setPageTab={setPageTab} />;
    }
}

function App() {
    return (
        <div className="App">
            <div className="App-header">
                <MainComp />
            </div>
        </div>
    );
}

export default App;