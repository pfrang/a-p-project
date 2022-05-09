
import requests

BASE_URL = "https://gbfs.urbansharing.com/oslobysykkel.no/gbfs.json"

def GetBikes(body=None):
    response = requests.get(BASE_URL).text
    return response
