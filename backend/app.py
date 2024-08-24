from flask import Flask, request, jsonify, send_file, render_template
import os
import json
import uuid
import subprocess
import shutil
from flask_cors import CORS
from dotenv import load_dotenv
from brownie import project
from get_options import process_url
from generate_docs import generate_documentation



load_dotenv()

app = Flask(__name__)
CORS(app)

# Directory to store user session files
SESSION_DIR  = os.path.join(os.getcwd(), 'user_contracts')
PROJECT_DIR  = os.path.join(os.getcwd(), 'user_projects')

if not os.path.exists(SESSION_DIR):
    os.makedirs(SESSION_DIR)
if not os.path.exists(PROJECT_DIR):
    os.makedirs(PROJECT_DIR)
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))

# Set BASE_DIR to the parent directory of CURRENT_DIR
# BASE_DIR = os.path.dirname(CURRENT_DIR)


# print(BASE_DIR)

