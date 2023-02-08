import http from 'k6/http';
import {sleep} from 'k6';
import  {check} from 'k6';
import  {group} from 'k6';


export const options = { 
    vus: 400,
    // iterations: 1000,
    duration: '1s', 
}
export  default function () {
    const url = 'https://qa.ms.med247.co/payment/hook/appotapay'
    const payload = JSON.stringify({
        "apiKey": "FJcmF8uj2hIN5FvvNk4pnp8xrz8ISveL",
        "partnerCode": "APPOTAPAY",
        "billCode": "test.50",
        "amount": 100000,
        "bankAccountNumber": "888872067688", 
        "bankAccountName": "AP NGUYEN VAN B",
        "bankCode": "VIETCAPITALBANK",
        "requestTime": 0,
        "transactionTime": 0,
        "transactionId": "Med",
        "extraData": "",
        "version": "",
        "memo": "",
        "signature": ""
    });
    
    const params = {
        header: {
            'Content-Type': 'application/json',
        },
    };

    const   res = http.post(url, payload, params);
    check(res, {
        'Response status is 200': (r) => r.status == 200,
       
    });
    sleep(1);
};
