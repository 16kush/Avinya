# AVINYA

Avinya is an innovative peer-to-peer (P2P) learning platform designed to revolutionize the way knowledge is shared and acquired. It provides a collaborative environment where learners become both teachers and students, fostering a dynamic and interactive learning experience for all participants. 

## Getting Started

Clone the repo to your local environment, you have to separately install all the dependencies for backend and frontend.

### Backend Setup
1. Navigate to the backend folder: `cd Backend`.
2. Install the required dependencies by running: `npm i`.

### Frontend Setup
1. Navigate to the backend folder: `cd Fronttend`.
2. Install the required dependencies by running: `npm i`

### MongoDB Installation
- Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).
- Alternatively, you can use the [website](https://account.mongodb.com/account/login) to set up MongoDB.

### Environmental Variables
1. Create a `.env` file in the root directory of the backend folder.
2. Add your tokens and credentials as environmental variables in the `.env` file, following the configuration file's variables.
3. Here are the required variables you should set in the `.env` file:


### Note
Make sure the `.env` file's variables match with those in the configuration files. Refer to the image below for reference:

##### Backend
```
ACCESS_TOKEN_SECRET =
ACCESS_TOKEN_LIFE =
REFRESH_TOKEN_SECRET =
REFRESH_TOKEN_LIFE =
SENDGRID_KEY =
MONGO_DATABASE =
AUTH_GOOGLE =
STRIPE_SECRET_TOKEN =
REDIS_HOST =
REDIS_PASSWORD =
REDIS_PORT =
NODE_ENV = 'development' 
```

##### Frontend

```
REACT_APP_STRIPE_API_KEY = 
PUBLIC_URL = 
REACT_APP_GOOGLE_API_KEY = 
NODE_ENV = 

```


### Development Environment
To run the development environment, you need to start the backend and frontend separately.

#### Backend
Run the following command in the backend folder: `npm start`. This will start the nodemon-watched API server on port 8080.

#### Frontend
Run the following command in the frontend folder: `npm start`. This will start the development web server on port 3000 for the frontend.

Note: Remember to run `npm start` separately for both the backend and frontend.

With these steps completed, you should have the Avinya educational platform up and running on your local environment. Happy coding!



## 🏭 Features

#### Student
- [x] **Authentication system** with signup, login, otp verification, resend otp, forgot password (fully validated with bootstrap alerts)
- [x] **Google authentication (Oauth2)** using react-google-login and google auth-library
- [x] **Stripe Payment** gateway integrated with backend to buy courses
- [x] **Redux store** to easily manage states
- [x] Homepage with courses being fetched categorically
- [x] **Recommended Courses** based on user's preferences
- [x] **Rating** of Courses
- [x] **Bookmarked** Courses where users can remove or add bookmark
- [x] Download **resourses** (pdf - notes)
- [x] Responsive React Video player for videos
- [x] Progress bar 
- [x] CoursePage with all the content of the course
- [x] **Searching** based on course and teacher
- [x] **Real Time Live Group classes**

#### Teacher
- [x] Proper Authentication system with signup, login, otp verification, resend otp, forgot password (fully validated with bootstrap alerts)
- [x] Fully validated teacher uploading form with descriptition, title, Image and other details
- [x] CkEditor for writing in textbox with abilities to add different headings, paragraphs, bold, italics, link, tables, sizes etc
- [x] Teacher can upload upto 5 videos with upload bar to show progress
- [x] Teacher can see their uploaded courses
- [x] Teacher can delete their course
- [x] Teacher can edit their course
