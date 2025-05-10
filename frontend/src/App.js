import { useEffect, useState } from 'react';
import { DtPicker } from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/style.css'
import './App.css';
import axios from 'axios';



function App() {
  const [formData, setFormData] = useState({
    name:"",
    phone:"",
    email:"",
    stringerName:"",
    racketModel:"",
    stringType:"",
    tensionH:"",
    tensionV:"",
    droppoffDate:null,
    dropofflocation:"",
    addnote:"",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value}));
  }

  const handleDateChange = (date) => {
    setFormData((prev) => ({...prev, dropoffDate: date}));
  }


  return (
    <div>
      <div className='form-container'>
        <label>Name:</label>
        <input
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange}
        />
        <label>Phone Number:</label>
        <input
          type="text" 
          name="phone" 
          value={formData.phone} 
          onChange={handleChange}
        />
        <label>Email Address:</label>
        <input
          type="text" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
        />
        <label>Stringer Name:</label>
        <select 
          name="stringerName"
          value={formData.racketModel}
          onChange={handleChange}>
          <option>Bob</option>
          <option>Jeff</option>
        </select>
        <label>Racket Model:</label>
        <input
          type="text" 
          name="racketModel" 
          value={formData.racketModel} 
          onChange={handleChange}
        />
        <label>Select String Type:</label>
        <select
          name="stringType"
          value={formData.stringType}
          onChange={handleChange}>
          <option value="Aerobyte">Aerobyte</option>
          <option value= "BG 80">BG 80</option>
        </select>
        <label>Select String Tension Horizontal:</label>
        <input
          type="text" 
          name="tensionH" 
          value={formData.tensionH} 
          onChange={handleChange}
        />
        <label>Select String Tension Vertical:</label>
        <input
          type="text" 
          name="tensionV" 
          value={formData.tensionV} 
          onChange={handleChange}
        />
        <label>Select Racket Drop-off Date and Time:</label>
        <div>
          <DtPicker 
            selected={formData.dropoffDate}
            onChange={(date) => handleDateChange(date)} 
            name="dropoffDate"
            dateFormat="yyyy-MM-dd"/>
        </div>
        <label>Select Racket Drop-off Location:</label>
        <select
          name="dropofflocation"
          value={formData.dropofflocation}
          onChange={handleChange}>
          <option>Pizza Pizza</option>
          <option>Jeff</option>
        </select>
        <label>Additional Notes:</label>
        <input
          type="text" 
          name="addnote" 
          value={formData.addnote} 
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}

export default App;
