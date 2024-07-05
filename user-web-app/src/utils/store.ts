export function openDB(): IDBOpenDBRequest {
  return indexedDB.open("MeeKeysDB", 2);
}

export function initDB() {
  const request = openDB();

  request.onupgradeneeded = function (event: IDBVersionChangeEvent) {
    const db = (event.target as IDBOpenDBRequest).result;
    const objectStore = db.createObjectStore("MeeKeys", { keyPath: "id" });
    objectStore.createIndex("privateKey", "privateKey", { unique: false });
    objectStore.createIndex("publicKey", "publicKey", { unique: false });
    objectStore.createIndex("id", "id", { unique: true });
    db.close();
  };
}

interface DBRow {
  privateKey: CryptoKey;
  publicKey: CryptoKey;
  id: string;
}

export function setKeys(data: DBRow) {
  const request = openDB();

  request.onsuccess = function (event) {
    const db = (event.target as IDBOpenDBRequest).result;
    const transaction = db.transaction(["MeeKeys"], "readwrite");
    const objectStore = transaction.objectStore("MeeKeys");

    const request_get = objectStore.get("1");

    request_get.onsuccess = () => {
      const requestUpdate = objectStore.put(data);
      requestUpdate.onerror = (event) => {
        console.warn("requestUpdate error", event);
      };
      requestUpdate.onsuccess = (event) => {
        console.log("requestUpdate onsuccess", event);
      };
    };
  };
}

export async function getKeys(): Promise<DBRow> {
  return new Promise((resolve, reject) => {
    const request = openDB();

    request.onerror = () => {
      reject("Error in openDB");
    };
    request.onsuccess = function (event) {
      const db = (event.target as IDBOpenDBRequest).result;
      const transaction = db.transaction(["MeeKeys"], "readwrite");
      const objectStore = transaction.objectStore("MeeKeys");

      const request_get = objectStore.get("1");
      request_get.onerror = () => {
        reject(`Result: has't been found`);
      };
      request_get.onsuccess = (event: any) => {
        resolve(event.target.result);
      };

      db.close();
    };
  });
}

