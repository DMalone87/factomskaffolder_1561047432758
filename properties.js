module.exports = {
	factomskaffolder_db: {
        name: "factomskaffolder_db",
        user: "postgres",
        password: "password",
        host: "localhost",
        port: 5432,
        dialect: "postgres"
    },
    
    factom: {
        config: {
            baseUrl: "https://matisse.api.factom.com/v1",
            accessToken: {
                appId: "6b920ff0",
                appKey: "f38a6298bd0515154174fc4fbfdbeb43"
            },
        },
        model: {
            doctor: {
                factomized: null,
                has_identity: true,
            },
            patient: {
                factomized: 'doctor',
                has_identity: false,
            },
            report: {
                factomized: 'doctor',
                has_identity: false,
            },
        },
    },

    publicPath: "../client/dist",
	port: 3000,
    tokenSecret: "Insert Your Secret Token",
    api: "/api"
}