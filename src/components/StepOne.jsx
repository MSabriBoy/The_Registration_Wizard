function StepOne({ formData, setFormData, nextStep }) {
  return (
    <div>
      <h2>Step 1: Personal Info</h2>

      <input
        type="text"
        placeholder="First Name"
        value={formData.firstName}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={(e) =>
          setFormData({ ...formData, lastName: e.target.value })
        }
      />

      <input
        type="date"
        value={formData.dob}
        onChange={(e) =>
          setFormData({ ...formData, dob: e.target.value })
        }
      />

      <button type="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default StepOne;