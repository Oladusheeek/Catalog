# Flashcard
<img src='https://github.com/tylerhkmontana/flashcard/assets/63427616/5665efd4-b2c4-4510-8ce3-9849789ab8bf' width=250/>

a *full-stack flask applictaion* which can be used as an aid to memorize vocabulary. <br><br>

## Built With
![Python Badge](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff&style=for-the-badge)
![Flask Badge](https://img.shields.io/badge/Flask-000?logo=flask&logoColor=fff&style=for-the-badge)
![SQLAlchemy Badge](https://img.shields.io/badge/SQLAlchemy-D71F00?logo=sqlalchemy&logoColor=fff&style=for-the-badge)

## How to run the program

- Clone the repository.

- Make sure python is installed.<br><br>

### On Windows,

run the following code on bash.

`python -m venv env`

`source env/Sripts/activate`

`python -m pip install --upgrade pip`

`pip install -r requirements.txt`

`python app.py`

<br>

## Usage

### Login

If you are not logged in, enter your name and login to the application.
![chrome-capture-2024-3-5](https://github.com/tylerhkmontana/flashcard/assets/63427616/a419e6a4-844b-4407-a0fd-d2ce1ca33c74)

### Create a study set

You can create a study set that consists of pairs of a word and its decscription to study them, and get tested on them.

![chrome-capture-2024-3-5 (1)](https://github.com/tylerhkmontana/flashcard/assets/63427616/0ae848c2-3067-4668-be86-13442621a62c)

You can adjust the numbers of words in a study set.

![chrome-capture-2024-3-5 (2)](https://github.com/tylerhkmontana/flashcard/assets/63427616/b875f55a-d4c3-418a-bf83-b2a515efd09b)

### Study 

You can study a set of words in the same manner as you would study words on index cards.

![chrome-capture-2024-3-5 (3)](https://github.com/tylerhkmontana/flashcard/assets/63427616/e70d2475-62e6-44e6-88c5-3163ef101104)

### Test

You can take the test on a study set to see how well you memorized the words. You need to set a time limit for each question, and when you start the test, a set of words in the study set will be shown in random order. 

![chrome-capture-2024-3-5 (4)](https://github.com/tylerhkmontana/flashcard/assets/63427616/862b7267-7c70-4a84-9a50-45ffed538106)

![#DE1C34](https://placehold.co/15x15/DE1C34/DE1C34.png) You can always quit test by clicking `quit test` <br/>
![#00B44B](https://placehold.co/15x15/00B44B/00B44B.png) It shows how much `time` you have left on the question <br/>
![#FED430](https://placehold.co/15x15/FED430/FED430.png) If you don't know the answer at all, you can `skip` a question and it automatically takes it as a wrong answer

![chrome-capture](https://github.com/tylerhkmontana/flashcard/assets/63427616/0d77a646-b363-4fdc-bf4b-2da720e55be7)

### Result

After finishing the test, it will bring you to the result page, and you can see your score and details of your correct and incorrect answers.

![chrome-capture-2024-3-6](https://github.com/tylerhkmontana/flashcard/assets/63427616/20c066ac-c7c0-4881-b354-7680c96dd324)

### On Windows,

run the following code on bash.

`python -m venv env`

`source env/Sripts/activate`

`python -m pip install --upgrade pip`

`pip install -r requirements.txt`

pip install --upgrade alembic
pip install --upgrade flask-migrate
`python app.py`