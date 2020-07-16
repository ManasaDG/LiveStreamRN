/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFilm = /* GraphQL */ `
  query GetFilm($id: ID!) {
    getFilm(id: $id) {
      id
      title
      genre
      hlsUrl
      thumbNailsUrls
      duration
      createdAt
      updatedAt
    }
  }
`;
export const listFilms = /* GraphQL */ `
  query ListFilms(
    $filter: ModelFilmFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFilms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        genre
        hlsUrl
        thumbNailsUrls
        duration
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLiveStream = /* GraphQL */ `
  query GetLiveStream($id: ID!) {
    getLiveStream(id: $id) {
      id
      playbackID
      streamKey
      latestAssetID
      IDforThumbnail
      status
      createdAt
      updatedAt
    }
  }
`;
export const listLiveStreams = /* GraphQL */ `
  query ListLiveStreams(
    $filter: ModelLiveStreamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLiveStreams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playbackID
        streamKey
        latestAssetID
        IDforThumbnail
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
