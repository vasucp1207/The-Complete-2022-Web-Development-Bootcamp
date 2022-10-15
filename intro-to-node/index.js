// native node-modules

const fs = require('fs')
const superhero = require('superheroes')

fs.copyFileSync('file1.txt', 'file2.txt')

var myHero = superhero.random()
console.log(myHero)