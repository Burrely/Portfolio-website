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
                this.deactivateAllArticles();
                article.classList.add("active");
                document.onclick = (event) => { // NEEDS REVISION, OVERIDES ANY OTHER EVENTS.
                    if (!article.contains(event.target)) { articleHandler.deactivateAllArticles(); }
                };
            }
        });
    }

    deactivateAllArticles() {
        if (!this.articles) { return; }
        Array.from(this.articles).forEach(article => {
            article.classList.remove("active");
        });
    }

}

const articleHandler = new ArticleHander();

window.addEventListener('load', () => {
    articleHandler.getDocumentArticles();
    articleHandler.assignActivation();
})