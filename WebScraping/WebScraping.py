#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Thu Jun  9 17:14:30 2022

@author: lawrence
"""

#!conda install selenium -y

import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import os

chrome_options = Options()
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument("disable-infobars")
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('enable-automation')
chrome_options.add_argument('start-maximized')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('--disable-browser-side-navigation')




driver = webdriver.Chrome("/usr/local/bin/ChromeDriver", options=chrome_options)
driver.set_page_load_timeout(10)

os.chdir("/Users/lawrence/Documents/GitHub/Web_Development/CIS5500Project_Datasets")
df = pd.read_csv('anime.csv')

df1 = pd.DataFrame(columns = ['MAL_ID', 'Image_url'])

for ID in range(0, len(df['MAL_ID'])):
    Anime_ID = df['MAL_ID'].iloc[ID]
    driver.get('https://myanimelist.net/anime/' + str(Anime_ID))
    link = driver.find_elements(By.CSS_SELECTOR, 'div[class="leftside"] div[style="text-align: center;"] a img')
    for item in link:
        url = item.get_attribute('src')
        df1 = df1.append({'MAL_ID' : Anime_ID, 'Image_url' : url}, ignore_index=True)
        print(url)
