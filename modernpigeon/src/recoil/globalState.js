import { atom, RecoilState, selector } from 'recoil';
import { packageJson, packageJson1, packageJson2, userJson, userPackagesJson, blankPackageJson, deliveryServicesJson, googlePackageParams, deliveryDriversJson, pastPackageJson, pastPackageJson1, pastPackageJson2} from '../dummyJson/dummyJson';
import axios from 'axios';
//import { calculate_shipping } from '../pages/main';
// States for User

export const userLoggedInState = atom({
    key: 'userLoggedInState',
    default: true,
});

export const userState = atom({
    key: 'userState',
    default: userJson,
});

export const trackingDataQuery = selector({
    key: 'trackingDataQuery',
    get: ({ get }) => {
        get(forcePackageDataUpdateState);
        const trackingNumbers = get(trackingNumbersState);
        let trackingData = [];
        trackingNumbers.forEach((trackingNumber) => {
            trackingData.push(packageJson);
        });
        return trackingData;
    }
});

export const packageDataQuery = selector({
    key: 'packageDataQuery',
    get: ({ get }) => {
        get(forcePackageDataUpdateState);
        // hit api to get package data for user
        // add package tracking numbers to trackingNumbersState
        // and use trackingDataQuery to get package data
        return userPackagesJson;
    }
});

export const allPackageDataQuery = selector({
    key: 'allPackageDataQuery',
    get: ({ get }) => {
        get(forceAllPackageDataUpdateState);
        // hit api to get all package data
        // set trackingNumbersState to all tracking numbers
        // and use trackingDataQuery to get package data
        return userPackagesJson;
    }
});

// not being used rn
export const packageDataState = atom({
    key: 'packageDataState',
    default: [packageJson, packageJson1, packageJson2],
});

// not being used rn
export const packagePastState = atom({
    key: 'packagePastState',
    default: [pastPackageJson, pastPackageJson1, pastPackageJson2],
});

export const trackingNumbersState = atom({
    key: 'trackingNumbersState',
    default: [],
});

export const forcePackageDataUpdateState = atom({
    key: 'forcePackageDataUpdateState',
    default: 0,
});

export const forceAllPackageDataUpdateState = atom({
    key: 'forceAllPackageDataUpdateState',
    default: 0,
});

export const newPackageDetailsState = atom({
    key: 'newPackageDetailsState',
    default: blankPackageJson,
});

export const googlePackageParamsState = atom({
    key: 'googlePackageParamsState',
    default: googlePackageParams,
});

export const googleDistanceMatrixQuery = selector({
    key: 'googleDistanceMatrixQuery',
    get: ({ get }) => {
        get(forceDistanceUpdateState);
        var config = {
        method: 'get',
        url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=AIzaSyAtzrLYHipPdXCwdJ86gCvPMRzsB7a2rok',
        headers: {
            'Access-Control-Allow-Origin': '*',
         }
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        return response.data;
        })
        .catch(function (error) {
        console.log(error);
        });
    }
});

export const forceDistanceUpdateState = atom({
    key: 'forceDistanceUpdateState',
    default: 0,
});
////// for payment portal
export const currentPriceState = atom({
    key: 'currentPrice',
    default:0,
});

// on user log in set userLoggedInState to true
// on user log out set userLoggedInState to false
// on user log in set userState to userJson
// on user log out set userState to blankUserJson
// on user log in set trackingNumbersState to userPackagesJson.packageTrackingNumbers

// not sure where to set packageDataState or if it is even needed

// States for Delivery Service Admin

export const deliveryAdminLoggedInState = atom({
    key: 'deliveryAdminLoggedInState',
    default: true,
});

export const deliveryDriverLoggedInState = atom({
    key: 'deliveryDriverLoggedInState',
    default: false,
})

// dont know if need
export const deliveryDriverListState = atom({
    key: 'deliveryDriverListState',
    default: [deliveryDriversJson['deliveryDrivers'][0], deliveryDriversJson['deliveryDrivers'][1], deliveryDriversJson['deliveryDrivers'][2], deliveryDriversJson['deliveryDrivers'][3]],
});

export const deliveryDriversQuery = selector({
    key: 'deliveryDriversQuery',
    get: ({ get }) => {
        get(forceDeliveryDriverListUpdateState);
        // hit api to get delivery driver list
        return deliveryDriversJson;
    }
});

export const forceDeliveryDriverListUpdateState = atom({
    key: 'forceDeliveryDriverListUpdateState',
    default: 0,
});

export const deliveryServicesQuery = selector({
    key: 'deliveryServicesQuery',
    get: ({ get }) => {
        get(forceDeliveryServicesUpdateState);
        // hit api to get delivery services
        return deliveryServicesJson;
    }
});

export const forceDeliveryServicesUpdateState = atom({
    key: 'forceDeliveryServicesUpdateState',
    default: 0,
});

export const deliveryServicesState = atom({
    key: 'deliveryServicesState',
    default: [deliveryServicesJson['deliveryServices'][0], deliveryServicesJson['deliveryServices'][1], deliveryServicesJson['deliveryServices'][2], deliveryServicesJson['deliveryServices'][3], deliveryServicesJson['deliveryServices'][4]], 
});