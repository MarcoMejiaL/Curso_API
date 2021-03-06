
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers:{
    'Content-Type': 'application/json;charset=utf-8',
  },
  params:{
    'api_key':api_key
  }
})


/* const Api_URL = 'https://api.themoviedb.org/3'; */

async function getTrendingMoviesPreview(){
  const {data,status} = await api.get('trending/movie/day')

  /* const res = await fetch(`${Api_URL}/trending/movie/day?api_key=4070f0ad7e0c3d1d4ce51071d9374427`)
  const data = await res.json(); */
  
  const movies = data.results;
  console.log('movies');
  console.log({data, movies});


  /* console.log(nose); */
  
  movies.map(item=>{
    const container = document.getElementById('sliderContainer');
    const divContenedorSlider = document.createElement('div')
    divContenedorSlider.classList.add('mySlides')
    divContenedorSlider.classList.add('fade')
    const createImg= document.createElement('img')  
    createImg.classList.add('img__slider')
    createImg.setAttribute('src', `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`)
    createImg.setAttribute('alt',item.original_title )
    const textoSlider = document.createElement('div');
    const texto = item.original_title;
    textoSlider.classList.add('text')
    textoSlider.innerHTML=texto
    divContenedorSlider.appendChild(createImg)
    divContenedorSlider.appendChild(textoSlider)
    container.appendChild(divContenedorSlider)
    
    
    
  })

}


/* const nose=  movies.sort((a,b)=>

    
      b.vote_average <a.vote_average
      /* if(b.vote_average<a.vote_average){ */
       
        
      /* } */
      
      

    
    /* )  
    nose.map(item =>{
      const prueba = document.getElementById('prueba')
      const imagenPrueba = document.createElement('img')
      imagenPrueba.setAttribute('src', `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`)
      prueba.appendChild(imagenPrueba)
    }) */ 
async function cardsMoviesPrevew(){
  const {data, status} = await api.get('trending/movie/day')

  const cardsMovies = data.results;
  const container = document.querySelector('.mainCard__Container')
  
cardsMovies.map(item=>
  {
    const movierCard = document.createElement('div');
    movierCard.classList.add('movierCard');
    movierCard.addEventListener('click',()=>{
      console.log('paquito');
    })
    const imgCard = document.createElement('img');
    imgCard.classList.add('imgCard');
    imgCard.setAttribute('src', `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`) 
    const tittleCard = document.createElement('h2');
    tittleCard.classList.add('titulo__cardMovie')
    const tituloApi = document.createTextNode(item.original_title)
    
    
    container.appendChild(movierCard);
    movierCard.appendChild(imgCard)
    movierCard.appendChild(tittleCard)
    tittleCard.appendChild(tituloApi)
    


  })
}


async function getMoviesGeneres(){
  const {data, status} = await api.get('genre/movie/list');
  
  const genres= data.genres;

  console.log(genres);
  
  const generesContainer = document.querySelector('.about--container--grid')
  console.log(generesContainer);
   genres.map(item=>{
  
  const genesresInnerlist = document.createElement('li');
  const genereTittle = document.createElement('h4');
  genesresInnerlist.addEventListener('click',()=>{
    location.hash= `#categories=${item.id}-${item.name}`
  })

   genesresInnerlist.classList.add('licardo')
  const generestitle= item.name
  genereTittle.innerHTML= generestitle 
  genesresInnerlist.appendChild(genereTittle)
  generesContainer.appendChild(genesresInnerlist)

  })  
}



async function getMoviesByCategorie(id){
  const {data, status} = await api.get('discover/movie',{
    params:{
      with_genres:id
    }
  })

  const cardsMovies = data.results;
  
  container.innerHTML = '' 
cardsMovies.map(item=>
  {
    
    const movierCard = document.createElement('div');
    movierCard.classList.add('movierCard');
    movierCard.addEventListener('click',()=>{
      location.hash = `#movie=${item.id}-${item.original_title}`
      console.log('paquito');
    })
    const imgCard = document.createElement('img');
    imgCard.classList.add('imgCard');
    imgCard.setAttribute('src', `https://image.tmdb.org/t/p/w500/${item.backdrop_path}`) 
    const tittleCard = document.createElement('h2');
    tittleCard.classList.add('titulo__cardMovie')
    const tituloApi = document.createTextNode(item.original_title)
    
    
    container.appendChild(movierCard);
    movierCard.appendChild(imgCard)
    movierCard.appendChild(tittleCard)
    tittleCard.appendChild(tituloApi)
    


  })
}



getTrendingMoviesPreview()
cardsMoviesPrevew()
getMoviesGeneres()

/* function pruebas(p){
  if( verdadero(p)){
    console.log('es verdad');
  }else{
    console.log('es falso');
  }
}



function verdadero(parametro){
  if (parametro == true){
    return true
  }
  else{
    return false
  }
}

pruebas(false) */

async function movieDetailsPage(movie_id){
  
  const {data} = await api.get(`movie/${movie_id}`)

  console.log({data});

  
  
  
  const sinopsisImg = document.createElement('img');
  sinopsisImg.classList.add('sinopsisImg');
  sinopsisImg.setAttribute('src',`https://image.tmdb.org/t/p/w500/${data.poster_path}`)

  const sinopsisTitle = document.createElement('h2');
  sinopsisTitle.classList.add('sinopsisTitle')
  sinopsisTitle.innerHTML=data.original_title

  const sinopsisContent = document.createElement('p');
  sinopsisContent.classList.add('sinopsisContent')
  sinopsisContent.innerHTML=data.overview;

  


 sinopsisPageContainer.appendChild(sinopsisImg)
 sinopsisPageContainer.appendChild(sinopsisTitle)
 sinopsisPageContainer.appendChild(sinopsisContent)
  
 
}

/* 507086 */

//api.themoviedb.org/3/movie/550?api_key=4070f0ad7e0c3d1d4ce51071d9374427

async function getMoviesBySearch(query){
  const {data} = await api.get('search/movie',{
    params:{
      query
    }
  })

  

  
  searchListContainer.innerHTML=''
  searchContainer.classList.remove('inactive')
  
  const resultsBySearchMovies = data.results
  console.log([resultsBySearchMovies]);


  resultsBySearchMovies.map(item=>{
    const listElementContainer = document.createElement('li');
    listElementContainer.classList.add('listElementContainer');
/* data.title */
    const imgListSample = document.createElement('img');
    imgListSample.classList.add('imgListSample')
    imgListSample.setAttribute('src', `https://image.tmdb.org/t/p/w500/${item.poster_path}`)

    const titleListSample = document.createElement('h5');
    titleListSample.classList.add('titleListSample');
    titleListSample.innerHTML=item.title
    /* titleListSample.createTextNode(data.title) */

    searchListContainer.appendChild(listElementContainer)
    listElementContainer.appendChild(imgListSample)
    listElementContainer.appendChild(titleListSample)

    
  })

  
}