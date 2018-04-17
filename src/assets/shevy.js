import Shevy from 'shevyjs';

export const shevySingleton = (function () {
    let instance = null;
    return {
        getInstance () {
            if (instance === null) {
                instance = new Shevy({
                    baseFontSize: '14px',
                    baseLineHeight: 1.5,
                    proximity: true,
                    proximityFactor: 0.5,
                    baseFontScale: 'minorThird'
                });
                instance.constructor = null;
            }
            return instance;
        }
    }
})();