import '../styles/sidebar.css';

export default function Friends({user}) {
    return (<li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="sidebarFriendImg"/>
            <span className="sidebarFrienName">{user.username}</span>
        </li>
    );
}
