import {

    OBJECT_FOR_LOAD
} from '../../constans/constans.js'

/**
 * 
 * @param {день последней недели} day 
 * @param {глобальный массив с данными} globalobject 
 * @return {массив конкретного дня недели} OBJECT_FOR_LOAD
 */

export let getInfoForLoad = function (dayss, globalobject) {
    let temporaryArrayForThisBlock = [];
    let objectforload = [];
    globalobject.forEach(function (element, i) {
        if (dayss.getDate() ==
            (new Date(element.date).getDate())) {
            temporaryArrayForThisBlock.push(i);
        }

    });
    temporaryArrayForThisBlock.forEach(function (element, i) {
        objectforload.push(globalobject[element])
    });

    // console.log(objectforload)
    return objectforload;

}