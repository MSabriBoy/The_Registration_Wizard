function StepOne({ formData, setFormData, nextStep }) {
  const isValid =
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "" &&
    formData.dob !== "";

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Personal Information
      </h2>
      <p className="text-gray-500 mb-6 text-sm">
        Please enter your basic details to continue.
      </p>

      {/* First Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className={`w-full border rounded-lg px-4 py-2 transition
            ${formData.firstName === "" 
              ? "border-gray-300 focus:ring-blue-500" 
              : "border-green-500 focus:ring-green-500"}
            focus:outline-none focus:ring-2`}
        />
        {formData.firstName === "" && (
          <p className="text-red-500 text-xs mt-1">
            First name is required
          </p>
        )}
      </div>

      {/* Last Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className={`w-full border rounded-lg px-4 py-2 transition
            ${formData.lastName === "" 
              ? "border-gray-300 focus:ring-blue-500" 
              : "border-green-500 focus:ring-green-500"}
            focus:outline-none focus:ring-2`}
        />
        {formData.lastName === "" && (
          <p className="text-red-500 text-xs mt-1">
            Last name is required
          </p>
        )}
      </div>

      {/* DOB */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date of Birth
        </label>
        <input
          type="date"
          value={formData.dob}
          onChange={(e) =>
            setFormData({ ...formData, dob: e.target.value })
          }
          className={`w-full border rounded-lg px-4 py-2 transition
            ${formData.dob === "" 
              ? "border-gray-300 focus:ring-blue-500" 
              : "border-green-500 focus:ring-green-500"}
            focus:outline-none focus:ring-2`}
        />
        {formData.dob === "" && (
          <p className="text-red-500 text-xs mt-1">
            Date of birth is required
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={nextStep}
        disabled={!isValid}
        className={`w-full py-2 rounded-lg font-medium transition
          ${isValid 
            ? "bg-blue-600 text-white hover:bg-blue-700" 
            : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
      >
        Continue →
      </button>
    </div>
  );
}

export default StepOne;