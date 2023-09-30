var johnsmith = {
    "johnsmith" : {
        "first-name" : "John",
        "last-name" : "Smith",
        "age" : 30,
        "is-married" : true,
        "hobbies" : null,
        "experience" : ["C", "Javascript", "Oracle SQL"],
        "address" : {
            "street" : "St. Martin Street",
            "city" : "Posit",
            "state" : "Texas",
            "zip" : "50100"
        }
    }
}

console.log(JSON.stringify(johnsmith));