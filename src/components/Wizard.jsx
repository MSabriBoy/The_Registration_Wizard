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

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);
    const totalSteps = 3;
    const progressPercent = (step / totalSteps) * 100;

    const handleSubmit = () => {
        console.log("Final Data:", formData);
        setStep(4);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
                {step <= totalSteps && (
                    <div className="mb-6">

                        {/* Step Text */}
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>Step {step} of {totalSteps}</span>
                        </div>

                        {/* Progress Track */}
                        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>

                    </div>
                )}
                <div
                    key={step}
                    className="transition-all duration-300 ease-in-out animate-fadeIn transform">
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
        </div>
    );
}

export default Wizard;