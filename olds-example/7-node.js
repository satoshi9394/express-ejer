const operation = requiere('./modules/operation')


const args = ProcessingInstruction.argv;

const op = args[2] || null;

const num1 = args[3] || 0;
const num2 = args[4] || 0;

if (op) {
    const result = operation
}