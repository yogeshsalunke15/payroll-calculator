
export const yearsList = [2019, 2020];

export const cityList = ['Stockholm', 'Gothenburg'];

export const professionList = ['Developer', 'Teacher', 'Cashier'];

// Base tax rate based of city and year
const baseTaxRate = {
    'Stockholm': {
        '2019': 30,
        '2020': 29
    },
    'Gothenburg': {
        '2019': 25,
        '2020': 22
    }
};

// Tax slab for country
const taxSlab = {
    'S1': 36000,
    'S2': 45000
}

//salary Base pay Before Tax
const  basePay = {
    'Developer': 30000,
    'Teacher': 27000,
    'Cashier': 25000
};

// Hike percentage based on experience
const hikeByExperience = {
    '4': 20,
    '5': 20,
    '6': 20,
    '7': 20,
    '8': 40,
    '9': 40,
    '10': 40,
    'senior': 60
};

/**
 *  Calculate salary before tax
 * @param {*} baseSalary 
 * @param {*} hike 
 * @returns 
 */
const calculateSalaryBeforeTax = (baseSalary, hike) => {
    const hikeAmount = (baseSalary*hike) / 100;
    return (baseSalary + hikeAmount);
};


/**
 *  Calculate and return salary before tax based experience and profession
 * @param {*} expe
 * @param {*} profession
 * @returns 
 */
export const getSalaryBeforeTax = (expe, profession) => {
    
    const experience = parseInt(expe);

    if (experience >=0 && experience <=3) {

        return basePay[profession];

    } else if (experience >=4 && experience <=10) {

        const hike = hikeByExperience[experience];
        const baseSalary = basePay[profession];
        return calculateSalaryBeforeTax(baseSalary, hike);

    } else if (experience >=11) {

        const hike = hikeByExperience['senior'];
        const baseSalary = basePay[profession];
        return calculateSalaryBeforeTax(baseSalary, hike);
    }
};


/**
 * Calculate Salary After Tax
 * @param {*} salary 
 * @param {*} taxRate 
 * @returns 
 */
const calculateSalaryAfterTax = (salary, taxRate) => {
    const reduction = (salary*taxRate) / 100;
    return (salary - reduction);
}

/**
 * Return amount after 50% tax deduction 
 * @param {*} salary 
 * @returns 
 */
const getTax50 = (salary) => {
    const salaryAboveBase = salary - taxSlab['S1'];
    const extraTax = (salaryAboveBase*50)/100;
    return (salaryAboveBase - extraTax);
}

/**
 * Calculate and return salary after tax based salary, city and year
 * @param {*} salary 
 * @param {*} city 
 * @param {*} year 
 */
export const getSalaryAfterTax = (salary, city, year) => {

    const taxRate = baseTaxRate[city][year];

    if (salary <= taxSlab['S1']){
        
        return calculateSalaryAfterTax(salary, taxRate);

    } else if (salary > taxSlab['S1'] && salary <= taxSlab['S2']) {
        
        const extraIncome = getTax50(salary);
        const baseSalary = calculateSalaryAfterTax(taxSlab['S1'], taxRate);
        return (baseSalary + extraIncome);

    } else if(salary > taxSlab['S2']) {

        const extraIncome1 = getTax50(taxSlab['S2']);
        const baseSalary = calculateSalaryAfterTax(taxSlab['S1'], taxRate);
        const amountAbove45 = salary - taxSlab['S2'];
        const extraTax = (amountAbove45*70)/100;
        const extraIncome2 = amountAbove45 - extraTax;
        return (baseSalary + extraIncome1 + extraIncome2);
    }

};