// example 1
let day = 4;
let dayName;
switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}
console.log(dayName);

// example 2
let grade = 7;
let school;

switch (grade) {
  case 1:
    school = 'Elementary School';
    break;
  case 2:
    school = 'Elementary School';
    break;
  case 3:
    school = 'Elementary School';
    break;
  case 4:
    school = 'Elementary School';
    break;
  case 5:
    school = 'Elementary School';
    break;
  case 6:
    school = 'Middle School';
    break;
  case 7:
    school = 'Middle School';
    break;
  case 8:
    school = 'Middle School';
    break;
  case 9:
    school = 'High School';
    break;
  case 10:
    school = 'High School';
    break;
  case 11:
    school = 'High School';
    break;
  case 12:
    school = 'High School';
    break;
  default:
    school = 'Invalid Entry';
}
console.log(school);

// example
let text;
switch (new Date().getDay()) {
  case 6:
    text = 'Today is Saturday';
    break;
  case 0:
    text = 'Today is Sunday';
    break;
  default:
    text = 'Darn, its a weekday. Looking forward to the weekend!';
}

console.log(text);

