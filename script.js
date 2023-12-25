const newYears = '1st Jan 2024';

function countdown () {
    const newYearsDate = new Date(newYears);
    const currentdate = new Date ();

    console.log(newYearsDate - currentdate);
}

countdown();