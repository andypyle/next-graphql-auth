const typeDefs = `

type User {
	id: ID!
	username: String!
	name: String!
	email: String!
	city: String
	companyid: Int
	position: String
}

type Company {
	id: ID!
	name: String!
	city: String!
	description: String
	website: String
	industry: String
	ceo: String
}

type Query {
	allUsers: [User]
	currentUser(id: ID!): User
	allCompanies: [Company]
	oneCompany(id: ID!): Company
}

`;

export default typeDefs;