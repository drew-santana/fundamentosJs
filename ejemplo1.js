const API_URL = 'https://swapi.co/api/'
const REFERENCE_URL = 'planets/3'
const PeopleURL = `${API_URL}${REFERENCE_URL.replace('3',1)}` 
const opts = {crossDomain: true}
const onPeopleRespnse = function(data){
  console.log(`${data.name}`)
}
$.get(PeopleURL,opts,onPeopleRespnse)

