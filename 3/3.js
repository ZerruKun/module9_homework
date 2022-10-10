//Основной запрос
const useRequest = (url, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onload = () => {
    if (xhr.status != 200) {
      console.log("Статус ответа: " + xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = () => {
    console.log("Ошибка! Статус ответа: " + xhr.status);
  };

  xhr.send();
};

//Поиск кнопки, и дива для будующих результатов
const picturesButton = document.querySelector(".pictures-load-button");
const picturesResult = document.querySelector(".pictures-result");

//Формирование набора картинок
const preparePictures = (apiData) => {
  let pictures = "";

  apiData.forEach((el) => {
    const picturesBlock = `
            <div class="image">
                <img src="${el.download_url}" alt="Картина с picsum.photos">
            <div>
        `;
    pictures = pictures + picturesBlock;
  });
  picturesResult.innerHTML = pictures;
};

//Событие по нажатию кнопки
picturesButton.addEventListener("click", (event) => {
  event.preventDefault(); //Явная отмена сабмита и других действий по умолчанию

  const picturesAmount = document.querySelector(".pictures-amount").value;

  if (
    +picturesAmount >= 1 &&
    +picturesAmount <= 10 &&
    (+picturesAmount ^ 0) === +picturesAmount &&
    !isNaN(+picturesAmount) &&
    typeof +picturesAmount === "number"
  ) {
    useRequest(
      `https://picsum.photos/v2/list?limit=${picturesAmount}`,
      preparePictures
    );
  } else {
    alert("Введите целое значение от 1 до 10!");
  }
});