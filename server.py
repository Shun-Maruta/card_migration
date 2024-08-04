from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# アップロードされたファイルを保存するためのディレクトリ
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/migrate', methods=['POST'])
def upload_file():
    # ファイルが送信されているかチェック
    if 'frontImage' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['frontImage']
    
    # ファイル名が空でないかチェック
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    # ファイルを保存
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)
    
    # データの処理
    exchange_date = request.form.get('exchangeDate')
    prioritize_hand_written_dates = request.form.get('prioritizeHandWrittenDates')
    memo = request.form.get('memo')
    language = request.form.get('language')
    tag_id = request.form.get('tagId')
    
    # データを表示 (ここで保存や他の処理が可能)
    response_data = {
        'file_path': file_path,
        'exchange_date': exchange_date,
        'prioritize_hand_written_dates': prioritize_hand_written_dates,
        'memo': memo,
        'language': language,
        'tag_id': tag_id
    }
    
    return jsonify(response_data), 200

if __name__ == '__main__':
    app.run(debug=True)
