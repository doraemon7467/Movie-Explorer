# Movie Explorer
Welcome to Movie Explorer <br><br>

<p align="center"><img src="poster.png" alt="app poster" height="400" width="700"></p>

# Table of Contents📄
- Tech Stack
- Features
- Installation
- License


# Tech Stack💫
- **Front End** - React, lodash (for debouncing)
- **Back End** - Node.js, Express, cors
- **API** - OMDb API for fetching movie data


  
# Features💫
- **Responsive Search Input** - Users can type in the search input to find movies. The search query is debounced to limit the number of API requests, improving performance and user experience.
- **Movie Details** - When a user searches for movie, he gets basic information like title, year,type (e.g., movie, series) and poster image.
- **API Integration** - The application utilizes an Open movie database(OMDb) API to retrieve movie information.
- **Debounced API Calls** - Uses lodash's debounce function to limit the frequency of API requests, reducing unnecessary load on the backend.
- **UserInterface** - Developed a user-friendly interface with search input fields and detailed movie information card.



# Installation🛠️
To run Movie Explorer locally, follow these steps:

- Clone the repository: `git clone https://github.com/doraemon7467/Movie-Explorer.git`
- Navigate to the project directory: `cd MovieExplorer`
- Navigate to the Backend directory: `cd Backend`
- Install server dependencies: `npm install`
- Navigate to the Frontend directory: `cd Frontend`
- Install Frontend dependencies: `npm install`
- Create a .env file in Backend :
   - `API_KEY = {YOUR_API_KEY}`
- Run the Frontend: `npm run dev`
- Run the Backend: `npm run dev`
  
# License📄

This project is licensed under the MIT License. Please feel free to use, modify, and distribute this code according to the terms of the license.

---
Feel free to star the repository if you find it useful, and don't forget to share it with others who might benefit from this tool.<br>
Happy Movie Searching!<br>
