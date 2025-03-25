import axios from 'axios'
import { Character } from '../lib/types'

async function getAllCharacters(): Promise<Character[] | undefined> {
  try {
    const response = await axios.get("https://dragonball-api.com/api/characters?page=0&limit=100")
    return response.data.items

  } catch (error) {
    console.log(error)
  }

}

export default getAllCharacters