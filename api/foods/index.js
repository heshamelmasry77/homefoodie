import fetch from 'isomorphic-fetch'

export function getFoods () {
  return fetch('http://fe-workshop.dylanharbour.com/api/food')
}
