let list = document.querySelector(".list");
let inputEL = document.querySelector("input");
let searchBtn = document.querySelector(".searchBtn");
console.log(list);
function addItem(data) {
  data.forEach((element) => {
    let { urls, likes, user_name, user_img, link } = {
      urls: element.urls.regular,
      likes: element.likes,
      user_name: element.user.name,
      user_img: element.user.profile_image.large,
      link: element.user.links.html,
    };
    console.log(likes);
    list.innerHTML += `
        <li class="item">
            <img src="${urls}" alt="" />
            <div class="aboutImg">
                <div class="title">
                    <h4>
                        <a href="${link}">
                            ${user_name}
    
                        </a>
                    </h4>
                    <p>${likes}</p>
            </div>
                <div class="imgAva">
                    <img src="${user_img}" alt="" />
                </div>
            </div>
      </li>
        `;
  });
}
const reload = () => {
  getData(
    "https://api.unsplash.com/photos/?client_id=88ZRedLJVe909AAXAhL6-FvBS1gH1Js5AKPpFLFoZZs"
  ).then((data) => {
    addItem(data);
  });
};
document.addEventListener("DOMContentLoaded", reload());
document.addEventListener("keydown", (el) => {
  if (el.code == "Enter") {
    let values = inputEL.value;
    list.innerHTML = ``;
    console.log(values);
    getData(
      `https://api.unsplash.com/search/photos?client_id=88ZRedLJVe909AAXAhL6-FvBS1gH1Js5AKPpFLFoZZs&page=1&query=${values}`
    ).then((data) => {
      addItem(data.results);
    });
  }
});
searchBtn.addEventListener("click", () => {
  let values = inputEL.value;
  list.innerHTML = ``;
  console.log(values);
  getData(
    `https://api.unsplash.com/search/photos?client_id=88ZRedLJVe909AAXAhL6-FvBS1gH1Js5AKPpFLFoZZs&page=1&query=${values}`
  ).then((data) => {
    addItem(data.results);
  });
});
