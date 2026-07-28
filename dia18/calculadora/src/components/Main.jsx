
function Main({ title, content }) {
    return (
        <>
        <section className="flex flex-col items-center p-24 bg-gray-200">
            <h2 className="text-4xl font-bold tracking-wide">{title}</h2>
            <div>{content}</div>
        </section>
        </>
    )
}

export default Main