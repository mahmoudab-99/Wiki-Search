var results_field = document.getElementById("results"),
  main = document.getElementById("m-5"),
  check_in = (x) =>
    x.value == ""
      ? (main.innerHTML = "<p>Type something in the above search input</p>")
      : search_results(x.value, x),
  search_results = (srchval) => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${srchval}`
    )
      .then((response) => response.json())
      .then((data) => {
        let wewe = data.query.search;
        let numberOfResults = data.query.search.length;
        let result = ``;
        results_field.innerHTML = ""; // Clear previous results
        for (let i = 0; i < numberOfResults; i++) {
          result += `<div class="col-xl-4 col-sm-6">
                <div class='p-2'>
                  <h2>${wewe[i].title}</h2>
                  <p>${wewe[i].snippet}</p>
                  <a href="https://en.wikipedia.org/?curid=${wewe[i].pageid}"><button class="btn btn-light">Read More</button></a>
                </div>
            </div>`;
        }
        results_field.innerHTML = result;
      });
  };
