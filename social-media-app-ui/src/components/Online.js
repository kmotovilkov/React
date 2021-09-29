import '../styles/rightbar.css';


export default function Online({user}) {
    return (
            <li className="rightbarFriend" key={user.id}>
                <div className="rightbarProfileContainer">
                    <img className="rightbarProfileImg" src={user.profilePicture} alt=""/>
                    <span className="rightbarOnline"></span>
                </div>
                <span className="rightbarUsername">{user.username}</span>
            </li>
    );
}