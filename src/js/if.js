import InfiniteScroll from 'infinite-scroll';

var unsplashID =
  '9ad80b14098bcead9c7de952435e937cc3723ae61084ba8e729adb642daf0251';

const infScroll = new InfiniteScroll('.container', {
  path() {
    return `https://api.unsplash.com/photos?client_id=${unsplashID}&page=${this.pageIndex}`;
  },
  responseBody: 'json',
  history: false,
});

infScroll.loadNextPage();

// infScroll.on('load', (body, path, response) => {
//   console.log(body);
//   console.log(path);
// });

const markup = '<p>qweqwqeqwqe</p>';

const fragment = new DocumentFragment();

fragment.innerHTML = markup;

console.log(fragment);
