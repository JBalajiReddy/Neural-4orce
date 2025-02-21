from config import Config

collection = Config.db["user_preferences"]

def insert_dummy_data():
    if collection.count_documents({}) == 0:
        collection.insert_many([
            {"skin_tone": "fair", "colors": ["blue", "white"], "style": "casual", "recommendation": "Jeans and T-Shirt"},
            {"skin_tone": "medium", "colors": ["black", "gray"], "style": "formal", "recommendation": "Blazer and Pants"},
            {"skin_tone": "dark", "colors": ["yellow", "green"], "style": "summer", "recommendation": "Shorts and Tank Top"}
        ])
insert_dummy_data()
