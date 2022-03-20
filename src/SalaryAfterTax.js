const SalaryAfterTax = (props) => {
    
    const thousandsSeparators = (num) => {
        const num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    return (
        <div className='mt-4'> <b>Salary after tax:</b> {thousandsSeparators(props.salaryAfterTax)} SEK</div>
    );
}

export default SalaryAfterTax;