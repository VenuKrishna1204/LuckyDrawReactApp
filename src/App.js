//import logo from './logo.svg';
import './App.css';
import img from './images/img.jpeg';
function App() {
  return (
    <>
    <h2>WELCOME TO VENU LUCKY DRAW APP</h2>
    <div id="container">
    <div className="Rules">
      <h3>Rules:</h3>
      <ul>
        <li>1. Each participant can enter only once.</li>
        <li>2. The draw will be conducted on the specified date.</li>
        <li>3. Winners will be announced on the app and contacted via email.</li>
        <li>4. Prizes must be claimed within 30 days of the announcement.</li>
        <li>5. The organizer's decision is final in case of any disputes.</li>
      </ul>
      <p>Good luck to all participants!</p>
    </div>
    <div className="image">
      <img src={img} alt='VENU'/>
    </div>
    </div>
    </>
  );
}

export default App;
