const overly = document.getElementById("overlay");

function getData(resource) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if ((request.status == 200) & (request.readyState == 4)) {
        let data = JSON.parse(request.responseText);
        overly.classList.add("hidden");
        resolve(data);
      } else if (request.readyState == 4) {
        overly.classList.add("hidden");
        console.log("Something went wrong");
        reject("Something went wrong");
      } else {
        overly.classList.remove("hidden");
      }
    });
    request.open("get", resource);
    request.send();
  });
}
