import '../App.css'
import React from 'react';



const Step = ({ currentIndex, steps }) => {
    return (
        <div className="steps-container">
            {steps.map((step, index) => {
                let color = currentIndex === index ? "#004cff" : "black";
                console.log("color", color);
                return (
                    <div className="steps-item">
                        <h3
                            style={{
                                margin: 0,
                                color: color
                            }}
                        >
                            {step.when}
                        </h3>
                    </div>
                );
            })}
        </div>
    );
};

export default Step;