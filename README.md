<p align="center">
  <a href="https://livedaze.com/" rel="noopener" target="_blank"><img width="150" src="https://github.com/kortfolio/livedazeDev/blob/master/android-chrome-192x192.png" alt="Livedaze logo"></a></p>
</p>
<h1 align="center">Livedaze</h1>
<div align="center">
A Time management web application built with <a href="https://reactjs.org/">React</a>, <a href="https://redux.js.org/">Redux</a>, and <a href="https://firebase.google.com/">Firebase.</a>
</div>

## :bulb: Motivation 
As a part of my 2019 new year resolution, I wanted to learn and use React to build my pet project. I was fascinated by the idea of Virtual DOM and its ecosystem. I started learning some basic syntax and mechanisms from React official website and jump straight to develop and learn more in-depth contents by actually using React.
I tried my best not to use anything else but React. However, as state management getting complicated, and hearing things about how Redux is excellent with React, I soon integrated Redux to the project. The project is currently deployed at https://livedaze.com, and most of the basic functionalities are available. Although there are still many problems and issues to fix/update, I am quite satisfied with the current progress that I have made over time. 

## :computer: Technology Stack
<img src="https://github.com/kortfolio/livedazeDev/blob/master/livedazeFrontEndStackDiagram.jpg">

## :open_file_folder: Application Structure
```
├── components
│   └── LoadingSpinner
│       ├── LoadingSpinner.enhancer.js
│       ├── LoadingSpinner.js
│       ├── LoadingSpinner.styles.js
│       ├── LoadingSpinner.test.js
│       └── index.js
├── config.js
├── constants
│   ├── formNames.js
│   └── paths.js
├── containers
│   ├── App
│   │   ├── App.js
│   │   └── index.js
│   └── Navbar
│       ├── AccountMenu.js
│       ├── DrawerList.BackUp.js
│       ├── DrawerList.js
│       ├── LoginMenu.js
│       ├── Navbar.enhancer.js
│       ├── Navbar.js
│       ├── NavbarTheme.js
│       ├── ResponsiveDrawer.1.js
│       ├── ResponsiveDrawer.js
│       └── index.js
├── css
│   └── CustomCSS.css
├── index.css
├── index.js
├── layouts
│   └── CoreLayout
│       ├── CoreLayout.enhancer.js
│       ├── CoreLayout.js
│       ├── CoreLayout.styles.js
│       └── index.js
├── modules
│   └── notification
│       ├── actionTypes.js
│       ├── actions.js
│       ├── components
│       │   ├── Notifications.js
│       │   └── withNotifications.js
│       ├── index.js
│       └── reducer.js
├── routes
│   ├── Account
│   │   ├── components
│   │   │   ├── AccountForm
│   │   │   │   ├── AccountForm.enhancer.js
│   │   │   │   ├── AccountForm.js
│   │   │   │   ├── AccountForm.styles.js
│   │   │   │   └── index.js
│   │   │   ├── AccountForm.1
│   │   │   │   ├── AccountForm.enhancer.js
│   │   │   │   ├── AccountForm.js
│   │   │   │   ├── AccountForm.styles.js
│   │   │   │   └── index.js
│   │   │   ├── AccountPage
│   │   │   │   ├── AccountPage.enhancer.js
│   │   │   │   ├── AccountPage.js
│   │   │   │   ├── AccountPage.styles.js
│   │   │   │   ├── AccountSummary.js
│   │   │   │   └── index.js
│   │   │   ├── AccountStatistics
│   │   │   │   └── AccountStatistics.js
│   │   │   ├── AccountSummary
│   │   │   │   ├── AccountSummary.enhancer.js
│   │   │   │   ├── AccountSummary.js
│   │   │   │   ├── AccountSummary.styles.js
│   │   │   │   └── index.js
│   │   │   └── ProviderDataForm
│   │   │       ├── ProviderDataForm.js
│   │   │       └── index.js
│   │   └── index.js
│   ├── BreakTime
│   │   ├── components
│   │   │   └── FocusTimePage
│   │   │       ├── FocusTime.enhancer.js
│   │   │       ├── FocusTime.js
│   │   │       ├── FocusTime.styles.js
│   │   │       └── index.js
│   │   └── index.js
│   ├── Dashboard
│   │   ├── components
│   │   │   └── DashboardPage
│   │   │       ├── Dashboard.enhancer.js
│   │   │       ├── Dashboard.js
│   │   │       ├── Dashboard.styles.js
│   │   │       └── index.js
│   │   └── index.js
│   ├── FocusTime
│   │   ├── components
│   │   │   └── FocusTimePage
│   │   │       ├── FocusTime.enhancer.js
│   │   │       ├── FocusTime.js
│   │   │       ├── FocusTime.styles.js
│   │   │       └── index.js
│   │   └── index.js
│   ├── Home
│   │   ├── components
│   │   │   └── HomePage
│   │   │       ├── HomePage.enhancer.js
│   │   │       ├── HomePage.js
│   │   │       ├── HomePage.styles.js
│   │   │       └── index.js
│   │   └── index.js
│   ├── Login
│   │   ├── components
│   │   │   ├── LoginForm
│   │   │   │   ├── Facebook.js
│   │   │   │   ├── LoginForm.enhancer.js
│   │   │   │   ├── LoginForm.js
│   │   │   │   ├── LoginForm.styles.js
│   │   │   │   ├── UpdatedLoginForm.js
│   │   │   │   └── index.js
│   │   │   └── LoginPage
│   │   │       ├── LoginPage.enhancer.js
│   │   │       ├── LoginPage.js
│   │   │       ├── LoginPage.styles.js
│   │   │       └── index.js
│   │   └── index.js
│   ├── NotFound
│   │   ├── components
│   │   │   └── NotFoundPage
│   │   │       ├── NotFoundPage.enhancer.js
│   │   │       ├── NotFoundPage.js
│   │   │       ├── NotFoundPage.styles.js
│   │   │       └── index.js
│   │   └── index.js
│   ├── Projects
│   │   ├── components
│   │   │   ├── CompletedTask
│   │   │   │   ├── CompletedTask.js
│   │   │   │   └── CustomizedInputs.js
│   │   │   ├── ConfirmCompleteCheckBox
│   │   │   │   ├── ConfirmCompleteCheckBox.enhancers.js
│   │   │   │   ├── ConfirmCompleteCheckBox.js
│   │   │   │   ├── ConfirmCompleteCheckBox.style.js
│   │   │   │   └── index.js
│   │   │   ├── ConfirmCompleteDialog
│   │   │   │   ├── ConfirmCompleteDialog.enhancer.js
│   │   │   │   ├── ConfirmCompleteDialog.js
│   │   │   │   ├── ConfirmCompleteDialog.styles.js
│   │   │   │   └── index.js
│   │   │   ├── ConfirmCompleteDialog.1
│   │   │   │   ├── ConfirmCompleteDialog.enhancer.js
│   │   │   │   ├── ConfirmCompleteDialog.js
│   │   │   │   ├── ConfirmCompleteDialog.styles.js
│   │   │   │   └── index.js
│   │   │   ├── ConfirmDeleteDialog
│   │   │   │   ├── ConfirmDeleteDialog.enhancer.js
│   │   │   │   ├── ConfirmDeleteDialog.js
│   │   │   │   ├── ConfirmDeleteDialog.styles.js
│   │   │   │   └── index.js
│   │   │   ├── DailyTask
│   │   │   │   └── DailyTask.js
│   │   │   ├── DailyTask.1
│   │   │   │   └── DailyTask.js
│   │   │   ├── DialogForSelfRating
│   │   │   │   ├── DialogForSelfRating.enhancer.js
│   │   │   │   ├── DialogForSelfRating.js
│   │   │   │   ├── DialogForSelfRating.styles.js
│   │   │   │   ├── StarRatingReduxFieldForm.js
│   │   │   │   └── index.js
│   │   │   ├── EditTaskDialog
│   │   │   │   ├── EditTaskDialog.enhancer.js
│   │   │   │   ├── EditTaskDialog.js
│   │   │   │   ├── EditTaskDialog.styles.js
│   │   │   │   ├── EditTaskTextField.js
│   │   │   │   └── index.js
│   │   │   ├── GoalDate
│   │   │   │   ├── DatePickerField.js
│   │   │   │   ├── DisplayGoalDay.js
│   │   │   │   ├── GD_Backcup
│   │   │   │   │   ├── AfterSetGoalDate.js
│   │   │   │   │   ├── GoalDate.1.js
│   │   │   │   │   ├── GoalDateBackUp.js
│   │   │   │   │   ├── MyForm.js
│   │   │   │   │   └── renderDatePicker.js
│   │   │   │   ├── GoalDate.enhancer.js
│   │   │   │   ├── GoalDate.js
│   │   │   │   ├── GoalDate.styles.js
│   │   │   │   └── index.js
│   │   │   ├── KanbanBoard
│   │   │   │   ├── CustomCard.js
│   │   │   │   ├── KanbanBoard.js
│   │   │   │   ├── data.json
│   │   │   │   └── data2.json
│   │   │   ├── NewProjectDialog
│   │   │   │   ├── NewProjectDialog.enhancer.js
│   │   │   │   ├── NewProjectDialog.js
│   │   │   │   ├── NewProjectDialog.styles.js
│   │   │   │   └── index.js
│   │   │   ├── NewProjectTile
│   │   │   │   ├── NewProjectTile.enhancer.js
│   │   │   │   ├── NewProjectTile.js
│   │   │   │   ├── NewProjectTile.styles.js
│   │   │   │   └── index.js
│   │   │   ├── PomodoroTimer
│   │   │   │   ├── PomdoroTimerBackUp
│   │   │   │   │   └── PomodoroTimer.BackUpScratchWork.js
│   │   │   │   ├── PomodoroTimer.enhancer.js
│   │   │   │   ├── PomodoroTimer.js
│   │   │   │   ├── PomodoroTimer.styles.js
│   │   │   │   └── index.js
│   │   │   ├── ProjectTile
│   │   │   │   ├── ConfirmCompleteCheckBox.js
│   │   │   │   ├── DeleteButtonIcon.js
│   │   │   │   ├── ProjectTile.enhancer.js
│   │   │   │   ├── ProjectTile.js
│   │   │   │   ├── ProjectTile.styles.js
│   │   │   │   └── index.js
│   │   │   ├── ProjectsPage
│   │   │   │   ├── DisplayAllProjectsDialog
│   │   │   │   │   ├── DisplayAllProjectsDialog.js
│   │   │   │   │   ├── DisplayAllProjectsDialog.styles.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── ProjectsPage.enhancer.js
│   │   │   │   ├── ProjectsPage.js
│   │   │   │   ├── ProjectsPage.styles.1.js
│   │   │   │   └── index.js
│   │   │   ├── SelfDiagnosis
│   │   │   │   ├── DisplayAllReviewsDialog
│   │   │   │   │   ├── DisplayAllReviewsDialog.js
│   │   │   │   │   ├── DisplayAllReviewsDialog.style.js
│   │   │   │   │   └── index.js
│   │   │   │   ├── SelfDiagnosis.enhancer.js
│   │   │   │   ├── SelfDiagnosis.js
│   │   │   │   ├── SelfDiagnosis.styles.js
│   │   │   │   ├── SelfDiagnosisBackUp
│   │   │   │   │   ├── SelfDiagnosis.js
│   │   │   │   │   └── SelfDiagnosisForm.BackUp.js
│   │   │   │   └── index.js
│   │   │   ├── SleepTimeCountDown
│   │   │   │   ├── DisplaySleepTime.js
│   │   │   │   ├── SleepTime.enhancer.js
│   │   │   │   ├── SleepTime.js
│   │   │   │   ├── SleepTime.styles.js
│   │   │   │   ├── SleepTime_BackUp
│   │   │   │   │   ├── AfterSetSleepTime.js
│   │   │   │   │   ├── BeforeSetSleepTime.js
│   │   │   │   │   └── DailyHourCountDown.js
│   │   │   │   ├── SleepTimer.js
│   │   │   │   ├── TimePickerField.js
│   │   │   │   └── index.js
│   │   │   └── WakeUpTime
│   │   │       ├── AfterWakeUpTime.js
│   │   │       └── PreWakeUpTime.js
│   │   ├── index.js
│   │   └── routes
│   │       └── Project
│   │           ├── components
│   │           │   └── ProjectPage
│   │           │       ├── ProjectPage.enhancer.js
│   │           │       ├── ProjectPage.js
│   │           │       ├── ProjectPage.styles.js
│   │           │       └── index.js
│   │           └── index.js
│   ├── Signup
│   │   ├── components
│   │   │   ├── SignupForm
│   │   │   │   ├── SignupForm.enhancer.js
│   │   │   │   ├── SignupForm.js
│   │   │   │   ├── SignupForm.styles.js
│   │   │   │   ├── UpdatedSignupForm.js
│   │   │   │   └── index.js
│   │   │   └── SignupPage
│   │   │       ├── SignupPage.enhancer.js
│   │   │       ├── SignupPage.js
│   │   │       ├── SignupPage.styles.js
│   │   │       └── index.js
│   │   └── index.js
│   └── index.js
├── static
│   ├── User.png
│   └── logo.svg
├── store
│   ├── createStore.js
│   ├── location.js
│   └── reducers.js
├── theme.js
├── types
│   └── react-trello.d.ts
└── utils
    ├── components.js
    ├── form.js
    ├── index.js
    └── router.js
```

## :checkered_flag: Project Status
The current version of livedaze supports the following functions.

**Landing Page - Login/Registration Page**
- [x] Designed and developed responsive Web Page (Login Page and Registration Page)
- [x] Integrated Material UI (Login Forms and Buttons)  
- [x] Integrated social login function with Firebase API (Google, Facebook, Github Login)
- [x] Firebase Email Authentication
- [x] Integrated anonymous login function.
- [ ] Vectorize social login icons to SVG and develop micro-animated UI(Hover, onClick, etc..)

**Dashboard - Core Functionalities**
- [x] Function for set a goal day.
- [x] Function for set a sleep time.
- [x] 25 Minute Pomodoro Timer.
- [x] Self-Evaluation function (With Emoji).
- [x] Daily Task Tracker (To do list).

**Settings Page [IN PROGRESS]**
- [x] Display User Information and manage email & Password.
- [ ] Display basic analysis of the user's usage. 

**Data Visualization [IN PROGRESS]**
- [ ] Develop a function to visualize user's data and display in a chart form.

**Documentation [IN PROGRESS]**
- [ ] Updating Github Markdown page.
