import { setKeys, getKeys } from "./store";
const generateKey = async () => {
  return window.crypto.subtle
    .generateKey(
      {
        name: "RSA-PSS",
        // Consider using a 4096-bit key for systems that require long-term security
        modulusLength: 2048,
        publicExponent: new Uint8Array([1, 0, 1]),
        hash: "SHA-256",
      },
      true,
      ["sign", "verify"],
    )
    .then((keyPair) => {
      const data = {
        privateKey: keyPair.privateKey,
        publicKey: keyPair.publicKey,
        id: "1",
      };
      setKeys(data);
      return data;
    });
};
const getMessageEncoding = (data: string) => {
  let enc = new TextEncoder();
  return enc.encode(data);
};

export const verifyMessage = async (data: string, signature: BufferSource) => {
  const keys = await getKeys();
  if (!keys.publicKey) {
    return false;
  }

  let encoded = getMessageEncoding(data);
  let result = await window.crypto.subtle.verify(
    {
      name: "RSA-PSS",
      saltLength: 32,
    },
    keys.publicKey,
    signature,
    encoded,
  );

  return result;
};

export const signMessage = async (data: string) => {
  let keys = await getKeys();
  if (!keys?.privateKey) {
    keys = await generateKey();
  }

  let encoded = getMessageEncoding(data);
  const signature = await window.crypto.subtle.sign(
    {
      name: "RSA-PSS",
      saltLength: 32,
    },
    keys.privateKey,
    encoded,
  );

  return signature;
};
