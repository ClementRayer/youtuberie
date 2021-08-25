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

window.onload = displayName();

const button = document.getElementById('button');
button.addEventListener('click', () => {
    displayName();
});