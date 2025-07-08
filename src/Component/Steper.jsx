import React from "react";
import "./Staper.css"

const Steper = () => {
  const steps = ["Customer Info", "Shipping Info", "Payment Info"];

  return (
    <div className="flex justify-between gap-40">
      {steps.map((step, i) => (
        <div key={i} className="step-itme">
          <div>{i + 1}</div>
          <div className="text-gray-500">{step}</div>
        </div>
      ))}
    </div>
  );
};

export default Steper;
