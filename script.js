async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}



function calculate() { //calculate Künefe
    if (document.getElementById('portions').value > 0) {
        let a = +document.getElementById('portions').value;
        let first = a * 50;
        document.getElementById('amount_first').innerHTML = `${first} Gramm`;
        let second = a * 50;
        document.getElementById('amount_second').innerHTML = `${second} Gramm`;
        let third = a * 20;
        document.getElementById('amount_third').innerHTML = `${third} Gramm`;
        let fourth = a * 10;
        document.getElementById('amount_fourth').innerHTML = `${fourth} Gramm`;
        let fifth = a * 50;
        document.getElementById('amount_fifth').innerHTML = `${fifth} Milliliter`;
    } else {
        document.getElementById('portions').value = ``;
    }
}



function cal() { //calculate Baklava
    if (document.getElementById('portions').value > 0) {
        let a = +document.getElementById('portions').value;
        let one = a * 125;
        document.getElementById('amount_one').innerHTML = `${one} Gramm`;
        let two = a * 120;
        document.getElementById('amount_two').innerHTML = `${two} Gramm`;
        let three = a * 120;
        document.getElementById('amount_three').innerHTML = `${three} Gramm`;
        let four = a * 120;
        document.getElementById('amount_four').innerHTML = `${four} Gramm`;
        let five = a * 1;
        document.getElementById('amount_five').innerHTML = `${five} Teelöffel`;
        let six = a * 125;
        document.getElementById('amount_six').innerHTML = `${six} Gramm`;
        let seven = a * 150;
        document.getElementById('amount_seven').innerHTML = `${seven} Gramm`;
        let eight = a * 70;
        document.getElementById('amount_eight').innerHTML = `${eight} Milliliter`;
        let nine = a * 50;
        document.getElementById('amount_nine').innerHTML = `${nine} Gramm`;
    } else {
        document.getElementById('portions').value = ``;
    }

}



// calculate bulgur

let originalIngredientAmounts = []; // array of the ingredient amounts to be calculated depending on the amount of portion from input

function createArray() { // create array with each ingredient amount on load
    for (let index = 0; index < 6; index++) { // use function on each ingredient
        originalIngredientAmounts.push(+document.getElementById(`ingredient-amount${index}`).innerHTML); // add ingredient to array
    }
    setArray('originalIngredientAmounts', originalIngredientAmounts) // key = 'originalIngredientAmounts' array = originalIngredientAmounts
}

function setArray(key, array) {// put array in local storage
    localStorage.setItem(key, JSON.stringify(array)); // convert array, so it can be stored in local storage
}

function getArray(key) { // get array from local storage
    return JSON.parse(localStorage.getItem(key)); // convert array back to the script file
}

function newIngredientAmount() { // calculate for ingredients depending on the amount of portions
    if (document.getElementById('portion-input').value > 0) {
        for (let index = 0; index < originalIngredientAmounts.length; index++) { // use function for every amount of ingredient
            getArray(originalIngredientAmounts) // get array from local storage
            let portion = +document.getElementById('portion-input').value; // get amount of portion from input
            let originalIngredientAmount = originalIngredientAmounts[index] // get old value from array
            let newIngredientAmount = originalIngredientAmount * portion; // calculate new value
            document.getElementById(`ingredient-amount${index}`).innerHTML = `${newIngredientAmount}`; // replace old value with new value
        }
    } else {
        document.getElementById('portion-input').value = ``;
    }
    
}



// new recipe every day (in this cas every minute)

function baklava() { //set baklava as recipe of the day
    document.getElementById('recipe-image').src = `img/sweets.jpg`; // replace image
    document.getElementById('recipe-title').innerHTML = `Baklava` // replace title
    document.getElementById('recipe-text').innerHTML = `Baklava ist ein traditionelles Süßgebäck aus der türkischen Küche. Es besteht aus mehreren dünnen Schichten von Teigblättern, die mit einer Füllung aus gehackten Nüssen und Zucker bestreut werden. Zwischen den Teigblättern wird Butter aufgetragen, um das Gebäck saftig und knusprig zu machen. Nachdem das Gebäck gebacken wurde, wird es mit Sirup aus Zucker, Wasser und Zitronensaft übergossen, um ihm eine süße und klebrige Konsistenz zu verleihen. Baklava wird oft als Dessert serviert und ist in vielen Varianten erhältlich. Es ist ein köstlicher und reichhaltiger Leckerbissen, der in vielen Kulturen sehr geschätzt wird.`; // replace description
    document.getElementById('recipe-button').href = `baklava.html`
    setTimeout(bulgur, 60000) // change to next recipe after 24 hours (in this case one minute)
}

