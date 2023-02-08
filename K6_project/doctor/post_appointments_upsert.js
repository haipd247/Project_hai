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
    const url = 'https://qa.ms.med247.co/doctor/v1/appointments/upsert'
    const payload = JSON.stringify({
        "id": 14999,
        "brand": {
            "name": "Online",
            "domain": "Online",
            "id": 15
        },
        "clinic": {
            "name": "Phòng khám Thanh Nhàn",
            "phone": "02473036115",
            "email": "",
            "slug": "phong-kham-luong-yen",
            "description": "",
            "address": {
                "formated": "số 9 đường Thanh Nhàn, phường Quỳnh Mai, quận Hai Bà Trưng, Hà Nội"
            },
            "id": 8
        },
        "date": "2022-11-28T09:30:00.000+00:00",
        "doHomeService": true,
        "doctor": {
            "username": "Đỗ Thị Dung",
            "phone": "0946780540",
            "email": "",
            "avatar": "1615797719-bs Dungg.png",
            "id": 14324
        },
        "patient": {
            "username": "Phạm Lê Minh Phúc",
            "phone": "0888920925",
            "email": "",
            "avatar": "",
            "id": 60070
        },
        "service": {
            "code": "PKTEL-005",
            "name": "Khám và tư vấn Tai - Mũi - Họng trực tuyến với bác sĩ chuyên khoa",
            "description": "",
            "price": 250000,
            "image": "",
            "limitTime": 15,
            "id": 237
        },
        "status": "active",
        "user": {
            "username": "Lê Thị Diệu Thu",
            "phone": "",
            "email": "dieuthu.le@med247.co",
            "avatar": "",
            "id": 60070
        }
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
