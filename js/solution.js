// Вывести общее кол-во элементов в консоль
let allChilds = document.querySelectorAll('li');
console.log(allChilds.length);

// Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывсести этот массив в консоль
let arr = [];
       for(let elem of allChilds){
         arr.push(elem.innerHTML);
       }
       console.log(arr);

    //    Вытянуть все атрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого атрибута в массив — вывсести этот массив в консоль       
    let arr1 = [];
    let arr2 = [];
    let att = '';
    for(let i = 0; i < ul.attributes.length; i++){
       att = ul.attributes[i];
    
       arr1.push(att.value);
       arr2.push(att.name);
    }
    console.log(arr1);

    // Так-же записать в отдельный массив каждое имя атрибута — вывести массив в консоль
    arr2.push(att.name);
    console.log(arr2);

    // С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
    let liLast = document.querySelector('li:last-child');
    liLast.innerHTML = 'Привет, меня зовут ST';

    // Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
    let liFirst = document.querySelector('li:first-child');
    liFirst.setAttribute('data-my-name','ST');

    // Удалить у тега ul атрибут ‘data-dog-tail‘
    let  ul = document.querySelector('ul');
    ul.removeAttribute('data-dog-tail');
    console.log(ul);