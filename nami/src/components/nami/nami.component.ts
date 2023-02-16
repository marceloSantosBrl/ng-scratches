import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-nami',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nami.component.html',
  styleUrls: ['./nami.component.scss']
})
export class NamiComponent {
  name = 'Nami'
  count = 0
  disabled = false
  imgSource = 'https://criticalhits.com.br/wp-content/uploads/2022/04/nami-768x432.jpg'
  messageMapping:
    { [k: string]: string } = {'=0': 'Não fui chamado.', '=1': 'Fui chamado uma vez.', 'other': 'Fui chamado # vezes.'};

  updateCount() {
    this.count += 1;
  }

  toggleHeader() {
    this.disabled = !this.disabled;
  }


}
