from utils.json import read, write

filePath = './database/data.json'
data = read(filePath)

def add(newData):
    """
        Adds the given data to the database file.

        :param newData: The data to write to the JSON file
    """

    data.append(newData)
    write(filePath, data)