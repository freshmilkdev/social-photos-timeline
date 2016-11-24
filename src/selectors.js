export const getUniqueYears = (photos) => {
    return [...new Set(photos.map(photo => new Date(photo.created * 1000).getFullYear()))];
};