function getName(name, lastname) {
    return `мене звати ${name} ${lastname}`;
  }
  
  function greetUser(name, lastname) {
    const fullName = getName(name, lastname);
    return `Привіт, ${fullName}!`;
  }
  
  module.exports = greetUser;
  