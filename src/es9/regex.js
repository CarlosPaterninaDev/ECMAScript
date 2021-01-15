const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
                  

const match = regexDate.exec('2020-04-02');

console.log(match);

const year = match[1];
const month = match[2];
const day = match[3];
console.log(year, month, day);



