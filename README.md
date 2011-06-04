/
    Render a link for creating new presentation

/speaker/asdfasdfasdfadsf
    Render speaker screen

/speaker/asdfasdfasdfadsf/upload
    Upload presentations

/speaker/asdfasdfasdfadsf/talk/asdfasdfasdfadsf

/attend/asdfasdfasdfadsf
    Render attendee screen
    Show form for email/name

POST /attend/asdfasdfasdfadsf
    Create id
    Save attendee's info
    Redirect to watch page

/attend/asdfadsfasdfasdfadsfasdf/watch

{
    speaker: {id: "asdfadsfasdfasdfadsfasdf"},
    room: {id: "asdfasdfasdfasdfasd"},
    slides: 30,
    attendees: [
        {name: "John Doe", email: "john@doe.com"}
    ]
}

/attend/:presentation_id/watch/:user_id

    Render slides, etc.
