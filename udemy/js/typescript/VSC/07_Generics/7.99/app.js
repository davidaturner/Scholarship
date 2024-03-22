var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Generic classes
var DataStore = /** @class */ (function () {
    function DataStore() {
        this.data = [];
    }
    DataStore.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStore.prototype.removeItem = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    DataStore.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return DataStore;
}());
var storedText = new DataStore;
storedText.addItem("Hello");
console.log(storedText.getItems());
var storedNumbers = new DataStore;
storedNumbers.addItem(10);
console.log(storedNumbers.getItems());
// this does not work for objects in following case.
var storedObjects = new DataStore;
storedObjects.addItem({ name: "Max" });
storedObjects.addItem({ name: "Manu" });
console.log(storedObjects.getItems());
// now try to remove Max.
storedObjects.removeItem({ name: "Max" });
console.log(storedObjects.getItems());
storedObjects.addItem({ name: "Mnu" });
// why? because {name: "Max"} is not found in storedObjects so remove last element
// to fix assign Max first.
var max = { name: "Max" };
storedObjects.addItem(max);
console.log(storedObjects.getItems());
storedObjects.removeItem(max);
console.log(storedObjects.getItems());
// so, limit class to primitives.
// class DataStore<T extends number | string | boolean>
// and create another DataStore that handles objects
