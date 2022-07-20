// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {get, post, requestBody, RequestBodyObject} from '@loopback/rest';

export class GetTestResultController {
  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }

  @post('/getTestResult')
  getTestResult(@requestBody() req: RequestBodyObject): object {
    // to calculate the total sum of numbers
    let sum = 0;
    // splitting the string at , and converting it into an array
    const temp: Array<string> = req.numbers.split(',');
    // looping through the array to calculate sum
    // but converting it into integer first
    temp.forEach(item => {
      sum += parseInt(item);
    });
    // returning the sum in the desired format
    return {total: sum};
  }
}
