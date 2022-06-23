# -*- coding: utf-8 -*-
"""
Created on Thu Jun 23 12:54:19 2022

@author: ohlal
"""

from bs4 import BeautifulSoup
import requests
import pandas as pd


df = pd.read_csv('anime.csv')
df1 = pd.DataFrame(columns = ['MAL_ID', 'Image_url'])

for ID in range(4500, 9000):
    Anime_ID = df['MAL_ID'].iloc[ID]
    url = 'https://myanimelist.net/anime/' + str(Anime_ID)
    
    try:
        req = requests.get(url)
        soup = BeautifulSoup(req.content, 'html.parser')
        images = soup.find_all("div", {"class": "leftside"})[0].img
        print(images['data-src'])
        df1 = df1.append({'MAL_ID' : Anime_ID, 'Image_url' : images['data-src']}, ignore_index=True)
    except Exception:
        continue
    

df1.to_csv("output.csv")

