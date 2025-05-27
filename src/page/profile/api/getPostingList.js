export const getPostingList = async (id) => {
  try {
    const req = await fetch(`http://localhost:5000/post?userId=${id}`);
    const res = await req.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};
