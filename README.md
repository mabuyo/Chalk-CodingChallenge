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

## Assumptions
- If a teacher has duplicate classes, each instance of the class represents a different section (i.e. different students). I chose to display each instance of the class (display duplicates) in order to reflect that. 
- The user is someone in an administrator type role who knows any of the following information: the teacher's name, the teacher's email, the class they're teaching. The search and filter function makes this goal easier for them.

## Other

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Assets:
- PlaceHolder Robot Icon - [Source](https://www.shareicon.net/miscellaneous-science-fiction-futurist-robot-avatar-technology-electronics-851555)