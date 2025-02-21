from flask import Blueprint, request, jsonify
from services import get_recommendation

api_bp = Blueprint("api", __name__)

@api_bp.route("/recommend", methods=["POST"])
def recommend_outfit():
    user_data = request.json
    recommendation = get_recommendation(user_data)
    return jsonify(recommendation)
