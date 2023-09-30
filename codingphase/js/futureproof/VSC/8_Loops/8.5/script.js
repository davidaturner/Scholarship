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

for(i of students) {
    console.log(i)
}

for(i of students) {
    console.log(i.name)
}