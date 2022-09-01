import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Provider, Evento
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
        return jsonify({"token": access_token, "user": search.serialize(), "user_type": "false"}), 201
    else:
        search = Provider.query.filter_by(email=email).one_or_none()
        if search != None and search.password == password:
            access_token = create_access_token(identity=email)
            return jsonify({"token": access_token, "provider": search.serialize(), "user_type": "true"}), 201
        else:
            return jsonify({"msg": "Bad username or password"}), 401


@api.route('/user_register', methods=['POST'])
def add_new_user():
    body = request.json
    if "name" not in body:
        return 'No tiene nombre!', 400
    if "email" not in body:
        return 'No tiene correo!', 400
    else:
        new_row = User.new_user(body["name"], body["email"], body["password"],
                                body["terms"], body["client"], body["provider"])
        if new_row == None:
            return 'Un error ha ocurrido al intentar completar tu registro', 500
        else:
            return jsonify(new_row.serialize()), 200

# Agregar como ultimo argumento del body el elemento , body["provider_charges"]


@api.route('/provider_register', methods=['POST'])
def add_new_provider():
    body = request.json
    if "name" not in body:
        return 'No tiene nombre!', 400
    if "email" not in body:
        return 'No tiene correo!', 400
    else:
        new_row = Provider.new_provider(body["name"], body["email"], body["password"],
                                        body["service"], body["terms"], "0 USD", "Agrega una descripción...")
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
def get_all_providers():
    all_providers = Provider.query.all()
    return jsonify([provider.serialize() for provider in all_providers]), 200


@api.route('/contratar', methods=['POST'])
def handle_contratar():
    body = request.json

    body_proveedor = body.get("proveedor_id", None)
    body_user = body.get("user_id", None)
    print(body_proveedor)
    print(body_user)

    if body_proveedor is not None:
        user = body_user
        cliente_asignado = User.query.filter_by(id=user).first()
        proveedor_asignado = Provider.query.filter_by(
            id=body_proveedor).first()

        if user is not None:
            orden_servicio = Evento.query.filter_by(
                servicio=proveedor_asignado.service, cliente_id=cliente_asignado.id, proveedor_id=proveedor_asignado.id).first()
            if orden_servicio is not None:
                return jsonify({
                    "msg": "La orden por este servicio ya existe en tu perfil!"
                })
            else:
                orden = Evento(servicio=proveedor_asignado.service, proveedor_id=proveedor_asignado.id, cliente_id=cliente_asignado.id, status_orden_progreso=True,
                               status_orden_recibida=False, status_orden_aceptada=False, status_orden_cancelada=False, status_orden_finalizada=False)
                try:
                    db.session.add(orden)
                    db.session.commit()
                    return jsonify(orden.serialize()), 201
                except Exception as error:
                    db.session.rollback()
                    return jsonify(error.args), 500
        else:
            return jsonify({
                "msg": "Por favor entra en tu usuario!"
            }), 400
    else:
        return jsonify({
            "msg": "Algo paso, intentalo nuevamente [bad body format]"
        }), 400


@api.route('/proveedores/<int:proveedor_id>', methods=['GET'])
def handle_user(proveedor_id):
    if request.method == 'GET':
        proveedor_by_id = Provider.query.get(proveedor_id)
        return jsonify(proveedor_by_id.serialize()), 200


@api.route('/provider_images', methods=['PUT'])
def handle_photos(provider_id, photo_url):
		new_provider_photo = Provider_images.new_entry(body['provider_id'], body['photo_url'])
		return "Se ha cargado exitosamente la imagen", 200

    # else:
    # 	return 'Ah ocurrido un error al crear la entrada', 500


@api.route('/contratos_pendientes', methods=['GET'])
@jwt_required()
def handle_contratos_pendientes():
    if request.method == 'GET':
        emailjwt = get_jwt_identity()
        user = User.query.filter_by(email=emailjwt).first()
        pendientes = Evento.query.filter_by(
            cliente_id=user.id, status_orden_progreso=True).all()

        pendientes_existentes = list(
            map(lambda pendiente: pendiente.serialize(), pendientes))
        if len(pendientes) > 0:
            return jsonify(pendientes_existentes), 200
        else:
            return jsonify({
                "msg": "No hay contratos pendientes"
            }), 404


@api.route('/pedidos_pendientes', methods=['GET'])
@jwt_required()
def handle_pedidos_pendientes():
    if request.method == 'GET':
        emailjwt = get_jwt_identity()
        user = Provider.query.filter_by(email=emailjwt).first()
        pendientes = Evento.query.filter_by(
            proveedor_id=user.id, status_orden_progreso=True).all()

        pendientes_existentes = list(
            map(lambda pendiente: pendiente.serialize(), pendientes))
        if len(pendientes) > 0:
            return jsonify(pendientes_existentes), 200
        else:
            return jsonify({
                "msg": "No hay pedidos pendientes"
            }), 404
