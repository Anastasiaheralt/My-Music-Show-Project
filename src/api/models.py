from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#creo acá una funcion que me permita guardar un nuevo usuario en la db. 
    @classmethod
    def new_user(cls, name, email):
        new_user = cls(name, email)
        db.session.add(new_user)
        try:
            db.session.commit()
            return new_user
        except Exception as error:
            print(error)
            return None

#EN el repo del diario, el code de main debe ir en routes en este proyecto. 
#Mirar el classmethods del diairo y de las entradas

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name
            # do not serialize the password, its a security breach
        }

class Provider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    service = db.Column(db.String(80), unique=False, nullable=False)
    provider_charges = db.Column(db.String(80), unique=False, nullable=False)
    # image_1 = db.Column(db.String(250), unique=False, nullable=False)
    # image_2 = db.Column(db.String(250), unique=False, nullable=False)
    # image_3 = db.Column(db.String(250), unique=False, nullable=False)
    # image_4 = db.Column(db.String(250), unique=False, nullable=False)
    # image_5 = db.Column(db.String(250), unique=False, nullable=False)


    def __repr__(self):
        return f'<Provider {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "provider_charges": self.provider_charges
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