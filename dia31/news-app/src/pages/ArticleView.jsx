import { useParams } from 'react-router-dom'

function ArticleView({ article }) {
    const params = useParams()

    return(
        <p>Article: {params.id}</p>
    )
}

export default ArticleView