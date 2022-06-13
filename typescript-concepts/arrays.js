var Product = /** @class */ (function () {
    function Product(name, price, marketedCountries) {
        this.name = name,
            this.price = price;
        this.marketedCountries = marketedCountries;
    }
    Product.prototype.print = function () {
        console.log(this.price, this.marketedCountries);
    };
    return Product;
}());
var product = new Product("Mobile", 10000, [
    { countryid: 'IND', name: "India" },
    { countryid: 'CHN', name: "China" }
]);
product.print();
