export default async function Post({ params }) {
    const { category, post } = await params

    return(
        <>
            Post Category: {category}
            Post Id: {post}

        </>
    )
}