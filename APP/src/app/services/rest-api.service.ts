import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Card } from '../models/card.model';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  private apiURL = 'http://localhost:8000';
  public CardID : any;
  public UserID: string=  '';

  constructor(private http: HttpClient) { }

    
  createUser(newUser:User){
    return this.http.post(this.apiURL+'/User', newUser)
  }

  getAllCards(){
    debugger;
    return this.http.get(this.apiURL+'/Card')
  }

  updateCard(cardData:Card){
    return this.http.put(this.apiURL+'/Card/'+this.CardID, cardData)
  }

  createCard(cardData:Card){debugger;
    return this.http.post(this.apiURL+'/Card', cardData)
  }


  getCardByID(){
    return this.http.get(this.apiURL+'/Card/'+ this.CardID)
  }}


  // getAllCars() {
  //   return this.http.get(this.apiURL + '/Card')
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  // }

//  handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', error.error.message);
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${error.status}, ` +
//         `body was: ${error.error}`);
//     }
//     // return an observable with a user-facing error message
//     return throwError(
//       `Error code ${error.status}: ${error.error ? error.error.text : ""}`);
//   }

// 
