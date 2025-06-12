//Abrindo um banco de dados Indexados
const request = indexedDB.open("cliente DB", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    const store = db.createObjectStore("clientes",  {keyPath: "id"});
    store.createIndex("nome", "nome", {unique: false});
}

request.onsuccess = function(event) {
    const db = event.target.result;
    const transaction = db.transaction("clientes", "readwrite");
    const store = transaction.objectStore("clientes");


    //Adicionando um novo cliente
    store.add({ id: 1, nome: "Maria Eduarda", email: "maria@gmail.com"});

    //Lendo um cliente pelo nome
    const index = store.index("nome");
    const nomeindex = index.get("Maria Eduarda");

    nomeindex.onsuccess = funtion(){
        console.log(nomeindex.result);
} 
}
