class ArticleHander {
    articles;
    constructor() {}

    //
    getDocumentArticles() {
        this.articles = document.getElementsByTagName("article");
    }

    assignActivation() {
        Array.from(this.articles).forEach(article => {
            article.onclick = () => {
                article.classList.add("active");
            }
        });
    }
}

const articleHandler = new ArticleHander();

window.addEventListener('load', () => {
    articleHandler.getDocumentArticles();
    articleHandler.assignActivation();
})