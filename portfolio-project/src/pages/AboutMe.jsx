import { useState } from 'react'
import { Link } from "react-router-dom";

function AboutME(){
    const [count, setCount] = useState(0)

    return(
        <>
            <section id="center">
                <div>
                    <h1>Who Am I?</h1>
                    <h2>I am a student from uottawa currently enrolled in Software Engineering.</h2>
                    <h2>I enjoy long walks on the beach and acedemic valadition from my school work.</h2>
                </div>
            </section>
        </>
    )
}

export default AboutME