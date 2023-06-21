let articles: {title: string, body: string}[] = [];
const articleList = document.getElementById("articleList");

function getData() {
  fetch('https://dummyjson.com/posts')
    .then(response => response.json())
    .then(data => {
      articles = data.posts;
      generateAllArticles(); 
    })
    .catch(error => {
      console.error('Error:', error);
      document.body.innerHTML = error;
    });
}

function generateAllArticles() {
  articles.forEach(article => {
    const title = article.title;
    const body = article.body;
    generateArticle(title, body, "https://cdn.pixabay.com/photo/2012/04/12/20/12/x-30465_1280.png");
  });

}

function generateArticle(title: string, content: string, imageUrl: string) {
  const articleTemplate: string = `
    <div class="row" style=" margin-bottom:30px; border:solid 2px black;">
        <div class="col">
            <h2 class="fw-bold">${title}</h2>
            <div style="width: 70%;">${content}</div>
            <button class="btn btn-primary" style="padding: 10px 20px;">Like</button>
            <img style="max-width: 5%; height: auto;margin-left: 70%;margin-bottom: 5%;" src="${imageUrl}" alt="Article Image">
        </div>
        </div>
  `;
  articleList.innerHTML += articleTemplate;
}

window.addEventListener('load', () => {
  getData();
});