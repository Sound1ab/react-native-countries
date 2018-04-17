import Shevy from 'shevyjs';

export const shevySingleton = (function () {
    let instance = null;
    return {
        getInstance () {
            if (instance === null) {
                instance = new Shevy();
                instance.constructor = null;
            }
            return instance;
        }
    }
})();