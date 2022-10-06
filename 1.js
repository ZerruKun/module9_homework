//Входная строка
const xmlString = `
  <list>
    <student>
      <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
      </name>
      <age>35</age>
      <prof>teacher</prof>
    </student>
    <student>
      <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
    </student>
  </list>
`;

//Объявление парсера, парсинг, получение нужной коллекции
const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const students = xmlDOM.querySelectorAll("student");

//Получение необходимого массива значений
let studentsDiscription = [];

students.forEach((el) => {
  studentsDiscription = [
    ...studentsDiscription,
    {
      name:
        el.querySelector("first").childNodes[0].nodeValue +
        " " +
        el.querySelector("second").childNodes[0].nodeValue,
      age: el.querySelector("age").childNodes[0].nodeValue,
      prof: el.querySelector("prof").childNodes[0].nodeValue,
      lang: el.querySelector("name").getAttribute("lang"),
    },
  ];
});

//Добавление информации в финальный объект, вывод в консоль

const resultInformation = {
  list: studentsDiscription,
};

//По заданию
console.log(resultInformation);

//Для удобства чтения
students.forEach((el) => {
  console.log(
    "Имя и фамилия: " +
      el.querySelector("first").childNodes[0].nodeValue +
      " " +
      el.querySelector("second").childNodes[0].nodeValue +
      " | " +
      "Возраст: " +
      el.querySelector("age").childNodes[0].nodeValue +
      " | " +
      "Профессия: " +
      el.querySelector("prof").childNodes[0].nodeValue +
      " | " +
      "Язык: " +
      el.querySelector("name").getAttribute("lang")
  );
});