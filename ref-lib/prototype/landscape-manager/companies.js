// companies.js

var faker = require('faker')

function generateCompanies () {
  var companies = []

  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.firstName()
    var phoneNumber = faker.phone.phoneNumberFormat()

    companies.push({
      "id": id,
      "sector": firstName,
      "name": lastName,
      "phone": phoneNumber
    })
  }

  return { "companies": companies }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateCompanies
