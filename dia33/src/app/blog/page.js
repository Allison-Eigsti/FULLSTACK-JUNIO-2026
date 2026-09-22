import ArticleCard from '@/components/ArticleCard'
import articles from '@/lib/data'

export default function ArticleList() {
    return(
        <>
            {articles.map((article) => (
                <li>
                    <ArticleCard article={article}/>
                </li>
            ))}
        </>
    )
}