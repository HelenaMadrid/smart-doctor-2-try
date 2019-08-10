# SMART DOCTOR

## Problem

Medicine is a complex field where one wrong decision can lead to patients’ injuries or even death. Doctors take care of many patients and are expected to have all the pertinent information and never make mistakes. That being said, keeping track of all the patients’ information is practically impossible, and even when they do, it gets lost or is too difficult to maintain.

## Solution

Smart Doctor allows doctors to access, view, create and edit patients’ health records anywhere, anytime. 
Advantages:
 - Less mistakes due the lack of a good health records.
 - Improve their practice by making better decisions with all the pertinent and current information.
 - Practical and easy-to-use, that allows to keep better control of your patients from any device.


## Stack (MERN & Redux)

This project uses the following technologies

- [MongoDB](https://www.mongodb.com/) for database (hosted on [mLab](https://mlab.com/)) & [Mongoose](https://mongoosejs.com/)
- [Express.js](http://expressjs.com/) as Node web framework
- [React.js](https://reactjs.org) for client, [React Router](https://reacttraining.com/react-router/) for routing & [Redux](https://redux.js.org/basics/usagewithreact) for state management
- [Node.js](https://nodejs.org/en/) for server
- [SASS](https://sass-lang.com/) as CSS preprocessor

## Current Status

![Current Status](http://g.recordit.co/2s4rtcysD7.gif)

### Progress

#### General

- [x] Authentication
- [x] Dashboard view

#### Patients

- [x] Search by patient name
- [x] Create patient
- [x] Edit team patient
- [x] Delete patient

#### Possible Improvements
- [ ] Add appointment, consultation and prescription information to patients.
- [ ] Add graphs and calendar to visualise information on patients page.
- [ ] Updates to project information not reflected immediately in Project component view

## Quick Start

Get up and running with a development server using the following commands

```javascript
// Install all dependencies for client & server
npm run full-install

// Run client & development server with concurrently
npm run dev

// Server runs on http://localhost:5000 (set in server.js) and client on http://localhost:3000 (default for CRA)
```
## Team members
- Ernesto Solares [https://github.com/darkyer/]
- Helena Madrid [https://github.com/HelenaMadrid/]
