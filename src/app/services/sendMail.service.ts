import { FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class Mailer {
    API_URL = 'https://softserver-haldebarhan.onrender.com/mail'
    constructor(private http: HttpClient) { }

    sendMail(data: FormGroup) {
        return this.http.post(this.API_URL, data, {
            headers: {'Content-Type':'application/json; charset=utf-8'}
        })
    }

    sendMailByClient(data: any){
        return this.http.post(this.API_URL, data)
    }
}