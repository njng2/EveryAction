# EveryAction

Task: 
You work for an organization that sends emails to its supporters using NGP 7. You’ve been asked to produce a repeatable report of emails sent through the system. Using the language and framework of your choice, write a script or program that calls the /v2/BroadcastEmails endpoint, retrieves the full list of emails sent, and prints the EmailMessageId and Name. After outputting the list of emails, your program should also print the total number of emails sent.


Results Sample

2324646 "Tell Congress: Protect Gray Wolves" 

2324747 "Get Your Gray Wolf Tote Bag: Donate Now!" 

2325647 "Join Us for a Howling Good Time at the Gray Wolf Social Hour!"

Total: 3 emails


#How to run: 

Navigate to same directory of this file on terminal

create a package.json file by running 
```npm init --yes ``` in the same directory of this repository

``` npm install request --save ```

On the terminal, run: 
```node intern_problem.js```








