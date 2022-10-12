console.log("This is project 3");

// `https://newsapi.org/v2/top-headlines?sources=${source}-news&apikey=${apiKey}`

let source = "bbc-news"
let apiKey = "0a5b61054f2e415fbbb827f4f1682a9b"

let newsAccordian = document.getElementById("newsAccordian");

// create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apikey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = '';
        articles.forEach(function (element, index) {
           // console.log(element, index);
            let news = ` <div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"> <b>Breaking News ${index+1}: </b>
                                    ${element['title']}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                                data-bs-parent="newsAccordion">
                                <div class="accordion-body">${element['content']}<a href="${element["url"]}" target ="_blank"> Read more here</a></div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.error("Some error occured");
    }
}
xhr.send();


