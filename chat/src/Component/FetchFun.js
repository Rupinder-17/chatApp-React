export const fetchData = async (
  url,
  method = method || "GET",
  headers = {},
  body = null
) => {
  try {
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: body ?  JSON.stringify(body):null,
    };
    const resposne = await fetch(url, options);
    const result = await resposne.json();
    if (!resposne.ok) {
      throw new Error(result.message);
    }
    return result;
  } catch (e) {
    console.log(e);
  }
};
