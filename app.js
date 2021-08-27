// console.log("hello");
let newscontainer = document.getElementById('news-container');
let topnews = document.getElementById('topnews');
let api = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=85a36557fe7b4b7d8de7d1e51a645842";

let xml = new XMLHttpRequest;
xml.open('GET', `${api}`, true);
xml.onload = function() {

    let obj = JSON.parse(this.responseText);

    let articles = obj.articles;

    let newshtml = "";
    let topnewshtml = "";

    articles.forEach(function(element, index) {
        // console.log(element);
        // console.log(index);
        let news = `<div class="card mb-3" id="new-${index}">
        <img src="${element.urlToImage}" class="card-img-top" alt="${element.title} style="width: 25rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${element.author}</h6>
            <p class="card-text">${element.description}</p>
            <button type="button" class="btn btn-outline-danger"><a href="${element.url}" target="_blank">Read more..</a></button>
            <p class="card-text mt-2"><small class="text-muted">Publish: ${element.publishedAt}</small></p>
        </div>
    </div>`;

        let toptitle = `<li class="list-group-item my-1"><a href="#new-${index}" class="newstitle">${element.title}</a></li>`

        topnewshtml += toptitle;
        newshtml += news;

    });
    topnews.innerHTML = topnewshtml;
    newscontainer.innerHTML = newshtml;


}
xml.send();