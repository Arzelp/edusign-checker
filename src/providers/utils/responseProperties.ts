export function matchProperties(a: any, b: any): any {
    for (const key in a) {
        if (b.hasOwnProperty(key)) {
            b[key] = a[key];
        }
    }
    return a;
}