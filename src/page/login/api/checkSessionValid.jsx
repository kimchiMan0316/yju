export const checkSessionValid = async (sessionId) => {
  console.log(sessionId);
  if (!sessionId) return false;

  const res = await fetch(`/session?sessionId=${sessionId}`);
  const data = await res.json();
  return data.length > 0;
};
