

export const convertPathToTitle = (path: string) => path
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
    .replace(/^\//, '');
