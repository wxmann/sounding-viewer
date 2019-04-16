// Specific gas constant for dry air. Units: J kg-1 K-1
const R_dry = 287.04;

// Constant-pressure heat capacity of dry air at 300K. Units: J kg-1 K-1
const Cp_dry = 1005.7;

// The Poisson constant for dry air, the ratio of the gas constant
// for dry air to the specific heat at constant pressure.
const poissonDry = R_dry / Cp_dry;

// Reference pressure used in adiabatic processes, units: hPa
const pRef = 1000.0;

/**
 * Mixing ratio in g/kg given pressure and temperature.
 * Taken from Stipanuck (1973).
 *
 * @param p pressure, in hPa
 * @param T temperature, in degrees C
 * @returns {number}
 */
const mixingRatio = function(p, T) {
    const es = satVaporPres(T);
    return 622 * es / (p - es);
};

/**
 * Saturation vapor pressure in hPa valid for temperature ranges -35C <= T <= 35C.
 * Taken from Stipanuck (1973).
 *
 * @param T temperature in degrees C.
 * @returns {number}
 */
const satVaporPres = function(T) {
    const Tk = temp_CtoK(T);
    const a0 = 23.832241 - 5.02808 * log10(Tk);
    const a1 = 1.3816E-7 * Math.pow(10, 11.344 - 0.0303998 * Tk);
    const a2 = 0.0081328 * Math.pow(10, 3.49149 - 1302.8844 / Tk);
    return Math.pow(10, a0 - a1 + a2 - 2949.076 / Tk);
};

const potentialTemp = function(p, T) {
    const Tk = temp_CtoK(T);
    const theta = Tk * Math.pow(pRef / p, poissonDry);
    return temp_KtoC(theta);
};

const thetaE = function(p, T) {
    const Tk = temp_CtoK(T);
    const expArg = -2.6518986 * mixingRatio(p, T) / Tk;
    const thetaS = temp_CtoK(potentialTemp(p, T)) / Math.exp(expArg);
    return temp_KtoC(thetaS);
};

/**
 * LCL temperature (C) from environmental temperature and dewpoint.
 * Adapted from Bolton (1980) eq. 15.
 *
 * @param T the environmental temperature in degrees Celsius.
 * @param Td the dewpoint temperature in degress Celsius.
 * @returns {number}
 */
const lclT_from_TTd = function(T, Td) {
    const Tk = temp_CtoK(T);
    const Tdk = temp_CtoK(Td);
    const denom = 1/(Tdk - 56) + Math.log(Tk/Tdk)/800;
    return temp_KtoC(1/denom + 56);
};

const presAtDryAdiabat = function(T, theta) {
    const Tk = temp_CtoK(T);
    const theta_K = temp_CtoK(theta);
    return pRef * Math.pow(Tk / theta_K, 1/poissonDry);
};

/**
 * Finds temperature at pressure level given saturation mixing ratio.
 * Taken from Stipanuck (1973).
 *
 * @param p the pressure level in hPa
 * @param r the mixing ratio in g/kg
 * @returns {number}
 */
const tempAtMixingRatio = function(p, r) {
    const m = r * p / (622 + r);
    const x = 0.0498646455 * log10(m) + 2.4082965;
    const temp = Math.pow(m, 0.0915) - 1.2035;
    const Tk = Math.pow(10, x) - 7.07475 + 38.9114*temp*temp;
    return temp_KtoC(Tk);
};

// const virtualTempAtPres = function (p, T) {
//     const r = mixingRatio(p, T);
//     return virtualTempAtMixingRatio(T, r);
// };

const virtualTempAtMixingRatio = function (T, r) {
    const Tk = temp_CtoK(T);
    const Tvk = Tk * (1+0.61*r / 1000);
    return temp_KtoC(Tvk);
};

const temp_CtoK = function(T) {
    return T + 273.15;
};

const temp_KtoC = function(T) {
    return T - 273.15;
};

/**
 * Finds temperature at pressure level given potential temperature theta.
 * Adapted from Bolton (1980).
 *
 * @param p the pressure level in hPa
 * @param theta the potential temperature, in Celsius.
 */
const tempAtDryAdiabat = function(p, theta) {
    const thetaK = temp_CtoK(theta);
    const Tk = thetaK * Math.pow(p / pRef, poissonDry);
    return temp_KtoC(Tk);
};

/**
 * Finds temperature at pressure level for moist adiabat with wet-bulb potential temperature theta-w.
 *
 * @param p pressure level, in hPa
 * @param thetaw the wet-bulb potential temperature for the pseudoadiabat, in Celsius
 */
const tempAtMoistAdiabat = function(p, thetaw) {
    const thetae = thetaE_from_thetaW(thetaw);
    return tempAtThetaE(p, thetae);
};

/**
 * Calculate equivalent potential temperature (theta-e) from wet-bulb potential temperature (theta-w).
 * Taken from Bolton (1980).
 *
 * @param thetaw wet-bulb potential temperature, in Celsius.
 */
const thetaE_from_thetaW = function(thetaw) {
    const es = satVaporPres(thetaw);
    const rs = 622 * es / (1000 - es);
    const thetaw_K = temp_CtoK(thetaw);
    const thetae_K = thetaw_K * Math.exp((3.376 / thetaw_K - 0.00254)* rs * (1+ 0.81E-3 * rs));
    return temp_KtoC(thetae_K);
};

/**
 * Calculate temperature at a given theta-e and pressure level. Iterative algorithm adapted from
 * Stipanuck (1973).
 *
 * @param p pressure level, in hPa
 * @param thetae equivalent potential temperature, in Celsius.
 */
const tempAtThetaE = function(p, thetae) {
    const TguessK = 253.16;
    const adjustment = 120;
    const thetaSGuess = temp_CtoK(thetaE(p, temp_KtoC(TguessK)));
    const i = 0;
    const eps = 1E-6;
    const maxIterations = 50;
    const thetaS_K = temp_CtoK(thetae);

    while (i < maxIterations && Math.abs(thetaSGuess - thetaS_K) > eps) {
        adjustment /= 2;
        if (thetaSGuess < thetaS_K) {
            TguessK += adjustment;
        } else {
            TguessK -= adjustment;
        }
        thetaSGuess = temp_CtoK(thetaE(p, temp_KtoC(TguessK)));
        i++;
    }
    return temp_KtoC(TguessK);
};

function log10(x) {
    return Math.log(x) / Math.log(10);
}

export {
    mixingRatio,
    satVaporPres,
    potentialTemp,
    thetaE,
    lclT_from_TTd,
    presAtDryAdiabat,
    tempAtMixingRatio,
    virtualTempAtMixingRatio,
    tempAtDryAdiabat,
    thetaE_from_thetaW,
    tempAtThetaE
};
