import { useState } from "react";

function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
     
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Account Details
      </h2>
      <p className="text-gray-500 mb-6 text-sm">
        Create your login credentials.
      </p>

     
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
          className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
      </div>

      
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
          className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-12
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />

        
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-sm text-gray-500 hover:text-gray-700"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Re-enter your password"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
      </div>

      
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
          className="w-1/2 bg-blue-600 text-white py-2 rounded-lg 
                     hover:bg-blue-700 transition duration-200 font-medium"
        >
          Continue →
        </button>
      </div>
    </div>
  );
}

export default StepTwo;