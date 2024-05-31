const wishListModel = require("../models/wishList");
const jwt = require('jsonwebtoken');

exports.addToWishList = async (movieToAddToWishList) => {
    try {
        console.log(`movieIdToPush: ${movieToAddToWishList.movieId}`)
        console.log(`userId: ${movieToAddToWishList.userId}`)
        const user = await wishListModel.findOne({ id: movieToAddToWishList.userId });
        if (user) {
            user.movies.push({movieId: movieToAddToWishList.movieId});
            await user.save();
            return true;
        }
        else {
            // If the user doesn't exist, create a new document
            const newWishList = new wishListModel({
                id: movieToAddToWishList.userId,
                movies: [{movieId: movieToAddToWishList.movieId}],
            });
            await newWishList.save();
            return true;
        }

    console.log('WishList updated/created successfully');
  } catch (err) {
    console.error('Error updating/creating WishList:', err);
  }

};

exports.removeFromWishList = async (movieToAddToWishList) => {
    try {
        const movieIdToRmove= movieToAddToWishList.movieId;
        console.log(`movieIdToRmove ${movieIdToRmove}`)
        console.log(`movieToAddToWishList.userId ${movieToAddToWishList.userId}`)
        const user = await wishListModel.findOne({ id: movieToAddToWishList.userId });
        if (user) {
            console.log(`remove ${movieIdToRmove}`)
            // Check if the movieId already exists in the wishlist array
            const existingWishListIndex = user.movies.findIndex(
                (r) => r.movieId === movieIdToRmove
            );
        // If the movieId exists, remove it
            if (existingWishListIndex !== -1) {
                user.movies.splice(existingWishListIndex, 1);
                await user.save();
                console.log('Movie removed from wishlist successfully');
                return true;
            } else {
                console.log('Movie not found in wishlist');
                return false;
            }
        }
        else {
            console.log('User not found');
        }
    } catch (err) {
        console.error('Error removing movie from wishlist:', err);
    }
};


exports.checkIfExistsIntWishList = async (wishListInfo) => {
    try {
        const movieToCheck= wishListInfo.movieId;
        const user = await wishListModel.findOne({ id: wishListInfo.userId });
        if (user) {
            // Check if the movieId already exists in the wishlist array
            const existingWishListIndex = user.movies.findIndex(
                (r) => r.movieId === movieToCheck
            );
            // If the movieId exists return true
            if (existingWishListIndex !== -1) {
                return true;
            } else {
                return false;
            }
        }
        else {
            console.log('User not found');
        }
    } catch (err) {
        console.error('Error removing movie from wishlist:', err);
    }
};


exports.getWishList = async (movieToAddToWishList) => {
    try {
        const user = await wishListModel.findOne({ id: movieToAddToWishList.userId });
        if (user) {
            return user.movies
        } 
        else {
            return null
        }
    } catch (err) {
        console.error('Error updating/creating rating:', err);
    }
};