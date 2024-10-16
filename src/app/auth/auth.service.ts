import { Injectable } from "@angular/core";
import { IUser } from "../shared/interfaces/User.inteface";

@Injectable({ providedIn: 'root' })
export class AuthService {

  getUsesData(token: string): null | IUser {
    return null
  }
}