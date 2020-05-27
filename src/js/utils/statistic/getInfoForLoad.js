import {

    objectForLoad
} from '../../constans/constans.js'

/**
 * 
 * @param {день последней недели} day 
 * @param {глобальный массив с данными} globalobject 
 * @return {массив конкретного дня недели} objectForLoad
 */

export const getInfoForLoad = function (dayss, globalobject) {
    const temporaryArrayForThisBlock = [];
    const objectforload = [];
    globalobject.forEach(function (element, i) {
        if (dayss.getDate() ==
            (new Date(element.date).getDate())) {
            temporaryArrayForThisBlock.push(i);
        }

    });
    temporaryArrayForThisBlock.forEach(function (element, i) {
        objectforload.push(globalobject[element])
    });
    return objectforload;

}