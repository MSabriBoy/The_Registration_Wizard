import { useState } from "react";

function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  const [showPassword, setShowPassword] = useState(false);

  // Regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isEmailValid = emailRegex.test(formData.email);
  const isPasswordValid = formData.password.length >= 8;
  const doPasswordsMatch =
    formData.password === formData.confirmPassword &&
    formData.confirmPassword !== "";

  const isFormValid =
    isEmailValid && isPasswordValid && doPasswordsMatch;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Account Details
      </h2>
      <p className="text-gray-500 mb-6 text-sm">
        Create your login credentials.
      </p>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={`w-full border rounded-lg px-4 py-2 transition
            ${formData.email === ""
              ? "border-gray-300 focus:ring-blue-500"
              : isEmailValid
              ? "border-green-500 focus:ring-green-500"
              : "border-red-500 focus:ring-red-500"}
            focus:outline-none focus:ring-2`}
        />
        {formData.email !== "" && !isEmailValid && (
          <p className="text-red-500 text-xs mt-1">
            Please enter a valid email address
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mb-4 relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Minimum 8 characters"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          className={`w-full border rounded-lg px-4 py-2 pr-12 transition
            ${formData.password === ""
              ? "border-gray-300 focus:ring-blue-500"
              : isPasswordValid
              ? "border-green-500 focus:ring-green-500"
              : "border-red-500 focus:ring-red-500"}
            focus:outline-none focus:ring-2`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700"
        >
          {showPassword ? "Hide" : "Show"}
        </button>

        {formData.password !== "" && !isPasswordValid && (
          <p className="text-red-500 text-xs mt-1">
            Password must be at least 8 characters
          </p>
        )}
      </div>

      {/* Confirm Password */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword: e.target.value,
            })
          }
          className={`w-full border rounded-lg px-4 py-2 transition
            ${formData.confirmPassword === ""
              ? "border-gray-300 focus:ring-blue-500"
              : doPasswordsMatch
              ? "border-green-500 focus:ring-green-500"
              : "border-red-500 focus:ring-red-500"}
            focus:outline-none focus:ring-2`}
        />
        {formData.confirmPassword !== "" && !doPasswordsMatch && (
          <p className="text-red-500 text-xs mt-1">
            Passwords do not match
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={prevStep}
          className="w-1/2 bg-gray-300 py-2 rounded-lg 
                     hover:bg-gray-400 transition duration-200 font-medium"
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={nextStep}
          disabled={!isFormValid}
          className={`w-1/2 py-2 rounded-lg font-medium transition
            ${
              isFormValid
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default StepTwo;