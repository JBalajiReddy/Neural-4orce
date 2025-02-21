from flask import Flask
from config import Config
from routes import api_bp

app = Flask(__name__)
app.config.from_object(Config)

# Register API Routes
app.register_blueprint(api_bp)

if __name__ == "__main__":
    app.run(debug=True)
