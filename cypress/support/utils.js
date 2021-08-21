export function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}
export function getRandomIntInRange(min, max) {
    return cy.faker.datatype.number({min:min, max:max})
}
function getRandomArrayElement(array_) {
    return array_[Math.floor(Math.random()*array_.length)]
}
function generateRandomPhoneNumber(max) {
    return `059${getRandomIntInRange(1000000, 9999999)}`
}
function generateRandomDate() {
    return `200${getRandomInt(9)}-0${getRandomIntInRange(1,9)}-${getRandomIntInRange(10,31)}`
}

export const data_generator = {
    "FIRST_NAME": cy.faker.name.firstName,
    "LAST_NAME": cy.faker.name.lastName,
    "ADDRESS": cy.faker.address.streetAddress,
    "CITY": cy.faker.address.city,
    "TELEPHONE": generateRandomPhoneNumber,
    "DATE": generateRandomDate,
    "NAME": cy.faker.company.companyName,
    "PET_NAME": getRandomArrayElement(["Buddy", "Marley", "Pongo", "Toto", "Bingo", "Benji", "Balto"])+getRandomInt(999),
    "DESCRIPTION": cy.faker.lorem.words
}
