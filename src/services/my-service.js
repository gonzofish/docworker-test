/**
 * @name myService.sayAge
 * @param {number} age - The age
 * @description Echo the age provided
 */
const sayAge = (age) => sayYour('age', age);
/**
 * Echo the name provided
 * @param {string} age - The name
 * @name myService.sayName
 */
const sayName = (age) => sayYour('name', name);

const sayYours = (type, value) => console.info(`Your ${type} is ${value}!`);

module.exports = {
  sayAge,
  sayName,
};
