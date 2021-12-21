import {makeAutoObservable} from "mobx";

export default class BlogStore {
    constructor() {
        this._news = []
        this._cases = []
        this._faq = []
        this._materials = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setNews(news) {
        this._news = news
    }
    setItemCases(cases) {
        this._cases = cases
    }
    setMaterials(materials) {
        this._materials = materials
    }
    setFaq(faq) {
        this._faq = faq
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get news() {
        return this._news
    }
    get itemCases() {
        return this._cases
    }
    get faq() {
        return this._faq
    }
    get materials() {
        return this._materials
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}