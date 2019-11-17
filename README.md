# Project Title - Tamawotzi

Real pets are great, but they do have drawbacks. They smell. Your mum might be allergic to them. Maybe you just aren't allowed one in your flat.

To solve these problems, I've made a JavaScript pet called 'Tamawotzi'. Copyright 2019 JB😂

Tamawotzi is great because it's made of JavaScript and can do literally anything. It doesn't have any of the drawbacks of regular pets. It don't even 💩! (no more leaving it with your mum whilst you go to school, only to return with seven poo's littered across the screen).

Tamawotzi has the following features:

You can give it a name (although Tamawotzi is such a good name, i suggest you call it that)

It can get older

As it gets older, it gets hungrier and less fit

You can walk it to increase it's fitness. 🏃‍♂️

You can feed it to decrease it's hunger. 🍕

You can talk to your Tamawotzi to see if it needs feeding or walking

If Tamawotzi gets too hungry or unfit, it will DIE 💀

If Tamawotzi gets to 30 days old it will DIE 😢

## Prerequisites

You are going to need to install node.js & jest in order to run this application.

* Node.js - Install Here: https://nodejs.org/en/
* Jest - Install Here: https://jestjs.io/

## Getting Started

Download the repository and run `npm install` in the terminal. 

Navigate to the installed folder in the terminal and type `node`.

Once in node you are going to need to allow it access to the JavaScript inside of the src file: Type `const Pet = require('../src/pet');` to allow this.

Now you can create your pet! Type `const pet = new Pet('Your-name-here');`

(Remember, we suggest you call it Tamagotchi because it's such a good name😂).

To view your pet's status type `pet`. The listed properties denote the functionality of the pet. You can play around with this functionality utilising the following commands in node:

`pet.growUp()` - Makes pet age.

`pet.feed()` - Feeds pet. 

`pet.walk()` - Walks pet.

`pet.haveBaby('Your baby name here')` - Pet has a baby.

You can ask your pet how it's feeling by selecting `pet.checkUp()`;

Be careful not to kill your pet! 

* If it's hunger level exceeds 10: it will starve to death! 

* If it's fitness level drops below 0: it will die of obesity!

## Tests

All the JavaScript is tested using Jest. To run the tests yourself you will need to open your terminal and install jest as a developer dependency by typing the following into the command line: `npm install -D jest`.

Once completed you will ne able to run the test by typing `npm test`.

## Author

James Barrington

## Acknowledgements 

Manchester Codes (https://github.com/MCRcodes)



