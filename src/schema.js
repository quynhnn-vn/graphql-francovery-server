const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    photos(location: String!): AutogeneratedMainType
    articles(location: String!): AutogeneratedMainType
    weather(location: String, lat: String, lon: String): AutogeneratedMainType
  }
  type AutogeneratedMainType {
    results: [Results]
    articles: [Articles]
    list: [List]
  }
  type Results {
    id: ID
    user: User
    urls: Urls
  }
  type Urls {
    regular: String
  }
  type User {
    id: String
    username: String
    portfolio_url: String
    profile_image: ProfileImage
  }
  type ProfileImage {
    small: String
  }
  """News API""" 
  type Articles {
    title: String
    description: String
    url: String
    urlToImage: String
    publishedAt: String
    content: String
    source: Source
  }
  type Source {
    name: String
  }

  """Openweather API"""
  type Clouds {
    all: Int
  }
   
  type Main {
    temp: Float
    feels_like: Float
    humidity: Int
  }
  
  type List {
    dt_txt: String
    clouds: Clouds
    main: Main
  }
`;

module.exports = typeDefs;
