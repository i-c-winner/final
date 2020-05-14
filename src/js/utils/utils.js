/**
 * Функция отправки запросов
 * @param {valid} проверка формы на валидность
 * @param {searh} куда отправляем запрос
 * @return {} возращает запрос
 */
export default function search(valid, lookingfoor) {
    if (valid) {
        lookingfoor
            .then((result) => {
                //console.log(result)
            });

    }
    return search;
}