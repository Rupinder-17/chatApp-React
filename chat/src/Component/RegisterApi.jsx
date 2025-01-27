import { useReducer } from "react";

const initialState = { data: [], error: null, loading: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_START":
      return { ...state, loading: true, error: null };
    case "REGISTER_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "REGISTER_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const RegisterApi = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const registerApi = async (data) => {
    dispatch({ type: "REGISTER_START" });
    try {
      const res = await fetch("https://api.freeapi.app/api/v1/users/register", {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          role: data.role,
          username: data.username,
        }),
      });

      const result = await res.json();
      dispatch({ type: "REGISTER_SUCCESS", payload: result });
      console.log(result);
    } catch (e) {
      dispatch({ type: "REGISTER_FAILURE", payload: e.message });
      console.error(e);
    }
  };

  return [state, registerApi];
};
