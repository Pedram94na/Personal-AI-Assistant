from dotenv import load_dotenv
import os

load_dotenv()

def getEnVariable(var):
    """
        :param var: The environmental variable.
        :return: Returns the value of the given environmental variable.
    """
    return os.getenv(var)

def getHomeDir():
    return os.path.expanduser("~")

def upload(dir, text):
    return os.path.join(dir, text)

def pathExists(folder):
    return os.path.exists(folder)

def createDir(folder):
    os.makedirs(folder)