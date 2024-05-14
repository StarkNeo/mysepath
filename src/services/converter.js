//this function converts a number to a hexadecimal character
export const parsHexa =(number)=>{
    let parsedNumber = number;
    switch (number) {
        case 10:
            parsedNumber = 'A';
            break;
        case 11:
            parsedNumber = 'B';
            break;
        case 12:
            parsedNumber = 'C';
            break;
        case 13:
            parsedNumber = 'D';
            break;
        case 14:
            parsedNumber = 'E';
            break;
        case 15:
            parsedNumber = 'F';
            break;    
        default:
            break;
    }
    return parsedNumber;
}

export const converter=(cocient, base)=>{
    // cocient the decimal number to be converted
    // base the base target 
    //this array will contain the remains to built the new number
    let arrayNumber = new Array();
    
    while (cocient >= base) {
        let remain = Math.floor(cocient%base);
        arrayNumber.push(remain);
        let newCocient =  Math.floor(cocient/=base);
        cocient = newCocient;
        if(newCocient<base){
            arrayNumber.push(newCocient);
        }
    }
    let newArray = arrayNumber.map(element=>{
        if(base === 16){
            return parsHexa(element);
        }
        else{
            return element;
        }
    });
       
    return newArray.reverse();
};

