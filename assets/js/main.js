
//Stampare a schermo un messaggio all’interno di un h1, 
//utilizzando i data

// 1- avviamo vue
const app = new Vue(
    {
        // --- 2 dichiarazione container
        el : "#app",
        data : {
            message : "ciao mondo!!!"
        }
    }
)