const companies = [
    {
        name: 'Facebook',
        category: 'Social Media',
        start: 2005,
        end:2020
    },
    {
        name: 'Google',
        category: 'Search Engine',
        start: 1999,
        end: 2026
    },
    {
        name: 'Apple Inc',
        category: 'Smart Phone',
        start: 1992,
        end: 2040
    },
    {
        name: 'Microsoft',
        category: 'Window Os',
        start: 1981,
        end: 3033
    },
    {
        name: 'KFC',
        category: 'chicken',
        start: 1988,
        end: '2020'
    },
];

const ages = [11, 23, 34, 56, 78, 23, 22, 12, 21, 34, 60, 59];

// for (let i = 0; i < companies.length; i++){
//     console.log(companies[i]);
    //console.log(companies[i].name);
//}

///////////////////////////////////////
///////////////////////////////////////

//forEach
// companies.forEach((company) => { 
//     console.log(company.name);
//     console.log(company.category);
// });

///////////////////////////////////////
///////////////////////////////////////

//filter
// let canDrink = [];
// for (i = 0; i < ages.length; i++){
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink);

// const canDrink = ages.filter((age) => { 
//     if (age >= 21) {
//         return true;
//     }
// });

// console.log(canDrink);

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

//filter social media company
// const socialCompany = companies.filter((company) => { 
//     if (company.category == 'Social Media') {
//         return true;
//     }
// });

// console.log(socialCompany);

// const socialCompany = companies.filter(company => company.category === 'Social Media');
// console.log(socialCompany);

//get 81s companies
// const eightOneCompanies = companies.filter(company => (company.start >= 1980
//     && company.start < 1999));

// console.log(eightOneCompanies);   


//get companies that latest 10 years more
// const latestTenYears = companies.filter(company => (
//     company.end-company.start>=10
// ));

// console.log(latestTenYears);

///////////////////////////////////////
///////////////////////////////////////
//map

//create array of company name
// const companyNames = companies.map((company) => { 
//     return company.name;
// });

// console.log(companyNames);

//test map
// const testMap = companies.map((company) => { 
//     return `${company.name}[${company.start}-${company.end}]`;
// });
// console.log(testMap);

// const testMap = companies.map(company => `${company.name}[${company.start}-${company.end}]`);
// console.log(testMap);

// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// const ageMap = ages
//     .map(age => Math.sqrt(age))
//     .map(age => age * 2);

// console.log(ageMap);    
     
///////////////////////////////////////
///////////////////////////////////////
//Sort

//sort companies
// const storedCompanies = companies.sort((c1, c2) => { 
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });

// console.log(storedCompanies);

// const storedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(storedCompanies);

//sort ages
// const sortAges = ages.sort((a, b) => a - b);
// const sortAges = ages.sort((a, b) =>b-a);
// console.log(sortAges);
///////////////////////////////////////
///////////////////////////////////////
//Reduce
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++){
//     ageSum += ages[i];

// }

// console.log(ageSum);

// const ageSum = ages.reduce((total,age) => { 
//     return total + age;
// }, 0);

// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

//get total year for all companies
// const totalYears = companies.reduce((total, company) => { 
//     return total + (company.end - company.start);
// }, 0);

// console.log(totalYears);

// const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
// console.log(totalYears);

///////////////////////////////////////
///////////////////////////////////////
//combine method
// const combined = ages.map(age => age * 2);
// console.log(combined);

// const combined = ages.map(age => age * 2).filter(age => age >= 40).sort((a, b) => a - b);
// console.log(combined);

const combined = ages.map(age => age * 2).filter(age => age >= 40).sort((a, b) => a - b).reduce((a, b) => a + b, 0);
console.log(combined);