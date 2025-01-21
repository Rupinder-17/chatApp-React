import React from 'react'
import { useOnlineuser } from '../Hooks/useOnlineuser'

export const OnlineUser = () => {
  const [onlineuser, onlineuserApi] = useOnlineuser();

  console.log("online", onlineuser);

  React.useEffect(() => {
    onlineuserApi()
  }, [])
  


  return (
    <div>
      <h1>OnlineUser</h1>
      {onlineuser?.data?.length > 0 ? (
        onlineuser?.data?.map((item) => (
          <div key={item.id}>
            <h2>{item.username}</h2>
          </div>
        ))
      ) : (
        <p>No users online</p>
      )}
    </div>
  );
}
