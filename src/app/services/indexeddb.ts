
export class MyIndexedDb {
  private dbName = 'ReflexGameDB';
  private version = 1;

  constructor() {}


  open() {
    const request = indexedDB.open(this.dbName, this.version);


    request.onupgradeneeded = (event: any) => {
      const db = event.target.result;
      
      if (!db.objectStoreNames.contains('scores')) {

        db.createObjectStore('scores', { keyPath: 'id', autoIncrement: true });
      }
    };

    request.onsuccess = (event: any) => {
      const db = event.target.result;
      

      const transaction = db.transaction(['scores'], 'readwrite');
      const store = transaction.objectStore('scores');
      store.add({ 
        username: 'TesztElek', 
        points: 100, 
        date: new Date().toISOString() 
      });
    };

    request.onerror = (event) => {
      console.error('Hiba az IndexedDB megnyitásakor:', event);
    };
  }
}