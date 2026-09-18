import { useParams } from "react-router-dom";

function User() {
    const params = useParams()

    return(
        <p>This is the page of User with the id: {params.id}.</p>
    )
}

export default User
