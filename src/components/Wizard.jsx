import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import Success from "./Success";

function Wizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = () => {
    console.log("Final Data:", formData);
    setStep(4); // show success screen
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div  className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
     {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      )}

      {step === 2 && (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}

      {step === 3 && (
        <StepThree
          formData={formData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
        />
      )}

      {step === 4 && <Success />}
    </div>
    </div>
  );
}

export default Wizard;