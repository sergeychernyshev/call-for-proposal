# Call for proposals

Let's build a site to accept calls for proposals (CFP) to be part of http://www.speakerforce.com/

This will be the a project to create the administrative UI to work with StartUpApi and MeetUp.

We will start with two flows, one for meetup organizer to create a call for proposals and another is for potential speakers to submit their info and talk info.

# App flows

Home page of CFP app (e.g. /) will provide two options to log in, one for an organizer (using Meetup API only) and another for speaker, using Meetup, LinkedIn or Facebook.

## Organizer
* Once organizer tries to access orgnizer's area (```/call/```), they are required to log in using Meetup API
* When organizer is signed up, they will be required to enter and verify their email address (setting within StartupAPI)
* Once organizer is logged in, they are shown list of meetups they organize or co-organize
* Organizer can create a call for proposals for each event they organize by clicking "open call for proposals" button next to corresponding meetup
 * As part of this phase, they can only create one call for proposals per meetup (not per event)
* Once organizer opens a call for proposals, they will be redirected to a page ```/<meetup-slug>/speak/``` where ```<meetup-slug>``` is a URL path from Meetup API (same as in meetup URL, e.g. ```Web-Performance-NY``` for http://www.meetup.com/Web-Performance-NY/).
 * This page is the one they can share with potential speakers and starts the other flow
* Once call for speakers is open, ```/call/``` page will show meetup with the link to speaker page "close call for participation" button (once pressed, it closes call for participation)
* Speaker page shows organizer a list of currently submitted proposals and speaker info with ability to archive them (e.g. ignored or already spoken). Future versions will allow commenting and voting for various co-organizers, e.g. editorial board.

## Potential Speaker
* Potential speakers open ```/<meetup-slug>/speak/``` page from a link provided in meetup description email or any other source by organizer
* They are required to log in using Meetup, LinkedIn or Facebook API before they can continue
* Once logged in, potential speaker is asked to provide information about themselves that is recorded for their user (see page for NY Web Performance meetup here: http://bit.ly/nywebperf-speaker-info). First version will only keep one such profile per speaker, future versions could allow multiple profiles (e.g. if same person speaks on different topics or represents multiple organizations, etc.):
  * First Name
  * Last Name
  * Email (for internal use, will not be publicly posted) - (email field)
  * Cell phone number (for internal use, will not be publicly posted) - (phone field)
  * Twitter handle
  * Short bio (one paragraph)
  * Portrait photo (high res) - (upload widget)
  * Personal URL (email field) - (URL field)
  * Company affiliation
  * Company URL - (URL field)
  * Position title
* Once speaker entered their information, they can submit talk proposal
  * Talk title
  * Talk abstract  - (Text area, 1-2 paragraphs)
  * Slides URL (optional) - (URL field)
  * Speaker Video URL (optional) - (URL field)
* Once proposal is submitted organizer will recieve email with speaker and talk information

# API Documentation
We can start implementing HTML/CSS/JS UI without actually working API or authentication, it will be created in parallel [using StartupAPI](https://github.com/StartupAPI/users/wiki/REST-APIs).

# Frameworks / Libraries / Languages
  * [Bootstrap](http://getbootstrap.com)
  * [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  * [React](https://facebook.github.io/react/)

# Additional Helpful Links 

  * [Forking A Repo](https://help.github.com/articles/fork-a-repo/)
  * [Creating Pull Request from your Fork](https://help.github.com/articles/creating-a-pull-request-from-a-fork/)
  * [Try Git Intro Course](https://try.github.io/) by GitHub and CodeSchool (FREE)
 
