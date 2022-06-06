import os
import pandas as pd
import re

print(os.getcwd())
os.chdir("/Users/lawrence/Documents/GitHub/Web_Development/CIS5500Project_Datasets")
df = pd.read_csv('anime.csv')
dataset = df.copy()

# Generate original dataset columns
print(dataset.columns)
print(dataset.dtypes)

# Deal with Duration attribute
def split_it(time):
    return re.findall('^(\d) hr.', time)

dataset['Duration_hour'] = dataset['Duration'].apply(split_it)
dataset['Duration_hour'] = dataset['Duration_hour'].astype('str')
print(dataset['Duration_hour'])
dataset['Duration_hour'] = dataset['Duration_hour'].str.replace('[', '', regex=True)
dataset['Duration_hour'] = dataset['Duration_hour'].str.replace(']', '', regex=True)
dataset['Duration_hour'] = dataset['Duration_hour'].str.replace("'", '', regex=True)

def split_it2(time):
    return re.findall('(\d*) min', time)

dataset['Duration_min'] = dataset['Duration'].apply(split_it2)
dataset['Duration_min'] = dataset['Duration_min'].astype('str')
dataset['Duration_min'] = dataset['Duration_min'].str.replace('[', '', regex=True)
dataset['Duration_min'] = dataset['Duration_min'].str.replace(']', '', regex=True)
dataset['Duration_min'] = dataset['Duration_min'].str.replace("'", '', regex=True)


# [17562 rows x 35 columns]
# Index([u'MAL_ID', u'Name', u'Score', u'Genres', u'English name',
#        u'Japanese name', u'Type', u'Episodes', u'Aired', u'Premiered',
#        u'Producers', u'Licensors', u'Studios', u'Source', u'Duration',
#        u'Rating', u'Ranked', u'Popularity', u'Members', u'Favorites',
#        u'Watching', u'Completed', u'On-Hold', u'Dropped', u'Plan to Watch',
#        u'Score-10', u'Score-9', u'Score-8', u'Score-7', u'Score-6', u'Score-5',
#        u'Score-4', u'Score-3', u'Score-2', u'Score-1'],
#       dtype='object')

print(pd.to_numeric(dataset[dataset['Score'] != 'Unknown']['Score']).to_frame().describe())
dataproperties = dataset.describe()

# Deal with Genres many to many relations
data1 = dataset[['MAL_ID', 'Genres']]
# Generate Genres and Anime many to many dataset
data_genres = data1.set_index(['MAL_ID']).apply(lambda x: x.str.split(', ').explode()).reset_index()
os.chdir("/Users/lawrence/Documents/GitHub/Web_Development/CIS550Project/DataCleanforDB")
data_genres.to_csv('Anime_Genres.csv')

# Deal with Producers many to many relations
data2 = dataset[['MAL_ID', 'Producers']]
data_producers = data2.set_index(['MAL_ID']).apply(lambda x: x.str.split(', ').explode()).reset_index()
os.chdir("/Users/lawrence/Documents/GitHub/Web_Development/CIS550Project/DataCleanforDB")
data_producers.to_csv('Anime_Producers.csv')

# Deal with Licensors many to many relations
data3 = dataset[['MAL_ID', 'Licensors']]
data_licensors = data3.set_index(['MAL_ID']).apply(lambda x: x.str.split(', ').explode()).reset_index()
os.chdir("/Users/lawrence/Documents/GitHub/Web_Development/CIS550Project/DataCleanforDB")
data_licensors.to_csv('Anime_Licensors.csv')

# Deal with Studios many to many relations
data4 = dataset[['MAL_ID', 'Studios']]
data_studios = data4.set_index(['MAL_ID']).apply(lambda x: x.str.split(', ').explode()).reset_index()
os.chdir("/Users/lawrence/Documents/GitHub/Web_Development/CIS550Project/DataCleanforDB")
data_studios.to_csv('Anime_Studios.csv')

# Output the Anime file
os.chdir("/Users/lawrence/Documents/GitHub/Web_Development/CIS550Project/DataCleanforDB")
dataset.to_csv('Anime.csv')