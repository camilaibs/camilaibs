#!/usr/bin/env node

const welcome = require("cli-welcome");
const packageJson = require("./package.json");

welcome({
  title: packageJson.name,
  tagLine: "Howdy, nice to meet ya!",
  description: packageJson.description,
  version: packageJson.version,
  bgColor: "#f7eaf4",
  color: "#000000",
  bold: true,
  clear: false,
});

console.log(`
Camila Belo

I'm a Software Engineer, Teacher and Speaker that really love to work with JavaScript and popular libraries/frameworks such as React, Marko JS and AngularJS.
Before it I worked as Backend developer, it was fundamental for me to understand how it works dealing with Monolithic applications, Microservices, Relational e Document based data bases, Async Processing and etc.
I worked as well as a System Analyst, in this position I elaborated technical specifications to be used by Developers and validated their work.
Additionally, I worked in IT Governance as a Process Analyst, which developed my ability to map business processes & identify deficiencies in order to build and apply solutions.


📖 Github:        https://github.com/camilaibs
🔗 Stackoverflow: https://stackoverflow.com/cv/camila-belo
`);
