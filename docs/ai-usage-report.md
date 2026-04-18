# AI Usage Report

## AI Tools Used

* ChatGPT

## How AI Was Used

### 1. Code Assistance

* Generated and improved JavaScript functions for:

  * Theme toggle with localStorage
  * GitHub API integration
  * Time-on-site counter

### 2. Debugging

* Helped identify issues such as:

  * Missing or incorrect element IDs
  * Problems with event listeners
  * API fetch errors and incorrect responses
* Assisted in fixing bugs in:

  * Project filtering and sorting logic
  * GitHub API display
  * Timer functionality

### 3. Feature Enhancement

AI suggested adding:

* External API integration (GitHub repositories)
* Time-on-site counter
* Better error handling for API failures

### 4. Documentation

* Suggested clearer explanations for:

  * README.md

## Demonstration of Understanding

### Theme Toggle

I understood that the theme toggle works by adding or removing a class (e.g., "light") on the `<body>` element.
The selected theme is stored in `localStorage` so it persists after page reload.

### API Integration (GitHub)

I learned how to fetch data from an external API using `fetch()`.
The GitHub API is used to retrieve repositories dynamically and display them on the page.
I also handled errors by showing a message when the API request fails.

### Search, Filter, and Sort

The project section uses JavaScript to:

* Search projects based on user input
* Filter projects based on category
* Sort projects based on difficulty level

This required combining multiple conditions and updating the DOM dynamically.

### State Management

I used `localStorage` to:

* Save the selected theme (light/dark mode)
* Store the visitor’s name and display a personalized greeting

This ensures the data persists even after refreshing the page.

### Timer (Time-on-Site)

The timer uses `setInterval()` to update the time every second.
It calculates and displays how long the user has stayed on the website.

### Form Validation

I used conditional statements to validate user input:

* Name must not be empty
* Email must follow a valid format
* Message must meet minimum length

Error messages are displayed dynamically, and a success message appears when all inputs are valid.

### Quote Generator

The quote generator uses an array of quotes and selects one randomly when the user clicks a button.
I ensured the function updates the content dynamically without repeating the same quote consecutively.

## My Contribution

* Implemented and tested all features
* Modified AI-generated code to fit assignment requirements
* Fixed bugs and improved logic for filtering, sorting, and API handling
* Designed layout, styling, and content independently

## What I Learned

* How to integrate external APIs into a web application
* How to manage application state using localStorage
* How to combine multiple conditions for advanced logic
* How to handle API errors gracefully
* How to improve user experience through interactivity and feedback
* How to debug and refine AI-generated code

## Academic Integrity

AI was used only as a support tool.
All code was reviewed, understood, and modified before submission.
I ensured that I fully understand how each feature works and made adjustments to maintain originality and correctness.
