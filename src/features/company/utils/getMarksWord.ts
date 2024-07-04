export const getMarksWord = (points: number): string => {
    if (points % 10 === 1 && points % 100 !== 11) {
        return 'балл';
    } else if (
        [2, 3, 4].includes(points % 10) &&
        ![12, 13, 14].includes(points % 100)
    ) {
        return 'балла';
    } else {
        return 'баллов';
    }
};
