//htmlda yaratib olgan ul ni dom orqali js failga chaqirib oldik
let elFilmList = document.querySelector(".films-list");
// console.log(films);
// alohida o'zgaruvchiga objectdan elementni olib saqladik
let desiredFilms = films.slice(0, 45);
// for ochib olgan elementlarimiz aylantrdik uning nomlarini film deb ketdik
for (film of desiredFilms) {
    //DOMda yangi elementlar yaratdik
    let newItem = document.createElement("li");
    let newImg = document.createElement("img");
    let newTitleElement = document.createElement("h2");
    let newAboutFilmElement = document.createElement("p");
    let newWrapElement = document.createElement("div");
    let newTimeElement = document.createElement("time");
    let newFilmType = document.createElement("p");

    //yangi yaratgan elementlarimizni asil elementlar bilan boglab kerakli stylearini berdik
    newTitleElement.textContent = film.title;
    newImg.src = film.poster;
    newImg.width = "350";
    newImg.height = "250";
    newImg.alt = film.title + " film";
    newAboutFilmElement.textContent = film.overview;
    newTimeElement.textContent = film.release_date;
    newTimeElement.dateTime = film.release_date;
    newFilmType.textContent = film.genres.join(" | ");

    //yaratgan elementlarimiz uchun classlar berdik
    newItem.classList.add("list-item");
    newTitleElement.classList.add("film-title");
    newAboutFilmElement.classList.add("film-title-about");
    newFilmType.classList.add("film-type")
    newWrapElement.classList.add("type-wrap");
    newTimeElement.classList.add("film-time");

    //div yaratgan edik uning ichiga img, title va pni soldik
    newWrapElement.append(newImg, newTitleElement, newAboutFilmElement);
    //divni esa filmning type bilan birgalikda lini ichiga soldik
    newItem.append(newWrapElement, newFilmType);
    //lini DOM orqali chaqirgan ulni ichiga soldik
    elFilmList.append(newItem);
}