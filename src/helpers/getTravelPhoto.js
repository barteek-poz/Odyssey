const getTravelPhoto = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${searchQuery}&client_id=${
        import.meta.env.VITE_UNSPLASH_KEY
      }`
    );
    if (!response.ok) {
      throw new Error("Could not fetch photo");
    }
    const photo = await response.json();
    return photo
  } catch (error) {
    console.log(error);
  }
};

export default getTravelPhoto;
