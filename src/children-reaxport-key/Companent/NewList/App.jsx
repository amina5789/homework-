import { NewList } from "./Companent/NewList/NewLisst";
import "./style.css";
const lastNews = [
  {
    title:
      "Торговля принесла больше всего налогов в бюджет Кыргызстана в 2024 году",
    bg: "lightyellow",
  },
  {
    title:
      "За что Садыр Жапаров объявил выговор послу Кыргызстана в КНР Актилек Мусаевой году",
    bg: "lightgreen",
  },
  {
    title: "В Казахстане произошел сбой в работе государственных сайтов",
    bg: "lightblue",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Мeta News</h1>
      <hr />
      <NewList title="последние новости" listNews={lastNews} />
    </div>
  );
}

export default App;
