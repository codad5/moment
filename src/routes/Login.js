import {useState, useEffect} from 'react';
import './../login.css';
import axios from 'axios';
import { PostData } from './../services/PostData';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
export default function Login(){
    const [signupdetail, setSignUp] = useState({username:"", password:"", email:""});
    const clearsignupState = { username: "", password: "", email: "" }
    const [signupmessage, setSignUpMessage] = useState({email:"", password:"", username:"", general:""});
    const [logindetail, setLogin] = useState({ username: "", password: "" });
    const clearLoginState = { username: "", password: "" }
    const [loginmessage, setLoginMessage] = useState({ email: "", password: "", username: "", general: "" });
    let navigate = useNavigate();
    useEffect(() => {
        if (sessionStorage.getItem("username")) {
            return navigate("/Home");
        }
    });
    let action_btn = document.querySelectorAll('.action_btn'),
        form_panel = document.querySelectorAll('.login_signup_panel'),
        action = "login";

    const clearCurrentState = () => {
        form_panel.forEach(elem => {
            elem.classList.remove('active-panel');
        })
    }

    action_btn.forEach(element => {
        

        element.addEventListener('click', () => {
            action = element.getAttribute('data-action');
            clearCurrentState();
            let targetPanel = document.querySelector('#active-panel-' + action);
            targetPanel.classList.add('active-panel');
            document.querySelector('title').innerHTML = action.toUpperCase();

        })
    });

    const handleSignUp = () => {
        
        
        // PostData('signup.php', signupdetail).then((result) => {
        //     console.log(result);
        //     console.log(signupdetail);
        //     // let ResponceJson = document
        // })
        axios.post('http://localhost/chat-app/user/api/signup.php',  JSON.stringify(signupdetail))
        .then(res => {
            console.log(res);
            let newmsg = signupmessage;
            newmsg.general = res.data.message;
            setSignUpMessage(newmsg)
            if(!res.data.error){

                setSignUp(clearsignupState);
            }
            else{
                setSignUpMessage(newmsg)
            }
            

        })
        .catch((err) => {
            console.log(err);
        })
    }
    const handleLogin = () => {
        let newmsg = "" ;
        axios.post('http://localhost/chat-app/user/api/login.php', JSON.stringify(logindetail))
            .then(res => {
                console.log(res);
                 newmsg = loginmessage;
                newmsg.general = res.data.message;
                setLoginMessage(newmsg)
                if (!res.data.error) {

                    setLogin(clearLoginState);
                    sessionStorage.setItem('username', res.data.datasent.username, "loggedIn");
                    sessionStorage.setItem("loggedIn", true);
                    
                }
                else {
                    
                }


            })
            .catch((err) => {
                console.log(err);
            })
        setLoginMessage(newmsg)

    }
    // if (sessionStorage.getItem("username")){
    //     return (
    //         <BrowserRouter>
    //         <Routes>
                
    //             <Route
    //                 path="/Login"
    //                 element={<Navigate to="/Home" replace />}
    //             />
                
    //         </Routes>
    //         </BrowserRouter>
    //     )
    // }
    return (
        <main>
        <section className="login_signup_panel " id="active-panel-login">
            <div className="active_btn_ctn">

                <button className="action_btn" data-action="login">LOGIN</button>

            </div>
            <div className="form-panel">
                <div className="form-box" id="form_login_box">

                        <form action="inc/login.inc.php" method="post" onSubmit={(e) => {
                            e.preventDefault();
                            handleLogin();
                        }}>
                        <div className="input_item">

                            <label for="username">
                                USERNAME / Email
                            </label>
                                <input type="text" id="username-login" placeholder="Username" name="username" value={logindetail.username} onChange={(e) => {

                                    setLogin({
                                        username: e.target.value,
                                        password: logindetail.password
                                        
                                    });


                                }} />
                        </div>

                        <div className="input_item">

                            <label for="password">
                                PASSWORD
                            </label>
                                <input type="password" id="password-login" placeholder="password" name="password" value={logindetail.password} onChange={(e) => {

                                    setLogin({
                                        password: e.target.value,
                                        username: logindetail.username

                                    });


                                }} />
                        </div>
                        <div className="input_item">

                            <button type="submit" name="submit">LOGIN</button>
                        </div>
                            <span style={{ color: 'red' }}>{loginmessage.general}</span>

                        <div className="input_item">

                            <a href="hello">forgot password?</a>
                        </div>

                    </form>

                </div>

            </div>

        </section>
        <section className="login_signup_panel active-panel" id="active-panel-signup">
            <div className="active_btn_ctn">

                <button className="action_btn" data-action="signup">SIGN UP</button>

            </div>
            <div className="form-panel">

                <div className="form-box" id="form_signup_box">

                    <form action="inc/signup.inc.php" method="post" onSubmit={(e) => {
                        e.preventDefault();
                        handleSignUp();
                    }}>
                        <div className="input_item">

                            <label for="username">
                                USERNAME
                            </label>
                                <input type="text" id="username" placeholder="Username" name="username" value={signupdetail.username}  onChange={(e) => {
                                    
                                setSignUp({username:e.target.value,
                                    password:signupdetail.password,
                                    email:signupdetail.email});
                                    
                                    
                                }}/>
                        </div>
                        <div className="input_item">

                            <label for="email">
                                Email
                            </label>
                                <input type="email" id="email" placeholder="email" name="email" value={signupdetail.email}
                                    onChange={(e) => {

                                        setSignUp({
                                            username: signupdetail.username,
                                            password: signupdetail.password,
                                            email: e.target.value
                                        });

                                        
                                    }} />
                        </div>
                        <div className="input_item">

                            <label for="password">
                                PASSWORD
                            </label>
                                <input type="password" id="password" placeholder="password" name="password" value={signupdetail.password}
                                    onChange={(e) => {

                                        setSignUp({
                                            username: signupdetail.username,
                                            password: e.target.value,
                                            email: signupdetail.email
                                        });

                                        
                                    }} />
                        </div>
                        <div className="input_item">

                            <button type="submit" name="submit_signup" value="signup">SIGN UP</button>
                        </div>
                                        <span style={{color: 'red'}}>{signupmessage.general}</span>



                    </form>

                </div>

            </div>

        </section>

    </main>
    )
}