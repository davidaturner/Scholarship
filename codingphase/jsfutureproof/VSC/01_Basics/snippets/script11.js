// alert('Hello from JS')

// For loop
for(let i=0; i<10; i++) {
    if (i==3) {
        console.log("More to come!")
    }
    console.log(i);
}

var names = ["Charles", "Ethel", "Marlena", "Cope"]
for(let i=0; i<names.length;i++) {
    console.log(names[i]);
}

// While loop
i=0;
while(i < 10) {
    console.log("II" + i)
    i++;
}

// Do While
i=0;
do {
    console.log("DO " + i)
    if (i == 4) {
        break;
    }
    i++;
} while(i < 8)

// For ... in
for(i in names) {
    console.log("N" + names[i])
}
var classmates =  [
    {
        name: "Charles"
    },
    {
        name: "Ethel"
    },
    {
        name: "Marlena"
    },
    {
        name: "Cope"
    }
]
for(i in classmates) {
    console.log("C" + classmates[i].name)
}

// For ... of
// Useful from object iteration.
for(i of classmates) {
    console.log("Z"+ i.name)
}
