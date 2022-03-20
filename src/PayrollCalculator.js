import { useState } from "react";
import PayrollForm from "./PayrollForm";
import SalaryAfterTax from "./SalaryAfterTax";
import { getSalaryBeforeTax, getSalaryAfterTax } from "./utils";

const PayrollCalculator = () => {
    
    const [salaryAfterTax, setSalaryAfterTax] = useState('');

    const getUserData = (userData) => {
        const {experience, profession, city, year} = userData;
        const salaryBeforeTax = getSalaryBeforeTax(experience, profession);
        const salaryAfterTax = getSalaryAfterTax(salaryBeforeTax, city, year);
        setSalaryAfterTax(salaryAfterTax);
    }   

    return(
        <div className='container-fluid'>
            <PayrollForm getPayRollData={getUserData}/>
            { salaryAfterTax && <SalaryAfterTax salaryAfterTax={salaryAfterTax} />}
        </div>
    );
}

export default PayrollCalculator;
