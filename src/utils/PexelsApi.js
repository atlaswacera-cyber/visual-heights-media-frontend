const PHOTOS_BASE_URL = "https://api.pexels.com/v1";
const VIDEOS_BASE_URL = "https://api.pexels.com/videos";

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;

function checkResponse(response) {
  if (!response.ok) {
    throw new Error("Pexels could not complete this search.");
  }

  return response.json();
}

function getHeaders() {
  if (!apiKey) {
    throw new Error("Pexels API key is missing.");
  }

  return {
    Authorization: apiKey,
  };
}

function normalizePhoto(photo) {
  return {
    id: `photo-${photo.id}`,
    type: "photo",
    image: photo.src.large,
    alt: photo.alt || "Pexels photo",
    creator: photo.photographer,
    sourceUrl: photo.url,
  };
}

function normalizeVideo(video) {
  return {
    id: `video-${video.id}`,
    type: "video",
    image: video.image,
    alt: `Pexels video by ${video.user.name}`,
    creator: video.user.name,
    sourceUrl: video.url,
    videoUrl: video.video_files[0]?.link,
  };
}

export function searchPhotos(query) {
  const encodedQuery = encodeURIComponent(query);

  return fetch(`${PHOTOS_BASE_URL}/search?query=${encodedQuery}&per_page=12`, {
    headers: getHeaders(),
  })
    .then(checkResponse)
    .then((data) => data.photos.map(normalizePhoto));
}

export function searchVideos(query) {
  const encodedQuery = encodeURIComponent(query);

  return fetch(`${VIDEOS_BASE_URL}/search?query=${encodedQuery}&per_page=12`, {
    headers: getHeaders(),
  })
    .then(checkResponse)
    .then((data) => data.videos.map(normalizeVideo));
}
