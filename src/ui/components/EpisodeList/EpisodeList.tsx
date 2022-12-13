import React from "react"
import { COLORS } from "theme/colors"
import { IEpisode } from "utils/interfaces/podcast-detail.interface"
import { Types, Weights } from "../Typography/Typography"
import { Table, TableHader, ItemList } from "./EpisodeList.styled"

interface IEpisodeListProps {
  episodes: IEpisode[]
  onClick: (episodeId: string) => void
}

const EpisodeList: React.FC<IEpisodeListProps> = ({ onClick, episodes }) => {
  return (
    <Table>
      <TableHader>
        <ItemList style={{ width: "70%" }} type={Types.P} weight={Weights.SEMIBOLD} color={COLORS.gray1000}>
          Title
        </ItemList>
        <ItemList style={{ width: "15%" }} type={Types.P} weight={Weights.SEMIBOLD} color={COLORS.gray1000}>
          Date
        </ItemList>
        <ItemList style={{ width: "15%" }} type={Types.P} weight={Weights.SEMIBOLD} color={COLORS.gray1000}>
          Duration
        </ItemList>
      </TableHader>
      {/* {episodes.map((episode, index) => (
        <TableRow index={index} key={episode.id} onClick={() => onClick(episode.id)}>
          <ItemList style={{ width: "70%" }} type={Types.P} color={COLORS.blue400}>
            {episode.title}
          </ItemList>
          <ItemList style={{ width: "15%" }} type={Types.P} color={COLORS.gray1000}>
            {episode.date.toLocaleDateString()}
          </ItemList>
          <ItemList style={{ width: "15%" }} type={Types.P} color={COLORS.gray1000}>
            {formatDurationByMs(episode.duration)}
          </ItemList>
        </TableRow>
      ))} */}
    </Table>
  )
}

export default EpisodeList
