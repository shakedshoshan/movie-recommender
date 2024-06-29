import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import tensorflow as tf
from tensorflow import keras
import keras
from pprint import pprint
from surprise import Dataset, Reader, accuracy, SVD, NMF
from flask import Flask, request, jsonify
import pickle
from surprise.model_selection import cross_validate, train_test_split

app = Flask(__name__)

def save_predictions_to_file(predictions, filename):
    with open(filename, 'wb') as file:
        pickle.dump(predictions, file)

def generate_recommendations(input_object, algo, data, userId):
    # Convert the input_object to a DataFrame
    data_add_df = pd.DataFrame(input_object)
    
    # Combine the original data with the new data
    combined_data_df = pd.concat([data.df, data_add_df], ignore_index=True)
    
    # Create a new Dataset object with the combined data
    reader = Reader(rating_scale=(0.5, 5))
    combined_data = Dataset.load_from_df(combined_data_df[['userId', 'movieId', 'rating']], reader)

    # Build the full trainset
    trainset = combined_data.build_full_trainset()
    algo.fit(trainset)
    
    # Get the list of all movie IDs
    all_movie_ids = set(combined_data_df['movieId'].unique())
    
    # Get the list of movie IDs that the user has already rated
    user_rated_movie_ids = set(combined_data_df[combined_data_df['userId'] == userId]['movieId'].unique())
    
    # Get the list of movie IDs that the user hasn't rated yet
    unrated_movie_ids = all_movie_ids - user_rated_movie_ids
    
    # Generate predictions for the unrated movies
    user_predictions = [algo.predict(userId, int(movie_id)) for movie_id in unrated_movie_ids]
    
    # Sort predictions by estimated rating in descending order
    user_predictions.sort(key=lambda x: x.est, reverse=True)

    print(f"Top 20 recommendations for User {userId}:")
    for pred in user_predictions[:20]: 
        print(f"Movie ID: {pred.iid}, Estimated Rating: {pred.est:.2f}")

    return user_predictions[:20] 

def load_model(filename):
    with open(filename, 'rb') as file:
        model = pickle.load(file)
    return model

model = load_model("svd_model2.pkl")
ratings_df_small = pd.read_csv("rating_ML4.csv")
reader = Reader(rating_scale=(0.5, 5))
data = Dataset.load_from_df(ratings_df_small[['userId', 'movieId', 'rating']], reader)
data.df = ratings_df_small[['userId', 'movieId', 'rating']] 

@app.route('/recommend', methods=['POST'])
def recommend():
    print("in Flask")
    input_object = request.json
    userId = int(input_object[0]["userId"])
    prediction = generate_recommendations(input_object, model, data, userId)

    formatted_prediction = [{'movieId': int(pred.iid), 'estimatedRating': float(pred.est)} for pred in prediction]
    
    return jsonify({'prediction': formatted_prediction})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
