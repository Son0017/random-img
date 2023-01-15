function getData(resource) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", () => {
      if ((request.status == 200) & (request.readyState == 4)) {
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState == 4) {
        console.log("Something went wrong");
        reject("Something went wrong");
      }
    });
    request.open("get", resource);
    request.send();
  });
}
