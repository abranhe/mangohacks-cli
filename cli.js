#!/usr/bin/env node
'use strict';
const meow = require('meow');
const open = require('opn');
const email = require('./index.js');

const web = 'https://mangohacks.com';
const devpost = 'https://mangohacks2018.devpost.com/';
const github = 'https://github.com/MangoHacks';
const slack = 'https://mangohacks.slack.com/';
const facebook = 'https://facebook.com/MangoHacks/';
const twitter = 'https://twitter.com/fiumangohacks';
const instagram = 'https://instagram.com/fiumangohacks/';
const badges = 'https://github.com/abranhe/mangohacks';

const cli = meow(`
	Usage:
	 $ mangohacks <options|flags...>

	Options:
	  web               Opens MangoHack website
	  devpost           Devpost site
	  badges            View how to add a Shellhacks badge
	  github            Opens MangoHack Github Account
	  twitter           View MangoHacks Twitter account
	  instagram         View MangoHack Instagram account
	  facebook          View MangoHack Facebook account
	  slack             Opens MangoHack
	  feedback <flags>  Send a feedback

  Flags:
	  -h, --help        Show help message and close
	  -v, --version     View package version

	Feedback falgs:
	  -m, --message     Set a feedback message
	  -s, --subject     Set a feedback subject

	Example
	 $ mangohacks github
	 $ mangohacks feedback -m "Everything it\'s so sweet 😊"
`,{
	flags: {
		help: {
			type: 'boolean',
			alias: 'h'
		},
		version: {
			type: 'boolean',
			alias: 'v'
		},
		subject: {
			type: 'string',
			alias: 's'
		},
		message: {
			type: 'string',
			alias: 'm'
		}
	}
});

if(!cli.input.length == 1 || cli.input.length > 1) {
  cli.showHelp();
}

if(cli.input[0] === 'badges') {
  open(badges);
  process.exit();
}

if(cli.input[0] === 'feedback') {
	if(cli.flags.subject) {
		email.subject(cli.flags.subject);
	}

	if(cli.flags.message) {
		email.message(cli.flags.message);
	}

	console.log(email.getEmail())
  open('mailto:' + email.getEmail());
  process.exit();
}

if(cli.input[0] === 'web') {
  open(web);
  process.exit();
}

if(cli.input[0] === 'devpost') {
  open(devpost);
  process.exit();
}

if(cli.input[0] === 'github') {
  open(github);
  process.exit();
}

if(cli.input[0] === 'twitter') {
  open(twitter);
  process.exit();
}

if(cli.input[0] === 'slack') {
  open(slack);
  process.exit();
}

if(cli.input[0] === 'instagram') {
  open(instagram);
  process.exit();
}

if(cli.input[0] === 'facebook') {
	open(facebook);
	process.exit();
}
