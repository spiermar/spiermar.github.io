---
layout: page
title: Projects
---

Here are a few side projects I'm working on, either to make my life easier, learn something new or for just for pure fun.

# electronic music
*--- In Progress*

I love electronic music. Time is lacking, but whenever possible, I try to record something new and fresh at my home studio. If it's not complete *crap*, I upload it to soundcloud.

[soundcloud](https://soundcloud.com/Mikrogramm)

# mongolian rally
*--- Comming Soon!*

[mongolian rally](http://www.theadventurists.com/mongol-rally/)

# quantile-benchmark
*--- In Progress*

Some of my new projects rely heavily on quantile (percentile) calculation. Any improvements on quantile calculation performance can represent many hours saved on processing time. Different algorithms and configurations have performances that are orders of magnitude apart and only benchmarking can point us in the right direction. 

quantile-benchmark uses Caliper for now, but I might migrate to JMH in the near future.

[quantile-benchmark](https://github.com/spiermar/quantile-benchmark)

Here are a few result examples:

* [Quantile Only](https://microbenchmarks.appspot.com/runs/f8b36b5c-e634-4e12-927a-34d38059322d#r:scenario.benchmarkSpec.parameters.size,scenario.benchmarkSpec.parameters.implFactory)
* [Data Structure and Quantile](https://microbenchmarks.appspot.com/runs/03baeab8-9c01-4f0a-a4c9-d82195d5a9c4#r:scenario.benchmarkSpec.parameters.quantile,scenario.benchmarkSpec.parameters.size,scenario.benchmarkSpec.parameters.implFactory)

# bookmarks2evernote 
*--- Done*

A simple command line tool to transform bookmarks exported from Google Chrome and Google Bookmarks into Evernote as individual notes using EN's enex format.

A while ago I got a little frustrated with the quality of bookmark extensions for Chrome that supported Google Bookmarks, specially for a large number of bookmarks, so I decided to move everything to Evernote. I've found this Python script that uses Beatiful Soup, but required some work. Forked it and after a few changes, it's working!

[bookmarks2evernote](https://github.com/spiermar/bookmarks2evernote)

# flohmarkt
*--- On hold*

Sometimes you just need to sell some stuff online. You can go with eBay, Craigslist or one of many open source scripts around. But that's not fun! FlohMarkt is my first Angular project. A classified advertisements system built on top of Angular, Node, Express and MongoDB.

[flohmarkt](https://github.com/spiermar/flohmarkt)

# cashflow
*--- On hold*

Yet Another Personal Finance Application

After growing to almost a dozen spreadsheets to track my finances and investments, I realized that it was a bit too much. Keeping everything up to date was a nightmare. I needed something a bit more sophisticated. That's when *cashflow* was born. A personal finance application tailored to me and build using Grails.

[cashflow](https://github.com/spiermar/cashflow)

# didgeridoo
*--- On hold*

Client Side Analytics for [Boomerang](https://github.com/lognormal/boomerang)

*The didgeridoo (also known as a didjeridu) is a wind instrument developed by Indigenous Australians of northern Australia around 1,500 years ago and still in widespread use today both in Australia and around the world.*

I was looking for a cool project idea to start learning Node. What better than a high-frequency, low-latency beacon server with an analytics interface? Didgeridoo aims to serve a backend for Boomerang, capturing and storing data published by clients and providing a clean analytics interface using Node, Express and CouchDB.

[didgeridoo](https://github.com/spiermar/didgeridoo)

# playlist-service
*--- Done*

During a freelance gig developing a new website for a radio station, I was *disturbed* by the solution developed to get a list of recently played songs into the website. A Windows client connecting via FTP, uploading a large useless XML file and disconnecting, every 10 seconds, in an infinite loop. A PHP script being called every minute on the server side via cron task, parsing the file, extracting a song name and storing it as a single text line into a MySQL database, using a rotating index to keep an ordered list of the last 10 songs. Many times while PHP was trying to read the XML file, the same was being written and locked, causing tons of errors. There was no full history of songs played.

We need something better! The service component runs on Google App Engine with Python and leverages Flask as a framework and Google's datastore for data. It provides a RESTful interface for a *song* object, so you can add, remove, list and query songs in a playlist. The client component runs as a service on win32, reading the playlist XML file every time it is changed, updating the backend information via REST calls, whenever necessary. Together, these two components provide more elegant solution for the same problem, requiring significantly less bandwidth, being less prone to errors and providing a longer song history for querying.

[playlist-service](https://github.com/spiermar/playlist-service)

[playlist-client-win32](https://github.com/spiermar/playlist-client-win32)

# message-service
*--- Done*

Google App Engine REST Messaging service based on Flask-RESTful and Twitter Bootstrap.

Another freelance gig. A website was looking for a more dynamic way of receiving messages from it's users. Email was too heavy, all CMS based forms had terrible admin interfaces and third-party service offerings were too complex.

message-service provides a RESTful interface for a *message* object and a simple and clean admin interface to manage received messages. Users can submit messages via website, using a simple JavaScript-backed form and admins can manage messages easily, using a lightweight interface that requres no full-page refreshes.

[message-service](https://github.com/spiermar/message-service)

# monstream
*--- Done*

This was probably my first *serious* side project. A monitoring system for streaming servers, like ShoutCast. The initial scope included checking if a server was online and if a specific stream was up and notify admins via email in case of failures. It grew to include logging of server statistics, connected users, uptime, bandwidth and much more. An analytics interface and daily reports. The first version was built in Java, running as a schedule task on Windows every few minutes. It logged everything in local files and once a day, it generated a few charts of user activity using JFreeCharts and emailed it to stakeholders. It worked great for many years, without much maintenance at all. But after some time, logs started to grow too big and every code change was so painful that I wished I coded the whole thing from scratch every time. So one day I did. Only this time, as a web application written in Python, running on Google App Engine with a nice Bootstrap layout and Highchart charts. It supports ShoutCast and Icecast servers, multiple streams and provides a great reporting and querying interface with historical data from Google's datastore.

[monstream-gae](https://github.com/spiermar/monstream-gae)

# insta-backup
*--- Done*

Instagram backup tool, including posts, comments, likes, followers, etc.

[insta-backup](https://github.com/spiermar/insta-backup)