require('jest-fetch-mock').enableMocks()

process.env.REACT_APP_NAME = 'TrackCOVID'
process.env.REACT_APP_WEB_APP_DOMAIN = 'https://covid-19-tracking-exposure-app.herokuapp.com'
process.env.REACT_APP_SERVER_DOMAIN = 'https://covid-19-tracking-exposure-app.herokuapp.com'
process.env.REACT_APP_REGISTRATION_URL = 'http://my-form.my-org'
