# Divisi
[![CircleCI](https://circleci.com/gh/GeneralL33/Divisi/tree/master.svg?style=shield)](https://circleci.com/gh/GeneralL33/Divisi/tree/master)

Visual component to the audio of a live band setting, utilizing Arduino and Node.js
![Imgur](https://i.imgur.com/oDJFWhW.png)

Project Motivation:
---------------------------
As music lovers and concert goers, much of the spectacle of a live show can come from the stage-presence of the performing musicians and overall visual aesthetic working in tandem with the audio aspect itself. As performing musicians ourselves, being in control of said visual aesthetic can be entirely dependent on the venue and what it affords live bands, or the decision to invest in oftentimes expensive lights and other unwieldy and non-modifiable gear.

Divisi is a project intended to democratize the visual component of a band's live show, utilizing open-source hardware and software to allow for a control of a variety of visual outputs with inexpensive components and sensors to bring costs down to the realm of dozens of dollars, as well as provide for a continued platform for musicians to be in control of their own presence moving forward.

Current State:
-------------
Divisi takes advantage of Arduino hardware sets in tandem with sound sensors that intake ambient and immediate audio from the surrounding environment. Data from the analog and digital inputs is then formatted for usage by both NeoPixel lightstrips and a web front-end. The Divisi "site" is served via a Node.js Express back-end, which connects to the Arduino hardware via the SerialPort library, which then emits data to the front-end visualization using websockets and the Socket.IO library. The current demo takes advantage of the canvas library p5.js.

Usage:
----------------------------
>- Clone using this repository's clone URL (or just download it straight): https://github.com/GeneralL33/Divisi.git
>- Navigate to the repository location on your local filesystem and type 'npm install'
>- The 'config.json' file contains some additional parameters necessary for overall usage, such as the serial port name that the connected Arduino is currently interfacing with
>- After package installation and self-configuration, start the web-server, hardware interface, and client library by simply typing 'npm run start'
>- Once started, data from the onboard Arduino sensors should be logged to the console interface, and the client-side site should react as such with a "Connected!" element and dynamic visualization as shown in the screenshot above
