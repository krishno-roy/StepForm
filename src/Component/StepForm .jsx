import React, { useState } from "react";

const StepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Step Indicator */}
        <div className="flex justify-between mb-8">
          <div
            className={`flex flex-col items-center ${
              step >= 1 ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-500 font-bold">
              1
            </div>
            <span className="mt-2 text-sm">Customer Info</span>
          </div>

          <div
            className={`flex flex-col items-center ${
              step >= 2 ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-500 font-bold">
              2
            </div>
            <span className="mt-2 text-sm">Shipping Info</span>
          </div>

          <div
            className={`flex flex-col items-center ${
              step >= 3 ? "text-yellow-500" : "text-gray-400"
            }`}
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-yellow-500 font-bold">
              3
            </div>
            <span className="mt-2 text-sm">Payment Info</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="space-y-4">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Customer Info</h2>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 placeholder:text-white border-2 border-white  rounded text-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded border-2 border-white placeholder:text-white  text-black mt-2"
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Shipping Info</h2>
              <input
                type="text"
                placeholder="Address"
                className="w-full p-2 border-2 border-white placeholder:text-white rounded text-black"
              />
              <input
                type="text"
                placeholder="City"
                className="w-full p-2 border-2 border-white rounded placeholder:text-white mt-2 "
              />
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold mb-4  text-white ">
                Payment Info
              </h2>
              <input
                type="text"
                placeholder="Card Number"
                className="w-full p-2 rounded placeholder:text-white border-2 border-white text-black"
              />
              <input
                type="text"
                placeholder="Expiry Date"
                className="w-full p-2 rounded border-2 border-white placeholder:text-white  text-black mt-2"
              />
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-4 py-2 rounded ${
              step === 1
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-yellow-500 hover:bg-yellow-600"
            }`}
          >
            Back
          </button>

          {step < 3 ? (
            <button
              onClick={nextStep}
              className="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => alert("Form submitted!")}
              className="px-4 py-2 rounded bg-green-500 hover:bg-green-600"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepForm;
