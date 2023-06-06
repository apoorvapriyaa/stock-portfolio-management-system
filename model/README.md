## Installation

Install app the necessary python dependancies for the model and the api. To install the dependacies run the below commands

-- for the prediction model

pip install pandas numpy requests yfinance matplotlib seaborn pandas-datareader datetime keras sklearn
pip install -U scikit-learn

-- for the api

pip install fastapi pydantic uvicorn gunicorn

## Usage

-- To run the api locally on your system, run the command given below inside the directory where you have the model and api files

uvicorn mlapi:app --reload

-- make the request to the url given below to fetch results

"http://localhost:8000/"

-- the request should be made with the company name and should be of format JSON

{comany_name : "company_name"}



