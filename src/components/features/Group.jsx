// import { useEffect } from "react";
// import { useChat } from "../../api/useChat";

export const Group = () => {
//   const { group, createGroup } = useChat();
//   console.log("hello group");
  
//   console.log("Group Data:", group);
//   useEffect(()=>{
//     createGroup()
//   },[])
const groupName = JSON.parse(localStorage.getItem("groupName"))
  return (
    <div>
      <h2>Groups</h2>
      {groupName?.data?.length > 0 ? (
        <ul>
          {groupName?.data.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3> 
            </li>
          ))}
        </ul>
      ) : (
        <p>No groups found.</p>
      )}
    </div>
  );
};
