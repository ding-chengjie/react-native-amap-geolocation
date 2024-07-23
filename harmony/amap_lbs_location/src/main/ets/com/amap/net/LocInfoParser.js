import { TextUtils, Utils } from '@amap/amap_lbs_common'; import { AMapLocationReGeocodeLanguage } from '../interface/AMapLocationCommonObj'; const c12 = "[]"; const f12 = "市"; const h12 = "010"; const i12 = "021"; const j12 = "022"; const k12 = "023"; export class n12 { constructor(options) { this.locationOptions = options; } z8(j13) { let k13 = JSON.parse(j13); let l13 = k13.regeocode; return this.a9(l13); } b9(g13) { let h13 = new Uint8Array(g13); let i13 = Utils.uint8ArrayToString(h13); return this.z8(i13); } a9(y12) { let z12 = { country: '', province: '', city: '', district: '', citycode: '', adcode: '', street: '', number: '', poiName: '', aoiName: '', desc: '', address: '' }; let country = this.c9(y12.addressComponent.country); z12.country = country; let a13 = this.c9(y12.addressComponent.province); z12.province = a13; let b13 = this.c9(y12.addressComponent.citycode); z12.citycode = b13; let city = y12.addressComponent.city; if (b13.endsWith(h12) || b13.endsWith(i12) || b13.endsWith(j12) || b13.endsWith(k12)) { if (!TextUtils.isEmpty(a13)) { city = a13; } } else { city = this.c9(y12.addressComponent.city); } if (TextUtils.isEmpty(city)) { city = a13; } z12.city = city; let c13 = this.c9(y12.addressComponent.district); z12.district = c13; let d13 = this.c9(y12.addressComponent.adcode); z12.adcode = d13; let street = this.c9(y12.addressComponent.streetNumber.street); z12.street = street; let number = this.c9(y12.addressComponent.streetNumber.number); z12.number = number; if (y12.pois.length > 0) { let poi = y12.pois[0]; z12.poiName = this.c9(poi.name); } if (y12.aois.length > 0) { let e13 = y12.aois[0]; z12.aoiName = this.c9(e13.name); } this.d9(z12); return z12; } d9(v12) { var w12; let desc = []; if (v12.province) { desc.push(v12.province); } if (v12.city) { this.o9(v12.province, v12.city, desc); } if (v12.district) { desc.push(v12.district); } if (v12.street) { desc.push(v12.street); } if (v12.number) { desc.push(v12.number); } if (v12.poiName) { this.p9(v12.adcode, v12.poiName, desc, v12); } v12.desc = desc.join(""); let x12 = v12.adcode; if (x12 && x12.trim().length > 0 && ((w12 = this.locationOptions) === null || w12 === void 0 ? void 0 : w12.reGeocodeLanguage) !== AMapLocationReGeocodeLanguage.English) { v12.address = desc.join("").replace(new RegExp("\\s+", "g"), ""); } else { v12.address = desc.join(" "); } } p9(r12, s12, desc, t12) { var u12; if (!TextUtils.isEmpty(r12) && ((u12 = this.locationOptions) === null || u12 === void 0 ? void 0 : u12.reGeocodeLanguage) !== AMapLocationReGeocodeLanguage.English) { desc.push("靠近"); desc.push(s12); desc.push(" "); } else { desc.push("Near "); desc.push(s12); } } o9(o12, city, desc) { var q12; if (((q12 = this.locationOptions) === null || q12 === void 0 ? void 0 : q12.reGeocodeLanguage) === AMapLocationReGeocodeLanguage.English) { if (city !== o12) { desc.push(city); desc.push(" "); } } else { if (!(o12.includes(f12) && o12 === city)) { desc.push(city); desc.push(" "); } } } c9(str) { if (c12 === str) { return ""; } else { return str; } } } 