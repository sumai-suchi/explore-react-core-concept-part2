import './Friend.css'

export default function Friend({friend})



{
    const {name,email}=friend
    return (

        <div className="bd">
            <h2>Name:{name}</h2>
        <h2>Email:{email}</h2>
        </div>
    )
}