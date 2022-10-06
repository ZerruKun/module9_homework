//Входная строка
const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}`;

//Парсинг
const peopleList = JSON.parse(jsonString);

//Вывод в консоль
//По заданию
console.log(peopleList);

//Для удобства чтения
const peopleDataArray = peopleList.list;

peopleDataArray.forEach((el) => {
  console.log(
    "Имя: " + el.name + " | " + "Возраст: " + el.age + " | " +
    "Профессия: " + el.prof
  );
});