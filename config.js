const env = 'production'

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  production: {
    APIKey: 'l_oIehOeTp-VS7qJMt26EQ',
    APISecret: 'UQRR3TvAuUyXHhO66jeYmaOn9dMHkYLTFVS2',
  },
}

module.exports = config[env]
