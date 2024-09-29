from dotenv import load_dotenv
import os

load_dotenv()

def getEnVariable(key):
    """
    Takes an environmental variable key and fetches the value from the .env file.

    :param var: The environmental variable key.
    :return: The value of the given environmental variable.
    """

    if (not isinstance(key, str)):
        raise Exception(f"{key} is not of type string!")
    
    return os.getenv(key)

def pathExists(dir):
    """
    Takes a file path and checks if it exists.

    :param dir: The directory path.
    :return: true if the path exists.
    """

    if (not isinstance(dir, str)):
        raise Exception(f"{dir} is not of type string!")
    
    return os.path.exists(dir)