class MessageConstructor {
  constructor() {
  }

  createMessageForRottenTomatoes(responseObj) {
    if (responseObj["likes"] === "") {
      return `I am sorry i am unable to find the movie rating on rotten tomatoes please go to 
      https://www.rottentomatoes.com/search/?search=${responseObj["title"]}`;

    }
    else {
      return `${responseObj["rating"]} and ${responseObj["likes"]} people 
      like it on rottenTomatoes`

    }

  }

  createMessageForIMDB(responseObj) {
    if (responseObj["rating"] === "") {
      return `I am sorry i am unable to find the movie rating on rotten tomatoes please go to 
      https://www.imdb.com/find?ref_=nv_sr_fn&q=${responseObj["title"]}&s=all`;
    }
    else {
      return `${responseObj["rating"]} on IMDB`
    }

  }

  createMessage(response) {
    return `${this.createMessageForIMDB(response["imdb"])} and ${this.createMessageForRottenTomatoes(response["rottenTomatoes"])}`
  }


}

module.exports = new MessageConstructor();