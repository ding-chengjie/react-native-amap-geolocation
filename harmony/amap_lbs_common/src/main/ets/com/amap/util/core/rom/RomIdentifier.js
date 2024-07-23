import y20 from '@ohos.deviceInfo'; import { Constants } from '../utils/Constants'; import { LogUtil } from '../utils/LogUtil'; import { w20 } from './Rom'; export class RomIdentifier { static o20() { if (RomIdentifier.p20 === undefined) { let d21 = new w20(); d21.c20 = RomIdentifier.q20(); d21.versionName = RomIdentifier.q20(); d21.versionCode = RomIdentifier.r20(); d21.d20 = RomIdentifier.s20(); d21.manufacturer = RomIdentifier.t20(); RomIdentifier.p20 = d21; } return RomIdentifier.p20; } static getDeviceType() { let c21 = y20.deviceType; LogUtil.i(Constants.z9, 'getDeviceType', 'the value of the deviceType is :' + c21); return c21; } static t20() { let b21 = y20.manufacture; LogUtil.i(Constants.z9, 'getManufacture', 'the value of the manufactureInfo is :' + b21); return b21; } static u20() { let a21 = y20.brand; LogUtil.i(Constants.z9, 'getBrand', 'the value of the device brand is :' + a21); return a21; } static v20() { let z20 = y20.marketName; LogUtil.i(Constants.z9, 'getMarketName', 'the value of the deviceinfo marketName is :' + z20); return z20; } static q20() { let distributionOSName = y20.distributionOSName; LogUtil.i(Constants.z9, 'getDistributionOSName', 'the value of the deviceinfo distributionOSName is :' + distributionOSName); return distributionOSName; } static s20() { let distributionOSVersion = y20.distributionOSVersion; LogUtil.i(Constants.z9, 'getDistributionOSVersion', 'the value of the deviceinfo distributionOSVersion is :' + distributionOSVersion); return distributionOSVersion; } static r20() { let distributionOSApiVersion = y20.distributionOSApiVersion; LogUtil.i(Constants.z9, 'getDistributionOSApiVersion', 'the value of the deviceinfo distributionOSApiVersion is :' + distributionOSApiVersion); return distributionOSApiVersion; } static x20() { let distributionOSReleaseType = y20.distributionOSReleaseType; LogUtil.i(Constants.z9, 'getDistributionOSReleaseType', 'the value of the deviceinfo distributionOSReleaseType is :' + distributionOSReleaseType); return distributionOSReleaseType; } } RomIdentifier.p20 = undefined; 