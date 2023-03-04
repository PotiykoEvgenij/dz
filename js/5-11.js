class StringBuilder {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    padStart(startValue) {
        this.value = startValue + this.value;
    }
    padEnd(endValue) {
        this.value = this.value + endValue;
    }
    padBoth(bothValue) {
        this.value = bothValue + this.value + bothValue;
    }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="