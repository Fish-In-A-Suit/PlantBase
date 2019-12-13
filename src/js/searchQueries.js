/*These are all of the possible search queries which can be searched for in the search field*/
/* Rules:
  - "plant" is omitted!
  - this script should be loaded before itemSearcher.js*/

var pageReference = "IP"; //INDOOR PLANTS

var peperomiaReference = "Peperomia";
var peperomiaDisplayName = "PEPEROMIA";
var peperomiaOtherNames = ["RADIATOR", "PIPERACEAE"];
var peperomiaSQ = [peperomiaReference, peperomiaDisplayName, peperomiaOtherNames, pageReference]; //SQ = search query

var moneyPlantReference = "Money_plant";
var moneyplantDisplayName = "MONEY";
var moneyplantOtherNames = ["PANCAKE", "UFO", "LEFSE", "MISSIONARY", "BENDER", "MIRROR GRASS", "PILEA PEPEROMIOIDES"];
var moneyplantSQ = [moneyPlantReference, moneyplantDisplayName, moneyplantOtherNames, pageReference];

var zzplantReference = "ZZ_plant";
var zzplantDisplayName = "ZZ";
var zzplantOtherNames = ["ZANZIBAR GEM", "ZUZU", "AROID PALM", "ETERNITY", "EMERALD PALM", "ZAMIOCULCAS", "ZAMIOCULCAS ZAMIOFILIA"];
var zzplantSQ = [zzplantReference, zzplantDisplayName, zzplantOtherNames, pageReference];

var aloeveraReference = "Aloe_vera";
var aloeveraDisplayName = "ALOE VERA";
var aloeveraOtherNames = ["ALOE", "CHINESE ALOE", "INDIAN ALOE", "TRUE ALOE", "BARBADOS ALOE", "FIRST AID", "BURN ALOE"];
var aloeveraSQ = [aloeveraReference, aloeveraDisplayName, aloeveraOtherNames, pageReference];

var snakeplantReference = "Snake_plant";
var snakeplantDisplayName = "SNAKE PLANT";
var snakeplantOtherNames = ["VIPER'S BOWSTRING HEMP", "VIPERS BOWSTRING HEMP", "BOWSTRING HEMP", "SAINT GEORGE'S SWORD", "SAINT GEORGES SWORD", "GEORGES SWORD", "GEORGE'S SWORD", "MOTHER-IN-LAW'S TONGUE", "MOTHER-IN-LAWS TONGUE", "MOTHERS TONGUE", "MOTHER IN LAW'S TONGUE", "MOTHER IN LAWS TONGUE", "SANSEVIERIA TRIFASCIATA"];
var snakeplantSQ = [snakeplantReference, snakeplantDisplayName, snakeplantOtherNames, pageReference];

var crownofthornsReference = "Crown_of_thorns";
var crownofthornsDisplayName = "CROWN OF THORNS";
var crownofthornsOtherNames = ["CROWN-OF-THORNS", "CHRIST", "CHRIST THORN", "THORNY", "CORONA DE CRISTO", "CHRIST'S CROWN", "CHRISTS CROWN", "EUPHORBIA MILII"];
var crownofthornsSQ = [crownofthornsReference, crownofthornsDisplayName, crownofthornsOtherNames, pageReference];

var scheffleraReference = "Schefflera";
var scheffleraDisplayName = "SCHEFFLERA";
var scheffleraOtherNames=["DWARF UMBRELLA TREE", "SCHEFFLERA ARBORICOLA"];
var scheffleraSQ = [scheffleraReference, scheffleraDisplayName, scheffleraOtherNames, pageReference];

var allSearchQueries = [peperomiaSQ, moneyplantSQ, zzplantSQ, aloeveraSQ, snakeplantSQ, crownofthornsSQ, scheffleraSQ];
