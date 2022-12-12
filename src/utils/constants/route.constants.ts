export const ROOT_ROUTES = {
  PODCAST: "/podcast",
  EPISODE: "/episode"
}

export const ROUTES = {
  HOME: "/",
  PODCAST: `${ROOT_ROUTES.PODCAST}/:podcastId`,
  EPISODE: `${ROOT_ROUTES.PODCAST}/:podcastId${ROOT_ROUTES.EPISODE}/:episodeId`
}
