from flask import Flask, request, jsonify
#from TextBlob import TextBlob

app = Flask(__name__)

@app.route('/analyze_sentiment', methods=['POST'])
def analyze_sentiment():
    data = request.get_json()
    text = data.get('text')
    analysis = TextBlob(text)
    sentiment = analysis.sentiment.polarity  # Valor de polaridad (-1 a 1)

    # Devuelve el resultado como JSON
    return jsonify({'sentiment': sentiment})

if __name__ == '__main__':
    app.run(debug=True)