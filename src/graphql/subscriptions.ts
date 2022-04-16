/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbumCategory = /* GraphQL */ `
  subscription OnCreateAlbumCategory {
    onCreateAlbumCategory {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeading
          createdAt
          updatedAt
          albumCategoryAlbumsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateAlbumCategory = /* GraphQL */ `
  subscription OnUpdateAlbumCategory {
    onUpdateAlbumCategory {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeading
          createdAt
          updatedAt
          albumCategoryAlbumsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteAlbumCategory = /* GraphQL */ `
  subscription OnDeleteAlbumCategory {
    onDeleteAlbumCategory {
      id
      title
      albums {
        items {
          id
          name
          by
          numberOfLikes
          imageUri
          artistsHeading
          createdAt
          updatedAt
          albumCategoryAlbumsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
      id
      name
      by
      numberOfLikes
      imageUri
      artistsHeading
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          createdAt
          updatedAt
          albumSongsId
        }
        nextToken
      }
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      albumCategoryAlbumsId
    }
  }
`;
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
      id
      name
      by
      numberOfLikes
      imageUri
      artistsHeading
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          createdAt
          updatedAt
          albumSongsId
        }
        nextToken
      }
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      albumCategoryAlbumsId
    }
  }
`;
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
      id
      name
      by
      numberOfLikes
      imageUri
      artistsHeading
      songs {
        items {
          id
          imageUri
          uri
          title
          artist
          createdAt
          updatedAt
          albumSongsId
        }
        nextToken
      }
      albumCategory {
        id
        title
        albums {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      albumCategoryAlbumsId
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong {
    onCreateSong {
      id
      imageUri
      uri
      title
      artist
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeading
        songs {
          nextToken
        }
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        albumCategoryAlbumsId
      }
      createdAt
      updatedAt
      albumSongsId
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong {
    onUpdateSong {
      id
      imageUri
      uri
      title
      artist
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeading
        songs {
          nextToken
        }
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        albumCategoryAlbumsId
      }
      createdAt
      updatedAt
      albumSongsId
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong {
    onDeleteSong {
      id
      imageUri
      uri
      title
      artist
      album {
        id
        name
        by
        numberOfLikes
        imageUri
        artistsHeading
        songs {
          nextToken
        }
        albumCategory {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        albumCategoryAlbumsId
      }
      createdAt
      updatedAt
      albumSongsId
    }
  }
`;
