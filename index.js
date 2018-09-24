#!/usr/bin/env node
'use strict';
const mail = 'team@mangohacks.com?';

let email = [];

const saveData = (data) => {
	email.push(data);
};

const subject = subject => {
	saveData('subject=' + subject);
}

const message = message => {
	saveData('body=' + message);
}

const getEmail = () => {
	let content = email.join('&');
	return mail + content;
}

module.exports = {
	subject,
	message,
	getEmail
}
