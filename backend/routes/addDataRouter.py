from flask import Blueprint, request

from utils.json import jsonifyData
from database.data import add

trainBP = Blueprint('train', __name__)

@trainBP.route('/addData', methods=['POST'])
def train():
    '''
        Receives new data from the client,
        and sends it to the database.
    '''

    userMssg = request.json.get('message')
    
    if not userMssg:
        return jsonifyData("error", "No message provided"), 400

    add(userMssg)
    return jsonifyData("successful", True)
