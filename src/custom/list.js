import './list.css';
import Confetti from 'react-confetti';
import React, { useState } from 'react';

function List() {
  const students = [
    { name: "Simhadri", city: "Chittoot" },
    { name: "Reddy Babu", city: "Pileru" },
    { name: "Vishnu", city: "Madanapalli" },
    { name: "Neha", city: "Guntur" },
    { name: "Harsha", city: "Kadapa" },
    { name: "Vidya", city: "Peta" },
    { name: "Bujji", city: "Chittoor" },
    { name: "Venu", city: "Madanapalli" },
  ];

  const [count, setWin] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDraw = () => {
    setLoading(true); 

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * students.length);
      const winner = students[randomIndex];
      setWin(`Winner is: ${winner.name} from ${winner.city}`);

      setShowConfetti(true); 
      setLoading(false); 

      setTimeout(() => {
        setShowConfetti(true);
      }, 3000);
    }, 10000);
  };

  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <>
      <h2>Participants List</h2>
      <p style={{ fontFamily: "cursive" }}>
        Here is the list of participants who have entered the lucky draw:
      </p>
      <div className="list">
        {students.map((student, index) => (
          <div key={index} className="student">
            <p><b>Name:</b> {student.name}</p>
            <p><b>City:</b> {student.city}</p>
          </div>
        ))}
      </div>
      <div>
        <center>
          <button onClick={handleDraw}>Draw</button>
          {loading && <h3 style={{color:"blue"}}>Please wait, selecting winner...</h3>}
          {showConfetti && <Confetti width={width} height={height} />}
          {count && <h1>Congratulations!</h1>}
          <p style={{ fontFamily: "cursive", color: "red" }}>{count}</p>
        </center>
      </div>
    </>
  );
}

export default List;
