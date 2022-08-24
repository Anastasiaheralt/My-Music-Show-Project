from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            # do not serialize the password, its a security breach
        }

class Provider(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    # is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    music = db.Column(db.Boolean, unique=False, nullable=False)
    photography = db.Column(db.Boolean, unique=False, nullable=False)
    location = db.Column(db.Boolean, unique=False, nullable=False)
    catering = db.Column(db.Boolean, unique=False, nullable=False)
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
            # "image_1": self.image_1,
            # "image_2": self.image_2,
            # "image_3": self.image_3,
            # "image_4": self.image_4,
            # "image_5": self.image_5,

            # do not serialize the password, its a security breach
        }

