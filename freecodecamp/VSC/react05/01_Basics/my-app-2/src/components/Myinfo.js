import react from 'react';
import reactDOM from 'react-dom';

function MyInfo() {
    return (
        <div>
            <h1>David Turner</h1>
            <p style={{ fontSize: "22px" }}>I don't really like to talk about myself.
      <span style={{ color: "white", background: "blue" }}> I pass.</span></p>
            <p style={{ fontSize: "22px" }}>I am currently studying:</p>
            <ul>
                <li style={{ fontSize: "20px" }}> Java/Spring Full Track</li>
                <li style={{ fontSize: "20px" }}>C#/Asp.Net Full Track</li>
                <li style={{ fontSize: "20px" }}>>Python</li>
                <li style={{ fontSize: "20px" }}>Php</li>
            </ul>
        </div>
    )
}

export default MyInfo