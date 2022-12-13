import React from "react"
import { COLORS } from "theme/colors"
import { IEpisode } from "utils/interfaces/podcast-detail.interface"
import { Sizes, Types, Weights } from "../Typography/Typography"
import { Table, TableHader, ItemList, TableRow } from "./EpisodeList.styled"
import { manageDuration } from "./utils"

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
      {episodes.map((episode, index) => (
        <TableRow index={index} key={episode.guid} onClick={() => onClick(episode.guid)}>
          <ItemList style={{ width: "70%" }} type={Types.P} size={Sizes.XS} color={COLORS.blue400}>
            {episode.title}
          </ItemList>
          <ItemList style={{ width: "15%" }} type={Types.P} size={Sizes.XS} color={COLORS.gray1000}>
            {new Date(episode.pubDate).toLocaleDateString()}
          </ItemList>
          <ItemList style={{ width: "15%" }} type={Types.P} size={Sizes.XS} color={COLORS.gray1000}>
            {manageDuration(episode.duration)}
          </ItemList>
        </TableRow>
      ))}
    </Table>
  )
}

export default EpisodeList
