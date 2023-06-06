from fastapi import FastAPI 
from pydantic import BaseModel
import Stockprediction as sp
app = FastAPI()

class company(BaseModel):
   company_name: str

@app.post('/')
async def endpoint(item:company):
    print(item)
    result = sp.getPredictions(item.company_name)
    return {"prediction" : result}

