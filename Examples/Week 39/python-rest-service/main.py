from flask import Flask, jsonify, request

app = Flask(__name__)

names = {
    1: "Steffen",
    2: "Bacon",
    3: "Monty",
    4: "Python"
}


@app.route("/", methods=['GET', 'POST', 'PUT', 'DELETE'])
def hello():
    if request.method == 'POST':
        name = request.form['name']
        names[len(names)+1] = name
        return jsonify(names=names)
    elif request.method == 'PUT':
        id = request.form['id']
        name = request.form['name']
        names[int(id)] = name
        return jsonify(names=names)
    elif request.method == 'DELETE':
        id = request.form['id']
        del names[int(id)]
        return jsonify(names=names)
    else:
        return jsonify(names=names)


if __name__ == '__main__':
    app.run()
