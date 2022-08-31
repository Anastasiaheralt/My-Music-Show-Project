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
        new_row = User.new_user(body["name"], body["email"], body["password"], body["terms"], body["client"], body["provider"])
        if new_row == None:
            return 'Un error ha ocurrido al intentar completar tu registro', 500
        else:
            return jsonify(new_row.serialize()), 200

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


# @api.route('/provider/<string:username>', methods=['GET'])
# def handle_user(username = None):
#     print("hola")
#     print(username)
#     print(username + "soy el username")
#     if request.method == 'GET':
#         if user_id  is None:
#             users = User.query.all()
#             users = list(map(lambda user: user.serialize(), users))
#         return jsonify(users),200
#     else:
#         user = User.query.filter_by(name=username).first()
#         if user is not None:
#             return jsonify(user.serialize()),200
#         else:
#             return jsonify({
# 					"msg": "user not found"
# 				}), 404

@api.route('/admin', methods=['GET'])
def get_all_providers ():
    all_providers = Provider.query.all()
    return jsonify([provider.serialize() for provider in all_providers]), 200

@api.route('/proveedores/<int:proveedor_id>', methods=['GET'])
def handle_user(proveedor_id):
    if request.method == 'GET':
        proveedor_by_id = Provider.query.get(proveedor_id)
        return jsonify(proveedor_by_id.serialize()),200
    return "proveedor no encontrado", 404
