export default class CommitCard {


    createCard(element) {

        const date = element.commit.author.date;
        const name = element.author.login;
        const email = element.commit.author.email;
        const photo = element.author.avatar_url;
        const text = element.commit.message;
        const template = `

  <div class = "card card_place_commits carousel-cell">
      <time datetime =${date}
  class = "card__text-date card__text-date_commits">
      </time>

      <div class = "card__avatar-box" >
      <img src = ${photo}
  alt = "аватар на Гитхабе"
  class = "card__image card__image_commits" >


      <div class = "card__wrapper card__wrapper_commits" >
      <p class = "card__text-name card__text-name_commits" >
     ${name} </p> <p class = "card__text-mail card__text-mail_commits" >
     ${email} </p> </div> </div> <p class = "card__text-paragraph card__text-paragraph_commits" >
      ${text} </p>


      </div>
 `
        return template
    }
}