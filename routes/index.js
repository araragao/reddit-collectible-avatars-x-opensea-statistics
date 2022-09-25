var express = require('express');
var router = express.Router();

var storage = require('../services/storage');

router.get('/', async function (req, res, next) {
  const generalStatsHeaders = [
    "Collection",
    "Σ Volume",
    "# Sales",
    "# Avatars",
    // (araragao): unwanted information
    // "Count",
    "# Owners",
    "μ price",
    // (araragao): unwanted information
    // "Number of reports",
    "MC",
    "Price floor",
  ];

  const timeFramesStatsHeaders = [
    "Collection",
    "Change",
    "Sales",
    "Sales change",
    "μ price",
    "Difference",
    "Σ Volume"
  ];

  let collectionsStats = await storage.getStorageItem("collectionsStats");

  // (araragao): TO-DO: extract json destructuring to collections-utils

  let collectionsGeneralStats = {};
  let collectionsOneHourStats = {};
  let collectionsSixHoursStats = {};
  let collectionsOneDayStats = {};
  let collectionsSevenDaysStats = {};
  let collectionsThirtyDaysStats = {};

  for(collectionName in collectionsStats) {
    let collectionStat = collectionsStats[collectionName];
    for(collectionSection in collectionStat) {
      switch(collectionSection) {
        case "general_stats":
          collectionsGeneralStats[collectionName] = collectionsStats[collectionName].general_stats;
          break;
        case "one_hour":
          collectionsOneHourStats[collectionName] = collectionsStats[collectionName].one_hour;
          break;
        case "six_hours":
          collectionsSixHoursStats[collectionName] = collectionsStats[collectionName].six_hours;
          break;
        case "one_day":
          collectionsOneDayStats[collectionName] = collectionsStats[collectionName].one_day;
          break;
        case "seven_days":
          collectionsSevenDaysStats[collectionName] = collectionsStats[collectionName].seven_days;
          break;
        case "thirty_days":
          collectionsThirtyDaysStats[collectionName] = collectionsStats[collectionName].thirty_days;
          break;
        default:
          break;
      }
    }
  }

  res.render('index', { title: "Reddit Collectible Avatars X OpenSea Statistics",
                        generalHeaders: generalStatsHeaders,
                        timeFramesHeaders: timeFramesStatsHeaders,
                        generalStats: collectionsGeneralStats,
                        oneHourStats: collectionsOneHourStats,
                        sixHoursStats: collectionsSixHoursStats,
                        oneDayStats: collectionsOneDayStats,
                        sevenDayStats: collectionsSevenDaysStats,
                        thirtyDaysStats: collectionsThirtyDaysStats});
});

module.exports = router;
