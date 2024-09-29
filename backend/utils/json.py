from flask import jsonify

def jsonifyData(key, value):
    """
    Creates a json file with the give key and value.
    
    :param key: The key of the JSON.
    :param value: The value of the key.
    :return: jsonified data.
    """
    
    return jsonify({key: value})