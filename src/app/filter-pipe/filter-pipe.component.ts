import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-filter-pipe',
  templateUrl: './filter-pipe.component.html',
  styleUrls: ['./filter-pipe.component.css']
})
export class FilterPipeComponent implements OnInit {

  promise;

  constructor() {
    this.promise = this.getPromise();
  }

  getPromise() {

    return new Promise((resolve, reject) => {
      let count = 1;
      setInterval(()=>{
        
        if(count<=3){
          console.log(count++);
        }
      },1000);
      setTimeout(() => {
        resolve("Data Received. Promise Successfull");
      }, 3000);
    
    });

  }

  users = [
    {
      name: 'Muni',
      joinedDate: new Date(15, 2, 2017)
    },
    {
      name: 'Ganesh',
      joinedDate: new Date(17, 7, 2018)
    },
    {
      name: 'Babu',
      joinedDate: new Date(4, 6, 2019)
    }
  ]



  ngOnInit(): void {
  }

}
