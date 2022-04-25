import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div id='blog'>
            <h3 className='text-center  my-3 text-info'>Theory Part</h3>
            <h5>Question 1: What is the different between authorization and authentication</h5>
            <p>Ans: Authentication needs usually user login details where authorization need to user privilege security system. It done before authorization while authorization process after authentication process. In authentication process verified user while authorization user are validated.    </p>
            <h5>Question 2: Why are you using firebase? What other option do you have to implement authentication. </h5>
            <p>Ans:Firebase helps us to develop high quality apps. Each feature works independently and work better when work together. Authentication is common way to handle security system in all application. The other option to handle security system is cookie based authentication. Token based authentication. Third party access like OAuth, API-token etc. Another option are OpenId and SAML.</p>
            <h5>Question 3: What other service does firebase provide than authentication? </h5>
            <p>Ans:Firebase authentication provides backend service. Also provides ready to use UI libraries to your authentication app. It supports authentication using passwords, phone number and also provide popular identiy Google, Facebook, Github, Twitter and more.  </p>

        </div>
    );
};

export default Blog;