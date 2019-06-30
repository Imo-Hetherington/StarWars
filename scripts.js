function fetchData(url) {
    return fetch(url).then((resp) => resp.json());
}

const app = document.getElementById('root')

const container = app.appendChild(document.createElement('div'));
container.setAttribute('class', 'container')

const table = container.appendChild(document.createElement('table'));
table.setAttribute('class', 'table')
table.setAttribute('id', 'charTable')

const headings = table.appendChild(document.createElement('tr'))
table.setAttribute('scope', 'row')

const nameheading = table.appendChild(document.createElement('th'))
nameheading.textContent = 'Name'
const heightheading = table.appendChild(document.createElement('th'))
heightheading.textContent = 'Height'
const massheading = table.appendChild(document.createElement('th'))
massheading.textContent = 'Mass'
const genderheading = table.appendChild(document.createElement('th'))
genderheading.textContent = 'Gender'
const filmheading = table.appendChild(document.createElement('th'))
filmheading.textContent = 'Films'
;

fetchData('https://swapi.co/api/people/').then((data) => {
  for(var i = 0; i <   data.results.length; i++) {
      var result = data.results[i]
      const row = document.createElement('tr')
      const name = document.createElement('td')
      row.appendChild(name)
      name.textContent = result.name
      const height = document.createElement('td')
      row.appendChild(height)
      height.textContent = result.height + 'cm'
      const mass = document.createElement('td')
      row.appendChild(mass)
      mass.textContent = result.mass +'kg'
      const gender = document.createElement('td')
      row.appendChild(gender)
      gender.textContent = result.gender
      const films = document.createElement('td')
      row.appendChild(films)
      var episodelist = []
      for (var j=0; j < result.films.length; j++) {
        var episode = result.films[j]
        episodelist.push(' ' + episode.substr(-2, 1))
      }
      films.textContent = 'Episodes: ' + episodelist

      row.setAttribute('id', 'row-'+ (i+1))

      table.appendChild(row)
    }
})

$('#searchbutton').click(function() {
  $("table tr").remove();
  var searchText= $('#searchtext').val();
  fetchData('https://swapi.co/api/people/?search=' + searchText).then((data) => {
    data.results.forEach(result => {
      const row = document.createElement('tr')
      const name = document.createElement('td')
      row.appendChild(name)
      name.textContent = result.name
      const height = document.createElement('td')
      row.appendChild(height)
      height.textContent = result.height + 'cm'
      const mass = document.createElement('td')
      row.appendChild(mass)
      mass.textContent = result.mass + 'kg'
      const gender = document.createElement('td')
      row.appendChild(gender)
      gender.textContent = result.gender
      const films = document.createElement('td')
      row.appendChild(films)
      var episodelist = []
      for (var j=0; j < result.films.length; j++) {
        var episode = result.films[j]
        episodelist.push(' ' + episode.substr(-2, 1))
      }
      films.textContent = 'Episodes: ' + episodelist

      table.appendChild(row)
      })
  })
})
