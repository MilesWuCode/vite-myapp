- install

```sh
# install
npm install -g firebase-tools
curl -sL firebase.tools | bash

# project
mkdir projectDir && cd projectDir

# select: Remote Config: Configure a template file for Remote Config
firebase init

# project
firebase use [alias_or_project_id]

# import
firebase auth:import user.json --hash-algo=BCRYPT --hash-key=LARAVEL.ENV.APP_KEY --rounds=10
```

- users.json

```json
{
  "users": [
    {
      "localId": "db.users.id", // ex: 1
      "email": "db.users.email", // ex: user@email.com
      "emailVerified": true,
      "passwordHash": "db.users.password to base64", // ex: $2y$10$... to JDJ5JDEw...
      "salt": null,
      "displayName": "db.users.name", // ex: nickname
      "createdAt": 1486324027000 // ex: 1486324027000
    }
  ]
}
```
