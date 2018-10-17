import gql from 'graphql-tag'
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://api-useast.graphcms.com/v1/cjn39wlms2lf301g5rhj19k0s/master'
})

import './style.scss'

var contenido = document.querySelector('.main__projects')

client.query({
  query: gql`
    query projects {
      projects {
        id
        title
        categories
        images {
          handle
        }
        coverImage {
          handle
        }
      }
    }
  `,
})
.then(datos => {
  tabla(datos)
})
.catch(error => console.error(error))

function tabla(datos) {
  contenido.innerHTML = ''
  datos = Array.from(datos.data.projects)
  datos.forEach(element => {
    contenido.innerHTML += `
    <article class="main__projects--article">
      <figure class="main__project">
        <video src="https://media.graphcms.com/${element.coverImage.handle}" poster="https://media.graphcms.com/${element.images[0].handle}" autoplay loop playsinline>
        </video>
      </figure>
      <div class="description">
          <h3 class="project__title">${element.title}</h3>
          <p class="project__description">A movement to recode the American economy.</p>
      </div>
    </article>
    `
  });
}

const menu = document.getElementById("menu"),
    header = document.querySelector('header')

document.querySelector('.a-hamburgerMenu').addEventListener('click', function(){
  header.classList.toggle('menu-is-open')
})