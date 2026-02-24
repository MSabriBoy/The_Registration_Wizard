function StepThree({ formData, prevStep, handleSubmit }) {
  return (
    <div>
      <h2>Step 3: Review & Submit</h2>

      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>DOB: {formData.dob}</p>
      <p>Email: {formData.email}</p>

      <button type="button" onClick={prevStep}>
        Back
      </button>

      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default StepThree;