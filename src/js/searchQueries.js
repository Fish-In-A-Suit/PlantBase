/*These are all of the possible search queries which can be searched for in the search field*/
/* Rules:
  - "plant" is omitted!
  - this script should be loaded before itemSearcher.js*/

var peperomiaReference = "Peperomia";
var peperomiaDisplayName = "PEPEROMIA";
var peperomiaOtherNames = ["RADIATOR", "PIPERACEAE"];
var peperomiaSQ = [peperomiaReference, peperomiaDisplayName, peperomiaOtherNames, PR_INDOOR_PLANTS]; //SQ = search query

var moneyPlantReference = "Money_plant";
var moneyplantDisplayName = "MONEY";
var moneyplantOtherNames = ["PANCAKE", "UFO", "LEFSE", "MISSIONARY", "BENDER", "MIRROR GRASS", "PILEA PEPEROMIOIDES"];
var moneyplantSQ = [moneyPlantReference, moneyplantDisplayName, moneyplantOtherNames, PR_INDOOR_PLANTS];

var zzplantReference = "ZZ_plant";
var zzplantDisplayName = "ZZ";
var zzplantOtherNames = ["ZANZIBAR GEM", "ZUZU", "AROID PALM", "ETERNITY", "EMERALD PALM", "ZAMIOCULCAS", "ZAMIOCULCAS ZAMIOFILIA"];
var zzplantSQ = [zzplantReference, zzplantDisplayName, zzplantOtherNames, PR_INDOOR_PLANTS];

var aloeveraReference = "Aloe_vera";
var aloeveraDisplayName = "ALOE VERA";
var aloeveraOtherNames = ["ALOE", "CHINESE ALOE", "INDIAN ALOE", "TRUE ALOE", "BARBADOS ALOE", "FIRST AID", "BURN ALOE"];
var aloeveraSQ = [aloeveraReference, aloeveraDisplayName, aloeveraOtherNames, PR_INDOOR_PLANTS];

var snakeplantReference = "Snake_plant";
var snakeplantDisplayName = "SNAKE";
var snakeplantOtherNames = ["VIPER'S BOWSTRING HEMP", "VIPERS BOWSTRING HEMP", "BOWSTRING HEMP", "SAINT GEORGE'S SWORD", "SAINT GEORGES SWORD", "GEORGES SWORD", "GEORGE'S SWORD", "MOTHER-IN-LAW'S TONGUE", "MOTHER-IN-LAWS TONGUE", "MOTHERS TONGUE", "MOTHER IN LAW'S TONGUE", "MOTHER IN LAWS TONGUE", "SANSEVIERIA TRIFASCIATA"];
var snakeplantSQ = [snakeplantReference, snakeplantDisplayName, snakeplantOtherNames, PR_INDOOR_PLANTS];

var crownofthornsReference = "Crown_of_thorns";
var crownofthornsDisplayName = "CROWN OF THORNS";
var crownofthornsOtherNames = ["CROWN-OF-THORNS", "CHRIST", "CHRIST THORN", "THORNY", "CORONA DE CRISTO", "CHRIST'S CROWN", "CHRISTS CROWN", "EUPHORBIA MILII"];
var crownofthornsSQ = [crownofthornsReference, crownofthornsDisplayName, crownofthornsOtherNames, PR_INDOOR_PLANTS];

var scheffleraReference = "Schefflera";
var scheffleraDisplayName = "SCHEFFLERA";
var scheffleraOtherNames=["DWARF UMBRELLA TREE", "SCHEFFLERA ARBORICOLA"];
var scheffleraSQ = [scheffleraReference, scheffleraDisplayName, scheffleraOtherNames, PR_INDOOR_PLANTS];

var plilyReference = "Peace_lily";
var plilyDisplayName="PEACE LILY";
var plilyOtherNames=["SPATHIPHYLLUM WALLISII", "WHITE SAILS", "SPATHE FLOWER"];
var plilySQ=[plilyReference, plilyDisplayName, plilyOtherNames, PR_INDOOR_PLANTS];

var spiderplantReference = "Spider_plant";
var spiderplantDisplayName="SPIDER";
var spiderplantOtherNames=["CHLOROPHYTUM COMOSUM", "AIRPLANE", "ST. BERNARD'S LILY", "ST BERNARDS LILY", "ST BERNARD'S LILY", "SPIDER IVY", "RIBBON", "HEN AND CHICKENS"];
var spiderPlantSQ = [spiderplantReference, spiderplantDisplayName, spiderplantOtherNames, PR_INDOOR_PLANTS];

var jadeplantReference = "Jade_plant";
var jadeplantDisplayName = "JADE";
var jadeplantOtherNames = ["CRASSULA OVATA", "LUCKY", "MONEY TREE"];
var jadeplantSQ = [jadeplantReference, jadeplantDisplayName, jadeplantOtherNames, PR_INDOOR_PLANTS];

var fiddlefigReference = "Fiddle_leaf_fig";
var fiddlefigDisplayName="FIDDLE LEAF FIG";
var fiddlefigOtherNames=["FICUS LYRATA"];
var fiddlefigSQ = [fiddlefigReference, fiddlefigDisplayName, fiddlefigOtherNames, PR_INDOOR_PLANTS];

var begoniaReference = "Begonia";
var begoniaDisplayName = "BEGONIA";
var begoniaOtherNames = [];
var begoniaSQ = [begoniaReference, begoniaDisplayName, begoniaOtherNames, PR_INDOOR_PLANTS];

var allSearchQueries = [peperomiaSQ, moneyplantSQ, zzplantSQ, aloeveraSQ, snakeplantSQ, crownofthornsSQ, scheffleraSQ, plilySQ, spiderPlantSQ, jadeplantSQ, fiddlefigSQ, begoniaSQ];
