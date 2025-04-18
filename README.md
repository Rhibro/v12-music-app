# v12-music-app

This is an application which uses the Spotify API to fetch the users Top Artists, and Top Tracks. It allows you to search Spotify to find songs and artists and has a built in player component at the bottom of each page. 
I have focused on making this application as accessible as possible by adding clear interactivity, as well as a colour and dark mode. 

![Skärmbild 2025-03-20 101215](https://github.com/user-attachments/assets/fea081df-8ff9-484e-9e5b-6e15e2cf7a3c)

![Skärmbild 2025-03-27 140039](https://github.com/user-attachments/assets/04559ff7-1135-4cfa-8d69-3eacecfb3c8a)

### Home Page
Once a user has signed-in they are taken to the Home Page where two lists appear 'Top Artists' & 'Top Tracks'

### Top Artists
This shows a list of the users top artists which they can scroll through, and click on the artist to take them to the Artist Page.
UI/UX includes responsiveness, cursor-pointer, and a hover effect

### Top Tracks
This shows a list of the users top songs which they can scroll through, and click on the song to take them to the Spotify App or browser page to play the song.
UI/UX includes responsiveness, cursor-pointer, and a hover effect

### Styling
  - Uses Tailwind CSS for styling
  - Consistent color scheme with custom colors
  - Theme toggle so you can go between a colourful theme and a black/white/grey theme
  - Responsive design with flexible layouts

### Interactivity and Useability
  - everything that can be interacted with has a hover effect or some kind of visual indicator
  - the logo and the theme toggle both use the 'title' attribute so a use can hover over the element and read a message stating the function of that element

### Spotify Authentication via URL Parameters
Switching between login and search views
Rendering of search bar and result lists

### SearchBar (/src/components/SearchBar.tsx)
Search component enabling:

Real-time search in Spotify's API
Debounced search functionality (500ms delay)
Displaying both artist and song results
Formatting and presenting search results in two separate lists

### Helper Functions
searchSpotify (/src/helpers/searchSpotify.ts)
API integration function that:

Handles searches against Spotify's API
Limits results to 5 artists and 5 songs
Includes error handling and result typing

### Layout and Navigation
Router (/src/router/Router.tsx)
Defines the application's routing structure with the following routes:

/ - Homepage
/Player - Music player
/SignIn - Sign-in page
/artist/:id - Artist page
/reset - Reset page
* - 404 page

### RootLayout (/src/components/layouts/RootLayout.tsx)
Main layout that:

Wraps all pages
Contains a shared header
Manages rendering of the active route

### Header (/src/components/layouts/Header.tsx)
Navigation header containing:

App logo with a link to the homepage
Logout functionality
Integration with LogoutModal

### LogoutModal (/src/components/layouts/LogoutModal.tsx)
Modal component for logging out that:

Displays a confirmation dialog
Handles confirm/cancel actions
Features a sleek dark-themed design

###Technical Details
State Management
Uses Zustand for global state management (useAccessStore)
Manages access tokens and authentication status

### Authentication
Implements Spotify OAuth flow
Securely handles access tokens
Automatically redirects after authentication

### Error Handling
Comprehensive error handling in API requests
Fallback states for failed searches
Clear user feedback

### Usage
The user logs in via Spotify
After authentication, the search interface is displayed
Search results update automatically as the user types
The user can log out via the header menu

### Development
To further develop these components:

Ensure necessary environment variables for the Spotify API are set
Install dependencies using npm install
Run the development server with npm run dev
