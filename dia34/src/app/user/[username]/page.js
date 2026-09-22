export default async function UserPage({ params }) {
    const { username } = await params
    return(
        <>
            <p>Username is {username}</p>
        </>
    )
}