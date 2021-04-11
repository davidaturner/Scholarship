// import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <div className="logo">Logo</div>
      <nav>
        <a href="#">Contact Us</a>
        <a href="#">About</a>
        <a href="#">Login</a>
        <a href="#" className="register-btn">Register</a>
      </nav>
    </header>
  );
}

export default Header;