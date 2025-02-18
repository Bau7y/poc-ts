function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

function printAll(strs: string | string[] | null){
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

function multiply(
    values: number[] | undefined,
    factor: number
): number[] | undefined{
    if (!values){
        return values
    } else {
        return values.map((x) => x * factor);
    }
}

