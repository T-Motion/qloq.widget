export const createOrUpdateLead = async (data) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
      
    const response = await fetch('/api/test', requestOptions);

    return await response.json();
}