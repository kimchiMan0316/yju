export const checkSessionValid = async (sessionId) => {
  if (!sessionId) return false;
  const res = await fetch(
    `http://localhost:5000/session?sessionId=${sessionId}`
  );
  const data = await res.json();
  return data.length > 0;
};
