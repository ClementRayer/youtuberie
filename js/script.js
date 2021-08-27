// Functions to grab content in the library
getRandomIdFromArray = (arrayName) =>{
    return Math.floor(Math.random() * arrayName.length);
}

getRandomValueFromArray = (arrayName) =>{
    return arrayName[getRandomIdFromArray(arrayName)];
}

// Generating the name
generateName = () =>{
    let randomFirstName = getRandomValueFromArray(firstName);
    let randomLastName = getRandomValueFromArray(lastName);
    
    if(randomLastName.F){
        if(randomFirstName.Gender === "F"){
            randomLastName = randomLastName.F;
        }else if(randomFirstName.Gender === "M"){
            randomLastName = randomLastName.M;
        }
    }else{
        randomLastName = randomLastName.N;
    };
    
    return `${randomFirstName.Value} ${randomLastName}`;
};

// Place the generated name in the page
displayName = () =>{
    const nameContainer = document.getElementById('generated-name');
    nameContainer.innerHTML = generateName();
};

// Generator trigger on page load
window.onload = displayName();

// Generator trigger
const button = document.getElementById('generating-button');
button.addEventListener('click', () => {
    displayName();
});

// Count and display possibilities
countPossibilities = () =>{
    const possibilitesNumber = firstName.length * lastName.length;
    return possibilitesNumber;
};
displayPossibilities = () =>{
    const possibilitiesContainer = document.getElementById('possibilities-container');
    possibilitiesContainer.innerHTML = `Il y a actuellement <span id="possibilities-number">${countPossibilities()}</span> noms possibles`;
};
window.onload = displayPossibilities();

window.onload = console.log(`${firstName.length} first names, ${lastName.length} last names`);