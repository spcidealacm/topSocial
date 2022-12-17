import "./index.css"
import { cards, message, request, profile, highline } from "./data/db.json"
// import { cards, message, request, profile, highline } from "@/js/database"
import {
  navbar_container_logo,
  navbar_container_create_img,
  left_profile_img,
  left_profile_name,
  left_profile_at,
  middle_highline_description,
  middle_highline_description_img,
  middle_highline_description_p,
  middle_form_img,
  middle_form_input_text,
  create_news,
  create_profile_structure,
  create_picture_structure,
  create_control_structure,
  create_comment_structure,
  create_friend_list,
  create_request_list
} from "./src/js/common"

/* NAV */
navbar_container_logo.innerHTML = "TopSocial"
navbar_container_create_img.src = profile.img_src

/* LEFT */
left_profile_img.src = profile.img_src
left_profile_name.innerHTML = profile.name
left_profile_at.innerHTML = profile.at

/* MIDDLE */

// FORM
middle_form_img.src = profile.img_src
middle_form_input_text.placeholder = `What is on your mind, ${profile.name}?`

// HIGHLINE
middle_highline_description_p.forEach((element, index) => {
  element.innerHTML = highline.description[index]
});
middle_highline_description_img.forEach((element, index) => {
  element.src = `/images/profile/profile_${index + 2}.png`
})
middle_highline_description.forEach((element, index) => {
  element.style.backgroundImage = `url("/images/highline/highline_${index + 1}.jpeg")`
})

// CARD
const cardDom = document.querySelector('.card')

cards.forEach(element => {
  const doms = create_news()
  cardDom.appendChild(doms.info)
  create_profile_structure(doms.info_profile, element.profile)
  create_picture_structure(doms.info_picture, element.picture)
  create_control_structure(doms.info_control, element.control)
  create_comment_structure(doms.info_comment, element.comment)
})


//Message
const messageDom = document.querySelector('.friend-list')
create_friend_list(messageDom, message)

//Request
const requestDom = document.querySelector('.request-list')
create_request_list(requestDom, request)