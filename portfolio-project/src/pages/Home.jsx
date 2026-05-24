import { useState } from 'react'
import Navbar from '../componets/Navbar';
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  const boxes = [
    { title: "Design 1: Coming Soon", color: "#e34c26" },
    { title: "Design 2: Coming Soon", color: "#264de4" },
    { title: "Design 3: Coming Soon", color: "#f0db4f" },
    { title: "Design 4: Coming Soon", color: "#61fb9c" },
  ];

  return (
    <>
      <section id="center">
        <div>
          <h1>Hi! I'm Nikolas</h1>
          <h2>
            I am currently taking a UI design course where I am learning the fundamentals of web design, including layout, typography, and user experience principles. 
            Through this course, I am developing practical skills in creating visually appealing and user-friendly web interfaces.
          </h2>
        </div>

        <div className="grid-container">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="grid-box"
              style={{ backgroundColor: box.color }}
            >
                <h2>{box.title}</h2>
              </div>
            ))}
        </div>
        
      </section>

      <div className="ticks"></div>

      

      <div className="ticks"></div>
      <section id="spacer">
        <div>
          <h3>
            Thank you for your interest
          </h3>
        </div>
      </section>
    </>
  )
}

export default App
