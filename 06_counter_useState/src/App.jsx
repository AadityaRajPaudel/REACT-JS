import React from "react"
import './app.css';

export default function App() {

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isHappy: true,
    employee: "",
    car: ""
  })

  const id = React.useId(); // generates unique id that can be used in htmlFor and id attributes in label and input component

  function handleChange(event) {
    const {name, value, type, checked} = event.target ;
    setFormData(prevFormData =>{
      return {
        ...prevFormData,
        [name]: type==="checkbox"?checked:value
      }
    })
  }

  function handleSubmit(event) {
    // prevents the page from re-rendering after submit button is clicked
    event.preventDefault(); 
    // submitToAPI(formData); > some function that sends data to API
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>

      <label htmlFor={id+"-firstname"}>First Name</label>
      <input 
        id={id+"-firstname"}
        type="text" 
        placeholder="First Name" 
        name="firstName" 
        value={formData.firstName} 
        onChange={handleChange}
      />

      <label htmlFor={id+"-lastname"}>LastName</label>
      <input 
        id={id+"-lastname"}
        type="text" 
        placeholder="Last Name" 
        name="lastName" 
        value={formData.lastName} 
        onChange={handleChange}
      />

      <label htmlFor={id+"-email"}>Email</label>
      <input 
        id={id+"-email"}
        type="email" 
        placeholder="Email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange}
      />

      <label htmlFor={id+"-comment"}>Comment</label>
      <textarea
        id={id+"-comment"}
        placeholder="Enter some comments"
        name="comment"
        value={formData.comment}
        onChange={handleChange}
      ></textarea>

      <label htmlFor={id+"-isHappy"}></label>
      <input 
        type="checkbox" 
        name="isHappy" 
        checked = {formData.isHappy}
        onChange={handleChange}
        id="isHappy"
      />
      <label htmlFor="isHappy">Are you Happy?</label>

      <input 
        type="radio" 
        name="employee" 
        value="fullTime"
        checked = {formData.employee === "fullTime"}
        onChange={handleChange}
        id="fulltime"
      />
      <label htmlFor="fulltime">Full Time</label>

      <input 
        type="radio" 
        name="employee" 
        value="partTime"
        checked = {formData.employee === "partTime"}
        onChange={handleChange}
        id="parttime"
      />
      <label htmlFor="parttime">Part-Time</label>

      <label htmlFor="cars">Select a car:</label>
      <select 
        name="car" 
        value={formData.car} 
        onChange={handleChange}
        id="cars" 
      >
        <option value="">--Choose--</option>
        <option value="BMW">BMW</option>
        <option value="Hyundai">Hyundai</option>
      </select>

      {/* Any button inside form tags will automatically act as type='submit' */}
      <button>Submit</button>

    </form>
  );
}