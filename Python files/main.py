from itertools import zip_longest
import numpy as np
import pandas as pd
import difflib
import sys
import json
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity



def recommend_movie(movie_name):
    
    #####  ----  Reading the Original csv file -----
    movies_data = pd.read_csv('C:/Users/susha/OneDrive/Desktop/sem 5 project/Python files/2000 to 2022 with hindi movies.csv')
    # movies_data.head()

    #####  ----  This is the output of Cosine Similarity -----
    similarity=np.load('C:/Users/susha/OneDrive/Desktop/sem 5 project/Python files/CosSimilarityData.npy')
    # print(similarity)
    # similarity.shape


    # movie_name = input(' Enter your favourite movie name : ')

    list_of_all_titles = movies_data['title'].tolist()
    
    #####  ----  Finding The Comparison between dataset and user input -----
    find_close_match = difflib.get_close_matches(movie_name, list_of_all_titles)

    close_match = find_close_match[0]

    index_of_the_movie = movies_data[movies_data.title == close_match]['index'].values[0]
    # print(index_of_the_movie)
    similarity_score = list(enumerate(similarity[index_of_the_movie]))
    # print(similarity_score)


    sorted_similar_movies = sorted(similarity_score, key = lambda x:x[1], reverse = True)
    # print('The Suggested movies are : \n')

    i = 1
    j = 0
    top_10_movies = []
    for movie in sorted_similar_movies:
        index = movie[0]
        title_from_index = movies_data[movies_data.index == index]['title'].values[0]
        id = movies_data[movies_data.index == index]['id'].values[0]
        if(j<10):
            top_10_movies.append(id)
            j+=1
            # print(top_10_movies)
        # if (i < 10):
        #     print(id, '.', index, ' . ', title_from_index)
        #     i += 1
    return top_10_movies

movieName=sys.argv[1]
# print(movieName)
listOfData=recommend_movie(movieName)

dictOfMovies=dict(enumerate(listOfData))
# # print(dictOfMovies)
moviesInJson=json.dumps(dictOfMovies)
print(moviesInJson)


# print(type(json.dumps(dictOfMovies)))


# Name=input("Enter the name of the movie: ")
# listOfData=recommend_movie(Name)
# print(listOfData)










sys.stdout.flush()