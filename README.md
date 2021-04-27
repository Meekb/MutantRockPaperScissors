## Title: Mutant Rock Paper Scissors

A [Front-End Project] by: [Beth Meeker](https://github.com/Meekb)

* Project Manager: [Kayla Wood](https://github.com/kaylaewood)

## Index

1. [Overview](#overview)
2. [Functionality](#functionality)
3. [Technologies](#technologies)
4. [Contributors](#contributors)
5. [Resources](#resources)
6. [Instructions](#instructions)

## Overview
  Mutant Rock Paper Scissors is a web application which presents the user with an option to play in classic mode, or with a difficult Ninja Turtle theme. The classic game consists of the three classic icons - rock, paper, and scissors - which can be clicked by the user to indicate their selction. Difficult mode transforms the user into a sewer-like realm, where Donatello must face The Shredder, picking from five icons: Donnie, Pizza, Sewer, News Microphone, and Ninja Star. 
The rules ares indicated on the respective game type buttons.

![recording](https://user-images.githubusercontent.com/76264735/116307133-2d631080-a763-11eb-9fda-0311bddc5860.gif)

## Functionality
  
  * Layout
    * Application built for desktop use only
   
  * Architecture 
    * Two class files - Player.js and Game.js
    * DOM and Data model are separate entities
    * Event listeners are added and removed during the game win sequence to prevent additional clicks before game is completed
    * Classic and Difficult games built with unique layouts
    * Wins are tracked as a running total between games and always displayed within the Human and Machine player areas

  * Game Play - Classic
    * Classic game built with classic black icons, minimalist layout
    * Computer generates a random number 1 through 3 to associate with an icon, rock 1, paper 2, scissors 3
    * Wins are incremented immediately and redisplayed for the user

  * Game Play - Difficult
    * Difficult game built with TMNT icons - Donnatello, pizza, sewer, news microphone, and ninja star
    * Computer generates a random number 1 through 5 to associate with an icon - Donnatello 1, pizza 2, sewer 3, news microphone 4, and ninja star 5
    * Wins are increments immediately and redisplayed for the user

  * Storage
    * Wins are sent to localStorage and retrieved for the user upon refresh of the browser

## Technologies
  1. HTML
  2. CSS
  3. JavaScript
  4. Atom
  5. GitHub

## Contributors
  Beth Meeker https://github.com/Meekb
  
  Code Review by Taryn Martin https://github.com/tarynmartin

## Resources
  1. [MDN Web Docs](https://developer.mozilla.org/en-US/)
  2. [SVG Repo](https://www.svgrepo.com/)

## Instructions for cloning
  1. Clone this repo to your local machine
  2. cd into repo from the terminal
  3. open index.html from the terminal command line to launch index file
  4. OR just visit my deplyed page [Mutant Rock Paper Scissors](https://meekb.github.io/RockPaperScissors/)
