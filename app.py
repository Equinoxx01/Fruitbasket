from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('homepage.html')


@app.route('/aboutus')
def aboutus():
    return render_template('aboutus.html')

@app.route('/cart')
def cart():
    return render_template('cart.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/fruits')
def fruits():
    return render_template('fruits.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/order')
def order():
    return render_template('order.html')

@app.route('/shop')
def shop():
    return render_template('shop.html')


if __name__ == "__main__":
    app.run(debug=True)
