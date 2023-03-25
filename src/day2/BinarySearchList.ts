export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const middlePoint = Math.floor(lo + (hi - lo) / 2);
        const value = haystack[middlePoint];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            hi = middlePoint;
        } else {
            lo = middlePoint + 1;
        }
    } while (lo < hi);

    return false;
}
