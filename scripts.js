function fetchData(url) {
    return fetch(url).then((resp) => resp.json());
}

const app = document.getElementById('root')

const container = app.appendChild(document.createElement('div'));
container.setAttribute('class', 'container')

const table = container.appendChild(document.createElement('table'));
table.setAttribute('class', 'table')

const headings = table.appendChild(document.createElement('tr'))
table.setAttribute('scope', 'row')

const nameheading = table.appendChild(document.createElement('th'))
nameheading.textContent = 'Name'
nameheading.setAttribute('scope', 'column')
const heightheading = table.appendChild(document.createElement('th'))
heightheading.textContent = 'Height'
const massheading = table.appendChild(document.createElement('th'))
massheading.textContent = 'Mass'
const genderheading = table.appendChild(document.createElement('th'))
genderheading.textContent = 'Gender'
;

fetchData('https://swapi.co/api/people/').then((data) => {
    //console.log(data);
    data.results.forEach(result => {
      //console.log(result.name)
      const row = document.createElement('tr')
      const name = document.createElement('td')
      row.appendChild(name)
      name.textContent = result.name
      const height = document.createElement('td')
      row.appendChild(height)
      height.textContent = result.height
      const mass = document.createElement('td')
      row.appendChild(mass)
      mass.textContent = result.mass
      const gender = document.createElement('td')
      row.appendChild(gender)
      gender.textContent = result.gender

      table.appendChild(row)
    })
})
