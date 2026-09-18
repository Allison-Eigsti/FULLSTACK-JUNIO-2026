import { NavLink } from 'react-router-dom'

function ArticlePreview({ article }) {
  return (
    <NavLink to={`/articles/${article.id}`}>
      <h2>{article.title}</h2>
    </NavLink>
  );
}

export default ArticlePreview