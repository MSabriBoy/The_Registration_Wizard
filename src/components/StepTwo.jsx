function StepTwo({ formData, setFormData, nextStep, prevStep }) {
  return (
    <div>
      <h2>Step 2: Account Details</h2>

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />

      <button type="button" onClick={prevStep}>
        Back
      </button>

      <button type="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
}

export default StepTwo;