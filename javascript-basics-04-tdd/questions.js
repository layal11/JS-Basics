
const stringSize = (text) => {
    return text.length;
}
const replaceCharacterE = (text) => {
    return text.replace('e',' ');
}
const concatString = (text1, text2) => {
    return text1 + text2;
}
const showChar5 = (text) => {
    return text[4];
}
const showChar9 = (text) => {
    var texti='';
    for(var i =0 ; i<=8 ; i++)
    {
        texti += text[i];
    }
    return texti;
}
const toCapitals = (text) => {
    return text.toUpperCase();
}
const toLowerCase = (text) => {
    return text.toLowerCase();
}
const removeSpaces = (text) => {
    return text.trim();
}
const IsString = (text) => {
    var result = typeof text === 'string';
    return result;
}
const getExtension = (text) => {
    return text.split('.').pop();
}
const countSpaces = (text) => {
    return text.split(" ").length - 1;
}
const InverseString = (text) => {
    return text.split("").reverse().join(""); //split() method return a new array //then reverse the array //then join
}
const power = (x, y) => {
    var exponent = Math.pow(x,y);
    return exponent;
}
const absoluteValue = (num) => {
    var absolute = Math.abs(num);
    return absolute;
}
const absoluteValueArray = (array) => {
    for(var i =0 ; i <= array.length - 1 ; i++){
        if(array[i] < 0){
            array[i] = Math.abs(array[i]);
        }
    } return array;
}
const circleSurface = (radius) => {
   var area = Math.PI * Math.pow(radius , 2);
   var roundedarea = Math.round(area);
   return roundedarea;
}
const hypothenuse = (ab, ac) => {
    var hyp = Math.hypot(ab, ac);
    return hyp;
}
const BMI = (weight, height) => {
    var bmii = weight / Math.pow(height , 2);
    var roundedbmi = bmii.toFixed(2);
    return parseFloat(roundedbmi);
}

const createLanguagesArray = () => {
    var newarray = ["Html", "CSS", "Java", "PHP"];
    return newarray;
}

const createNumbersArray = () => {
    return [0,1,2,3,4,5];
}

const replaceElement = (languages) => {
    languages[2] = "Javascript";
    return languages;
}

const addElement = (languages) => {
    languages.push('Ruby','Python');
    return languages;
}

const addNumberElement = (numbers) => {
    numbers.unshift(-2,-1);
    return numbers;
}

const removeFirst = (languages) => {
    languages.shift();
    return languages;
}

const removeLast = (languages) => {
    languages.pop();
    return languages;
}

const convertStrToArr = (social_arr) => {
    return  social_arr.split(',');
}

const convertArrToStr = (languages) => {
    return languages.toString();
}

const sortArr = (social_arr) => {
    return social_arr.sort();
}

const invertArr = (social_arr) => {
    return social_arr.reverse();
}