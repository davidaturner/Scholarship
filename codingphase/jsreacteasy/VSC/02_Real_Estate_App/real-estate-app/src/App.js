// import logo from './logo.svg';
import './App.css';

import './css/colors.css';
import './css/header.css';
import './css/contentsearch.css';
import './css/contentlisting.css';

import Header from './Header';
import Contentsearch from './Contentsearch';
import Contentlisting from './ContentListing';

function App() {
  return (
    <div>
      <Header/>
      <div id="content-area-id">
        <div className="content-area">
        < Contentsearch />
        < Contentlisting />
        </div>
      </div>
    </div>
  );
}

export default App;
