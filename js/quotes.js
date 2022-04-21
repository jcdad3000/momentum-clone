const quotes = [
  { quotes: "삶이 있는 한 희망은 있다", authors: "키케로" },
  { quotes: "산다는것 그것은 치열한 전투이다.", authors: "로망로랑" },
  {
    quotes: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
    authors: "사무엘존슨",
  },
  {
    quotes: "언제나 현재에 집중할수 있다면 행복할것이다.",
    authors: "파울로 코엘료",
  },
  {
    quotes:
      "진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해 ",
    authors: "찰리 채플린",
  },
  {
    quotes: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다 ",
    authors: "엘버트 허버드",
  },
  { quotes: "신은 용기있는자를 결코 버리지 않는다", authors: "켄러" },
  {
    quotes:
      "행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다 ",
    authors: "헬렌켈러",
  },
  { quotes: "피할수 없으면 즐겨라", authors: "로버트 엘리엇" },
  {
    quotes:
      "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    authors: "이드리스 샤흐",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child")

const todaysQuote = (quotes[Math.floor(Math.random()*quotes.length)])

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.authors;