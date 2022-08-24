import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required


api = Blueprint('api', __name__)

# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    if email != "test" or password != "test":
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

@api.route('/hello', methods=['GET'])
@jwt_required()
def get_hello():
    email = get_jwt_identity()
    response_body = {
        "message": "Hello!" + email
    }

    return jsonify(response_body), 200

    #creando aca las variables para user y proveedor, para luego definir las rutas 

#     users = [ { "name": "example", "email" : "emailExample" } ]
#     providers = [ { "name": "example", "email" : "emailExample", "provider_charges": "200USD", "service": "music" } ]

@api.route('/providers', methods=['GET'])
def get_providers ():
    return jsonify(providers)

@api.route('/user_register', methods=['POST'])
def add_new_user():
    request_body = request.data
    decoded_object = json.loads(request_body)
    user_register.append(decoded_object)
    print("Incoming request with the following body", request_body)
    return jsonify(users)

@api.route('/provider_register', methods=['POST'])
def add_new_provider():
    request_body = request.data
    decoded_object = json.loads(request_body)
    provider_register.append(decoded_object)
    print("Incoming request with the following body", request_body)
    return jsonify(providers)

@api.route('/providers/<int:position>', methods=['GET'])
def get_provider_by_id ():
    return jsonify(providers)

@api.route('/login', methods=['GET'])
def get_login ():
    return jsonify(providers)
    #SamuelAYUDAAAAAAA
