from flask import Blueprint, request, jsonify
from db import mongo

users_blueprint = Blueprint("users", __name__)

@users_blueprint.route("/add", methods=["POST"])
def add_user():
    data = request.json
    user = {
        "name": data["name"],
        "email": data["email"],
        "preferences": data.get("preferences", {}),
    }
    mongo.db.users.insert_one(user)
    return jsonify({"message": "User added"}), 201
