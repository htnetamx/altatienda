const asyncForEach = async (array, callback) => {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const Helpers = {
    asyncForEach:(array, callback) =>  asyncForEach(array, callback)
};

module.exports = Helpers;
