from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    terms = db.Column(db.Boolean(), unique=False, nullable=False)
    client = db.Column(db.Boolean(), unique=False, nullable=False)
    provider = db.Column(db.Boolean(), unique=False, nullable=False)

#creo acá una funcion que me permita guardar un nuevo usuario en la db. 
    def __init__(self, name, email, password, terms, client, provider):
        self.name = name
        self.email = email
        self.password = password
        self.terms = terms
        self.client = client
        self.provider = provider

    @classmethod
    def new_user(cls, name, email, password, terms, client, provider):
        new_user = cls(name, email, password, terms, client, provider)
        db.session.add(new_user)
        try:
            db.session.commit()
            return new_user
        except Exception as error:
            print(error)
            return None


    # def __repr__(self):
    #     return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "terms": self.terms,
            "client": self.client,
            "provider": self.provider,
            # do not serialize the password, its a security breach
        }

class Provider(db.Model):
    __tablename__ = 'provider'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    service = db.Column(db.String(80), unique=False, nullable=False)
    terms = db.Column(db.Boolean(), unique=False, nullable=False)
    provider_charges = db.Column(db.String(80), unique=False, nullable=False)
    service_description = db.Column(db.String(500), unique=False, nullable=False)


    def __init__(self, name, email, password, service, terms, provider_charges, service_description):
        self.name = name
        self.email = email
        self.password = password
        self.service = service
        self.terms = terms
        self.provider_charges = provider_charges
        self.service_description = service_description


    @classmethod
    def new_provider(cls, name, email, password, service, terms, provider_charges, service_description):
        new_provider = cls(name, email, password, service, terms, provider_charges, service_description)
        db.session.add(new_provider)
        try:
            db.session.commit()
            return new_provider
        except Exception as error:
            print(error)
            return None
    # def __repr__(self):
    #     return f'<Provider {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "service": self.service,
            "terms": self.terms,
            "provider_charges": self.provider_charges,
            "service_description": self.service_description,
            "fotos":  [ foto.serialize() for foto in self.images]
            

            # do not serialize the password, its a security breach
        }

class Provider_images(db.Model):
    __tablename__ = 'provider_images'
    id = db.Column(db.Integer, primary_key=True)
    provider_id = db.Column(db.Integer, db.ForeignKey('provider.id'), nullable=False)
    photo_url = db.Column(db.String(2500), unique=False, nullable=False)
    proveedor = db.relationship("Provider", backref="images")

    def __init__(self, provider_id, photos_url):
            self.provider_id = provider_id
            self.photo_url = photo_url

    @classmethod
    def new_image(cls, provider_id, photo_url):
        new_provider = cls(provider_id, photo_url)
        db.session.add(new_provider)
        try:
            db.session.commit()
            return new_image
        except Exception as error:
            print(error)
            return None   

    def serialize(self):
        return {
            "id": self.id,
            "provider_id": self.provider_id,
            "photo_url": self.photo_url

        }
# class Event2(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     # user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
#     # provider_id = db.Column(db.Integer, db.ForeignKey('provider.id'), nullable=True)
#     # provider_charges_id = db.Column(db.Integer, db.ForeignKey('provider_charges.id'), nullable=True)
#     # payment_screenshot = db.Column(db.String(250), unique=False, nullable=False)
    
#     # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#     # def __repr__(self):
#     #     return f'<Event {self.email}>'

#     def serialize(self):
#         return {
#             "id": self.id
#             # "user_id": self.user_id,
#             # "provider_id": self.provider_id,
#             # "provider_charges_id": provider_charges_id,
#             # do not serialize the password, its a security breach
#         }


class Evento(db.Model):
    __tablename__ = 'evento'
    # Here we define columns for the table person
    # Notice that each db.Column is also a normal Python instance attribute.
    id = db.Column(db.Integer, primary_key=True)
    contador = db.Column(db.Integer)
    precio_orden = db.Column(db.Float)
    precio_total_orden = db.Column(db.Float)
    status_orden_recibida = db.Column(db.Boolean)
    status_orden_cancelada = db.Column(db.Boolean)
    status_orden_aceptada = db.Column(db.Boolean)
    status_orden_progreso = db.Column(db.Boolean)
    status_orden_finalizada = db.Column(db.Boolean)
    servicio = db.Column(db.String(250)) 
    #Defining Foreign Keys
    cliente_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    proveedor_id = db.Column(db.Integer, db.ForeignKey("provider.id"))
    #Defining Relationships
    cliente = db.relationship("User", foreign_keys=[cliente_id])
    proveedor = db.relationship("Provider", foreign_keys=[proveedor_id])

    def __repr__(self):
        return f'<Evento> f{self.id}'

    def serialize(self):
        return{
            "id":self.id,
            "contador":self.contador,
            "precio_orden":self.precio_orden,
            "precio_total_orden":self.precio_total_orden,
            "status_orden_recibida":self.status_orden_recibida,
            "status_orden_aceptada":self.status_orden_aceptada,
            "status_orden_progreso":self.status_orden_progreso,
            "status_orden_cancelada":self.status_orden_cancelada,
            "status_orden_finalizada":self.status_orden_finalizada,
            "proveedor":self.proveedor.serialize(),
            "cliente":self.cliente.serialize(),
            "servicio":self.servicio,
        }

    def __init__(self, *args, **kwargs):
        """
            "name":"",
            "lastname":""
        """

        for (key, value) in kwargs.items():
            if hasattr(self, key):
                attr_type = getattr(self.__class__, key).type

                try:
                    attr_type.python_type(value)
                    setattr(self, key, value)
                except Exception as error:
                    print(f"Ignore the rest: {error.args}")