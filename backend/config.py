from pymongo import MongoClient

class Config:
    MONGO_URI = "mongodb://localhost:27017/dress_recommendation"
    client = MongoClient(MONGO_URI)
    db = client["dress_recommendation"]
