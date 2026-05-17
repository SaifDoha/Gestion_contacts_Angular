import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from '../contact.interface';

@Component({
  selector: 'app-formulaire-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulaire-contact.component.html',
})
export class FormulaireContactComponent {
  @Output() contactAjoute = new EventEmitter<Contact>();

  nom: string = '';
  email: string = '';
  score: number = 10;
  role: 'admin' | 'user' | 'guest' = 'user';

  soumettre(): void {
    if (!this.nom || !this.email) return;
    const contact: Contact = {
      nom: this.nom,
      email: this.email,
      actif: true,
      score: this.score,
      role: this.role
    };
    this.contactAjoute.emit(contact);
    this.nom = '';
    this.email = '';
    this.score = 10;
    this.role = 'user';
  }
}
