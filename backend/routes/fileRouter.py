from flask import Blueprint, request
from controller.aiController import train

fileBP = Blueprint('file', __name__)

ALLOWED_EXTENSIONS = {'txt'}

@fileBP.route('/fileRouter', methods=['POST'])
def uploadFile():
    """
    Receives a file and a positive number from the client
    and sends it to the AI for training.
    """

    if 'textFile' not in request.files:
        return "No file part in the request", 400

    file = request.files['textFile']
    fileName = file.filename

    if fileName == '':
        return "No selected file", 400

    allowedFile = '.' in fileName and fileName.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

    if file and allowedFile:
        train(file, 50)
        return "File sent to train function", 200

    return f"File type not allowed. Allowed file types: {ALLOWED_EXTENSIONS}", 400