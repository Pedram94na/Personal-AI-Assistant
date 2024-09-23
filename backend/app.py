from flask import Flask
from flask_cors import CORS

from routes.chatRouter import chatBP
from routes.addDataRouter import trainBP
from routes.fileRouter import fileBP

from utils.env import getEnVariable

app = Flask(__name__)

CORS(app)

app.register_blueprint(chatBP)
app.register_blueprint(trainBP)
app.register_blueprint(fileBP)

if __name__ == '__main__':
    app.run(host=(getEnVariable('HOST') or 'localhost'), port=int(getEnVariable('PORT') or 3300), debug=True)
