export default async function Category({ params }) {
    const { category } = await params
    return(
        <>
            Post Category: {category}

        </>
    )
}