import React from 'react';

const Header = ({ title }) => (
    <div>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/topics">Topics</a>
    <h1>{title}</h1>
    </div>
);

export default Header;

// If you didn't notice, the Header component does not have props. Instead, it 
// has been written to receive a destructured object. The { title } indicates that 
// the Header component wants the title property of the props object; it can be 
// accessed like a normal function parameter without the need for props.title, as 
// you can see in the h1 element. If props had been used, the h1 element would 
// change to <h1>{props.title}</h1>. This is also referred to as destructuring 
// assignment syntax.