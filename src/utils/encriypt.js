import CryptoJS from "crypto-js";

const key = '97edw8er7w87e9bfw6fw8f693q8fb3984f90348f9348f69384fy3df89346f98i34f37i94f6947fg639i4fg63457fg36';

export const encryptData = (data) => {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    return encrypted;
};

export const decryptData = (data) => {
    const decryptedBytes = CryptoJS.AES.decrypt(data, key);
    const result = JSON.parse(decryptedBytes.toString(CryptoJS.enc.Utf8));
    return result;
};
