'use strict'

const year = 25;
const module = year % 4;
const remainingYear = 4 - module;
const nextyear = year + remainingYear;

console.log(nextyear);