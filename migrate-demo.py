import requests

url = "YOUR_URL_HERE"  # ここにPOST先のURLを入れてください

# 送信するファイルとデータを定義
files = {
    'frontImage': ('bizcard_front.jpg', open('path/to/bizcard_front.jpg', 'rb'), 'image/jpeg'),
    'backImage': ('bizcard_back.jpg', open('path/to/bizcard_back.jpg', 'rb'), 'image/jpeg')
}
data = {
    'exchangeDate': '2020-11-21',
    'prioritizeHandWrittenDates': 'false',
    'memo': '運用提案',
    'language': 'Japanese',
    'tagId': 'DLED3O4OE0MA78DQLWO21DBGE5GG8HYV'
}

# POSTリクエストを送信
response = requests.post(url, files=files, data=data)

# レスポンスを表示
print(response.status_code)
print(response.text)
