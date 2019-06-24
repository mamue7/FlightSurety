
var FlightSuretyApp = artifacts.require("FlightSuretyApp");
var FlightSuretyData = artifacts.require("FlightSuretyData");
var BigNumber = require('bignumber.js');

var Config = async function(accounts) {
    
    // These test addresses are useful when you need to add
    // multiple users in test scripts
    let testAddresses = [
        "0x64A656796c5600C41e74386Ddf4e61C030412710",
        "0xb722AA1c7e0235b8d933E8173C665BA6163784c5",
        "0x8Ca687E2aE74D5691927Fa7F0E7016E402A75469",
        "0xAe5Fa96F9330c87A82920eC792F49dDb80907F4A",
        "0xeC79573CA0aA29b1891456Dd2b155bEfa742907D",
        "0x69a78f32FC04BC81492EA9CB94566aa78B15B0f9",
        "0x4F1248D9A822b60D98f6Edb349AFAd35a072cdd6",
        "0x5ffe52519561b71E521c1ad2166398405C9C663a",
        "0x585e2E5Be74c01568B0c9053a584Ea3Fd36d4F32"
    ];


    let owner = accounts[0];
    let firstAirline = accounts[1];

    let flightSuretyData = await FlightSuretyData.new(firstAirline);
    let flightSuretyApp = await FlightSuretyApp.new(flightSuretyData.address);

    
    return {
        owner: owner,
        firstAirline: firstAirline,
        weiMultiple: (new BigNumber(10)).pow(18),
        testAddresses: testAddresses,
        flightSuretyData: flightSuretyData,
        flightSuretyApp: flightSuretyApp
    }
}

module.exports = {
    Config: Config
};