export const getUniqueYears = (photos) => {
    return [...new Set(photos.map(photo => new Date(photo.created * 1000).getFullYear()))];
};

export const getPhotosByYear = (photos, year) => {
    return photos.filter(photo => new Date(photo.created * 1000).getFullYear() == year);
};