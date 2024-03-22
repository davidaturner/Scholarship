// Generic classes
class DataStore<T> {
    private data: T[] = [];
    addItem(item:T) {
        this.data.push(item);
    }
    removeItem(item:T) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}

const storedText = new DataStore<string>;
storedText.addItem("Hello");
console.log(storedText.getItems());
const storedNumbers = new DataStore<number>;
storedNumbers.addItem(10);
console.log(storedNumbers.getItems());

// this does not work for objects in following case.
const storedObjects = new DataStore<object>;
storedObjects.addItem({name: "Max"});
storedObjects.addItem({name: "Manu"});
console.log(storedObjects.getItems());
// now try to remove Max.
storedObjects.removeItem({name: "Max"});
console.log(storedObjects.getItems());
storedObjects.addItem({name:"Mnu"});
// why? because {name: "Max"} is not found in storedObjects so remove last element
// to fix assign Max first.
const max = {name: "Max"};
storedObjects.addItem(max);
console.log(storedObjects.getItems());
storedObjects.removeItem(max);
console.log(storedObjects.getItems());

// so, limit class to primitives.
// class DataStore<T extends number | string | boolean>
// and create another DataStore that handles objects