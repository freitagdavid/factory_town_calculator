const recipes = {
    meatStew: {
        name: "Meat Stew",
        prodTime: 6,
        building: "kitchen",
        ingredients: [
            {
                amount: 1,
                name: 'cookedBeef'
            },
            {
                name: 'potato',
                amount: 1
            },
            {
                name: 'carrot',
                amount: 1
            },
            {
                name: 'fuel',
                amount: 2
            }
        ]
    },
    cookedBeef: {
        name: "Cooked Beef",
        building: "kitchen",
        prodTime: 5,
        ingredients: [
            {
                amount: 1,
                name: "beef"
            },
            {
                amount: 1,
                name: "fuel"
            }
        ]
    },
    beef: {
        name: "Beef",
        building: "pasture",
        prodTime: 10,
        ingredients: [
            {
                amount: 4,
                name: "animalFeed"
            },
            {
                amount: 4,
                name: "water"
            }
        ]
    },
    airCrystal: {
        name: "Air Crystal",
        prodTime: 10,
        ingredients: [
            {
                amount: 4,
                name: "airEther"
            },
            {
                amount: 2,
                name: "manaCrystal"
            },
            {
                amount: 40,
                name: "yellowCoin"
            }
        ]
    },
    airEther: {
        name: "Air Ether",
        prodTime: 10,
        ingredients: [
            {
                amount: 1,
                name: "airStone"
            },
            {
                amount: 2,
                name: "manaPower"
            }
        ]
    },
    cloth: {
        name: "Cloth",
        prodTime: 4,
        ingredients: [
            {
                amount: 1,
                name: "cotton"
            }
        ]
    },
    bread: {
        name: "Bread",
        prodTime: 4,
        ingredients: [
            {
                amount: 2,
                name: "flour"
            },
            {
                amount: 1,
                name: "fuel"
            }
        ]
    },
    wool: {
        name: "Wool",
        prodTime: 6,
        ingredients: [
            {
                amount: 2,
                name: "animalFeed"
            },
            {
                amount: 2,
                name: "water"
            }
        ]
    },
    airPower: {
        name: "Air Power",
        prodTime: 4,
        ingredients: [
            {
                amount: 0.8,
                name: "yellowCoin"
            },
            {
                amount: 0.4,
                name: "depletedAirCrystal"
            }
        ]
    },
    airStone: {
        name: "Air Stone",
        prodTime: 6,
        ingredients: {
            amount: 1,
            name: "blueCoin"
        }
    },
    animalFeed: {
        name: "Animal Feed",
        prodTime: 2,
        ingredients: {
            amount: 2,
            name: "grain"
        }
    }
}

export default recipes;