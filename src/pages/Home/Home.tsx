import { useContext, useEffect, useState } from "react"
import { PodcastContext } from "providers/PodcastProvider"
import { IPodcast } from "utils/interfaces/podcasts.interface"
import { HomeContainer, PodcastsContainer, ActionContainer } from "./Home.styled"
import Counter from "ui/components/Counter/Counter"
import Layout from "ui/Layout/Layout"
import SearchBar from "ui/components/SearchBar/SearchBar"
import PodcastCard from "ui/components/Cards/PodcastCard/PodcastCard"
import { ROOT_ROUTES } from "utils/constants/route.constants"
import { useNavigate } from "react-router-dom"
import { HomeLogic } from "./Home.logic"

const Home: React.FC = () => {
  const navigate = useNavigate()

  const { podcasts } = useContext(PodcastContext)

  const [filteredPodcasts, setFilteredPodcasts] = useState<IPodcast[]>([] as IPodcast[])

  const handleOnChangeSearchBar = (value: string) => setFilteredPodcasts(HomeLogic.filterPodcasts(value, podcasts))

  const handleOnClickCard = (podcast: IPodcast) => {
    navigate(`${ROOT_ROUTES.PODCAST}/${podcast.id.attributes["im:id"]}`)
  }

  useEffect(() => {
    setFilteredPodcasts(podcasts)
  }, [podcasts])

  return (
    <Layout>
      <HomeContainer>
        <ActionContainer>
          <Counter count={filteredPodcasts.length} />
          <SearchBar placeholder="Filter podcasts..." onChange={handleOnChangeSearchBar} />
        </ActionContainer>
        <PodcastsContainer>
          {filteredPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id.label} {...HomeLogic.parserPodcasts(podcast)} onClick={() => handleOnClickCard(podcast)} />
          ))}
        </PodcastsContainer>
      </HomeContainer>
    </Layout>
  )
}

export default Home
