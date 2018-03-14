# Divisi
[![CircleCI](https://circleci.com/gh/GeneralL33/Divisi/tree/master.svg?style=shield)](https://circleci.com/gh/GeneralL33/Divisi/tree/master)

Visual component to the audio of a live band setting, utilizing Arduino and Node.js
![Imgur](https://i.imgur.com/oDJFWhW.png)

Usage:
----------------------------
>- Clone using this repository's clone URL (or just download it straight): https://github.com/GeneralL33/Divisi.git
>- Navigate to the repository location on your local filesystem and type 'npm install'
>- The 'config.json' file contains some additional parameters necessary for overall usage, such as the serial port name that the connected Arduino is currently interfacing with
>- After package installation and self-configuration, start the web-server, hardware interface, and client library by simply typing 'npm run start'
>- Once started, data from the onboard Arduino sensors should be logged to the console interface, and the client-side site should react as such with a "Connected!" element and dynamic visualization as shown in the screenshot above
