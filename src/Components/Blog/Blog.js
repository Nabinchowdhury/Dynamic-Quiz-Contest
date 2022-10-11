import React from 'react';

const Blog = () => {
    return (
        <div className='my-12'>
            <div className='border w-3/4 mx-auto rounded-lg bg-slate-100 font-bold py-3 mb-10'>
                <h3 className='text-2xl text-cyan-700'>Question 1: What is the purpose of react-router?</h3>
                <h4 className='text-xl text-fuchsia-700'>Answer: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h4>
            </div>
            <div className='border w-3/4 mx-auto rounded-lg bg-slate-100 font-bold py-3 mb-10'>
                <h3 className='text-2xl text-cyan-700'>Question 1: How does context work?</h3>
                <h4 className='text-xl text-fuchsia-700'>Answer: Context is designed to share data that can be considered “global” for a tree of React Components. It sits next to React to props and state. In other words, Context provides a way to pass data through the component tree without having to pass props down manually at every level.</h4>
            </div>
            <div className='border w-3/4 mx-auto rounded-lg bg-slate-100 font-bold py-3'>
                <h3 className='text-2xl text-cyan-700'>Question 1: Describe useRef hook.</h3>
                <h4 className='text-xl text-fuchsia-700'>Answer: The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.We use useRef if we need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.</h4>
            </div>
        </div>
    );
};

export default Blog;