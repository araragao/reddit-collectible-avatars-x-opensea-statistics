var express = require('express');
var router = express.Router();

var axios = require('axios');

router.get('/', async function (req, res, next) {
  const collectionsNameInOpenSeaStandard = [
    "aylia-x-reddit-collectible-avatars",
    "foustlings-x-reddit-collectible-avatars",
    "the-senses-x-reddit-collectible-avatars",
    "growl-gang-x-reddit-collectible-avatars",
    "natsukashii-x-reddit-collectible-avatars",
    "cute-snacks-x-reddit-collectible-avatars",
    "enlightenment-x-reddit-collectible-avatars",
    "peculiar-gang-x-reddit-collectible-avatars",
    "5-boro-bodega-x-reddit-collectible-avatars",
    "joy-girls-club-x-reddit-collectible-avatars",
    "old-school-cool-x-reddit-collectible-avatars",
    "lightspeed-lads-x-reddit-collectible-avatars",
    "avatar-rock-out-x-reddit-collectible-avatars",
    "bites-of-brazil-x-reddit-collectible-avatars",
    "the-minds-eyes-x-reddit-collectible-avatars",
    "doodle-collection-x-reddit-collectible-avatars",
    "gettin-groovy-x-reddit-collectible-avatars",
    "celestial-assembly-x-reddit-collectible-avatars",
  ];

  const collectionsName = [];

  populateCollectionsNameBasedOnOpenSeaStardard(collectionsName, collectionsNameInOpenSeaStandard);

  var collectionsStats = {};

  for (let collectionNumber = 0; collectionNumber < collectionsNameInOpenSeaStandard.length; collectionNumber++) {
    const collectionNameInOpenSeaStandard = collectionsNameInOpenSeaStandard[collectionNumber];
    let requestUrl = "https://api.opensea.io/api/v1/collection/" + collectionNameInOpenSeaStandard + "/stats";

    const res = await axios({
      method: 'get',
      url: requestUrl,
    })
      .catch(err => console.error(err));
    
    const collectionStats = res.data.stats;
    collectionsStats[collectionsName[collectionNumber]] = collectionStats;
  }

  console.log(collectionsStats);

  res.render('index', { title: 'Reddit Collectible Avatars Statistics Project' });
});

function convertCollectionNameInOpenSeaStandardToCollectionName(openSeaCollectionName) {
  return openSeaCollectionName.split("-x-")[0];
}

function populateCollectionsNameBasedOnOpenSeaStardard(collectionsName, collectionsNameInOpenSeaStandard) {
  for (let collectionNumber = 0; collectionNumber < collectionsNameInOpenSeaStandard.length; collectionNumber++) {
    collectionsName.push(convertCollectionNameInOpenSeaStandardToCollectionName(collectionsNameInOpenSeaStandard[collectionNumber]));
  }
}

module.exports = router;