function bulgur() { //set bulgur as recipe of the day
    document.getElementById('recipe-image').src = `img/bulgur.jpg`; // replace image
    document.getElementById('recipe-title').innerHTML = `Bulgursalat`; // replace title
    document.getElementById('recipe-text').innerHTML = `Bulgursalat ist ein klassischer Salat der türkischen Küche, der auch in anderen Ländern wie Bulgarien und Griechenland sehr beliebt ist. Er besteht aus gekochtem Bulgur, der mit Tomaten, Gurken, Zwiebeln und Petersilie gemischt wird. Das Dressing besteht aus Olivenöl, Zitronensaft, Salz und Pfeffer. Optional kann man noch Minze und Paprika hinzufügen. Bulgursalat eignet sich als Beilage zu verschiedenen Gerichten oder kann als Hauptgericht serviert werden, indem man ihn mit Feta oder gegrilltem Hähnchen kombiniert. Er ist einfach zuzubereiten und eine gesunde und leckere Mahlzeit.`; // replace description
    document.getElementById('recipe-button').href = `bulgursalat.html`
    setTimeout(künefe, 60000) // change to next recipe after 24 hours (in this case one minute)
}

function künefe() { //set künefe as recipe of the day
    document.getElementById('recipe-image').src = `img/kunefe.jpg`; // replace image
    document.getElementById('recipe-title').innerHTML = `Künefe`; // replace title
    document.getElementById('recipe-text').innerHTML = `Baklava ist ein traditionelles Süßgebäck aus der türkischen Küche. Es besteht aus mehreren dünnen Schichten von Teigblättern, die mit einer Füllung aus gehackten Nüssen und Zucker bestreut werden. Zwischen den Teigblättern wird Butter aufgetragen, um das Gebäck saftig und knusprig zu machen. Nachdem das Gebäck gebacken wurde, wird es mit Sirup aus Zucker, Wasser und Zitronensaft übergossen, um ihm eine süße und klebrige Konsistenz zu verleihen. Baklava wird oft als Dessert serviert und ist in vielen Varianten erhältlich. Es ist ein köstlicher und reichhaltiger Leckerbissen, der in vielen Kulturen sehr geschätzt wird.` // replace description
    document.getElementById('recipe-button').href = `recipe-ufuk.html`
    setTimeout(baklava, 60000) // change to next recipe after 24 hours (in this case one minute)
}



// alternetively if we have exactly 7 recipes

function dailyRecipe() {  //swap recipes every day (note: only working with 7 recipes!)
    let titles = ['Künefe', 'Bulgur', 'Baklava', 'Börek', 'Lahmacun', 'Sucuk mit Ei', 'Imam Bayildi']; // array including the titles to be swapped each day
    let images = ['img/kunefe.jpg', 'img/bulgur.jpg', 'img/sweets.jpg']; // array including the images to be swapped each day
    let descriptions = [ // array including the descriptions to be swapped each day
        'Künefe ist ein traditionelles Dessert der türkischen Küche. Es besteht aus einer Schicht knusprigem Teig, der mit einer Füllung aus zerkleinertem Mozzarella-Käse oder weißem türkischen Käse und Grieß bedeckt wird.  Der Teig wird dann in einer Pfanne gebacken, bis er goldbraun und knusprig ist. Anschließend wird das Gebäck mit einem Sirup aus Zucker, Wasser und Zitronensaft übergossen und mit gehackten Pistazien oder Walnüssen bestreut. Das Ergebnis ist ein süßes, klebriges und käsiges Dessert mit einer einzigartigen Kombination aus Geschmacksrichtungen und Texturen. Künefe wird oft warm serviert und ist eine beliebte Nachspeise in türkischen Restaurants und Cafés.',
        'Bulgursalat ist ein klassischer Salat der türkischen Küche, der auch in anderen Ländern wie Bulgarien und Griechenland sehr beliebt ist. Er besteht aus gekochtem Bulgur, der mit Tomaten, Gurken, Zwiebeln und Petersilie gemischt wird. Das Dressing besteht aus Olivenöl, Zitronensaft, Salz und Pfeffer. Optional kann man noch Minze und Paprika hinzufügen. Bulgursalat eignet sich als Beilage zu verschiedenen Gerichten oder kann als Hauptgericht serviert werden, indem man ihn mit Feta oder gegrilltem Hähnchen kombiniert. Er ist einfach zuzubereiten und eine gesunde und leckere Mahlzeit.',
        'Baklava ist ein traditionelles Süßgebäck aus der türkischen Küche. Es besteht aus mehreren dünnen Schichten von Teigblättern, die mit einer Füllung aus gehackten Nüssen und Zucker bestreut werden. Zwischen den Teigblättern wird Butter aufgetragen, um das Gebäck saftig und knusprig zu machen. Nachdem das Gebäck gebacken wurde, wird es mit Sirup aus Zucker, Wasser und Zitronensaft übergossen, um ihm eine süße und klebrige Konsistenz zu verleihen. Baklava wird oft als Dessert serviert und ist in vielen Varianten erhältlich. Es ist ein köstlicher und reichhaltiger Leckerbissen, der in vielen Kulturen sehr geschätzt wird.'
    ]
    let n = new Date(); // define today's date
    let d = n.getDay(); // get today's number in the week (for example: wednesday = 3; friday = 5)
    document.getElementById('recipe-title').innerHTML = titles[d - 1]; // replace title
    document.getElementById('recipe-image').src = images[d - 1]; // replace image
    document.getElementById('recipe-text').innerHTML = descriptions[d - 1]; // replace description
}
//Burger Menu

function burger_menu(){
    document.getElementById('menu').classList.toggle('d-none')
}