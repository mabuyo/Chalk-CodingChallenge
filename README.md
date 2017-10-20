# Chalk Coding Challenge

Simple web app that displays fake teacher data in a list, with the ability to click on a teacher to view their full profile. A teacher's full profile should display their first and last name, email, avatar and what class(es) they teach.

## JSON Schema

[Sample API Endpoint](https://cdn.chalk.com/misc/sample_teachers.json)

```
[
  {
    "id": <Integer>,
    "first_name": <String>,
    "last_name": <String>,
    "email": <String>,
    "avatar": <String (Nullable)>,
    "classes": <Array (Nullable)>
    [
      {"class": <String>},
      ...
    ]
  },
  ...
]
```

## Other

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Assets:
- PlaceHolder Robot Icon - [Source](https://www.shareicon.net/miscellaneous-science-fiction-futurist-robot-avatar-technology-electronics-851555)