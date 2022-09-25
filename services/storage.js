var storage = require('node-persist');

exports.initPersistenStorage = async () => {
    await storage.init();
  }

exports.setStorageItem = async (itemName, itemValue) => {
  await storage.setItem(itemName, itemValue);
}

exports.getStorageItem = async (itemName) => {
  let storageItem = await storage.getItem(itemName);
  return storageItem;
}
