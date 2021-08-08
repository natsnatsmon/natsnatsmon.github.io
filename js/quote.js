// const quotes = [
//     {
//         quote: "아무런 일도 하지 않는다면, 상처도 없겠지만 성장도 없다. 하지만 뭔가 하게되면 나는 어떤식으로든 성장하게 된다. 심지어 시도했으나 무엇도 제대로 해내지 못했을 때 조차도 성장한다.",
//         author: "김연수",
//     },
//     {
//         quote: "나무는 꽃을 버려야 열매를 맺고 강물은 강을 버려야 바다에 이른다.",
//         author: "화엄경",
//     },
//     {
//         quote: "인내는 쓰지만 그 열매는 달다.",
//         author: "아리스토텔레스",
//     },
//     {
//         quote: "시작이 반이다.",
//         author: "아리스토텔레스",
//     },
//     {
//         quote: "끝까지 해보기 전까지는 늘 불가능해 보인다.",
//         author: "넬슨 만델라",
//     },
//     {
//         quote: "어디를 가든 마음을 다해 가라",
//         author: "공자",
//     },
//     {
//         quote: "내가 원하지 않는 바를 남에게 행하지 말라",
//         author: "공자",
//     },
//     {
//         quote: "상처는 잊되, 은혜는 결코 잊지 말라.",
//         author: "공자",
//     },
//     {
//         quote: "그 누구도 다른 사람을 진정으로 이해할 수 없고, 아무도 다른 사람의 행복을 만들어 줄 수 없다.",
//         author: "그레이엄 그린",
//     },
//     {
//         quote: "인생의 목적이 행복이라고 단정 짓지 말아야 행복할 수 있다.",
//         author: "조지 오웰",
//     }
// ]

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const qApi = "https://goquotes-api.herokuapp.com/api/v1/random?count=1";
fetch(qApi).then(requests => requests.json()).then(data => {
    quote.innerText = data.quotes[0].text;
    author.innerText = `- ${data.quotes[0].author}`;
});

//const randNum = Math.floor(Math.random() * (quotes.length));
//quote.innerText = quotes[randNum].quote;
//author.innerText = quotes[randNum].author;