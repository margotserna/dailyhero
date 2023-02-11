from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
# from app.routers import auth, user, maps, itineraries, associations, objectives, entreprises

app = FastAPI()

origins = [
    settings.CLIENT_ORIGIN,
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.include_router(auth.router, tags=['Auth'], prefix='/api')
# app.include_router(user.router, tags=['Users'], prefix='/api/users')
# app.include_router(maps.router, tags=['Directions'], prefix='/api/directions')
# app.include_router(itineraries.router, tags=['Itineraries'], prefix='/api/itineraries')
# app.include_router(associations.router, tags=['Associations'], prefix='/api/associations')
# app.include_router(objectives.router, tags=['Objectives'], prefix='/api/objectives')
# app.include_router(entreprises.router, tags=['Entreprises'], prefix='/api/entreprises')


@app.get("/")
def root():
    return {"message": "Welcome to FastAPI with MongoDB"}
