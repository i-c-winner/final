export default function separatorAndCount(string, word) {
    let count = null;


    let marker = []
    try {
        marker = string.split(" ")
    } catch {

        marker = [];
    }
    marker.forEach(element => {
        if (element.toLowerCase() == word.toLowerCase()) {
            count = count + 1;
        }

    });

    return count
}