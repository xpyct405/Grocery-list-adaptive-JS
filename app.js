let eraseLine= document.querySelector('#erase-button');
let addBtn = document.querySelector('#add-button');
let myInput = document.querySelector('#my-input');
let itemsContent =  document.querySelector('.items');
let cleanBtn =  document.querySelector('#clean-btn');

// При клике по addBtn срабатывает функция addItem()
addBtn.addEventListener('click',  () => {
    addItem()
})

// При клике по cleanBtn содержимое itemsContent чистится
cleanBtn.addEventListener('click',  () => {
    itemsContent.textContent = '';
})
// При клике по eraseLine содержимое itemsContent чистится
eraseLine.addEventListener('click',  () => {
    myInput.value ='';
})

// При клике по Enter срабатывает функция addItem()
myInput.addEventListener('keydown', (event) => {
    if (event.key == 'Enter')
        addItem();
})

// Функция добавления нового item и его контоль
function addItem () {

    // Просто создаём новый элемент
    let newItem = document.createElement('h2');

    // Указываем содержание нового элемента
    newItem.textContent = `🍔 ${myInput.value}`;

    // Проверка, выдаст предупреждение что данный товар уже есть в списке. Или если элмента еще нет, то добавится
    if(myInput.value ='' || itemsContent.textContent.includes(myInput.value)) {
        alert('Check')
    } else {
        // Указываем куда будет добавяться созданый нами элемент
        itemsContent.appendChild(newItem);
    }

    // Перечеркивание красным цветом содержимого при клике по нему, и по второму клику убирание перечеркивания
    newItem.addEventListener('click', () => {
        if ( newItem.style.textDecoration != 'line-through', newItem.style.textDecorationColor != 'red') {
            newItem.style.textDecoration = 'line-through';
            newItem.style.textDecorationColor = 'red';
        } else {
            newItem.style.textDecoration = '';
            newItem.style.textDecorationColor = '';
        }
        
    })

    // Указываем что после выполенния функциии addItem() будет происходит чистка myInput
    myInput.value = "";
}



