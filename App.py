from flask import Flask, request, redirect, render_template_string

app = Flask(__name__)

@app.route('/')
def home():
    return redirect("/index.html")

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")
    print(f"New message from {name} ({email}): {message}")
    # Here you could send an email or save to a database
    return "<h1>Thank you for your message!</h1><a href='/contact.html'>Back to Contact</a>"

if __name__ == "__main__":
    app.run(debug=True