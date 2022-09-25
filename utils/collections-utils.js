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

    const structuredCollectionStats = {};
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
        if(regexStartsWithOneHour.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionOnehourStats["change"] = value;
            } else if(regexContainsSales.test(key)) {
                collectionOnehourStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionOnehourStats["sales_change"] = value;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionOnehourStats["average_price"] = value;
            } else if(regexContainsDifference.test(key)) {
                collectionOnehourStats["difference"] = value;
            } else if(regexContainsVolume.test(key)) {
                collectionOnehourStats["volume"] = value;
            }
        } else if(regexStartsWithSixHours.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionSixHoursStats["change"] = value;
            } else if(regexContainsSales.test(key)) {
                collectionSixHoursStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionSixHoursStats["sales_change"] = value;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionSixHoursStats["average_price"] = value;
            } else if(regexContainsDifference.test(key)) {
                collectionSixHoursStats["difference"] = value;
            } else if(regexContainsVolume.test(key)) {
                collectionSixHoursStats["volume"] = value;
            }
        } else if(regexStartsWithOneDay.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionOneDayStats["change"] = value;
            } else if(regexContainsSales.test(key)) {
                collectionOneDayStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionOneDayStats["sales_change"] = value;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionOneDayStats["average_price"] = value;
            } else if(regexContainsDifference.test(key)) {
                collectionOneDayStats["difference"] = value;
            } else if(regexContainsVolume.test(key)) {
                collectionOneDayStats["volume"] = value;
            }
        } else if(regexStartsWithSevenDays.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionSevenDaysStats["change"] = value;
            } else if(regexContainsSales.test(key)) {
                collectionSevenDaysStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionSevenDaysStats["sales_change"] = value;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionSevenDaysStats["average_price"] = value;
            } else if(regexContainsDifference.test(key)) {
                collectionSevenDaysStats["difference"] = value;
            } else if(regexContainsVolume.test(key)) {
                collectionSevenDaysStats["volume"] = value;
            }
        } else if(regexStartsWithThirtyDays.test(key)) {
            if(regexDoesNotContainSales.test(key) && regexContainsChange.test(key)) {
                collectionThirtyDaysStats["change"] = value;
            } else if(regexContainsSales.test(key)) {
                collectionThirtyDaysStats["sales"] = value;
            } else if(regexContainsSalesChange.test(key)) {
                collectionThirtyDaysStats["sales_change"] = value;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionThirtyDaysStats["average_price"] = value;
            } else if(regexContainsDifference.test(key)) {
                collectionThirtyDaysStats["difference"] = value;
            } else if(regexContainsVolume.test(key)) {
                collectionThirtyDaysStats["volume"] = value;
            }
        } else {
            if(regexContainsTotalVolume.test(key)) {
                collectionGeneralStats["total_volume"] = parseFloat(value).toFixed(3);
            } else if(regexContainsTotalSales.test(key)) {
                collectionGeneralStats["total_sales"] = value;
            } else if(regexContainsTotalSupply.test(key)) {
                collectionGeneralStats["total_supply"] = value;
            } else if(regexContainsCount.test(key)) {
                collectionGeneralStats["count"] = value;
            } else if(regexContainsNumOwners.test(key)) {
                collectionGeneralStats["num_owners"] = value;
            } else if(regexContainsAveragePrice.test(key)) {
                collectionGeneralStats["average_price"] = parseFloat(value).toFixed(3);
            } else if(regexContainsNumReports.test(key)) {
                collectionGeneralStats["num_reports"] = value;
            } else if(regexContainsMarketCap.test(key)) {
                collectionGeneralStats["market_cap"] = parseFloat(value).toFixed(3);
            } else if(regexContainsFloorprice.test(key)) {
                collectionGeneralStats["floor_price"] = parseFloat(value).toFixed(3);
            }
        }
    }

    structuredCollectionStats["general_stats"] = collectionGeneralStats;
    structuredCollectionStats["one_hour"] = collectionOnehourStats;
    structuredCollectionStats["six_hours"] = collectionSixHoursStats;
    structuredCollectionStats["one_day"] = collectionOneDayStats;
    structuredCollectionStats["seven_days"] = collectionSevenDaysStats;
    structuredCollectionStats["thirty_days"] = collectionThirtyDaysStats;

    console.log("utils :: collections-utils :: structureCollectionStats finished");

    return structuredCollectionStats;
}

module.exports = {
    getCollectionsNameFromCollectionsNameInOpenSeaStardard,
    structureCollectionStats
}