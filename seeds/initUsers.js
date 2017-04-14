const bcrypt = require('bcrypt');

const makePwd = pwd => {
	const salt = 13;
	return bcrypt.hashSync(pwd, salt);
};

exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return Promise.all([
		knex('users').del()
			.then(() => {
				return knex('users').insert([
					{
						id: 1,
						username: 'andypyle',
						password: makePwd('andyspassword'),
						name: 'Andy Pyle',
						email: 'andy@fakeemail.com',
						city: 'Nipomo, CA',
						companyid: 1,
						position: 'Jr. Web Developer',
						bio: 'I build neat things with React, Meteor, NextJS, and GraphQL.'
					},
					{
						id: 2,
						username: 'thebatman',
						password: makePwd('batmanspassword'),
						name: 'Bruce Wayne',
						email: 'bruce@fakeemail.com',
						city: 'Gotham City, NJ',
						companyid: 2,
						position: 'Vigilante',
						bio: 'I am the batman. Need I say more?'
					},
					{
						id: 3,
						username: 'kennyloggins',
						password: makePwd('kanenspassword'),
						name: 'Kanen Loggins',
						email: 'kanen@fakeemail.com',
						city: 'Nipomo, CA',
						companyid: 2,
						position: 'IT Guy',
						bio: 'I help the justice league with IT related problems.'
					}
				]);
			}),

		knex('companies').del()
			.then(() => {
				return knex('companies').insert([
					{
						id: 1,
						name: 'Some Rad Company',
						city: 'San Luis Obispo, CA',
						description: 'Doing rad stuff.',
						website: 'http://www.someradcompany.com',
						industry: 'Radness',
						ceo: 'Brad Radson'
					},
					{
						id: 2,
						name: 'Justice League',
						city: 'Gotham City',
						description: 'Stopping bad guys.',
						website: 'http://www.somefakecompany.com',
						industry: 'Vigilante Justice',
						ceo: 'n/a'
					}
				]);
			})
	]);
};
