#!conda install selenium -y
import pandas as pd
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
import os
import time

chrome_options = Options()
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('disable-infobars')
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('enable-automation')
chrome_options.add_argument('start-maximized')
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument('--disable-browser-side-navigation')
# add this code if you use chrome beta
# chrome_options.binary_location = "/Applications/Google Chrome Beta.app/Contents/MacOS/Google Chrome Beta"

s = Service("/usr/local/bin/ChromeDriver")
driver = webdriver.Chrome(executable_path = "/usr/local/bin/ChromeDriver", options = chrome_options)
driver.set_page_load_timeout(30)

# set the path of the source dataset
os.chdir("/Users/yuxinfan/PycharmProjects/pythonProject")
df = pd.read_csv('anime.csv')

# create a new dataframe for storing the outcome
df1 = pd.DataFrame(columns = ['MAL_ID', 'Image_url'])

for ID in range(1920, len(df['MAL_ID'])):  # change the beginning number of range
    Anime_ID = df['MAL_ID'].iloc[ID]
    driver.get('https://myanimelist.net/anime/' + str(Anime_ID))
    time.sleep(3)
    link = driver.find_elements(By.CSS_SELECTOR, 'div[class="leftside"] div[style="text-align: center;"] a img')
    for item in link:
        url = item.get_attribute('src')
        df1 = df1.append({'MAL_ID' : Anime_ID, 'Image_url' : url}, ignore_index=True)
        print(url)

# if break, you can still run this code to output the current data
# change the path for storing the output data
os.chdir("/Users/yuxinfan/PycharmProjects/pythonProject")
df1.to_csv("output.csv")