# Pack Hacker

## Description

Pack Hacker is a packing application to help people who have a hard time packing appropriately for trips. Users put in their travel destination and dates and the application gives them recommended items to pack based on weather information for the date and location they are traveling to, such as a winter coat if it's going to be cold, a swimsuit if it's going to be hot, or an umbrella if it's going to rain. Users can delete unnecessary items from their their or add new items. 

## Screenshots

![Screen Shot 2022-05-20 at 9 25 23 AM](https://user-images.githubusercontent.com/99045660/169537561-330fb5ee-7b21-4a66-be19-b531e09b150b.png)

![Screen Shot 2022-05-20 at 9 26 06 AM](https://user-images.githubusercontent.com/99045660/169537673-1489269e-d33a-4959-967e-40e5ca49c532.png)

![Screen Shot 2022-05-20 at 9 26 38 AM](https://user-images.githubusercontent.com/99045660/169537790-787b9025-0a77-4028-b00a-46cde9c1c139.png)


## Technologies Used

Utilized React.js components for the front-end of the application that creates a packing list with item recommendations based on the weather and location during the user’s travel dates. Used AccuWeather API to find location and weather data. Made RESTful API fetch calls to an Express, MongoDB, Node.js backend handling all create, read, update, delete (CRUD) operations. Used Mongoose to define schemas for MongoDB collections.


## Getting Started/Installation Instructions: 

Fork and clone this repository. Once this is done, run npm init -y to install any dependencies needed. You will need to create your own API key from AccuWeather in order to run this application. Once you have your API key add it to you .env file as follows: REACT_APP_API_KEY= "YOUR API KEY HERE". 

## Contribution Guidelines:

If you identify bugs, submit an issue on the Git repo. Please detail the bug in your issue. Pull requests are always welcome. If you submit a pull request please ensure that it clearly describes the problem and solution. Thanks for taking the time to contribute!

## Deployed Application

https://pack-hacker.netlify.app/
