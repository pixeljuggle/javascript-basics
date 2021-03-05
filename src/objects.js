const createPerson = (name, age) => {
  return {
    'name': name,
    'age' : age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map( p => p.age);
};

const findByName = (name, people) => {
  // return people.filter( p => p.name === name )[0];
  return people.find( p => p.name === name )
};

const findHondas = cars => {
  return cars.filter( c => c.manufacturer === 'Honda' );
};

const averageAge = people => {
  return people.reduce((sum, person ) => sum + person.age, 0) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    'name': name,
    'age': age,
    'introduce': function (friend){
      return `Hi ${friend}, my name is ${this.name} and I am ${this.age}!`
    }
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
