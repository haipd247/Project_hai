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
    const url = 'https://qa.ms.med247.co/review/v1/reviews'
    const payload = JSON.stringify({
        "target": "HR - 2022 - 116",
    
        "user": {
            "username": "Vũ Thị Mai Hương",
            "phone": "0968421849",
            "email": "maihuonghmu2397@gmail.com",
            "id": 123
        },
    
        "patient": {
            "username": "Vũ Thành Trung",
            "relationship": {
                "protector": null,
                "dependent": "Cháu"
            },
            "id": 124
        },
    
        "docter": {
            "username": "PGS.TS Nguyễn Văn A",
            "id": 125
        },
        
        "brand": {
            "name": "Thanh Nhan",
            "id": 7
        },
    
        "card": {
            "code": "HR - 2022",
            "method": "online",
            "id": 126,
            "service":{
                "id":1,
                "name":"Tên dịch vụ"
            },
            "completeDate": "2022-11-18T02:32:07.343Z"
        },
    
        "clinic": {
            "name": "Med247 Thanh Nhàn",
            "id": "123"
        },
    
        "components": [
            {
                "key": "doctor",
                "rate": 4,
                "comment": "Bác sĩ tư vấn nhiệt tình chu đáo, có chuyên môn cao!"
            },
            {
                "key": "feeling",
                "rate": 4
            },
            {
                "key": "secretary",
                "rate": 4
            },
            {
                "key": "video_call",
                "rate": 4
            },
            {
                "key": "recommend_friend",
                "rate": 5
            },
            {
                "key": "recommend_improve",
                "rate": 4,
                "comment": "Cần cải thiện thêm về cơ sở máy móc trang thiết bị vật chất và các dịch vụ khám"
            },
            {
                "key": "your_comment",
                "comment": "Cần cải thiện thêm về cơ sở máy móc trang thiết bị vật chất và các dịch vụ khám"
            }
        ]
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
