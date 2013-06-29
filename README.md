Introduction
It is always exciting to build you own i-phone/i-pad/android app and put it up in a place (app store) where your friends, family can download and install it. I did not realize how easy it was until i did. The following is intended to anyone who wants to build their own app and know how to use the keyboard. You do not need to know HTML5 or JavaScript. I searched google for long time to see if there was any one who created steps for non-technical people to create a mobile app. Looks like there is none and so started this post. ( I try not to use the words like, framework, native as my intended audience are non-technical people )

I used this software called "Sencha Touch" http://www.sencha.com/products/touch/ . I started of with Sencha touch 1.0 and now it is upgraded to sencha touch 2.0. Trust me it is super easy

Step 0 : ( Or Pre requisites )

What is HTML
What is JavaScript ( It is not Java )
What is CSS
What is an IDE
What is a Web Server
What is a Web Browser
What is a Application
What is a Mobile Application ( Touch Events )
What is Native - What is AppStore
Building your first i-phone/android application using html 5( Sencha touch ). The instructions are only for Mac and not valid for Windows

Step 1 : Download sencha touch to your Mac & set up

Go to http://www.sencha.com/products/touch/ and click on "Download"
cd /Library/WebServer/Documents and unzip sencha-touch-2.2.1-gpl.zip
Install Snecha Cmd
Step 2 : Create your first Mobile Application.

sencha generate app MyApp ../MyApp
cd MyApp
sencha app build testing ( For testing )
sencha app build production ( For production )
sencha app build native
Step 3 : How to upload your app to the Appstore. ( iOS for Apple )

cd MyApp
sencha app package generate <configTemplate.json>
How to test the App
platform: iOSSimulator
configuration: Debug
sencha app package run <configFile.json>
 sencha app package <configFile.json>
Upload the app to the Apple Appstore
