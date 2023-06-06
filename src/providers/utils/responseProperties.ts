export function matchProperties<T extends { index?: number }>(a: any): T {
    const b: T = {};
    for (const key in a) {
        if (b.hasOwnProperty(key)) {
            b[key as keyof T] = a[key];
        }
    }
    return a;
}
