function createArray(number){
    let array = [];
    if(number < 0){
        return "write positive number";
    } else {
        for(i = 0; i < number; i++) {
            array.push(i);
        }
    }
    return array;
}

console.log(createArray(100));

function checkNumber(main, second, third){
    if(main % second === 0 && main % third === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(checkNumber(15,3,5));

function capitalize(str) {
    if (!str || str.length > 10) return "Введите слово не более 10 символов";
    return str[0].toUpperCase() + str.slice(1);
}

console.log( capitalize("javascript") );
console.log( capitalize("javascripter") );
