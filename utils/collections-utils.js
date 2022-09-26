function convertCollectionNameInOpenSeaStandardToCollectionName(collectionNameInOpenSeaStandard) {
    return collectionNameInOpenSeaStandard.split("-x-")[0];
  }
  
function getCollectionsNameFromCollectionsNameInOpenSeaStardard(collectionsNameInOpenSeaStandard) {
    const collectionsName = [];
    for (let i = 0; i < collectionsNameInOpenSeaStandard.length; i++) {
        collectionsName.push(convertCollectionNameInOpenSeaStandardToCollectionName(collectionsNameInOpenSeaStandard[i]));
    }
    return collectionsName;
}

function structureCollectionStats(unstructuredCollectionStats) {
    console.log("utils :: collections-utils :: structureCollectionStats started");

    const collectionGeneralStats = {};
    const collectionOnehourStats = {};
    const collectionSixHoursStats = {};
    const collectionOneDayStats = {};
    const collectionSevenDaysStats = {};
    const collectionThirtyDaysStats = {};  

    const regexStartsWithOneHour = /^one_hour/;
    const regexStartsWithSixHours = /^six_hour/;
    const regexStartsWithOneDay = /^one_day/;
    const regexStartsWithSevenDays = /^seven_day/;
    const regexStartsWithThirtyDays = /^thirty_day/;

    const regexDoesNotContainSales = /^((?!sales).)*$/;

    const regexContainsChange = /change$/;
    const regexContainsSales = /sales$/;
    const regexContainsSalesChange = /sales_change$/;
    const regexContainsAveragePrice = /average_price$/;
    const regexContainsDifference = /difference$/;
    const regexContainsVolume = /volume$/;

    const regexContainsTotalVolume = /total_volume/;
    const regexContainsTotalSales = /total_sales/;
    const regexContainsTotalSupply = /total_supply/;
    const regexContainsCount = /count/;
    const regexContainsNumOwners = /num_owners/;
    const regexContainsNumReports = /num_reports/;
    const regexContainsMarketCap = /market_cap/;
    const regexContainsFloorprice = /floor_price/;

    for (const [index, [key, value]] of Object.entries(Object.entries(unstructuredCollectionStats))) {
        const roundedValue = parseFloat(value).toFixed(4);

        if(regexStartsWithOneHour.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionOnehourStats["change"] = roundedValue;
            } else if(regexContainsSales.test(key)) {
                collectionOnehourStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionOnehourStats["sales_change"] = roundedValue;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionOnehourStats["average_price"] = roundedValue;
            } else if(regexContainsDifference.test(key)) {
                collectionOnehourStats["difference"] = roundedValue;
            } else if(regexContainsVolume.test(key)) {
                collectionOnehourStats["volume"] = roundedValue;
            }
        } else if(regexStartsWithSixHours.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionSixHoursStats["change"] = roundedValue;
            } else if(regexContainsSales.test(key)) {
                collectionSixHoursStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionSixHoursStats["sales_change"] = roundedValue;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionSixHoursStats["average_price"] = roundedValue;
            } else if(regexContainsDifference.test(key)) {
                collectionSixHoursStats["difference"] = roundedValue;
            } else if(regexContainsVolume.test(key)) {
                collectionSixHoursStats["volume"] = roundedValue;
            }
        } else if(regexStartsWithOneDay.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionOneDayStats["change"] = roundedValue;
            } else if(regexContainsSales.test(key)) {
                collectionOneDayStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionOneDayStats["sales_change"] = roundedValue;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionOneDayStats["average_price"] = roundedValue;
            } else if(regexContainsDifference.test(key)) {
                collectionOneDayStats["difference"] = roundedValue;
            } else if(regexContainsVolume.test(key)) {
                collectionOneDayStats["volume"] = roundedValue;
            }
        } else if(regexStartsWithSevenDays.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionSevenDaysStats["change"] = roundedValue;
            } else if(regexContainsSales.test(key)) {
                collectionSevenDaysStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionSevenDaysStats["sales_change"] = roundedValue;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionSevenDaysStats["average_price"] = roundedValue;
            } else if(regexContainsDifference.test(key)) {
                collectionSevenDaysStats["difference"] = roundedValue;
            } else if(regexContainsVolume.test(key)) {
                collectionSevenDaysStats["volume"] = roundedValue;
            }
        } else if(regexStartsWithThirtyDays.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionThirtyDaysStats["change"] = roundedValue;
            } else if(regexContainsSales.test(key)) {
                collectionThirtyDaysStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionThirtyDaysStats["sales_change"] = roundedValue;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionThirtyDaysStats["average_price"] = roundedValue;
            } else if(regexContainsDifference.test(key)) {
                collectionThirtyDaysStats["difference"] = roundedValue;
            } else if(regexContainsVolume.test(key)) {
                collectionThirtyDaysStats["volume"] = roundedValue;
            }
        } else {
            if(regexContainsTotalVolume.test(key)) {
                collectionGeneralStats["total_volume"] = roundedValue;
            } else if(regexContainsTotalSales.test(key)) {
                collectionGeneralStats["total_sales"] = value;
            } else if(regexContainsTotalSupply.test(key)) {
                collectionGeneralStats["total_supply"] = value;
            } else if(regexContainsCount.test(key)) {
                collectionGeneralStats["count"] = value;
            } else if(regexContainsNumOwners.test(key)) {
                collectionGeneralStats["num_owners"] = value;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionGeneralStats["average_price"] = roundedValue;
            } else if(regexContainsNumReports.test(key)) {
                collectionGeneralStats["num_reports"] = value;
            } else if(regexContainsMarketCap.test(key)) {
                collectionGeneralStats["market_cap"] = roundedValue;
            } else if(regexContainsFloorprice.test(key)) {
                collectionGeneralStats["floor_price"] = roundedValue;
            }
        }
    }

    const structuredCollectionStats = {};
    structuredCollectionStats["general_stats"] = collectionGeneralStats;
    structuredCollectionStats["one_hour"] = collectionOnehourStats;
    structuredCollectionStats["six_hours"] = collectionSixHoursStats;
    structuredCollectionStats["one_day"] = collectionOneDayStats;
    structuredCollectionStats["seven_days"] = collectionSevenDaysStats;
    structuredCollectionStats["thirty_days"] = collectionThirtyDaysStats;

    console.log("utils :: collections-utils :: structureCollectionStats finished");

    return structuredCollectionStats;
}

