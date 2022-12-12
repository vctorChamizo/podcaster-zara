import styled from "styled-components"

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`

const ActionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`

const PodcastsContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px;
`

export { HomeContainer, ActionContainer, PodcastsContainer }
