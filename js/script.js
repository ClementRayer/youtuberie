// Close the introduction pop-in on click anywhere
const introCloser = document.getElementById('introduction-closer');
const introBlock = document.getElementById('introduction');
introCloser.addEventListener('click', () =>{
    introCloser.style.display = 'none';
    introBlock.style.display = 'none';
});

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

// Place the generated name in the page, and triggers animation
displayName = () =>{
    const nameContainer = document.getElementById('generated-name');
    nameContainer.innerHTML = generateName();
};

// Generator trigger on page load
window.onload = displayName();

// Generator trigger
const generatingButton = document.getElementById('generating-button');
generatingButton.addEventListener('click', () => {
    document.body.classList.add('name-transition');
    setTimeout(() =>{
        displayName();
        document.body.classList.remove('name-transition');
    }, 150)
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

// Stop displaying the notification after name copy
eraseCopyConfirmation = () =>{
    copyConfirmationContainer.style.opacity = '0';
}

// Trigger copy name notification and its disappearing after 2 seconds
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