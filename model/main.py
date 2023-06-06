from fastapi import FastAPI
from pydantic import BaseModel
import Stockprediction as sp

app = FastAPI()

class Company(BaseModel):
    company: str

@app.post('/predict')
async def endpoint(company: Company):
    result = sp.getPredictions(company.company)
    return {"prediction": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost")
