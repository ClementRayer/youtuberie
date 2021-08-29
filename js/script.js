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
const generatingButton = document.getElementById('generating-button');
generatingButton.addEventListener('click', () => {
    displayName();
});

// Copy the generated name
copyToClipboard = () => {
    let textToCopy = document.getElementById('generated-name').innerHTML;
    navigator.clipboard.writeText(textToCopy);
};

// Trigger the name copy
document.getElementById('copy-button').addEventListener('click', () => {
    copyToClipboard();
});

// Displays the notification when a name is copied
let copyConfirmationContainer = document.getElementById('copy-button-message');

displayCopyConfirmation = () => { 
    let nameToDisplay = document.getElementById('generated-name').innerHTML;
    copyConfirmationContainer.innerHTML = `"${nameToDisplay}" a bien été collé`;
    copyConfirmationContainer.style.opacity = '0.9';
};

eraseCopyConfirmation = () =>{
    copyConfirmationContainer.style.opacity = '0';
}

document.getElementById('copy-button').addEventListener('click',() => {
    displayCopyConfirmation();
    setTimeout(() => { eraseCopyConfirmation(); }, 2000);
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