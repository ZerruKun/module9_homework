//Основной запрос (поробовал через фетч)
function useRequest(url, callback) {
    fetch(url)
      .then(image => callback(image))
      .catch(error => {
        console.log("Ошибка " + error);
      })
}

//Поиск кнопки, и дива для будующих результатов
const pictureButton = document.querySelector(".picture-load-button");
const pictureResult = document.querySelector(".picture-result");

//Подготовка картинки
const preparePicture = (apiData) => {
    const picture = `<img src="${apiData.url}" alt="Картина с picsum.photos" />` 
    pictureResult.innerHTML = picture;
}

//Событие по нажатию кнопки

pictureButton.addEventListener("click", (event) => {
  event.preventDefault(); //Явная отмена сабмита и других действий по умолчанию

  const width = document.querySelector(".picture-width").value;
  const height = document.querySelector(".picture-height").value;

  if (
    +width >= 100 &&
    +width <= 500 &&
    +height >= 100 &&
    +height <= 500 &&
    (+width ^ 0) === +width &&
    !isNaN(+width) &&
    typeof +width === "number" &&
    (+height ^ 0) === +height &&
    !isNaN(+height) &&
    typeof +height === "number"
  ) {
    useRequest(`https://picsum.photos/${width}/${height}`, preparePicture);
  } else {
    alert("Введите целые значения от 100 до 500");
  }
});