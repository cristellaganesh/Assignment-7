# Assignment 7 

# Vue Contact Form Project

## Overview

This is an advanced version of my previous contact form that was created using Vue.js 

## Vue Component Structure

The project uses two main components:

### Contact Form Component

* This handles user input (such as: name, email, message)
* Stores data using Vue `data()`
* It validates inputs as the user types info
* Controls form submission based on specific criteria

### Modal Component

* It displays submitted form data
* Receives the data using `props`
* Has a close button to reset the form when submission is done

## Validation & Modal Interaction

### Validation

* Name: is required, letters only
* Email: is required, must be valid format in order to submit 
* Message: is equired, minimum 10 characters

The validation runs in real-time using `@input`.

### Form Submission

* Form checks if all inputs made by the user are valid
* If valid, the confirmation modal appears

### Modal

* Shows the submitted information
* Closes and resets form when the button is clicked

## Testing Notes

* Empty fields are blocked
* Invalid email formats dot show errors
* Submit button only works when the form is valid
* Modal displays correct user input
* Form resets after closing modal

## Challenges

It once again took me a while to find my way around the code and how to structure everything but after extensive research and many pages of notes taken from my coursework i was able to finally understand the content fully and make practical use of my knowledge. I fixed a few errors in my console found in my code and after lots of trial and error my code could run efficiently with clear readability and good responsiveness for users to input their information.

## Summary

This project demonstrates basic Vue concepts including components, props, validation, and conditional rendering with a modal popup once submitted!