function getCollectionsSectionsStatsFromStructuredCollectionsStats(structuredCollectionsStats) {
    console.log("utils :: collections-utils :: getCollectionsSectionsStatsFromStructuredCollectionsStats started");

    console.log(structuredCollectionsStats);

    const collectionsGeneralStats = {};
    const collectionsOneHourStats = {};
    const collectionsSixHoursStats = {};
    const collectionsOneDayStats = {};
    const collectionsSevenDaysStats = {};
    const collectionsThirtyDaysStats = {};
  
    for(collectionName in structuredCollectionsStats) {
      const structuredCollectionStats = structuredCollectionsStats[collectionName];
      for(collectionSection in structuredCollectionStats) {
        switch(collectionSection) {
          case "general_stats":
            collectionsGeneralStats[collectionName] = structuredCollectionsStats[collectionName].general_stats;
            break;
          case "one_hour":
            collectionsOneHourStats[collectionName] = structuredCollectionsStats[collectionName].one_hour;
            break;
          case "six_hours":
            collectionsSixHoursStats[collectionName] = structuredCollectionsStats[collectionName].six_hours;
            break;
          case "one_day":
            collectionsOneDayStats[collectionName] = structuredCollectionsStats[collectionName].one_day;
            break;
          case "seven_days":
            collectionsSevenDaysStats[collectionName] = structuredCollectionsStats[collectionName].seven_days;
            break;
          case "thirty_days":
            collectionsThirtyDaysStats[collectionName] = structuredCollectionsStats[collectionName].thirty_days;
            break;
          default:
            break;
        }
      }
    }

    const collectionsSectionsStats = {};
    collectionsSectionsStats["general_stats"] = collectionsGeneralStats;
    collectionsSectionsStats["one_hour"] = collectionsOneHourStats;
    collectionsSectionsStats["six_hours"] = collectionsSixHoursStats;
    collectionsSectionsStats["one_day"] = collectionsOneDayStats;
    collectionsSectionsStats["seven_days"] = collectionsSevenDaysStats;
    collectionsSectionsStats["thirty_days"] = collectionsThirtyDaysStats;

    console.log(collectionsSectionsStats);

    console.log("utils :: collections-utils :: getCollectionsSectionsStatsFromStructuredCollectionsStats finished");

    return collectionsSectionsStats;
}

module.exports = {
    getCollectionsNameFromCollectionsNameInOpenSeaStardard,
    structureCollectionStats,
    getCollectionsSectionsStatsFromStructuredCollectionsStats
}