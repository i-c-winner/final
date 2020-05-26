export default function separatorAndCount(string, word) {
    let count = null;
    let temporaryArrayForThisBlock = []
    try {
        temporaryArrayForThisBlock = string.split(" ")
    } catch {

        temporaryArrayForThisBlock = [];
    }
    temporaryArrayForThisBlock.forEach(element => {
        if (element.toLowerCase() == word.toLowerCase()) {
            count = count + 1;
        }

    });

    return count
}