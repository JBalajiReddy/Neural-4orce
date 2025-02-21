from flask import Blueprint, request, jsonify
from db import mongo
import random

recommend_blueprint = Blueprint("recommend", __name__)

@recommend_blueprint.route("/", methods=["POST"])
def recommend_outfit():
    data = request.json
    skin_tone = data.get("skin_tone")
    body_type = data.get("body_type")
    desired_colors = data.get("desired_colors", [])

    # Dummy outfit dataset
    outfits = mongo.db.outfits.find({"color": {"$in": desired_colors}})

    recommended = random.sample(list(outfits), min(len(outfits), 3))

    return jsonify({"recommended_outfits": recommended}), 200
