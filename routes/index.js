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

  const timeIntervalHeaders = [
    "One hour",
    "Six hours",
    "One day",
    "Seven Days",
    "Thirty Days",
  ];

  const metricsHeaders = [
    "Collection",
    "Change",
    "Sales",
    "Sales change",
    "Average price",
    "Difference",
    "Volume"
  ];

  let collectionsStats = await storage.getStorageItem("collectionsStats");

  res.render('index', { title: "Reddit Collectible Avatars Statistics",
                        generalStatisticsHeaders: generalStatsHeaders,
                        timeIntervalSectionHeaders: timeIntervalHeaders,
                        metricsColumnHeaders: metricsHeaders,
                        collectionsStatistics: collectionsStats});
});

module.exports = router;
