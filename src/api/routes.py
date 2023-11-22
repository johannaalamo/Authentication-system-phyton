from flask import Flask, request, jsonify, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api, resources={r"/api/*": {"origins": "*"}})

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the Google Inspector, and you will see the GET request"
    }
    return jsonify(response_body), 200

@api.route('/signup', methods=['POST'])
def handle_signup():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')

        if not email or not password:
            return jsonify({"message": "Email and password are required"}), 400

        existing_user = User.query.filter_by(email=email).first()
        if existing_user:
            return jsonify({"message": "User with this email already exists"}), 400

        new_user = User(email=email, password=password)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "User successfully registered"}), 200

    except Exception as e:
        print('Error during registration:', str(e))
        return jsonify({"message": "Internal server error"}), 500
    
@api.route('/login', methods=['POST'])
def handle_login():
    try:
        data = request.json
        email = data.get('email')
        password = data.get('password')

        user = User.query.filter_by(email=email, password=password).first()

        if user:
            return jsonify({"message": "Login successful"}), 200
        else:
            return jsonify({"message": "Invalid email or password"}), 401

    except Exception as e:
        print('Error during login:', str(e))
        return jsonify({"message": "Internal server error"}), 500