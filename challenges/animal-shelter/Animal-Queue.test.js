const AnimalShelter = require('./Animal-Queue');

describe('Animal shelter queue', () => {
  const animalShelter = new AnimalShelter;
  it('adds a dog to the dog queue', () => {
    animalShelter.queueAnimal({ type: 'dog', name: 'spot' });
    expect(animalShelter.dogString()).toEqual('spot -> [x]');
  });
  it('adds a second dog to the dog queue', () => {
    animalShelter.queueAnimal({ type: 'dog', name: 'arete' });
    expect(animalShelter.dogString()).toEqual('spot -> arete -> [x]');
  });
  it('adopts out spot when preference is dog', () => {
    animalShelter.dequeue('dog');
    expect(animalShelter.dogString()).toEqual('arete -> [x]');
  });
  it('adds a cat to the cat queue', () => {
    animalShelter.queueAnimal({ type: 'cat', name: 'felix' });
    expect(animalShelter.catString()).toEqual('felix -> [x]');
  });
  it('adds a second cat to the cat queue', () => {
    animalShelter.queueAnimal({ type: 'cat', name: 'willow' });
    expect(animalShelter.catString()).toEqual('felix -> willow -> [x]');
  });
  it('adopts out felix when preference is cat', () => {
    animalShelter.dequeue('cat');
    expect(animalShelter.catString()).toEqual('willow -> [x]');
  });
});
