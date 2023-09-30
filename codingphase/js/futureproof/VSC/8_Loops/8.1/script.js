for(var i=1; i<11; i++) {
    console.log(i);
}

var names = ['Peter', 'Joe', "Stephie"]
for(var i=0; i<names.length; i++) {
    console.log(names[i]);
}

for(var i=0; i<10; i++) {
    if (i < 3) {
        console.log(names[i]);
    }
    else {
        console.log("No more names!");
        break;
    }
}