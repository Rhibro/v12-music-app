# v12-music-app

## Overview

This project is a Spotify data visualization app that retrieves user listening data and presents it through interactive charts and lists. It allows you to search Spotify to find songs and artists and has a built in player component. The UI adapts to both light and dark mode for an enhanced user experience.

## Changes
I have focused on making this application as accessible as possible by adding clear interactivity, a light and dark mode, title attributes, and a user data page

the changes I have made from the group project include: 
  - dark and light theme (with local storage to save the theme when the page reloads)
  - hover effect on all interactive components
  - User Data page where graphs are displayed showing the user's device usage and genre preferences
  - changed the layout of the Artist page to a list so it is more similar to the home page
  - made the whole application responsive
  - added the title attribute to the logo element and the theme button to make it clear to the user what purpose they serve

Features

🎵 Top Genres Chart: Displays the most frequently listened-to genres based on the user's top artists.

📱 Device Usage Chart: Shows the distribution of devices used for Spotify playback.

🎧 Podcast vs. Song Chart: Visualizes the ratio of songs to podcasts in the user's listening history.

🌗 Dark Mode Support: Automatically adjusts the theme based on user preference.

## Tech Stack

  - Frontend: React, Tailwind CSS, Chart.js
  - State Management: Zustand
  - Data Fetching: Axios
  - API: Spotify Web API

## Installation

### Prerequisites

  - Node.js & npm installed
  - A Spotify Developer Account with an application set up

### Setup

  - Clone the repository:
  - git clone https://github.com/your-repo/spotify-data-visualization.git
  - cd spotify-data-visualization

### Install dependencies:

  - npm install

### Set up environment variables:

  - Create a .env.local file in the root directory

### Add the following variables:

REACT_APP_SPOTIFY_CLIENT_ID=your_client_id
REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback

### Start the development server:

  - npm run dev

## Usage

### Authentication

Upon launching the app, users must authenticate with Spotify to grant permissions for accessing their data.

### Data Visualization

Once authenticated, the app fetches and displays the following:

  - Device Usage: Displays the most-used devices for streaming music.
  - Top Genres: Shows the most frequently listened-to genres.
  - Podcast vs. Song: Visualizes the number of songs vs. podcasts the user listens to.

Theme Toggle

  - Users can switch between light and dark modes using the theme toggle button.

## Code Overview

### Main Components Added

  - UserData.tsx: Fetches user data and renders the charts.
  - DeviceUsageChart.tsx: Renders a Pie chart for device usage.
  - GenreChart.tsx: Displays top genres using a Pie chart.
  - PodcastSongChart.tsx: Shows the comparison between songs and podcasts.
  - ThemeToggle.tsx: Handles light and dark mode switching.

###API Calls

GET /me/top/artists?limit=5 → Fetches top artists for genre analysis.

GET /me/player/devices → Retrieves a list of devices used for streaming.

GET /me/top/tracks?limit=10 → Fetches top tracks.

GET /me/shows → Retrieves subscribed podcasts.

### Customization

Changing Theme Colors

Update the colors in Tailwind configuration or directly modify the classes used in components:

bg-colors-customYellow-light
dark:bg-colors-customYellow-dark

### Modifying API Requests

Adjust the limit values in API requests inside UserData.tsx to retrieve more or fewer results:

const artistResponse = await axios.get<{ items: Artist[] }>(
  "https://api.spotify.com/v1/me/top/artists?limit=10",
  { headers: { Authorization: `Bearer ${accessToken}` } }
);

### Future Enhancements

  - Add more interactive chart types.
  - Add colour theme for different types of colour blindness
  - Include historical trend analysis.


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

