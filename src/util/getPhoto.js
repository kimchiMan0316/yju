export default async function getPhoto(id) {
  if (typeof id === "string") return null;

  try {
    const getPhoto = await fetch(`http://localhost:5000/photo?id=${id}`);
    const response = await getPhoto.json();

    if (response[0].src) {
      return response[0].src;
    }

    return null;
  } catch (error) {
    console.error(error);
  }
}
