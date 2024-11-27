// Import required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample quotes
const quotes = [
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there."
];

// Serve the homepage
app.get('/', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.send(`
        <html>
        <head>
            <title>Motivational Quotes</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    background-color: #f4f4f9;
                    margin: 0;
                    padding: 50px;
                }
                h1 {
                    color: #333;
                }
                p {
                    font-size: 1.5em;
                    color: #666;
                }
            </style>
        </head>
        <body>
            <h1>Motivational Quote of the Day</h1>
            <p>${randomQuote}</p
