
import "./NewsItem.css";





export function NewsItem({ background , children}) {
  return (
    <div className="news-item" style={{ background }}>
      NewsItem
      {children}
    </div>
  );
}