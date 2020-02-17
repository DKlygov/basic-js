const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity != 'string'|| !parseFloat(sampleActivity) || !parseInt(sampleActivity) || sampleActivity < 0 || sampleActivity > 15) {
        return false;
    }else{
        sampleActivity = sampleActivity.replace(/^([^\.]*\.)|\./g, '$1' );
        var rateConstant = 0.693/HALF_LIFE_PERIOD;
        var initByFinal = MODERN_ACTIVITY/sampleActivity;
        var age = Math.ceil(Math.log(initByFinal)/rateConstant);

    }
    return age;
};
