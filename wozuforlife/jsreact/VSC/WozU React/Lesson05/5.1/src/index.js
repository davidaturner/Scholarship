import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './screens/Home';
import About from './screens/About';
import Topics from './screens/Topics';

// <Index pathname=pathname />
const Index = ({ pathname }) => {
  console.log(pathname)
  switch (pathname) {
    case '/about':
      return <About />;
    case '/topics':
      return <Topics />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index pathname={pathname} />
  </React.StrictMode>
);

// The popstate event of the Window interface is fired when the active history 
// entry changes while the user navigates the session history. It changes the 
// current history entry to that of the last page the user visited or, if 
// history.pushState() has been used to add a history entry to the history stack, 
// that history entry is used instead.

window.addEventListener('popstate', () => {
  pathname = window.location.pathname;
});

// The above code is how you are handling the user switching between your 
// components when the URL on your site changes. A function is created named 
// Index, which you are then passing in pathname. If you look a little further 
// down the code, you can see that pathname is set to whatever the URL is. Back 
// within the function, the switch case statement then uses pathname to determine 
// which component to use and render. Next, you will call the render() method, and 
// that is where you are rendering this component. The last part of the file is the 
// event listener that will update your pathname variable every time you change 
// the URL.
