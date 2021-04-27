const items = document.querySelectorAll('input');
const itemsArray = [...items];

items.forEach(item => item.addEventListener('click', findCheckedIndexes))


//record index of previously checked item 
let previouslyChecked;


//check to see if holding down shift and checking SECOND box
function findCheckedIndexes(e) {
    if(e.shiftKey && previouslyChecked) {
        const thisChecked = itemsArray.indexOf(e.target);
        checkItemsBetween(previouslyChecked, thisChecked);
    }
    //set previously checked value to most recently clicked item
    if (e.target.checked) previouslyChecked = itemsArray.indexOf(e.target); 
}

//Check all boxes between two values
function checkItemsBetween(a, b) {
    const higherIndex = a > b ? a : b;
    const lowerIndex = a < b ? a : b;
    for(let i = lowerIndex; i < higherIndex; i++) {
        items[i].checked = true;
    }
}