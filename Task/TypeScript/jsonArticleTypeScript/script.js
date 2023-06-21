var articles = [];
var articleList = document.getElementById("articleList");
function getData() {
    fetch('https://dummyjson.com/posts')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        articles = data.posts;
        generateAllArticles();
    })
        .catch(function (error) {
        console.error('Error:', error);
        document.body.innerHTML = error;
    });
}
function generateAllArticles() {
    articles.forEach(function (article) {
        var title = article.title;
        var body = article.body;
        generateArticle(title, body, "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png");
    });
}
function generateArticle(title, content, imageUrl) {
    var articleTemplate = "\n    <div class=\"row\" style=\" margin-bottom:30px; border:solid 2px black;\">\n        <div class=\"col\">\n            <h2 class=\"fw-bold\">".concat(title, "</h2>\n            <div style=\"width: 70%;\">").concat(content, "</div>\n            <button class=\"btn btn-primary\" style=\"padding: 10px 20px;\">Like</button>\n            <img style=\"max-width: 5%; height: auto;margin-left: 70%;margin-bottom: 5%;\" src=\"").concat(imageUrl, "\" alt=\"Article Image\">\n        </div>\n        </div>\n  ");
    articleList.innerHTML += articleTemplate;
}
window.addEventListener('load', function () {
    getData();
});
