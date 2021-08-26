// Generate a random name
getRandomIdFromArray = (arrayName) =>{
    return Math.floor(Math.random() * arrayName.length);
}

getRandomValueFromArray = (arrayName) =>{
    return arrayName[getRandomIdFromArray(arrayName)];
}

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
}

displayName = () =>{
    const nameReceptacle = document.getElementById('generated-name');
    nameReceptacle.innerHTML = generateName();
};

// Place the random name (onload to get it by default)
window.onload = displayName();

const button = document.getElementById('generating-button');
button.addEventListener('click', () => {
    displayName();
});

window.onload = console.log(`${firstName.length} first names, ${lastName.length} last names`);