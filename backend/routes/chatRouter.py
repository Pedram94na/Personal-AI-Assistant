from flask import Blueprint, request

from utils.json import jsonifyData
from controllers.aiController import generateResponse

chatBP = Blueprint('chat', __name__)

@chatBP.route('/chatRouter', methods=['POST'])
def chat():
    """
        Receives a user's message from client,
        generates a response
        and returns it.
    """
    
    userMssg = request.json.get('message')

    if not userMssg:
        return jsonifyData("error", "No message provided"), 400

    aiResponse = generateResponse(userMssg)

    return jsonifyData("response", aiResponse)
