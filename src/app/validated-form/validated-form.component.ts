import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, IListItem } from '../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-validated-form',
  templateUrl: './validated-form.component.html',
  styleUrls: ['./validated-form.component.scss']
})
export class ValidatedFormComponent {
  mainForm = new FormGroup({
    number: new FormControl(10, [Validators.required, Validators.min(18), Validators.max(120)]),
    combo: new FormControl(null, [Validators.required]),
    check: new FormControl(false, [Validators.requiredTrue]),
  })

  itemsListObservable = this.api.getList()

  itemsList: IListItem[] = []

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(){
    this.itemsListObservable.subscribe({
      next: (list) => {
        this.itemsList = list
      }
    })
  }

  onSubmit() {
    this.router.navigate(['success'])
  }
}
