# Technical Documentation

## Overview

This project is a personal portfolio website enhanced with advanced JavaScript functionality, external API integration, and improved state management. It builds on previous assignments by adding more dynamic features, better logic, and a more interactive user experience.

## Features Implementation

### 1. Theme Toggle

* Implemented using JavaScript and localStorage
* Saves user preference (light/dark mode)
* Applied using CSS classes

Purpose: Improves accessibility and allows users to choose their preferred viewing mode

### 2. Project Search, Filter, and Sort (Advanced Logic)

* Users can search projects using a text input
* Projects are filtered based on category (Web, Java, Python, etc.)
* Projects can be sorted by difficulty level
* Displays "No projects found" when no matches exist

Purpose: Helps users quickly find and organize projects using multiple conditions and dynamic updates

### 3. GitHub API Integration

* Uses the GitHub API to fetch repositories dynamically
* Displays repository name, language, stars, and link
* Uses `fetch()` to retrieve data asynchronously

Purpose: Keeps the portfolio dynamic and up-to-date by displaying real data from GitHub

### 4. API Error Handling

* Checks if the API request is successful
* Displays a user-friendly message if the API fails
* Prevents the application from breaking

Purpose: Ensures reliability and improves user experience when external services fail

### 5. State Management (localStorage)

* Stores selected theme (light/dark mode)
* Stores visitor name and displays a personalized greeting

Purpose: Maintains consistent user experience and remembers user preferences

### 6. Time-on-Site Counter

* Implemented using `setInterval()`
* Updates every second
* Displays how long the user stays on the website

Purpose: Demonstrates dynamic updates and time-based functionality

### 7. Quote Generator

* Displays a random motivational quote
* Updates when user clicks a button
* Prevents repeating the same quote consecutively

Purpose: Adds interactivity and user engagement

### 8. Contact Form Validation

Validates:

* Name (required and minimum length)

* Email (valid format using regex)

* Message (minimum length)

* Displays error messages dynamically

* Shows success message when inputs are valid

Purpose: Ensures correct user input and improves usability

### 9. Animations

* Scroll reveal using IntersectionObserver
* Fade-in effects for content
* Hover effects on buttons and cards

Purpose: Enhances user experience and visual feedback

## JavaScript Concepts Used

* DOM manipulation
* Event listeners
* localStorage
* Arrays and loops
* Conditional logic (if/else, switch)
* Sorting and filtering
* Fetch API (external API calls)
* Error handling
* setInterval (timers)
* IntersectionObserver

## Responsiveness

* Implemented using CSS media queries
* Layout adapts to mobile and tablet screens
* Grid and flexible layouts ensure usability across devices

## Error Handling

* Displays messages for invalid form input
* Shows "No projects found" for empty search
* Handles API failures with user-friendly messages
* Prevents crashes by validating data before display

## Conclusion

This project demonstrates advanced web development concepts using JavaScript.
It integrates external APIs, manages application state, and applies complex logic to create a dynamic and interactive portfolio website.
Compared to previous assignments, it shows significant improvement in functionality, user experience, and problem-solving skills.
