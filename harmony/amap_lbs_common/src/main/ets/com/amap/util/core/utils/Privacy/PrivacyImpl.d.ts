import HashMap from '@ohos.util.HashMap'; import { SDKInfo } from '../../SDKInfo'; import { AMapPrivacyInfoStatus, AMapPrivacyShowStatus, AMapPrivacyAgreeStatus, IPrivacy } from '../../interface/IPrivacy'; declare class y37 implements IPrivacy { z35: AMapPrivacyInfoStatus; a36: AMapPrivacyShowStatus; b36: string; c36: string; showTime: string; d36: AMapPrivacyAgreeStatus; e36: string; f36: string; g36: string; h36: string; i36: string; updatePrivacyShow(f45: AMapPrivacyShowStatus, g45: AMapPrivacyInfoStatus, h45: SDKInfo, context: Context): void; updatePrivacyAgree(d45: AMapPrivacyAgreeStatus, e45: SDKInfo, context: Context): void; checkPrivacyStatus(c45: SDKInfo, context: Context): boolean; j36(context: Context): void; k36(context: Context): boolean; m36(b45: AMapPrivacyInfoStatus): number; n36(a45: AMapPrivacyShowStatus): number; o36(z44: AMapPrivacyAgreeStatus): number; l36(y44: SDKInfo, context: Context): void; getRequestHeader(x44: SDKInfo): Record<string, string>; p36(): HashMap<string, string>; } export declare const privacyImpl: y37; export {}; 