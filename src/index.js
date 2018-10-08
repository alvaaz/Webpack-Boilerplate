import { groupBy } from "lodash-es"
import people from "./people"

import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'https://api-useast.graphcms.com/v1/cjlwqnow603bo01gp1ub4hgoc/master'
})



import './style.scss'
import './image-example'

const managerGroups = groupBy(people, "manager")

const root = document.createElement("div")

root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
document.body.appendChild(root)

import gql from 'graphql-tag';

client.query({
  query: gql`
    query cars {
      cars {
        id
        title
        price
        image {
            handle
        }
      }
    }
  `,
})
  .then(data => console.log(data))
  .catch(error => console.error(error));