from dotenv import load_dotenv
import os

load_dotenv()

def getEnVariable(var):
    """
        :param var: The environmental variable.
        :return: Returns the value of the given environmental variable.
    """
    return os.getenv(var)