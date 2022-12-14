var express = require('express');
var router = express.Router();

var storage = require('../services/storage');
var collectionsUtils = require('../utils/collections-utils');

router.get('/', async function (req, res, next) {
  const generalStatsHeaders = [
    "Collection",
    "Floor price",
    "MC",
    "# Avatars",
    "# Owners"
  ];

  const allTimeStatsHeaders = [
    "Collection",
    "Σ Volume",
    "# Sales",
    "μ price"
  ];

  const timeFramesStatsHeaders = [
    "Collection",
    "Σ Volume",
    "∆ Volume",
    "# Sales",
    "∆ Sales",
    "μ price",
    "∆ price"
  ];

  const structuredCollectionsStats = await storage.getStorageItem("collectionsStats");

  const timestampStats = await storage.getStorageItem("timestampStats");

  const collectionsSectionsStats = collectionsUtils.getCollectionsSectionsStatsFromStructuredCollectionsStats(structuredCollectionsStats);

  const collectionsGeneralStats = collectionsSectionsStats["general_stats"];
  const collectionsOneHourStats = collectionsSectionsStats["one_hour"];
  const collectionsSixHoursStats = collectionsSectionsStats["six_hours"];
  const collectionsOneDayStats = collectionsSectionsStats["one_day"];
  const collectionsSevenDaysStats = collectionsSectionsStats["seven_days"];
  const collectionsThirtyDaysStats = collectionsSectionsStats["thirty_days"];

  res.render('index', { title: "Reddit Collectible Avatars X OpenSea Statistics",
                        lastSync: timestampStats,
                        generalHeaders: generalStatsHeaders,
                        staticTimeFramesHeaders: allTimeStatsHeaders,
                        dynamicTimeFramesHeaders: timeFramesStatsHeaders,
                        generalStats: collectionsGeneralStats,
                        oneHourStats: collectionsOneHourStats,
                        sixHoursStats: collectionsSixHoursStats,
                        oneDayStats: collectionsOneDayStats,
                        sevenDayStats: collectionsSevenDaysStats,
                        thirtyDaysStats: collectionsThirtyDaysStats});
});

module.exports = router;
