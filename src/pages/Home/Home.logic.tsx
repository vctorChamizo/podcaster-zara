import { IPodcast } from "utils/interfaces/podcasts.interface"

export const HomeLogic = {
  filterPodcasts: (value: string, podcasts: IPodcast[]): IPodcast[] => {
    const _value = value.toLowerCase()
    return podcasts.filter((podcast) => {
      const artist = podcast["im:artist"].label.toLowerCase()
      const name = podcast["im:name"].label.toLowerCase()
      return artist.includes(_value) || name.includes(_value)
    })
  },

  parserPodcasts: (podcast: IPodcast) => {
    const image = podcast["im:image"][2].label
    const title = podcast["im:name"].label
    const author = podcast["im:artist"].label

    return { image, title, author }
  }
}
