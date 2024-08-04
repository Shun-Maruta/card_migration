import requests
import glob
import config
import os

FOLDER_PATH = './test-img'
API_KEY = config.API_KEY
URL = "http://127.0.0.1:5000/migrate"


# for file in glob.glob(f"{FOLDER_PATH}/*.{t}"):
#     print(file)

types = ('jpg', 'png')
files = []
for t in types:
    files += glob.glob(f"{FOLDER_PATH}/*.{t}")


for file_path in files:
    file_name = os.path.splitext(os.path.basename(file_path))[0]

    # 送信するファイルとデータを定義
    files = {
        'frontImage': ("frontImage", open(file_path, 'rb'), 'image/jpeg'),
        # 'backImage': ('bizcard_back.jpg', open('path/to/bizcard_back.jpg', 'rb'), 'image/jpeg')
    }
    data = {
        'exchangeDate': '2020-11-21',  # 交換日 “YYYY-MM-DD” 形式
        'prioritizeHandWrittenDates': 'false',  # true の場合、名刺の手書き日付を名刺交換日として扱う
        'memo': '運用提案',  # メモ
        'language': 'Japanese',  # 入力希望言語
        'tagId': 'DLED3O4OE0MA78DQLWO21DBGE5GG8HYV'  # 紐づけるタグのID
    }
    try:
        response = requests.post(url=URL, files=files, data=data)
    except Exception as e:
        print(f"Error: {e}")
        continue


# レスポンスを表示
print(response.status_code)
print(response.text)
