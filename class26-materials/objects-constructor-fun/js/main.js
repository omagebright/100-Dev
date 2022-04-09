//Create a constructor with 4 properties and 3 methods
function PizzaMachine(size, flavour, order, accessory) {
    this.size = size;
    this.flavour = flavour;
    this.order = order;
    this.accessory = accessory;
    this.methodDelivery = function(bike) {
        console.log("Okada delivery")
    }
    this.amount = function(cash) {
        console.log("Egoooo");
    }
    this.burnMouth = function() {
        console.log('YEsssssuuieeeooop')
    }
}

let pizza = new PizzaMachine('large', ['spinach', 'garlic'], 'big okada', 'Egusi soup');