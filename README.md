# Vue app - Automated development process. - AutoReview - Frontend.

[![Build Status](https://travis-ci.org/william-wall/Agile_Automated_CI_MEVN_Client.svg?branch=master)](https://travis-ci.org/william-wall/Agile_Automated_CI_MEVN_Client)

## Run dev client.

npm run dev

## Run client.

npm run start

## Build for production.

npm run build

## Run ESLint.

npm run lint

## Open Cypress

npm run test:cypress

## Run all Cypress test suites

npx cypress run

## Overview.

Reviews - AutoReview is a web app by where users write Reviews about motor vehicles and topics.

Chat-Rooms - Users also have the opportunity to create or join Chat Rooms and Chat in Real-Time to other authenticated users using socket I/O.

Gallery - Additionally there is a Gallery section where users submit vehicles with images and specifications.

Game - Another great feature of the application is the Puzzle Slider game. The user inputs an image into the application, from there the image will get shuffled into a number of custom picked pieces. The goal is to slide the squares into a mirror copy of the original image, with a little help from the app if needed.

Authentication - Users are authenticated through Googles cloud based Firebase platform.

## E2E Testing.

C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client>npx cypress run --spec cypress/integration/4_review.js


================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:  3.1.3                                                            │
  │ Browser:  Electron 59 (headless)                                           │
  │ Specs:    1 found (4_review.js)                                            │
  │ Searche…  cypress\integration\4_review.js                                  │
  └────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────

  Running: 4_review.js...                                              (1 of 1)


  Reviews
    Add 3 unique Reviews
      Review 1
        √ Should add first review to the application (9085ms)
      Review 2
        √ Should add second review to the application (6371ms)
      Review 3
        √ Should add third review to the application (5109ms)
      Add Verifications
        Verify Review 1
          √ Should verify the first review has been added to the reviews listings (3016ms)
      Verify Review 2
        Add Verification
          √ Should verify the second review has been added to the reviews listings (2655ms)
      Verify Review 3
        Add Verification
          √ Should verify the third review has been added to the reviews listings (3264ms)
    Edit Review
      √ Should edit review and verify by SweetAlert2 (4304ms)
      Edit Verification
        √ Should verify the review has been updated to the reviews listings (2932ms)
      Search for Review by Keyword in search bar and Edit
        √ Should edit a Review based on search by keyword (4648ms)
      Custom edit verification
        √ Should find the edited review by typing keywords into the search bar and matching to a review (2998ms)
    Fuzzy Search - Custom
      √ Should find a review by typing keywords into the search bar and matching to a review (3117ms)
    Delete Review
      √ Should delete the latest review from list and verify by SweetAlert2 (4197ms)
    Custom Search and Delete by Keyword Entered in Search Bar
      √ Should find a review by typing keywords into the search bar and then delete that review (4328ms)
    Verify the last remaining review and delete it
      √ Should verify the contents of the last remaining review and delete (3714ms)


  14 passing (1m)


  (Results)

  ┌───────────────────────────────────┐
  │ Tests:        14                  │
  │ Passing:      14                  │
  │ Failing:      0                   │
  │ Pending:      0                   │
  │ Skipped:      0                   │
  │ Screenshots:  0                   │
  │ Video:        true                │
  │ Duration:     1 minute, 0 seconds │
  │ Spec Ran:     4_review.js         │
  └───────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Compression progress:  72%
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\4_review.js.mp4 (14 seconds)


================================================================================

  (Run Finished)


      Spec                                    Tests  Pass…  Fail…  Pend…  Skip…
  ┌────────────────────────────────────────────────────────────────────────────┐
  │ √ 4_review.js                     01:00     14     14      -      -      - │
  └────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                 01:00     14     14      -      -      -

## Continuous Integration.

https://travis-ci.org/william-wall/Agile_Automated_CI_MEVN_Client

## Automated Deployment.

Firebase Hosting: https://autoreview-agile.firebaseapp.com/

## Extra features.

Extensive testing of authenticated versus un-authenticated, navigation drawer + navigation bar only having certain elements before and after authentication.

Security testing of routes, each route to application feature tested for restricted access before authentication i.e. auth guard on index/router routes.

Verification of displayed error messages from application when incorrect password/usernames entered.

Fuzzy Custom searching based on user input and the edit/delete based on that input.

## Appendix.

C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client>npx cypress run


================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:  3.1.3                                                            │
  │ Browser:  Electron 59 (headless)                                           │
  │ Specs:    7 found (1_home.js, 2_security.js, 3_authentication.js, 4_revie… │
  └────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────

  Running: 1_home.js...                                                (1 of 7)


  Home Page
    √ Shows the AutoReview trademark (7327ms)
    √ Shows AutoReview logo (1364ms)
    √ Shows Explore Gallery button (408ms)
    √ Shows Submit Car button (493ms)
    Navigation Bar - Unauthenticated
      √ Shows the Navigation Drawer button (486ms)
      √ Shows the Navigation Drawer Sign up button (619ms)
      √ Shows the Navigation Drawer Sign up button (512ms)
      √ Shows the Sign up button (598ms)
      √ Shows the Sign in button (479ms)
      Buttons - Unauthenticated
        √ Will redirect to Sign in when user is not authenticated for Explore Gallery (638ms)
        √ Will redirect to Sign in when user is not authenticated for Submit Car (510ms)
    Navigation Bar - Route Navigation
      √ Will redirect to Sign up when link is clicked (520ms)
      √ Will redirect to Sign in when link is clicked (644ms)
      √ Will navigate to Reset Password from Home to Sign in to Reset Password (1914ms)
      √ Will navigate to Home page when the AutoReview logo is clicked (830ms)
    Navigation Drawer - Route Navigation
      √ Will redirect to Sign up when link is clicked in drawer (980ms)
      √ Will redirect to Sign in when link is clicked in drawer (907ms)


  17 passing (20s)


  (Results)

  ┌──────────────────────────┐
  │ Tests:        17         │
  │ Passing:      17         │
  │ Failing:      0          │
  │ Pending:      0          │
  │ Skipped:      0          │
  │ Screenshots:  0          │
  │ Video:        true       │
  │ Duration:     19 seconds │
  │ Spec Ran:     1_home.js  │
  └──────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\1_home.js.mp4 (4 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 2_security.js...                                            (2 of 7)


  Security
    Denied Access to Review List - Unauthenticated
      √ Should not be allowed to navigate to Review List without Authentication (4516ms)
    Denied Access to Chat Rooms - Unauthenticated
      √ Should not be allowed to navigate to Chat Rooms without Authentication (1140ms)
    Denied Access to Add Reviews - Unauthenticated
      √ Should not be allowed to navigate to Add Review without Authentication (1005ms)
    Denied Access to Gallery - Unauthenticated
      √ Should not be allowed to navigate to Gallery without Authentication (1224ms)
    Denied Access to Submit Car - Unauthenticated
      √ Should not be allowed to navigate to Submit Car without Authentication (872ms)
    Denied Access to Game - Unauthenticated
      √ Should not be allowed to navigate to Game without Authentication (910ms)


  6 passing (10s)


  (Results)

  ┌─────────────────────────────┐
  │ Tests:        6             │
  │ Passing:      6             │
  │ Failing:      0             │
  │ Pending:      0             │
  │ Skipped:      0             │
  │ Screenshots:  0             │
  │ Video:        true          │
  │ Duration:     9 seconds     │
  │ Spec Ran:     2_security.js │
  └─────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\2_security.js.mp4 (2 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 3_authentication.js...                                      (3 of 7)


  Authentication
    Sign up
      √ Should Sign up the user given an email, password and re-enter password (7237ms)
      Error Handling - Verify Non-Duplication Email
        √ Should give an error message to the user when signing up with an email already in use (3396ms)
    Reset password
      √ Should send the user an email to reset their password via a reset link (2161ms)
    Sign in - Error Handling - Incorrect password
      √ Should give an error message to the user when signing in with an incorrect password (2121ms)
      Sign in - Error Handling - No corresponding account
        √ Should give an error message to the user when signing in with an email already in use (1769ms)
    Sign in - Success
      √ Should login the user given an email and password (1556ms)


  6 passing (19s)


  (Results)

  ┌───────────────────────────────────┐
  │ Tests:        6                   │
  │ Passing:      6                   │
  │ Failing:      0                   │
  │ Pending:      0                   │
  │ Skipped:      0                   │
  │ Screenshots:  0                   │
  │ Video:        true                │
  │ Duration:     18 seconds          │
  │ Spec Ran:     3_authentication.js │
  └───────────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\3_authentication.js.mp4 (3 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 4_review.js...                                              (4 of 7)


  Reviews
    Add 3 unique Reviews
      Review 1
        √ Should add first review to the application (8531ms)
      Review 2
        √ Should add second review to the application (5734ms)
      Review 3
        √ Should add third review to the application (4324ms)
      Add Verifications
        Verify Review 1
          √ Should verify the first review has been added to the reviews listings (2367ms)
      Verify Review 2
        Add Verification
          √ Should verify the second review has been added to the reviews listings (2356ms)
      Verify Review 3
        Add Verification
          √ Should verify the third review has been added to the reviews listings (2579ms)
    Edit Review
      √ Should edit review and verify by SweetAlert2 (3856ms)
      Edit Verification
        √ Should verify the review has been updated to the reviews listings (2464ms)
      Search for Review by Keyword in search bar and Edit
        √ Should edit a Review based on search by keyword (4651ms)
      Custom edit verification
        √ Should find the edited review by typing keywords into the search bar and matching to a review (2905ms)
    Fuzzy Search - Custom
      √ Should find a review by typing keywords into the search bar and matching to a review (2744ms)
    Delete Review
      √ Should delete the latest review from list and verify by SweetAlert2 (3548ms)
    Custom Search and Delete by Keyword Entered in Search Bar
      √ Should find a review by typing keywords into the search bar and then delete that review (3737ms)
    Verify the last remaining review and delete it
      √ Should verify the contents of the last remaining review and delete (3465ms)


  14 passing (54s)


  (Results)

  ┌───────────────────────────┐
  │ Tests:        14          │
  │ Passing:      14          │
  │ Failing:      0           │
  │ Pending:      0           │
  │ Skipped:      0           │
  │ Screenshots:  0           │
  │ Video:        true        │
  │ Duration:     53 seconds  │
  │ Spec Ran:     4_review.js │
  └───────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Compression progress:  88%
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\4_review.js.mp4 (12 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 5_gallery.js...                                             (5 of 7)


  Gallery
    Submit Vehicle to Gallery
      √ Should add a vehicle to the gallery with image and other attributes (11175ms)
      Verify Vehicle is in Gallery List
        √ Should verify that submitted vehicle got added to gallery listings (22736ms)


  2 passing (34s)


  (Results)

  ┌────────────────────────────┐
  │ Tests:        2            │
  │ Passing:      2            │
  │ Failing:      0            │
  │ Pending:      0            │
  │ Skipped:      0            │
  │ Screenshots:  0            │
  │ Video:        true         │
  │ Duration:     34 seconds   │
  │ Spec Ran:     5_gallery.js │
  └────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\5_gallery.js.mp4 (6 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 6_chat_room.js...                                           (6 of 7)


  Chat Rooms
    Add a Chat Room to list
      √ Should add a Chat Room to the list of rooms (8331ms)
      Verify the Chat Room in Room List
        √ Should verify that the Chat Room got added to the Room List (2801ms)
    Join a Chat Room
      √ Should enter a Chat Room using a Nickname + verify that the User has entered the Chat Room (3831ms)
      Add a Chat to the Chat Room
        √ Should allow the user to add a Chat to the Chat Room + verify that the Chat has been added to the Chat Room conversation (4421ms)
      Logout of Chat Room
        √ Should allow the User to Logout of the specific Chat Room (4484ms)


  5 passing (24s)


  (Results)

  ┌──────────────────────────────┐
  │ Tests:        5              │
  │ Passing:      5              │
  │ Failing:      0              │
  │ Pending:      0              │
  │ Skipped:      0              │
  │ Screenshots:  0              │
  │ Video:        true           │
  │ Duration:     24 seconds     │
  │ Spec Ran:     6_chat_room.js │
  └──────────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\6_chat_room.js.mp4 (5 seconds)


────────────────────────────────────────────────────────────────────────────────

  Running: 7_game.js...                                                (7 of 7)


  Game Slider Puzzle
    Select Board Size
      √ Should allow the user to enter custom board size (min 2*2 - max 10*10) - default is 3*3 (6509ms)
      √ Should pick image (4255ms)


  2 passing (11s)


  (Results)

  ┌──────────────────────────┐
  │ Tests:        2          │
  │ Passing:      2          │
  │ Failing:      0          │
  │ Pending:      0          │
  │ Skipped:      0          │
  │ Screenshots:  0          │
  │ Video:        true       │
  │ Duration:     10 seconds │
  │ Spec Ran:     7_game.js  │
  └──────────────────────────┘


  (Video)

  - Started processing:   Compressing to 32 CRF
  - Finished processing:  C:\Users\william\Documents\SSD4\Agile Software Practice\CA_2\MEVN-web-app-autoreview\Frontend\client\cypress\videos\7_game.js.mp4 (2 seconds)


================================================================================

  (Run Finished)


      Spec                                    Tests  Pass…  Fail…  Pend…  Skip…
  ┌────────────────────────────────────────────────────────────────────────────┐
  │ √ 1_home.js                       00:19     17     17      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 2_security.js                   00:09      6      6      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 3_authentication.js             00:18      6      6      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 4_review.js                     00:53     14     14      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 5_gallery.js                    00:34      2      2      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 6_chat_room.js                  00:24      5      5      -      -      - │
  ├────────────────────────────────────────────────────────────────────────────┤
  │ √ 7_game.js                       00:10      2      2      -      -      - │
  └────────────────────────────────────────────────────────────────────────────┘
    All specs passed!                 02:50     52     52      -      -      -

