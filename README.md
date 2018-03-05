# React Calendar

## Built With

* [React](https://reactjs.org)
* [Redux](https://redux.js.org/introduction)
* [Moment](https://momentjs.com)
* [TypeScript](https://typescriptlang.org)

## Prerequisites

* Must have git, node and npm installed.

## Installing and Running

* Clone repo to folder of your choice.
* Open root folder in command line and run 'npm install' to install dependencies.
* Execute command 'npm start';
* Your browser should open to 'http://localhost:3000' with the application running.

## Application Functionality

* Application starts off with a calendar view set to the current month as well as a view of the appointments for a day.
* You can navigate between months by using the chevrons on either side of the month name.
* The current day will always be highlighted with blue text.
* To add a new appointment, use the '+' button in the lower right hand corner of the screen to open the editor modal.
* An appointment requires a title, a start time, and an end time.
* The following time requirements are validated (red error text displays if invalid):
    * Start time and end time must be valid dates.
    * Start time and end time must be future dates.
    * Start time must be less than end time.
    * The range from start-end must not conflict with another appointment.
    * Note that validation errors may not appear until you enter in the full date first, as datetime-local pickers are a little weird in when they send a change event.
* Press the save button to store your appointment.
* Going back to the calendar, you should observe that all days within your appointment range will now show with a small green circle. This indicates the days has at least one appointment.
* Clicking on one of those days will populate the day view on the right side with your appointment data.
    * The selected day will also be displayed with a blue circle on the main calendar. 
    * Appointments are shown as rectangles that stretch from your start to end times.
    * If an appointment overlaps the day boundary, the rectangle will just stretch to the boundary edge.
* Clicking on an appointment will open the editor and allow you to edit said appointment (validation rules still apply). 
* You can also choose to delete the appointment with the delete button. 


## Known Issues

* Calendar generation bug where last week of the year is not properly placed in December.
* Lack of support for smaller devices.
* Unit tests.