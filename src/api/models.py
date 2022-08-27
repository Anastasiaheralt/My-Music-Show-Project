from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    terms = db.Column(db.Boolean(), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#creo acá una funcion que me permita guardar un nuevo usuario en la db. 
    def __init__(self, name, email, password, terms,):
        self.name = name
        self.email = email
        self.password = password
        self.terms = terms

    @classmethod
    def new_user(cls, name, email, password, terms):
        new_user = cls(name, email, password, terms)
        db.session.add(new_user)
        try:
            db.session.commit()
            return new_user
        except Exception as error:
            print(error)
            return None

#EN el repo del diario, el code de main debe ir en routes en este proyecto. 
#Mirar el classmethods del diairo y de las entradas

    # def __repr__(self):
    #     return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name
            "email": self.email,
            "terms": self.terms
            # do not serialize the password, its a security breach
        }

class Provider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    service = db.Column(db.String(80), unique=False, nullable=False)
    terms = db.Column(db.Boolean(), unique=False, nullable=False)
    #provider_charges = db.Column(db.String(80), unique=False, nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    # image_1 = db.Column(db.String(250), unique=False, nullable=False)
    # image_2 = db.Column(db.String(250), unique=False, nullable=False)
    # image_3 = db.Column(db.String(250), unique=False, nullable=False)
    # image_4 = db.Column(db.String(250), unique=False, nullable=False)
    # image_5 = db.Column(db.String(250), unique=False, nullable=False)

    def __init__(self, email, password, name, service, provider_charges, terms):
        self.name = name
        self.email = email
        self.password = password
        self.service = service
        self.terms = terms
        #self.provider_charges = provider_charges
#Agregar como ultimo argumento "provider_charges en lineas 65 y 66"

    @classmethod
    def new_provider(cls, name, email, password, service, terms):
        new_provider = cls(name, email, password, service, terms)
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
            "provider_charges": self.provider_charges
            "terms": self.terms
            # "image_1": self.image_1,
            # "image_2": self.image_2,
            # "image_3": self.image_3,
            # "image_4": self.image_4,
            # "image_5": self.image_5,

            # do not serialize the password, its a security breach
        }


class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    # provider_id = db.Column(db.Integer, db.ForeignKey('provider.id'), nullable=True)
    # provider_charges_id = db.Column(db.Integer, db.ForeignKey('provider_charges.id'), nullable=True)
    # payment_screenshot = db.Column(db.String(250), unique=False, nullable=False)
    
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    # def __repr__(self):
    #     return f'<Event {self.email}>'

    def serialize(self):
        return {
            "id": self.id
            # "user_id": self.user_id,
            # "provider_id": self.provider_id,
            # "provider_charges_id": provider_charges_id,
            # do not serialize the password, its a security breach
        }