
exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('companies', tbl => {
			tbl.increments('id').primary();
			tbl.string('name');
			tbl.string('city');
			tbl.string('description');
			tbl.string('website');
			tbl.string('industry');
			tbl.string('ceo');
		}),

		knex.schema.createTable('users', tbl => {
			tbl.increments('id').primary();
			tbl.string('username');
			tbl.string('password');
			tbl.string('name');
			tbl.string('email');
			tbl.string('city');
			tbl.string('companyid')
				.references('id')
				.inTable('companies');
			tbl.string('position');
			tbl.string('bio');
		})
	]);
};

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('users'),
		knex.schema.dropTable('companies')
	]);
};
