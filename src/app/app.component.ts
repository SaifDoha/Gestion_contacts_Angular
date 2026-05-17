<<<<<<< HEAD
// app.component.ts
import { Component, OnInit } from '@angular/core';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact';
import { ListeContactsComponent } from './liste-contacts/liste-contacts';
import { Contact } from './contact.interface';
=======
import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from './contact.interface';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { FormulaireContactComponent } from './formulaire-contact/formulaire-contact.component';
import { StatsContactsComponent } from './stats-contacts/stats-contacts.component';
>>>>>>> 782a5ea (TP3 - Directives, Pipes et Services)

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [FormulaireContactComponent, ListeContactsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  mesContacts: Contact[] = [];

  constructor() {
    console.log('[App] constructor() appelé');
  }

  // ── Exercice 4-C : Pré-remplissage via ngOnInit ──────────────────────────────
  // ✅ Correct
ngOnInit(): void {
  this.mesContacts = [
    { nom: 'Ali Benali',  email: 'ali@example.com',  telephone: '0600000001' },
    { nom: 'Sara Alami',  email: 'sara@example.com', telephone: '0600000002' },
  ];
  console.log('[App] ngOnInit() — contacts pré-chargés :', this.mesContacts.length);
}

  // ── Exercice 3 : Réception du contact émis par le formulaire ─────────────────
  ajouterContact(contact: Contact): void {
    // Nouvelle référence tableau pour déclencher ngOnChanges
    this.mesContacts = [...this.mesContacts, contact];
    console.log('Contact ajouté :', contact);
  }

  // ── Exercice 5-A : Suppression ───────────────────────────────────────────────
  supprimerContact(index: number): void {
    this.mesContacts = this.mesContacts.filter((_, i) => i !== index);
    console.log(`Contact ${index} supprimé. Reste : ${this.mesContacts.length}`);
  }

  // ── Exercice 5-C : Statistiques ──────────────────────────────────────────────
  get nombreContacts(): number {
    return this.mesContacts.length;
  }

  get messageStatut(): string {
    if (this.mesContacts.length === 0) return 'Carnet vide';
    if (this.mesContacts.length === 1) return '1 contact';
    return `${this.mesContacts.length} contacts`;
  }
}
=======
  imports: [ListeContactsComponent, FormulaireContactComponent, StatsContactsComponent],
  template: `
    <h1>Gestionnaire de Contacts Angular 20</h1>
    <app-stats-contacts></app-stats-contacts>
    <app-formulaire-contact (contactAjoute)="onContactAjoute($event)"></app-formulaire-contact>
    <app-liste-contacts></app-liste-contacts>
  `
})
export class AppComponent implements OnInit {
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    console.log('App initialisee. Contacts :', this.contactService.getAll().length);
  }

  onContactAjoute(contact: Contact): void {
    this.contactService.ajouter(contact);
  }
}
>>>>>>> 782a5ea (TP3 - Directives, Pipes et Services)
