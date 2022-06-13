interface Tasks{
    prepare(x:string):void
    process(x:string):void;

}

class Perform implements Tasks{
    prepare(x:string):void{
        console.log("Preparing ",x)
    }

    process(x:string):void{
        console.log("Processing ",x)
    }

}

const test = new Perform()
test.prepare("Item")
test.process("Item")