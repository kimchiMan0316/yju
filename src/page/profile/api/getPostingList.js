export const getPostingList = async (id) => {
  try {
    const req = await fetch(`http://localhost:5000/post?authorId=${id}`);
    const res = await req.json();

    return res;
  } catch (error) {
    console.log(error);
  }
};
