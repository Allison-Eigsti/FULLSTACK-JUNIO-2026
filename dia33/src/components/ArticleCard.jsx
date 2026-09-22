export default function ArticleCard({ article }) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-gray-900">
        {article.title}
      </h2>

      <p className="text-gray-600">
        {article.description}
      </p>
    </article>
  )
}