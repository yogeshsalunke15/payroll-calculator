
import { useState } from 'react';
import { yearsList, cityList, professionList } from './utils';
import './PayrollForm.css';

const initialFormValues = {
    experience: '',
    profession: '',
    city: '',
    year: '',
};

const PayrollForm = (props) => {
    const [formData, setFormData] = useState(initialFormValues);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        props.getPayRollData(formData);
    }

    const handleOnChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    }

    return(
    <>
        <h2>Adfenix Payroll Calculator</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label className="form-label" htmlFor="experience">Experience</label>
                <input type="number" id="experience" name='experience' className="form-control"
                onChange={handleOnChange}
                placeholder='enter years of experience' required />
            </div>
            <div className='mt-3'>
                <label className="form-label" htmlFor="profession">Profession</label>
                {professionList.map((profession) => {
                   return (<div className="form-check" key={profession}>
                        <label className="form-check-label" htmlFor={profession}>{profession}</label>
                        <input type="radio" className="form-check-input" id={profession} name="profession"  
                        value={profession} onChange={handleOnChange} required/>
                    </div>);
                })}
            </div>
            <div className='mt-3'>
                <label className="form-label" htmlFor="city">City</label>
                <select className="form-select" id="city" name="city" required onChange={handleOnChange}> 
                    <option value="">select city</option>
                    {cityList.map((city) => {
                        return <option key={city} value={city}>{city}</option>;
                    })}
                </select>
            </div>
            <div className='mt-3'>
                <label className="form-label" htmlFor="year">Income Year</label>
                <select className="form-select" id="year" name="year" required onChange={handleOnChange}> 
                    <option value="">select year</option>
                    {yearsList.map((year) => {
                        return <option key={year} value={year}>{year}</option>;
                    })}
                </select>
            </div>
            <button type="submit" className="btn btn-success mt-3">Calculate Salary</button>
        </form>
    </>
    );
}

export default PayrollForm;