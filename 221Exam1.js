function solve(input) {

    let allowedQuantity = +input.shift()
    let daysLeft = +input.shift()

    let ornamentPrice = 2
    let treeSkirtPrice = 5
    let treeGarlandPrice = 3
    let treeLightsPrice = 15
    let christmasSpirit = 0
    let price = 0

    
   
    for (let i = 1; i <= daysLeft; i++) {
        if(i % 11 === 0){
            allowedQuantity += 2
        }
        let skirtsTrue = false;
        if (i % 2 === 0) {
            price += ornamentPrice * allowedQuantity 
            christmasSpirit += 5
        }
        if (i % 3 === 0) {
            price += treeSkirtPrice * allowedQuantity
            price += treeGarlandPrice * allowedQuantity
            christmasSpirit += 13
            skirtsTrue = true;
        }
        if(i % 5 === 0){
            price += treeLightsPrice * allowedQuantity
            christmasSpirit += 17
            if(skirtsTrue){
                christmasSpirit += 30
            }
        }
        if(i % 10 === 0){
            christmasSpirit -= 20
            price += treeGarlandPrice + treeLightsPrice + treeSkirtPrice
            
            
        }
        
    }

    if(daysLeft % 10 == 0){
        christmasSpirit -= 30
    }

    console.log(`Total cost: ${price}`)
    console.log(`Total spirit: ${christmasSpirit}`);
    




}

solve(['1', '4'])