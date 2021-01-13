import React from 'react';
import ReactDOM from 'react-dom';
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div>
      <ContactCard
        contact={{
          name: "Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(327)-322-3377", email: "whiskerson@gmail.com"
        }}
      />

      <ContactCard
        contact={{
          name: "Carson", imgUrl: "http://placekitten.com/300/200", phone: "(355)-267-1134", email: "carson@gmail.com"
        }}
      />

      <ContactCard
        contact={{
          name: "Pokie", imgUrl: "http://placekitten.com/300/200", phone: "(412)-344-6244", email: "pokie@gmail.com"
        }}
      />

      <ContactCard
        contact={{
          name: "Moku", imgUrl: "http://placekitten.com/300/200", phone: "(333)-544-6667", email: "moku@gmail.com"
        }}
      />
    </div >
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root'));

