// работа с массивами
const arr= [1,2,3,4];
console.log(arr);
// добавление элементов
arr.push(10,20,25);// добавление элементов в конец массива
console.log(arr);
//замена эелемента
arr[2]=5;
console.log(arr);
// удаление элемента
arr.splice (1,2);// удаление эдемента с индекса один в количестве 2-х штук 
console.log(arr);
// 3, необязательный аргумент - элементы (через ,) которые нужно добавить
arr.splice(0,1,100,200)// удаление одного элемента по индексу 0 и вставка на его место двух элементов 100 и 200
console.log(arr);
// добавление без удаления
arr.splice(2,0,77,21,35)
console.log(arr);
// отображение индекса элемента
const index=arr.indexOf(100) // возвращает индекс элемента массива
const lindex=arr.lastIndexOf(20)// аналогичен indexOf,  только ищет с корнца массива
console.log(index);
console.log(lindex);
const cats=[
    {
        color: 'red',
        age: 5,

    },
    {
        color: 'red',
        age: 7,

    },{

        color: 'white',
        age: 1,

    },
    {
        color: 'blued',
        age: 8,

    }

];
// вывести всех красных котов
const fcats= cats.filter((cat)=>cat.color=='red');
console.log(cats);
console.log(fcats);
cats.filter((cat)=>cat.color=='red').forEach(console.log);
// вывести массив содержащий возроста всех красных котов
const ages = cats.filter((cat)=>cat.color=='red').map((cat)=>cat.age);
console.log(ages);
// вывести средний возраст красных котов
const a= cats.filter((cat)=>cat.color=='red').map((cat)=>cat.age).reduce((p,c,index,arr)=>p+c/arr.length,0);
console.log(a);
// для JS,  в качестве имени переменной можно использоввать _ (можно использовать если переменная не нужна)
const set = new Set;
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(2);
console.log(set);
const map= new Map();
map.set(1,'value');
map.set(2,'value');
map.set(3,'val');
map.set(4,'value');
map.set(1,1);
console.log(map);
console.log(map.get(3));
// форматирование строк
console.log('Hello   '+10+{a:10});
const name='Vasya';
const age=12;
console.log(`my name is ${name}. I am ${age} years old.`);
// 
const a1 = undefined;
const a2=null;
const a3=Infinity;//+Inf ,-Inf
const a4=NaN;// Not a Number (не число)
let b=100;
// false: null, undefined,NaN,0,'',"",
//``
if(b){console.log('wtf?')};
b=0
if(b){console.log('wtf?1')};
b='';
if(b){console.log('wtf?2')};
b=Infinity;
if(b){console.log('wtf?3')};
b=[];
if(b){console.log('wtf?4')};
b={};
if(b){console.log('wtf?5')};
console.log('10'==10);
//== -  сравнивает только значения без сравнения типа
// != - аналогично выше
//=== - сравнивает и значение и тип
//!== - аналогично выше
console.log('10'===10);
// диалоговые окна
alert ('text for user');
// yes/no
const answer = confirm('предавал ли Магнус?');
console.log(answer);
// просьба о вводе информации
const answer2= prompt('youre favorit primarh?','Korax');
console.log(answer2);
// преобразование строки в число
const t1= parseInt('1222');
console.log(t1);
const t2= parseFloat('1222.2');
console.log(t2);
