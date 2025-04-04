let nota = 9;

switch (true) {
    case (nota >= 9 && nota <= 10):
        console.log("A");
        break;
    case (nota >= 7 && nota <= 8):
        console.log("B");
        break;
    case (nota >= 5 && nota <= 6):
        console.log("C");
        break;
    case (nota >= 3 && nota <= 4):
        console.log("D");
        break;
    case (nota >= 0 && nota <= 2):
        console.log("E");
        break;
    default:
        console.log("Nota invalida");
}