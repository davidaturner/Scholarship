var names = ['Peter', 'Joe', "Stephie"]
var students = [
    {
        name: names[0]
    },
    {
        name: names[1]
    },
    {
        name: names[2]
    },
]
var i = 1;

for(i in names) {
    console.log(`${i+1}. ${names[i]}`);
}

for(i in students) {
    console.log(`Student: ${students[i].name}`)
}