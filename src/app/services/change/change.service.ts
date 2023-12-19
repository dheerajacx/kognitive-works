import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangeService {

  constructor() { }

  textSpaceAdder(text:string):string{
    return text.split("_").join(" ")
  }

  dateFormatChanger(dateString:string):string{
    var value:string
    const date=new Date(dateString)
    const givenDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const currentDate=new Date()
    if(currentDate.getDate()===givenDate.getDate() && currentDate.getMonth()===givenDate.getMonth() && currentDate.getFullYear()===givenDate.getFullYear())
    value="Today ["+(givenDate.getHours()<10?"0"+givenDate.getHours():givenDate.getHours())+":"+givenDate.getMinutes()+"]"
    else
    value=givenDate.getDate()+" "+givenDate.toLocaleString('default', { month: 'long' }).slice(0,3);
    return value
  }
  
}
