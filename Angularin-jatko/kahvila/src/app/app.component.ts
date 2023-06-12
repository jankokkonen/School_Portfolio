import { Component } from '@angular/core';
import { TarjoiluOhje } from 'src/shared/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarjoiluOhje: TarjoiluOhje[] = [];

  kahvinMyynti(myyntiData: {poydanNumero:string, myyntiMaara:string}) {
    this.tarjoiluOhje.push({
      tyo: 'myyty',
      poydanNumero: myyntiData.poydanNumero,
      myyntiMaara: myyntiData.myyntiMaara
    });
  }

  kahvinTarjoilu(tarjoiluData: {poydanNumero:string, myyntiMaara:string}) {
    this.tarjoiluOhje.push({
      tyo: 'tarjoiltu',
      poydanNumero: tarjoiluData.poydanNumero,
      myyntiMaara: tarjoiluData.myyntiMaara
    });
  }
}