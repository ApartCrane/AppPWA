let req = window.indexedDB.open('pwadb',1);

//Si se requiere actualizar

req.onupgradeneeded = (e) => {
    console.log("DB Updated");
    let db = e.target.result
    db.createObjectStore('users',{
        keyPath: 'id',
    })
    req.onerror = (e) => {
        console.log('D-B Error ->', e.target.error);
    }
    req.onsuccess = (e) => {
        let db = e.target.result;
        let transaction = db.transaction('users', 'readwrite'); 
    }
    transaction.onerror = (e) => {
        console.log('TR - Error ->', e.target.error);
    }
    transaction.oncomplete = (e) => {
        console.log('TR - Done ->', e);
    }
    let stored = transaction.objectStore('users');
    stored.add({
        id: new Date().toISOString(),
        username: "Diego",
        fullname: "Diego Garcia"
    })

    stored.onsuccess = (e) => {
        console.log('ST - Success ->', "Agregado Correctamente");
    }
}
