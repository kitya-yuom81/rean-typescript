function crash(): never {
    throw new Error("This function always throws an error");
}

crash();