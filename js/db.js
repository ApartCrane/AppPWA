let req = window.indexedDB.open('pwadb',1);

//Si se requiere actualizar

req.onupgradeneeded = (e) => {
    console.log("DB Updated");
    let db = e.target.result
    db.createObjectStore('users',{
        keyPath: 'id',
    })
}
