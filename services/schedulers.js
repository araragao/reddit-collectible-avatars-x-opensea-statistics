var cron = require('node-cron');
var axios = require('axios');

var collectionsUtils = require('../utils/collections-utils');
var storage = require('./storage');

const collectionsNameInOpenSeaStandard = [
  "5-boro-bodega-x-reddit-collectible-avatars",
  "avatar-rock-out-x-reddit-collectible-avatars",
  "aww-friends-x-reddit-collectible-avatars",
  "aylia-x-reddit-collectible-avatars",
  "baked-goods-evils-x-reddit-collectible-avatars",
  "bites-of-brazil-x-reddit-collectible-avatars",
  "celestial-assembly-x-reddit-collectible-avatars",
  "creatures-of-the-nighties-x-reddit-collectible",
  "creatures-without-pants-x-reddit-collectible-avata",
  "cute-cool-and-creepy-x-reddit-collectible-avatars",
  "cute-snacks-x-reddit-collectible-avatars",
  "doodle-collection-x-reddit-collectible-avatars",
  "drag-queens-of-big-gay-baby-x-reddit-collectible",
  "drip-squad-x-reddit-collectible-avatars",
  "enlightenment-x-reddit-collectible-avatars",
  "foustlings-x-reddit-collectible-avatars",
  "gettin-groovy-x-reddit-collectible-avatars",
  "growl-gang-x-reddit-collectible-avatars",
  "i-quit-my-job-to-be-an-artist-x-reddit-collectibl",
  "imagination-station-x-reddit-collectible-avatars",
  "joy-girls-club-x-reddit-collectible-avatars",
  "lightspeed-lads-x-reddit-collectible-avatars",
  "magic-of-the-woods-x-reddit-collectible-avatars",
  "meme-team-x-reddit-collectible-avatars",
  "natsukashii-x-reddit-collectible-avatars",
  "old-school-cool-x-reddit-collectible-avatars",
  "peculiar-gang-x-reddit-collectible-avatars",
  "protectors-of-the-forest-x-reddit-collectible-avat",
  "the-butterfly-garden-x-reddit-collectible-avatars",
  "the-minds-eyes-x-reddit-collectible-avatars",
  "the-senses-x-reddit-collectible-avatars",
  "the-singularity-x-reddit-collectible-avatars",
  "wearing-your-emotions-x-reddit-collectible-avatars"
];

const collectionsName = collectionsUtils.getCollectionsNameFromCollectionsNameInOpenSeaStardard(collectionsNameInOpenSeaStandard);

const getStatsFromOpenSea = cron.schedule("*/15 * * * * *", async () => {
  console.log("services :: schedulers :: getStatsFromOpenSea started");

  const collectionsStats = {};

  for (let i = 0; i < collectionsNameInOpenSeaStandard.length; i++) {
    const collectionNameInOpenSeaStandard = collectionsNameInOpenSeaStandard[i];
    const requestUrl = "https://api.opensea.io/api/v1/collection/" + collectionNameInOpenSeaStandard + "/stats";

    const response = await axios.get(requestUrl);

    const unstructuredCollectionStats = response.data.stats;
    const structuredCollectionStats = collectionsUtils.structureCollectionStats(unstructuredCollectionStats);

    collectionsStats[collectionsName[i]] = structuredCollectionStats;
  }
  storage.setStorageItem("collectionsStats", collectionsStats);

  const currentDate = new Date(); 
  const timestampStats = "Last Sync: " + currentDate.getUTCDate() + "/"
                                       + (currentDate.getUTCMonth()+1)  + "/" 
                                       + currentDate.getUTCFullYear() + " @ "  
                                       + currentDate.getUTCHours() + ":"  
                                       + currentDate.getUTCMinutes() + ":" 
                                       + currentDate.getUTCSeconds() + " "
                                       + "UTC";

  storage.setStorageItem("timestampStats", timestampStats);

  console.log("services :: schedulers :: getStatsFromOpenSea finished");
});

exports.initScheduledJobs = async () => {
  getStatsFromOpenSea.start();
}