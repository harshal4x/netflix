const movies = Array.from({length:12}).map((_,i)=>({
  id:i+1,
  title:["Red Dawn","Midnight Run","Ocean's Echo","Skyline","Moonlight Drive","Silent River","Neon Nights","Last Horizon","Crimson Tide","Hidden Figures","Lost Signal","Echoes"][i%12],
  year:2010 + (i%12),
  // Using picsum.photos for placeholder images
  image: `https://picsum.photos/seed/netflix-${i+1}/400/600`
}))

const moviesEl = document.getElementById('movies')

function render(list){
  moviesEl.innerHTML = ''
  list.forEach(m => {
    const div = document.createElement('div')
    div.className = 'movie'
    div.innerHTML = `
      <img loading=lazy src="${m.image}" alt="${m.title}" />
      <div class="meta">
        <div class="title">${m.title}</div>
        <div class="year">${m.year}</div>
      </div>
    `
    moviesEl.appendChild(div)
  })
}

render(movies)

// Simple search
const search = document.getElementById('search')
search.addEventListener('input', e => {
  const q = e.target.value.toLowerCase().trim()
  if(!q) return render(movies)
  render(movies.filter(m => m.title.toLowerCase().includes(q) || String(m.year).includes(q)))
})
