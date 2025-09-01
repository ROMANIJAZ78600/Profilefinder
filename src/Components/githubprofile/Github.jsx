import React, { useEffect, useState } from 'react'
import Card from './Card'
import './Github.css'
function Github() {
    const [username, setusername] = useState('')
    const [userdata, setuserdata] = useState(null)
    const [loading,setLoading] = useState(true)

    const fetchGithubuserdata =  async()=>{
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`);

        const data = await response.json();
      if(data){
        setuserdata(data)
        setLoading(false)
         setusername('')
      }
       
    }

    const handleSubmit = ()=>{
      fetchGithubuserdata()
    }
    useEffect(()=>{
        fetchGithubuserdata()
    },[])
    if(loading){
        return <h1>Loading Data Please Wait..</h1>
    }
  return (
    <div className='github-profile-container'>
      <div className="input-wrapper">
        <input
        name='username'
        type='text'
        placeholder='Search Github User'
        value={username}
        onChange={(e)=> setusername(e.target.value)} />
        <button onClick={handleSubmit}>Search</button>
      </div>
    {
        userdata !== null ? <Card user={userdata} /> : null
    }
    </div>
  )
}

export default Github
