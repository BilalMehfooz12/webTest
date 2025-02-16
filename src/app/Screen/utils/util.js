export const breakString = (str, length) => {
    const firstLine = str.slice(0, length);
    const anotherLine = str.slice(length);
    return firstLine + "<br />" + anotherLine;
};
