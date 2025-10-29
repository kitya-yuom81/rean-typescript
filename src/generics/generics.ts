function variable<T>(value: T): T {
    return value;
}

console.log(variable<number>(100))