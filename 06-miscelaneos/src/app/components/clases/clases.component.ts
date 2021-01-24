import { Component, OnInit } from '@angular/core';

function sleep(secons: number) {
  return new Promise((resolve) => setTimeout(resolve, secons * 1000));
}

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css'],
})
export class ClasesComponent implements OnInit {
  alert = 'alert-success';
  loading = false;
  constructor() {}

  ngOnInit(): void {}

  async procesoAsync(): Promise<void> {
    this.loading = true;
    await sleep(2);
    this.loading = false;
  }
}
