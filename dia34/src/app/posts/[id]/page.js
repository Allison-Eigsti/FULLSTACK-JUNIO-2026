export default async function Post({ params }) {
    const { id } = await params
    return(
        <>
            Post Id: {id}
        </>
    )
}