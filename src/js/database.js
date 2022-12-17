import { getPath, getInfo, getPathWithID } from "./utils";

export async function getProfile() {
  const path = getPath('profile')
  const response = await getInfo(path)
  console.log(response);
  return response.data
}
export async function getHighline() {
  const path = getPath('highline')
  const response = await getInfo(path)
  console.log(response);
  return response.data
}
export async function getCards(id) {
  const path = getPathWithID(id, 'cards')
  const response = await getInfo(path)
  console.log(response);
  return response.data
}
export async function getMessage(id) {
  const path = getPathWithID(id, 'message')
  const response = await getInfo(path)
  console.log(response);
  return response.data
}
export async function getRequest(id) {
  const path = getPathWithID(id, 'request')
  const response = await getInfo(path)
  console.log(response);
  return response.data
}

export const profile = await getProfile()
export const highline = await getHighline()
export const cards = await getCards()
export const message = await getMessage()
export const request = await getRequest()
