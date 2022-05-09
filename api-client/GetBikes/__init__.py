import logging
import azure.functions as func
from src.city_bikes import GetBikes


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    bike_response = GetBikes()
    return func.HttpResponse(bike_response, status_code=200)
