import os
import json
import logging
import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)

# Configuração de Logging para debug
logging.basicConfig(level=logging.INFO, format='[%(levelname)s] %(message)s')

DB_PATH = 'local_db.sqlite3'

def get_db_connection():
    try:
        conn = sqlite3.connect(DB_PATH)
        conn.row_factory = sqlite3.Row
        return conn
    except sqlite3.OperationalError as e:
        logging.error(f"Erro ao conectar ao DB SQLite: {e}")
        return None

def init_db():
    conn = get_db_connection()
    if conn:
        with conn:
            # Cria a tabela de leads se não existir
            conn.execute('''
                CREATE TABLE IF NOT EXISTS leads (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    source TEXT,
                    payload TEXT,
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            ''')
        conn.close()
        logging.info("Banco de dados SQLite inicializado com sucesso.")

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "ok", "service": "groba-tech-api"}), 200

@app.route('/api/leads', methods=['POST'])
def receive_lead():
    data = request.json
    
    if not data:
        return jsonify({"error": "No data provided"}), 400

    logging.info(f"Recebido Lead/Evento CAPI:\n{json.dumps(data, indent=2)}")
    
    # 1. Extraindo a origem do Payload
    source = "unknown"
    if "data" in data and len(data["data"]) > 0:
        event = data["data"][0]
        source = event.get("custom_data", {}).get("lead_source", "website")
    elif "origin" in data:
        source = data["origin"]

    # 2. Salvar no Banco de Dados (SQLite)
    conn = get_db_connection()
    if conn:
        try:
            with conn:
                cur = conn.cursor()
                cur.execute(
                    "INSERT INTO leads (source, payload) VALUES (?, ?)",
                    (source, json.dumps(data))
                )
                lead_id = cur.lastrowid
                logging.info(f"Lead armazenado com sucesso no DB! ID: {lead_id}")
        except Exception as e:
            logging.error(f"Erro ao salvar no banco: {e}")
        finally:
            conn.close()

    return jsonify({"success": True, "message": "Lead registrado com sucesso", "source": source}), 201

if __name__ == '__main__':
    # Initialize DB
    init_db()
    
    # Rodando o servidor Flask
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
