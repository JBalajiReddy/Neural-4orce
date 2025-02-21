import numpy as np
from sklearn.cluster import KMeans
from models import collection

def preprocess_input(data):
    skin_tone_map = {"fair": 0, "medium": 1, "dark": 2}
    return [
        skin_tone_map.get(data["skin_tone"], 0),
        data["body_measurements"]["height"],
        data["body_measurements"]["weight"],
        data["body_measurements"]["chest"],
        data["body_measurements"]["waist"],
        data["body_measurements"]["hip"]
    ]

def get_recommendation(user_data):
    user_vector = np.array(preprocess_input(user_data)).reshape(1, -1)
    existing_users = list(collection.find({}, {"_id": 0, "skin_tone": 1, "colors": 1, "style": 1, "recommendation": 1}))
    feature_vectors = [preprocess_input(u) for u in existing_users]

    if not feature_vectors:
        return {"error": "No data available"}

    kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
    kmeans.fit(feature_vectors)
    cluster_label = kmeans.predict(user_vector)[0]
    matching_outfits = [outfit for i, outfit in enumerate(existing_users) if kmeans.labels_[i] == cluster_label]

    return matching_outfits[0] if matching_outfits else {"recommendation": "No suitable outfit found"}
