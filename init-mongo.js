const dipullDb = db.getSiblingDB('dipull');
dipullDb.createCollection('users');
dipullDb.createCollection('bamboo');
dipullDb.createCollection('bamboo_comment');
dipullDb.createCollection('homecoming');
dipullDb.createCollection('last_request');
dipullDb.createCollection('machine');
dipullDb.createCollection('machine_list');
dipullDb.createCollection('machine_time');
dipullDb.createCollection('meals');
dipullDb.createCollection('outing');
dipullDb.createCollection('refresh_tokens');
dipullDb.createCollection('stay');
dipullDb.createCollection('studyroom');
dipullDb.createCollection('timetables');
dipullDb.createCollection('wakeup');

const dipullAuthDb = db.getSiblingDB('dipull-auth');
dipullAuthDb.createCollection('users');
dipullAuthDb.createCollection('data');
dipullAuthDb.createCollection('clients');

const clients = [
  {
    "_id": ObjectId("661f3ae926aa65d7d37f4dbd"),
    "name": "디풀 (개발용)",
    "redirect": ["http://localhost:3000/auth", "http://localhost:3001/auth"],
    "get": [
      "id",
      "email",
      "gender",
      "name",
      "number",
      "type",
      "profile_image"
    ],
    "owner": "65d0a7932893e7ba99634e08"
  }
];

dipullAuthDb.clients.insertMany(clients);