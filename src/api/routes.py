import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Provider
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

@api.route("/login", methods=["POST"])
def create_token():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    search = User.query.filter_by(email=email).one_or_none()
    if search != None and search.password == password:
        access_token = create_access_token(identity=email)
        return jsonify({"token" : access_token, "user" : search.serialize(), "user_type" : "false" }), 201
    else:
        search = Provider.query.filter_by(email=email).one_or_none()
        if search != None and search.password == password:
            access_token = create_access_token(identity=email)
            return jsonify({"token" : access_token, "provider" : search.serialize(), "user_type" : "true"}), 201
        else:
            return jsonify({"msg": "Bad username or password"}), 401
            
            
@api.route('/hello', methods=['GET'])
@jwt_required()
def get_hello():
    email = get_jwt_identity()
    response_body = {
        "message": "Hello!" + email
    }

@api.route('/user_register', methods=['POST'])
def add_new_user ():
    body = request.json
    if "name" not in body:
        return 'No tiene nombre!', 400
    if "email" not in body:
        return 'No tiene correo!', 400
    else:
        new_row = User.new_user(body["name"], body["email"], body["password"], body["terms"])
        if new_row == None:
            return 'Un error ha ocurrido al intentar completar tu registro', 500
        else:
            return jsonify(new_row.serialize()), 200
    # request_body = request.data
    # decoded_object = json.loads(request_body)
    # user_register.append(decoded_object)
    # print("Incoming request with the following body", request_body)
    # return jsonify(users)

#Agregar como ultimo argumento del body el elemento , body["provider_charges"]

@api.route('/provider_register', methods=['POST'])
def add_new_provider ():
    body = request.json
    if "name" not in body:
        return 'No tiene nombre!', 400
    if "email" not in body:
        return 'No tiene correo!', 400
    else:
        new_row = Provider.new_provider(body["name"], body["email"], body["password"],  body["service"], body["terms"], "0 USD", "Agrega una descripción...")
        if new_row == None:
            return 'Ha ocurrido un error al intentar completar tu registro', 500
        else:
            return jsonify(new_row.serialize()), 200

@api.route('/providers/<int:position>', methods=['GET'])
def get_provider_by_id ():
    return jsonify(providers)

@api.route('/admin', methods=['GET'])
def get_all_providers ():
    all_providers = Provider.query.all()
    return jsonify([provider.serialize() for provider in all_providers]), 200

#     return jsonify(response_body), 200

    #creando aca las variables para user y proveedor, para luego definir las rutas 

#     users = [ { "name": "example", "email" : "emailExample" } ]
#providers = [ { "name": "example", "email" : "emailExample", "provider_charges": "200USD", "service": "music" } ]

# @api.route('/providers', methods=['GET'])
# def get_providers ():
#     return jsonify(providers)