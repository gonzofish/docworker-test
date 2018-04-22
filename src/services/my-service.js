const sayAge = (age) => sayYour('age', age);
const sayName = (age) => sayYour('name', name);

const sayYours = (type, value) => console.info(`Your ${type} is ${value}!`);

/**
 * @namespace myService
 */
module.exports = {
  /**
 * @name myService.sayAge
 * @param {number} age - The age
 * @description Echo the age provided
 */
  sayAge,
  /**
   * Echo the name provided
   * @param {string} age - The name
   * @name myService.sayName
   */
  sayName,
};
