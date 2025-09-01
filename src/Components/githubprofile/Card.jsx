import React from "react";
import './Github.css'
function Card( { user } ) {
    const {avatar_url, followers, following, public_repos,name, login,created_at
 } = user;

 const createdate = new Date(created_at);
  return (
    <div className="user">
        <div>     
             <img src={avatar_url} className="avatar" alt="user"/>
        </div>
        <div>
            <a href={`https://github.com/${login}`}>{name || login}</a>
            <p>User Joined At: {`${createdate.getDate()} ${createdate.toLocaleString('en-us', {
                month : 'short'
                })} ${createdate.getFullYear()}`}</p>
        </div>
        <div>
            <div>
                <h1>Public Repos</h1>
                <p>{public_repos}</p>
            </div>
            <div>
             <h1>Followers</h1>
             <p>{followers}</p>
            </div>
            <div>
             <h1>Following</h1>
             <p>{following}</p>
            </div>
        </div>

    </div>
  )
}

export default Card
