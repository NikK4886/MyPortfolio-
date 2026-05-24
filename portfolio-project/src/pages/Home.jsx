import { useState } from 'react'
import Navbar from '../componets/Navbar';

function App() {
  const [count, setCount] = useState(0)

  const boxes = [
    { title: "HTML", color: "#e34c26" },
    { title: "CSS", color: "#264de4" },
    { title: "JavaScript", color: "#f0db4f" },
    { title: "React", color: "#61fb9c" },
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
