# Noir & Sel backend API

Detta är REST API för Noir & sel. Backend ansvarar för hantering av bokningar, menydata samt autentisering för administratörer

## Funktioner
- jwt baserad inloggning för admin
- crud endpoints för menyhantering
- hantering av bokningar via API
- datavalidering och felhantering

## Tekniker
- node.js + express
- mongodb + mongoose
- jwt för autentisering
- dotenv för miljövariabler

## API dokumentation
### POST `/api/login`

inloggning för admin, returnerar jwt token

```json
{
  "username": "admin",
  "password": "hemligt123"
}
```

### GET `/api/menu`
hämtar alla menyobjekt

### POST `/api/menu``
lägg till rätter
```json
{
  "title": "rättens namn",
  "description": "beskrivning",
  "price": 129,
  "category": "varmrätt"
}
```
### DELETE `/api/menu:id`
tar bort menyobjekt

### PUT `/api/menu:id/`
uppdaterar menyobjekt

### POST `/api/bookings`
lägger till bokning
```json
{
  "name": "Andjela",
  "email": "test@etest.com",
  "date": "2025-06-10",
  "time": "18:30",
  "guests": 2
}
```

### GET `/api/bookings`
hämtar alla bokningar (admin)

## Deployment
APIet är publicerat på render
https://restaurant-backend-u697.onrender.com 

## kör lokalt
```npm install```
```npm run dev``` 
skapa .env med följande innehåll: 
MONGO_URI=din mongodb URI
JWT_SECRET=sträng