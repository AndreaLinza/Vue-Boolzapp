

Vue.createApp({
    data() {

        return {

            //Lista contatti 
            contactList: [
                {
                    name: "Michele",
                    avatar: "_1",
                    visible: true,
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_3",
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: "Alessandro B.",
                    avatar: "_4",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: "Alessandro L.",
                    avatar: "_5",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: "Claudia",
                    avatar: "_6",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: "Federico",
                    avatar: "_7",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: "Davide",
                    avatar: "_8",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
            ],

            // oggetto che passo al v-model search
            search: '',

            // oggetto per il contatto corrente 
            currentContact: null,

            // array dove pusho i miei messaggi 
            myMessage: [
                {
                    date: '',
                    massage: '',
                    status: '',
                }
            ],


        }
    },
    methods: {

        // DA TERMINARE !!!!!!!!!
        currentDate() {
            messages.forEach(date => {

            });
        },

        deleteMessage(i) {
            this.currentContact.messages.splice(i,1)
        },

        // Click che mi permette di passare da contatto a contatto
        userClick(contact) {
            this.currentContact = contact
            console.log(contact)
        },

        // Funzione per l'invio del messaggio 
        sentMessage() {

            // Creo una copia di messaggio per poi pusharlo nei messaggi del contatto corrente 
            const newMessage = { ...this.myMessage }


            newMessage.date = new Intl.DateTimeFormat('it', { timeStyle: 'short' }).format(new Date())
            newMessage.status = 'sent'
            this.currentContact.messages.push(newMessage)


            console.log(this.$refs.msgContainer)// Da completare la $ref

            // Imposto un timeout per l'invio della risposta da parte del contatto selezionato
            setTimeout(this.messageReceived, 1000)
            console.log(newMessage)
        },

        // Funzione per la risposta del messaggio
        messageReceived() {
            const newMessage = { ...this.myMessage }
            newMessage.date = new Intl.DateTimeFormat('it', { timeStyle: 'short' }).format(new Date())
            newMessage.status = 'received'
            newMessage.message = 'Easy'
            this.currentContact.messages.push(newMessage)
        },


    },

    computed: {
        // Creo il filtro per la barra di ricerca
        filteredList() {
            return this.contactList.filter(contact => {
                return contact.name.toLowerCase().includes(this.search.toLowerCase())
            })
        }
    },

    // Faccio apparire sempre al caricamento della pagina il primo contatto 
    beforeMount() {
        this.currentContact = this.contactList[0]
    },

}).mount("#app")
