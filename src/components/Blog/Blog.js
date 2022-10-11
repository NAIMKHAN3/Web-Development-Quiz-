import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>

            <div className='blog'>
                <h1>Ans. to the question 1</h1>
                <h3>Question 1 : What is the purpose of the react router?</h3>
                <p>Ans: ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
            </div>
            <div className='blog'>
                <h1>Ans. to the question 2</h1>
                <h3>Question 2 : How does context api work?</h3>
                <p>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='blog'>
                <h1>Ans. to the question 3</h1>
                <h3>Question 3 : What is useRef hook in react?</h3>
                <p>Ans: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
            </div>
        </div>
    );
};

export default Blog;