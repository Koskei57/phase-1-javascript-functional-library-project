function myEach(testArr, alert) {
    //const objValues = object.values(testArr)
    Object.values(testArr).forEach(test => {
        alert(test)
    })
    return testArr;
}

// function myMap(testArr, callback) {
//      const testArr = unmodifiedTestArr.slice()
// const testObj = Object.assign({}, unmodifiedTestObj)
// const callback = (x) => (x * 3)
//     // }

function myMap(testArr, callback) {
    const arrValues = Object.values(testArr)
    callback = arrValues.map(x => x * 3)
    return callback
}

function myReduce(testArr, callback, acc) {

}

function myFind(testArr, callback) {
    testArr = Object.values(testArr)
    for (let i = 0; i < testArr.length; i++)
        if (callback(testArr[i]))
            return testArr[i]
    return undefined
}

function myReduce(newTestArr, callback, acc = 0) {
    const arrValues = Object.values(newTestArr);
    let sum = acc;
    for (let element of arrValues) {
        sum = callback(sum, element, newTestArr);
    }
    return sum;
}

function myFilter(testArr) {
    let arrValues = Object.values(testArr);
    return arrValues.filter((value) => value > 10);
}

function mySize(testArr) {
    let arrValues = Object.values(testArr)
    const newArr = new Set(arrValues)
    return newArr.size;
}


function myFirst(testArr, n) {
    let arrValues = Object.values(testArr)
    if (n) {
        return arrValues.slice(0, 3)
    }
    return arrValues[0]
}

function myLast(testArr, n = 0) {
    let newTest = [];
    if (n == 0) {
        return testArr[testArr.length - 1];
    }
    for (let i = n; i > 0; i--) {
        newTest.push(testArr[testArr.length - i])

    }
    return newTest;
}

function myKeys(arrays) {
    let newArrays = [];
    for (let key of Object.keys(arrays)) {
        newArrays.push(key);
    }
    return newArrays;
}

function myValues(arrays) {
    let newArray = [];
    for (let key of Object.values(arrays)) {
        newArray.push(key);
    }
    return newArray;
}