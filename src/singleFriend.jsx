export default function Friend({friend}){
    const {name, email, id, website
    } = friend;
    return(
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Id: {id}</p>
            <p>Website: {website
}</p>
        </div>
    )
}