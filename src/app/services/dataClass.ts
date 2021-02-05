export class Client {
    id:number;
    Societe: string;
    I_unique: string;
    Tel: string;
    Email: string;
    Adresse:string;

    Gerant:string;
    Forme_juridique:string;
    Capital: number;
    TVA: number;
    Exonore:string;
    Fodec:number;
    edit:string;
 }

 export class Honoraire {
    id:number;
    Reference: string;
    Designation: string;
    Prix: number;



 }
 export class Transaction {
   id:number;
   client:string;
   Date_creation:string; 

}

export class Change {
   id:number;
   client:string;
   payee:number;
   reste: number; 
   nouveau_solde:number;
   Date:string;

}

 export class Facture {
    id:number;
    Numero: number;
    date: string;
    Societe: string;
    Adresse: string;
    I_unique: string;
    honoraires: [];
    charges:[];
    statut: string;
    apii: string;
    reservation: string;
    contrat: string;
    rne: string;
    rc: string;
    douane: string;
    totalcharge: string;
    STHonoraires: string;
    STHon: string;
    STotal: string;
    REMISE: string;
    sous_total: string;
    ttva: string;
    total: string;
    frac: string;
    enlettre: string


 }
 export class Charge {
   id:number;
    Designations: string;
    Prix: number;
}
export class Hon {
   id:number;
   ref: string;
   des: string;
   prix: number;



}