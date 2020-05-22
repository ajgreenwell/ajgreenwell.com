const numNewsItemsToRender = 5;

export default function News(news) {
    return `
    <div id="news-location"></div>
    <section id="news">
        <h1>News</h1>
        <input id="news-search" type="search" placeholder="Search News...">
        <div id="news-list">
            ${NewsItems(news, numNewsItemsToRender)}
        </div>
    </section>
    `;
}

export function NewsItems(news, numNewsItems = null) {
    let n = numNewsItems ? numNewsItems : Object.keys(news).length;
    return news.slice(0, n).map(newsItem => NewsItem(newsItem)).join('');
}

function NewsItem(newsItem) {
    const { description, date } = newsItem;

    return `
    <div class="row news-item">
        <div class="col-10">
            ${description}
        </div>
        <div class= "col-2 news-date text-align">
            <em>${date}</em>
        </div>
    </div>
    `;
}

export function handleNewsFilter(news) {
    document.querySelector('#news-search').addEventListener('input', event => {
        let searchText = event.target.value;
        let filteredNews = news.filter(newsItem => {
            return newsItem.description.toLowerCase().includes(searchText.toLowerCase())
        });
        document.querySelector('#news-list').innerHTML = NewsItems(filteredNews, numNewsItemsToRender);
    });
}