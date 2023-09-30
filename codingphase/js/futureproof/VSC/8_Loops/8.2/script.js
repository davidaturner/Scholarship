var names = ['Peter', 'Joe', "Stephie"]
var i = 1;
while(i < 11) {
    console.log(i);
    i++;
}

i = 0;
while(i < names.length)   {
    console.log(names[i]);
    i++;
}

i = names.length;
while(i > 0) {
    console.log(names[i-1]);
    i--;
}