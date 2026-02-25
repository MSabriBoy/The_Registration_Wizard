function StepOne({ formData, setFormData, nextStep }) {
  return (
    <div>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-1">
        Personal Information
      </h2>
      <p className="text-gray-500 mb-6 text-sm">
        Please enter your basic details to continue.
      </p>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          First Name
        </label>
        <input
          type="text"
          placeholder="John"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
      </div>
     
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Doe"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
      </div>

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
          className="w-full border border-gray-300 rounded-lg px-4 py-2 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     focus:border-blue-500 transition"
        />
      </div>

      <button
        type="button"
        onClick={nextStep}
        className="w-full bg-blue-600 text-white py-2 rounded-lg 
                   hover:bg-blue-700 transition duration-200 font-medium"
      >
        Continue →
      </button>
    </div>
  );
}

export default StepOne;