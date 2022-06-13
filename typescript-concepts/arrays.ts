type country = {
    countryid:string,
    name:string,
}

class Product {
    name:string
    price:number
    marketedCountries:country[]

    constructor(name:string,price:number,marketedCountries:country[]){
        this.name=name,
        this.price=price
        this.marketedCountries=marketedCountries
    }

    print():void{
        console.log(this.price,this.marketedCountries)
    }
}

var product=new Product("Mobile",10000, [
    {countryid:'IND',name: "India"},
    {countryid:'CHN',name:"China"}
])

product.print()