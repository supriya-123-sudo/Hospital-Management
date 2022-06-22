import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PatientRegistrationService {

  private baseUrl = 'http://localhost:9091/patients';

  constructor(private http:HttpClient) { }

  public doPatRegistration(patient:any){
    return this.http.post("http://localhost:9091/patients/",patient, {responseType:'text' as 'json'});
  }

  public getAllPatient(){
    return this.http.get("http://localhost:9091/patients/getAllPatients");
  }
  
  public deleteAPatient(patientId:any){

    return this.http.delete("http://localhost:9191/patients/"+patientId);
  }

  
  public getPattientInfo(patientId:any){

    return this.http.get("http://localhost:9191/patients/"+patientId);
  }

 
  getPatientById(patientId:number){
    return this.http.get("http://localhost:9091/patients/"+patientId);
  }

}
