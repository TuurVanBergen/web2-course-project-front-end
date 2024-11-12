**Brussel in Beeld - Web 2 Frontend**
This is a web application for managing and displaying galleries, artworks, and artists. The project fetches data from a backend API and dynamically displays galleries, artworks, and artist information using JavaScript, HTML, and CSS.

**Project Overview**
The "Brussel in Beeld" project provides a platform to showcase and manage galleries, artworks, and artists in the Brussels area. It allows users to:

- Browse a collection of galleries.
- View detailed artwork information.
- Update gallery details (like location, artist, price, etc.).
- Delete galleries from the collection.
The data for galleries and artworks is fetched from a backend API, and the web pages dynamically render the content based on the data retrieved.

**Features**
- Dynamic Content Display: Galleries and artworks are fetched from an API and displayed dynamically on the web pages.
- Gallery Navigation: Users can navigate between galleries using "Next" and "Back" buttons.
- CRUD Operations: Admin users can perform CRUD operations on galleries, including adding, updating, and deleting gallery data.
  
**Technologies Used**
HTML5: Markup for structuring the content.
CSS3: Styles for layout and presentation.
JavaScript (ES6+): Logic for fetching data from the backend API and rendering it on the webpage.
Fetch API: For sending GET, PUT, and DELETE requests to the backend server.
Backend: The backend API is built using Node.js and Express, which provides the data for galleries, artworks, and artists.

**Setup Instructions**
To run this project locally, follow the steps below:

**Prerequisites:**
A modern web browser (e.g., Google Chrome, Firefox).
Node.js and npm installed (if you plan to run the backend locally).
API server running (if you wish to interact with a live API).

**Steps:**
Clone the repository:

git clone https://github.com/your-username/brussel-in-beeld.git
Navigate to the project folder:

cd brussel-in-beeld
Install dependencies: If you need to run the backend server locally:

npm install
Start the Backend Server (Optional, if running locally):

npm start
The API will be available at http://localhost:3000.

Open the project in a web browser: Open the index.html file or deploy the project on a server of your choice (e.g., via GitHub Pages, Netlify, etc.).

**Usage**
Viewing Galleries: The homepage will display a list of galleries, with navigation buttons to move between them.
Artwork Pages: Clicking on a gallery will show detailed artwork information with options to view images and read text descriptions.
Managing Galleries:
Delete Gallery: You can delete galleries by entering the title and submitting the delete request.
Update Gallery: Use the update form to modify gallery information like price, artist, location, etc.
API Endpoints
The application interacts with the following API endpoints:

GET /Artwork: Retrieves all artworks.
GET /Table-of-Contents: Retrieves all galleries.
DELETE /deleteGallery: Deletes a gallery by its title.
PUT /updateGallery: Updates gallery information.
For more detailed API documentation, refer to the backend code.

**sources**
- https://app.pluralsight.com/library/courses/nodejs-express-web-applications-building/table-of-contents.
- https://www.geeksforgeeks.org/express-js-app-delete-function/
- https://www.youtube.com/watch?v=00NNuZHF56A
- https://stackoverflow.com/questions/33295856/how-to-do-update-operation-in-express-js
- ChatGPT voor het helpen oplossen van enkele errors
