import { NewsItem } from "../NewsItem";
import "./newlist.css";

export function NewList({ title, listNews = [] }) {
  // if(!lastNews.length){
  //     return <div className="empty-heading">
  //         <h3 > новости еще не почтупили </h3>
  //         <p>Просим прощения за неудобства. Они на подходе</p>
  //     </div>
  // }

  return (
    <div>
      <h2>Последние новости</h2>
      <div className="new-list">
        <h2>{title}</h2>
        {listNews.map((item, index) => {
          return (
            <NewsItem background={item.bg} key={index}>
              {item.title}
            </NewsItem>
          );
        })}
      </div>
    </div>
  );
}
