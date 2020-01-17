/*These are all of the possible search queries which can be searched for in the search field*/
/* Rules:
  - "plant" is omitted!
  - this script should be loaded before itemSearcher.js
  - apostrophes must be replaced by "_" (underscore) when denoting plant references
  */

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

var devilsIvyReference = "Devil_s_ivy";
var devilsIvyDisplayName = "DEVILS IVY";
var devilsIvyOtherNames = ["GOLDEN POTHOS", "CEYLON CREEPER", "HUNTER'S ROBE", "IVY ARUM", "SILVER VINE", "SOLOMON ISLANDS IVY", "MARBLE QUEEN", "TARO VINE", "DEVIL'S VINE", "DEVIL'S VINE"];
var devilsIvySQ = [devilsIvyReference, devilsIvyDisplayName, devilsIvyOtherNames, PR_INDOOR_PLANTS];

var philodendronGreenReference = "Philodendron_green";
var philodendronGreenDisplayName = "PHILODENDRON GREEN";
var philodendronGreenOtherNames = [];
var philodendronGreenSQ = [philodendronGreenReference, philodendronGreenDisplayName, philodendronGreenOtherNames, PR_INDOOR_PLANTS];

var aglaonemaReference = "Aglaonema";
var aglaonemaDisplayName = "AGLAONEMA";
var aglaonemaOtherNames = ["CHINESE_EVERGREEN"];
var aglaonemaSQ = [aglaonemaReference, aglaonemaDisplayName, aglaonemaOtherNames, PR_INDOOR_PLANTS];

var asparagusFernReference = "Asparagus_fern"; 
var asparagusFernDisplayName = "ASPARAGUS FERN";
var asparagusFernOtherNames = ["ASPARAGUS_SETACEUS", "LACE_FERN", "ASPARAGUS_GRASS", "CLIMBING_ASPARAGUS", "FERNY_ASPARAGUS"];
var asparagusFernSQ = [asparagusFernReference, asparagusFernDisplayName, asparagusFernOtherNames, PR_INDOOR_PLANTS];

var yuccaPlantReference = "Yucca_plant";
var yuccaPlantDisplayName = "YUCCA PLANT";
var yuccaPlantOtherNames = ["SPANISH_BAYONET", "OUR_LORDS_CANDLE", "OUR_LORD'S_CANDLE", "JOSHUA_TREE", "ADAMS_NEEDLE", "ADAM'S_NEEDLE"];
var yuccaPlantSQ = [yuccaPlantReference, yuccaPlantDisplayName, yuccaPlantOtherNames, PR_INDOOR_PLANTS];

var africanVioletsReference = "African_violets";
var africanVioletsDisplayName = "AFRICAN VIOLETS";
var africanVioletsOtherNames = ["SAINTPAULIA"];
var africanVioletsSQ = [africanVioletsReference, africanVioletsDisplayName, africanVioletsOtherNames, PR_INDOOR_PLANTS];

var dragonTreeReference = "Dragon_tree";
var dragonTreeDisplayName = "DRAGON TREE";
var dragonTreeOtherNames = ["MADAGASCAR_DRAGON_TREE", "DRACAENA MARGINATA"];
var dragonTreeSQ = [dragonTreeReference, dragonTreeDisplayName, dragonTreeOtherNames, PR_INDOOR_PLANTS];

var calatheaReference = "Calathea";
var calatheaDisplayName = "CALATHEA";
var calatheaOtherNames = ["CATHEDRAL", "PEACOCK", "ZEBRA", "RATTLESNAKE", "PRAYER"];
var calatheaSQ = [calatheaReference, calatheaDisplayName, calatheaOtherNames, PR_INDOOR_PLANTS];

var rubberPlantReference = "Rubber_plant";
var rubberPlantDisplayName = "RUBBER PLANT";
var rubberPlantOtherNames = ["FICUS_ELASTICA", "RUBBER_FIG", "RUBBER_BUSH", "RUBBER_TREE"];
var rubberPlantSQ = [rubberPlantReference, rubberPlantDisplayName, rubberPlantOtherNames, PR_INDOOR_PLANTS];

var bromeliadReference = "Bromeliad";
var bromeliadDisplayName = "BROMELIAD";
var bromeliadOtherNames = ["GUZMANIA"];
var bromeliadSQ = [bromeliadReference, bromeliadDisplayName, bromeliadOtherNames,PR_INDOOR_PLANTS];

var ponytailPalmReference = "Ponytail_palm";
var ponytailPalmDisplayName = "PONYTAIL";
var ponytailPalmOtherNames = ["BOTTLE_PALM", "PONYTAIL_TREE", "ELEPHANT_FOOT", "ELEPHANTS_FOOT", "BEAUCARNEA_RECURVATA"];
var ponytailPalmSQ = [ponytailPalmReference, ponytailPalmDisplayName, ponytailPalmOtherNames, PR_INDOOR_PLANTS];

var castIronPlantReference = "Cast-iron_plant";
var castIronPlantDisplayName = "CAST IRON PLANT";
var castIronPlantOtherNames = ["ASPIDISTRA_ELATIOR", "BAR", "BAR-ROOM", "HARAN", "BARAN"];
var castIronPlantSQ = [castIronPlantReference, castIronPlantDisplayName, castIronPlantOtherNames, PR_INDOOR_PLANTS];

var dieffenbachiaReference = "Dieffenbachia";
var dieffenbachiaDisplayName = "DIEFFENBACHIA";
var dieffenbachiaOtherNames = ["DUMB_CANES"];
var dieffenbachiaSQ = [dieffenbachiaReference, dieffenbachiaDisplayName, dieffenbachiaOtherNames, PR_INDOOR_PLANTS];

var allSearchQueries = [peperomiaSQ, moneyplantSQ, zzplantSQ, aloeveraSQ, snakeplantSQ, crownofthornsSQ, scheffleraSQ, plilySQ, spiderPlantSQ, jadeplantSQ, fiddlefigSQ, begoniaSQ, devilsIvySQ, philodendronGreenSQ, aglaonemaSQ, dieffenbachiaSQ, asparagusFernSQ, yuccaPlantSQ, africanVioletsSQ, dragonTreeSQ, calatheaSQ, rubberPlantSQ, bromeliadSQ, ponytailPalmSQ, castIronPlantSQ];
