# -*- coding: utf-8 -*-
"""
Created on Sat Jul  9 11:19:10 2022

@author: Meng Li
"""
import random
import string
import pandas as pd

df = pd.DataFrame(columns = ['USER_ID', 'Email_address', 'Name', 
                             'Password','Birthday', 'Last_login'])
for i in range(10000):
    email = ''.join(random.choices(string.ascii_lowercase, k=5))+"@gmail.com"
    name = str(random.choice(string.ascii_uppercase)) + ''.join(
        random.choices(string.ascii_lowercase, k=4))
    password = ''.join(random.choices(string.ascii_uppercase + 
                                      string.ascii_lowercase + string.digits, k=8))
    birthday = '199'+ str(random.choice(string.digits)) +'-0' + str(
        random.choice(string.digits))+'-'+random.choice(['0','1','2'])+ str(
            random.choice(string.digits))
    login = '2022-07-09 11:44:00'
    df = df.append({'USER_ID':i,'Email_address':email, 'Name':name, 
                    'Password':password,'Birthday':birthday, 
                    'Last_login':login}, ignore_index=True)

df.to_csv("user.csv")