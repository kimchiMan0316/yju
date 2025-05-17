export const redirectHome = async (sessionId) => {
  const req = await fetch(
    `http://localhost:5000/session?sessionId=${sessionId}`
  );
  const res = await req.json();

  if (res.length > 0) {
    return true;
  }

  return false;
};
