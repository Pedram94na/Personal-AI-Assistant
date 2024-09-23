from flask import jsonify
import json

def read(filePath):
    """
        Reads data from a JSON file.

        :param filePat: Path of a JSON file.
        :return: The content of the JSON file.
    """
    
    try:
        with open(filePath, 'r') as jsonFile:
            content = jsonFile.read()

            if not content:
                return jsonify({"error": "File is empty"}), 400
            
            return json.loads(content)
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
def write(filePath, newData):
    """
        Writes data into a JSON file.

        :param filePath: Path of a JSON file.
        :param newData: New data to be added to the JSON file.
    """
    
    try:
        with open(filePath, 'w') as json_file:
            json.dump(newData, json_file, indent=4)
            
    except (IOError, TypeError) as e:
        print(f"An error occurred: {e}")

def jsonifyData(key, value):
    """
        :param key: The key of the JSON.
        :param value: The value of the key.
        :return: Returns the jsonified data.
    """
    
    return jsonify({key: value})