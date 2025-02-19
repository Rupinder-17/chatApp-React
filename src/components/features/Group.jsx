import { useEffect } from "react";
import { useChat } from "../../api/useChat";

export const Group = () => {
  const { group, createGroup } = useChat();
  console.log("Group Data:", group);
  useEffect(()=>{
    createGroup()
  },[])

  return (
    <div>
      <h2>Groups</h2>
      {group?.length > 0 ? (
        <ul>
          {group.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3> {/* Display Group Name */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No groups found.</p>
      )}
    </div>
  );
};
