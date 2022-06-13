class Perform {
    prepare(x) {
        console.log("Preparing ", x);
    }
    process(x) {
        console.log("Processing ", x);
    }
}
const test = new Perform();
test.prepare("Item");
test.process("Item");
