// Template strings

var sn03name = 'Joe';
console.log(sn03name);

console.log("My name is " + sn03name);

// When using template strings must use backward quote (left to the number 1 key).
console.log(`No. My name is ${sn03name}`);

const store = (name, address, state, zip) => {
    return name + ` lives at ` + address + `, ` + state + ` zip code = ` + zip;
};

console.log(store('Mr. Boggy', '12344 Bog Lane', 'PA', '15222'));

