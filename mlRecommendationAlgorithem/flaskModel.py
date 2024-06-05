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

app = Flask(__name__)

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
    
    # Make predictions
    testset = trainset.build_anti_testset()
    predictions = algo.test(testset)

    # Filter predictions for the specific user
    user_predictions = [pred for pred in predictions if pred.uid == userId]
    user_predictions.sort(key=lambda x: x.est, reverse=True)
    top_10_recommendations = user_predictions[:10]

    print(f"Top 10 recommendations for User {userId}:")
    for pred in top_10_recommendations:
        print(f"Movie ID: {pred.iid}, Estimated Rating: {pred.est:.2f}")

    return top_10_recommendations  # Return the recommendations

def load_model(filename):
    with open(filename, 'rb') as file:
        model = pickle.load(file)
    return model

model = load_model("savedSVD.pkl")
ratings_df_small = pd.read_csv("ratings_small.csv")
reader = Reader(rating_scale=(0.5, 5))
data = Dataset.load_from_df(ratings_df_small[['userId', 'movieId', 'rating']], reader)
data.df = ratings_df_small[['userId', 'movieId', 'rating']]  # Store the DataFrame in the Dataset object for easy access

@app.route('/recommend', methods=['POST'])
def recommend():

    input_object = request.json
    print("\n\n---------input_object-------\n\n")
    print(input_object)

    userId = int(input_object[0]["userId"])
    print(userId)
    prediction = generate_recommendations(input_object, model, data, userId)

    # Format the prediction for the response
    formatted_prediction = [{'movieId': pred.iid, 'estimatedRating': pred.est} for pred in prediction]
    
    return jsonify({'prediction': formatted_prediction})

if __name__ == '__main__':
    app.run(debug=True)
