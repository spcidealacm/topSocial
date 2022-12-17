import path from 'path-browserify'
import axios from "axios";

export function isNumber(element) {
  return element === +element
}

export function isFalsy(element) {
  return (element !== 0 && !!element == false)
}

export function getPath(...info) {
  const dbPath = import.meta.env.VITE_DB_PATH
  const fullPath = getHttpHeader() + path.join(dbPath, ...info)
  return fullPath
}

export function getPathWithID(id, ...info) {
  return isNumber(id) ? getPath(...info, id) : getPath(...info)
}

export function getHttpHeader() {
  if (getWebSiteRunningMode() === 'development' || getWebSiteRunningMode() === 'dev') {
    return 'http://'
  }
  return 'https://'
}

export function getWebSiteRunningMode() {
  return import.meta.env.MODE
}

export async function getInfo(path) {
  try {
    return await axios.get(path)
  } catch (error) {
    console.error(error);
  }
}