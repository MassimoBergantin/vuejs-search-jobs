// Web App Search Jobs

// cartella/repo: vuejs-search-jobs


// Avremo una lista di annunci di lavoro, ogni annuncio ha i seguenti dati (guarda l’oggetto dentro jobs),  starred e applied sono ulteriori proprietà all’interno di data. Creiamo altri oggetti all’interno di jobs così da avere ulteriori annunci di lavoro.

// jobs: [
//     {
//       id: 1,
//       company: 'Perferendis',
//       position: 'Developer',
//       description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio     sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
//       created_at: '5/22/2021',
//       logo: 'logo.jpg',
//       city: 'Roma',
//       contract: 'Full Time'
//     }  
// ],
// starred: [1, 2, 3],
// applied: [4, 5]


// Milestone 1
// Mostriamo tutti gli annunci in una lista, con una grafica molto elementare.

// Milestone 2
// Identificare il preferito
// Identifichiamo nella lista gli annunci di lavoro preferiti, con un simbolo che si attiva/colora solo se quell’annuncio è tra i preferiti (per esempio, una stella).
// Aggiungere ai preferiti
// Inoltre potremo aggiungere il singolo annuncio alla lista di preferiti, inserendo un altro elemento nell’html su cui fare click o sfruttando quello attuale (il simbolo del primo step, la stella), che permette al click l’aggiunta dinamica dell’annuncio alla lista dei preferiti. 


// Nota bene: La lista starred conterrà solo l’id dell’elemento, tramite il quale potremmo identificare quali annunci sono preferiti e quali no.

// Milestone 3
// Potremo anche inviare la nostra candidatura premendo sul pulsante APPLY.
// Gli annunci a cui abbiamo mandato una candidatura non mostreranno il pulsante APPLY e si distingueranno dalle altre per colore e Badge ‘applied’.
// Un annuncio a cui abbiamo inviato la candidatura automaticamente viene eliminato dalla lista starred.
// Anche in questo caso inseriremo l’id nell’array applied. (come prima abbiamo fatto per lo starred)


// Bonus
// Quando premiamo sul pulsante APPLY, dopo 1 secondo viene mostrata una modale con Feedback ‘Candidatura inviata’ che sparirà dopo un altro secondo


// NOTE
// La grafica in questo esercizio è trascurabile. Mostriamo delle semplici liste.

Vue.config.devtools = true;

new Vue(
    {
        el:'#search-jobs',
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '',
                    city:  'Roma',
                    contract: 'Full-time'
                },  {
                    id: 2,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '',
                    city:  'Roma',
                    contract: 'Full-time'
                }, 
                {
                    id: 3,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '',
                    city:  'Roma',
                    contract: 'Full-time'
                },
                {
                    id: 4,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: '',
                    city:  'Roma',
                    contract: 'Full-time'
                }, 
                
            ]

        }
    }
)