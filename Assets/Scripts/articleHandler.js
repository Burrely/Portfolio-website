class ArticleHander {
    #articles;
    constructor() {}

    get articles() {
        return this.#articles;
    }

    //
    getDocumentArticles() {
        this.#articles = document.getElementsByTagName("article");
    }
}

const articleHandler = new ArticleHander();

window.addEventListener('load', () => {

})