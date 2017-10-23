# Chalk Coding Challenge

Simple web app that displays fake teacher data in a list, with the ability to click on a teacher to view their full profile. A teacher's full profile should display their first and last name, email, avatar and what class(es) they teach.

## [DEMO](https://mabuyo.github.io/Chalk-CodingChallenge)

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
- If a teacher has duplicate classes, I assume that each instance of the class represents a different section (i.e. different students). I chose to consolidate that information into one "subject" and indicate how many classes they teach of that subject, for example: Math (3 classes)
- The user is someone who knows any of the following information: the teacher's name, the teacher's email, the class they're teaching. The search and filter function makes this goal easier for them. Because there is no login functionality, it's assumed that the teachers on the list are okay with making their information public.
- The feature to filter by class is hardcoded on the front-end, so my assumption is that all the classes that can be filtered are known beforehand.

## Future Improvements
- Multi-select for filtering out classes, custom styling for selecting the classes (instead of native).
- Mobile-responsive (for smaller screens and mobile, the layout should change (ex. list of teachers shoudl take up full width)).


## Other

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Assets:
- PlaceHolder Robot Icon - [Source](https://www.shareicon.net/miscellaneous-science-fiction-futurist-robot-avatar-technology-electronics-851555)