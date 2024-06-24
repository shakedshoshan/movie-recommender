const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
    // imagePath
      // ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
      // : "https://links.papareact.com/w500/o8z";
  };
  
  export default getImagePath;




  