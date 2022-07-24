Greetings yall ! This file contains what feutures that I am planning to implement and is meant as a design document in case anyone wants to contribute, you are free to make commits of this file, but do note it is going to be one of the "slower" files to get updated and approved, as I want to try to make the program do as little as possible in the most efficient way, so it does not stray away from it beeing a companion app that stores sheets and searches for rules, feats and magics.

#Search
The user is going to be able to search trough all of the tables in the projectand find whatever they need. The search is also going to have check-marks that change what tables are looked up, to make the search more effective. Everything is going to be sorted by table category in this order:
- Feats
- Magics
- Items
- Relics
- Weapons
- Rules

If the user searches without any string added to the search field everything will be displayed and sorted as noted above, if the user would select a category and input no string they will SELECT * from that table and display it. Additionally the program will be able to use holtkeys (Alt + Letters) when focused, so they can easilly acess data and search for what they want to. Main purpouse is ease of access, not flowery fonts and magical UI.

#Category Overviews
Every category referenced above will have its own page, that is going to be accesible via nagivation menu, these category pages will use the same select Query as the user selecting the category and clicking search. So a "Feats" page is going to perform a SELECT * on feats table and display the results.

#Character Sheet
Sheet should do one of 2 things:
1. It should display all of the stats the player character has and make them easy to edit/modify.
2. It should give the user an easy overview of what Feats, Magic, Weapons and Relics they have do. The first things displayed are the stats and scrolling down gets the user to access everything else. By default every overview is collapsable and the user is able to collapse-all or un-collapse all. This choice is going to be saved in their local memmory. Furthermore everything that was collapsed or un-collapsed is going to be saved as well, same goes for the stats. After some time the userwill have their data backed up on a JSON file (on their local device) in case something breaks down or in case they want to share sheets or transfer them to another device.

#Importing
The website should be able to import character sheets from JSON files and constriuct character sheets from them.
Furthermore the user will be able to easy-import anything they homebrew using a CLA tool, as long as it is displayed as a JSON file with the right formating they should be able to update their local database.

#Sharing
The website will not have any sharing features, we expect people to be able to copy , paste, download and move around files on their devices, as this is common literacy.

#Database File
After some times the program will be able to use simple Excel files as a database, to make it easy to make things homebrew and make this software do the computing you want for you.

#File Conversion
The program will be able to convert Excel files to database seed/migrate, to make shipping of homebrew and/or other RPG systems as easy as possible.

#Visuals
The code is going to be written in React, and will contain building blocks that are commented and described in deapth, this is to ensure anyone can customise this software with minimal knowledge of programming.
