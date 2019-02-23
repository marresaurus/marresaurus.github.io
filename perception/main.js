// TODO:

// Ändra (om vi vill):
// 	Färger
// 	Design
// 	Tajming av noise och question

// Global Variables

letters = 6 // 4 or 6
stimuliTime = 500 //millisekunder
pauseTime = 1000 //millisekunder

colourList = []; //en shufflad lista av färgkombinationer [[bakgrund, textfärg], ...]
letterCombo = []; //bokstavskombinationerna som ska visas
globalListOfData = [];
globalTextCounter = 0;
globalListCounter = 0;
globalStatus = "";
startDate = new Date();
endDate = new Date();


same = true;
different = false;

id = prompt("Please enter file name:", "Person_1");

// All colours
green	= "#247e18"
brightRed 	= "#FF5C54" //"#ECA6A2"
blue 	= "#14306d"
darkRed = "#891B14"

/*
blueBlue 	= '#15156d'
blueGreen 	= '#156d5d'
blueViolet	= '#53156d'
greenGreen	= '#1f6d15'
orangeOrange	= '#df8c16'
redRed		= '#7f1717'
redOrange	= '#b24217'
redViolet	= '#6d1549'
violetViolet	= '#68156d'
yellowYellow	= '#d0cc2a'
yellowGreen 	= '#71941c'
yellowOrange	= '#d0aa2a'
*/

redPink = "#FF007C";
redRed  = "#FF1100";
orangeOrange = "#FF9A00";
yellowYellow = "#FFE600";
yellowGreen = "#A5FE00";
greenGreen = "#00FD56";
turquiseTurquise = "#00FFE8";
turquiseBlue = "#00A0FF";
blueBlue = "#0023FF";
purplePurple = "#6A00FF";
pinkPink = "#F500FF";


function viewChanger(viewString) {

	globalStatus = viewString;

	if(viewString == "start") { 

		//document.getElementById("image").style.display = "none"
		document.getElementById("info").style.display = "none"
		document.getElementById("thanks").style.display = "none"
		document.getElementById("testText").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("startButton").style.display = "block"
	} else if(viewString == "text") {
		document.getElementById("infoText").style.display = "none"
		document.getElementById("info").style.display = "none"
		//document.getElementById("image").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("testText").style.display = "block"
		document.getElementById("startButton").style.display = "none"
	} else if(viewString == "noise") {
		document.getElementById("info").style.display = "none"
		//document.getElementById("image").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("startButton").style.display = "none"
		//document.getElementById("noise").style.display = "block"
		document.getElementById("testText").style.display = "none"
	} else if(viewString == "question") {
		//document.getElementById("noise").style.display = "none"
		document.getElementById("info").style.display = "block"
		//document.getElementById("image").style.display = "block"
		document.getElementById("sameAsYouSaw").style.display = "block"
		document.getElementById("answer").style.display = "block"
	} else if(viewString == "end") {
		document.getElementById("info").style.display = "none"
		//document.getElementById("image").style.display = "none"
		document.getElementById("sameAsYouSaw").style.display = "none"
		document.getElementById("answer").style.display = "none"
		document.getElementById("thanks").style.display = "block"
	} else {
		console.log("ERROR! viewChanger did not recieve proper string");
	}
}

function readLists() {

//colourList = [[red,redRed,same],[green,redRed,same]];

//colourList = [[red,redRed,same],[green,redRed,same],[red,redViolet,same],[green,redViolet,same],[red,violetViolet,same],[green,violetViolet,same],[red,blueViolet,same],[green,blueViolet,same],[red,blueBlue,same],[green,blueBlue,same],[red,blueGreen,same],[green,blueGreen,same],[red,greenGreen,same],[green,greenGreen,same],[red,yellowGreen,same],[green,yellowGreen,same],[red,yellowYellow,same],[green,yellowYellow,same],[red,yellowOrange,same],[green,yellowOrange,same],[red,orangeOrange,same],[green,orangeOrange,same],[red,redOrange,same],[green,redOrange,same],[red,redRed,different],[green,redRed,different],[red,redViolet,different],[green,redViolet,different],[red,violetViolet,different],[green,violetViolet,different],[red,blueViolet,different],[green,blueViolet,different],[red,blueBlue,different],[green,blueBlue,different],[red,blueGreen,different],[green,blueGreen,different],[red,greenGreen,different],[green,greenGreen,different],[red,yellowGreen,different],[green,yellowGreen,different],[red,yellowYellow,different],[green,yellowYellow,different],[red,yellowOrange,different],[green,yellowOrange,different],[red,orangeOrange,different],[green,orangeOrange,different],[red,redOrange,different],[green,redOrange,different]];

colourList = [[brightRed, redRed, same], [darkRed, redRed, same], [brightRed, yellowYellow, same], [darkRed, yellowYellow, same], [brightRed, greenGreen, same], [darkRed, greenGreen, same], [brightRed, turquiseTurquise, same], [darkRed, turquiseTurquise, same], [brightRed, blueBlue, same], [darkRed, blueBlue, same], [brightRed, pinkPink, same], [darkRed, pinkPink, same], [brightRed, redRed, different], [darkRed, redRed, different], [brightRed, yellowYellow, different], [darkRed, yellowYellow, different], [brightRed, greenGreen, different], [darkRed, greenGreen, different], [brightRed, turquiseTurquise, different], [darkRed, turquiseTurquise, different], [brightRed, blueBlue, different], [darkRed, blueBlue, different], [brightRed, pinkPink, different], [darkRed, pinkPink, different], [brightRed, redRed, same], [darkRed, redRed, same], [brightRed, yellowYellow, same], [darkRed, yellowYellow, same], [brightRed, greenGreen, same], [darkRed, greenGreen, same], [brightRed, turquiseTurquise, same], [darkRed, turquiseTurquise, same], [brightRed, blueBlue, same], [darkRed, blueBlue, same], [brightRed, pinkPink, same], [darkRed, pinkPink, same], [brightRed, redRed, different], [darkRed, redRed, different], [brightRed, yellowYellow, different], [darkRed, yellowYellow, different], [brightRed, greenGreen, different], [darkRed, greenGreen, different], [brightRed, turquiseTurquise, different], [darkRed, turquiseTurquise, different], [brightRed, blueBlue, different], [darkRed, blueBlue, different], [brightRed, pinkPink, different], [darkRed, pinkPink, different]]


// 4 letters
letterCombo4 = [['P K T B', 'P K T D'], ['J B P Q', 'J B P S'], ['Z C F P', 'Z K F P'], ['B S Q R', 'B M Q R'], ['S Q F P', 'C Q F P'], ['B K S V', 'T K S V'], ['L D N H', 'L J N H'], ['S D C G', 'S D C P'], ['F L M V', 'F L M T'], ['Z X N B', 'Z X Q B'], ['P X B L', 'V X B L'], ['N K F G', 'N K L G'], ['S T D H', 'C T D S'], ['F P M T', 'H P M T'], ['T J Z H', 'J C Z H'], ['H M G Z', 'Q M G Z'], ['J Z L K', 'J P L K'], ['Z L B G', 'T L B G'], ['C P H T', 'C M H V'], ['R P J Q', 'R N J Q'], ['R H G Z', 'R N G Z'], ['J F D V', 'J P D V'], ['V D S K', 'V D S Z'], ['Z D G J', 'N D G J'], ['H S Q X', 'H G Q X'], ['V R H T', 'V R H K'], ['S C J T', 'B C J T'], ['D M J P', 'D M X P'], ['R N X K', 'R N F K'], ['N K B P', 'N K B Z'], ['Z X G T', 'Z X G H'], ['N G Q M', 'N K Q M'], ['S K B P', 'H K B P'], ['S H N P', 'S X N P'], ['N L S F', 'N L Q F'], ['G Z F M', 'S Z G M'], ['C H N F', 'H F N T'], ['T P K L', 'X P K L'], ['V F B K', 'V F B M'], ['N M G T', 'N Q G T'], ['G B X Q', 'G B M Q'], ['Z S F D', 'Z S F G'], ['H S X F', 'H L X F'], ['H P K C', 'H G K C'], ['G Q D K', 'G Q R K'], ['R C P X', 'R C B X'], ['B L G H', 'B L F H'], ['Q Z J D', 'R Z J D'], ['Z H P R', 'Z M P R'], ['Q F K Z', 'Q F K B'], ['S N T R', 'S P T R'], ['V L B X', 'V L B P'], ['D P L R', 'H P R C'], ['H J P N', 'H J F N'], ['L N P G', 'T N P G'], ['K R H J', 'K R H N'], ['J V P X', 'J N P X'], ['C P K S', 'C M K S'], ['R T P H', 'R T D H'], ['P J V K', 'Z J V K'], ['X B Q G', 'X S Q G'], ['D X S H', 'D X S C'], ['J B N X', 'Z B N X'], ['H M V Z', 'Q M V Z'], ['N P R L', 'N P C L'], ['R B T H', 'R T X V'], ['B M D Z', 'B L D Z'], ['P K N R', 'P K X R'], ['N S F Z', 'M S F Z'], ['K T C M', 'K T F M'], ['Q V L J', 'Q V B J'], ['V C F J', 'T C F J'], ['Z J D G', 'Z B D G'], ['R L N J', 'D L N J'], ['S J F H', 'S C F H'], ['Q K G N', 'Q K C N'], ['S J V C', 'S B Q K'], ['Z P B N', 'Z P B Q'], ['Q X H F', 'P X H F'], ['T G P Q', 'T R P Q'], ['M N L C', 'M N D C'], ['T M C N', 'T H C N'], ['S J N F', 'S M N F'], ['F L C Q', 'F Z C Q'], ['D B X N', 'D B H N'], ['D F X J', 'D F X P'], ['S Q V B', 'S Q Z B'], ['D G Z X', 'D G Z V'], ['X J Z D', 'X S Z D'], ['L Q C P', 'L Q C Z'], ['X C R S', 'R Z C S'], ['C J N R', 'C J N G'], ['R B N Z', 'F X Q Z'], ['C S Z J', 'C S Z H'], ['V G L P', 'V T L P'], ['Q H Z S', 'Q H Z F'], ['D R M B', 'D R M P'], ['P K J X', 'D K J X'], ['X S V P', 'X S V M'], ['X V K N', 'X V Z N']]
// 6 letters
letterCombo6 = [['J H M D Z S', 'J H M D Z Q'], ['N D P L B Z', 'N D P L Q Z'], ['L K Q S R C', 'L K Q Z R C'], ['H S M T N D', 'V Z L J P D'], ['S H M T Q X', 'S H J T Q X'], ['X V R P C S', 'F V M N Q H'], ['S Q K L F Z', 'S Q K L P Z'], ['P G R Z V H', 'P G R Z V X'], ['V R F C G K', 'V R J Z G K'], ['X L F M D K', 'X L F M P K'], ['N F P T V K', 'N F P C V K'], ['X K S G F J', 'X K H G F J'], ['H S C N K D', 'H S C N F D'], ['J P S M L Q', 'J P B M L Q'], ['K C L T P J', 'K C L T P H'], ['P T N M Q H', 'R T N M Q H'], ['S B T L G F', 'S B T L G D'], ['T G N R M V', 'B G N R M V'], ['B Q S V R H', 'B Q S V R K'], ['K D M Z X J', 'K D M G X J'], ['T M Z S D H', 'T M F S D H'], ['G P L B C J', 'G P L B C R'], ['F G N M H K', 'J B N F H K'], ['K S P J V Z', 'K M P J V Z'], ['S Q T Z C H', 'S Q T Z D H'], ['K L M R Q G', 'K L M C Q G'], ['F H K V Q J', 'G H K V Q J'], ['V P B N Q F', 'V P B N R F'], ['N P G V R F', 'N P Q V R F'], ['X N K H V Z', 'X P K H V Z'], ['G K R T D H', 'H G J K M C'], ['R P B G L H', 'Q P B G L H'], ['M X Q R J Z', 'M X Q K J Z'], ['L D K F C B', 'L D H F C B'], ['M Z G R T Q', 'M Z G C T Q'], ['M Q G R K X', 'F Q M R K X'], ['L D M H Z R', 'F D M H Z R'], ['P Q F G M X', 'P Q F G M S'], ['H J K P Z M', 'H J K Q Z M'], ['D Z Q H M N', 'D Z Q R M N'], ['J F V D Q C', 'J F V X M C'], ['L N P M Z J', 'L N P M Z B'], ['C M S B V X', 'C M S B N X'], ['L F Q B M H', 'N F V B M K'], ['F H J T S R', 'B H J T S R'], ['S P C Q T L', 'H S Z P L Q'], ['P M L D F K', 'P M B D F K'], ['N K F L M T', 'N K F Z M T'], ['Q R L T N V', 'S R L T N V'], ['X J F L R G', 'X J F L R Z'], ['V B F M G D', 'L B R H P F'], ['D M N H L B', 'D M R H C L'], ['D H Z N T V', 'D H C N T V'], ['L K V X F R', 'L G V C B F'], ['T H N D V L', 'T H K D V L'], ['X S G K V L', 'X S G K V H'], ['F C X N Z P', 'F V X N Z P'], ['P V D J X H', 'P V G J X H'], ['Z B T S C M', 'Z B T Q C M'], ['Q H T N J K', 'Q H X N J K'], ['H V D P G R', 'H V D P B R'], ['C G T L X K', 'C G F L T K'], ['R L M D X V', 'R L M D Q V'], ['Z J F N L G', 'Z M F N L J'], ['V S M N X L', 'V S H N X L'], ['H Z J C B R', 'H X J C B R'], ['V C J M T Q', 'V C J M T G'], ['S J N H R T', 'S J N H K T'], ['P F J D Z V', 'P S J D Z V'], ['M L B D R G', 'F M B D R G'], ['H L X B D R', 'S L X B D R'], ['X V P H K S', 'X V F H K S'], ['S D Z C X K', 'S D Z M X K'], ['B N V H D M', 'B N V J D H'], ['T M K R G C', 'T Q K R G C'], ['K M B J L H', 'K M B J L C'], ['H J R K G P', 'H D R K G P'], ['C H F J D B', 'R H F J D B'], ['X N D Q J K', 'Z N D Q J K'], ['G C Z P L F', 'G C Z P L K'], ['M F Q Z H V', 'M F Q D H V'], ['G M T V S K', 'G M T V S F'], ['T M G D F H', 'T M G D S H'], ['B S H P Q X', 'L T Q S B V'], ['B P M F T J', 'B P M F T V'], ['G J Z R Q V', 'G J Q R F L'], ['Q X G L D M', 'Q X G L S M'], ['R D P N K Z', 'R D P N F Z'], ['Z J V N G K', 'Z J Q N G K'], ['P C F M K Q', 'P C F M N Q'], ['S H G D K R', 'S H G D K T'], ['G C T N B L', 'G C F N B L'], ['D C B J F Q', 'D C B K F Q'], ['P M B F X Z', 'P M C B X Z'], ['F S B G J M', 'F R B G J M'], ['S G H F K R', 'S G H F K T'], ['P N J X S G', 'P F J X S G'], ['Z D B K L S', 'B T P K X L'], ['X B R T L K', 'L V H T R B'], ['L S M K N V', 'L Z M K N V']]

// 8 letters
//letterCombo = [['CBNTJJLA', 'HBNTJJLA'], ['DXJXEEOR', 'DXJXEVOR'], ['AKYEPYBI', 'AKYYPYBI'], ['KXKLVUMO', 'KXKLVUEO'], ['FAFYXHRQ', 'KAFYXHRQ'], ['MZKRGJFZ', 'MZKRGJPZ'], ['FGUHINFQ', 'FGUZINFQ'], ['JPZLUPXC', 'JCZLUPXC'], ['EQXDKKIT', 'EQKDKKIT'], ['HNIFUEOF', 'HNIMUEOF'], ['LBPADJLA', 'LBPADJOA'], ['AOGSENRK', 'AOLSENRK'], ['ABSXJKDX', 'ABSXUKDX'], ['ZKAPXYKL', 'ZKAUXYKL'], ['AVNGGFLQ', 'AENGGFLQ'], ['PVGHSLGM', 'PVGPSLGM'], ['EYFQRSCU', 'EYFQRSCP'], ['NRNHRQCU', 'NRNHRQUU'], ['QCCIUYEN', 'QCCIUHEN'], ['GBLRFQNP', 'GBERFQNP'], ['PKIRBUCK', 'PEIRBUCK'], ['FGLHQLBT', 'FELHQLBT'], ['QTZUODUQ', 'QZZUODUQ'], ['HTCGIAHV', 'HTCGIAZV'], ['ZKSPEAXA', 'RKSPEAXA'], ['MQXYBHVI', 'HQXYBHVI'], ['FADXKXNS', 'FADXKXNX'], ['LUROHABP', 'LUROHASP'], ['FKOTSAHN', 'FMOTSAHN'], ['ZJCVYODK', 'ZMCVYODK'], ['BEVHDABH', 'BEVHDRBH'], ['SAJHHRIM', 'LAJHHRIM'], ['XHOJBQPG', 'XHHJBQPG'], ['BMUNJHGZ', 'BMUNJXGZ'], ['FJDVFVIJ', 'FADVFVIJ'], ['BIEZYAPR', 'BIEZNAPR'], ['YYCAYAOT', 'YYCAYAGT'], ['YJRJBXXX', 'YIRJBXXX'], ['QENOAPIU', 'QENOAMIU'], ['JEZLMCHX', 'JEZLDCHX'], ['BXEEUGOD', 'BXEERGOD'], ['SHUXDCMT', 'SHUKDCMT'], ['KNOXRCHP', 'KNOXRCOP'], ['QZDCGHLX', 'QZDJGHLX'], ['NVXAVVAN', 'NVXEVVAN'], ['GOMDJHNL', 'GOMVJHNL'], ['ZHEINLNS', 'ZHEINNNS'], ['UFKYJSVF', 'UFKYJSVO'], ['TIZVZQZT', 'TIZVZEZT'], ['RBQLFJYQ', 'RBQLFJXQ'], ['VBEYQOMC', 'VBEYQOJC'], ['MMNPZKOU', 'MMPPZKOU'], ['GKSTAOGQ', 'GKSTAOGV'], ['ZTHKTCKB', 'FTHKTCKB'], ['MLHXGINN', 'MLHXGDNN'], ['PSMFOSMQ', 'PSMSOSMQ'], ['HVICBSQG', 'HVICBSLG'], ['UDLPLIJZ', 'UDVPLIJZ'], ['DGFAUTTN', 'DGFAUTTO'], ['SVXYNJOC', 'SSXYNJOC'], ['BCYCGFCL', 'BCYMGFCL'], ['FYVMYHVU', 'FYVMYHVF'], ['ETMFKTSR', 'ETLFKTSR'], ['PLNFJSLC', 'PGNFJSLC'], ['ZGIASGXO', 'ZGIASGLO'], ['CYJRPJBD', 'CYJRPTBD'], ['TRVHTZCV', 'TRVHTZBV'], ['FRZOEIZT', 'FRZDEIZT'], ['IAZZKIVQ', 'OAZZKIVQ'], ['FZKQVDDY', 'FZKYVDDY'], ['GMCDFUCZ', 'XMCDFUCZ'], ['EBTEMNFH', 'ZBTEMNFH'], ['ECVEYUQN', 'ECVEYUYN'], ['BPEOJGJV', 'BYEOJGJV'], ['SLKHEDBP', 'SLKDEDBP'], ['MZYAGOJA', 'MZYAYOJA'], ['KOCKGXKS', 'KOCKGXKO'], ['ZOUCMNVE', 'DOUCMNVE'], ['CKCKJPHB', 'CTCKJPHB'], ['JZJURLYM', 'JZJULLYM'], ['HSTKZZZN', 'HSTYZZZN'], ['DIMQRLIS', 'DIMQRLGS'], ['UXOSKCZQ', 'UMOSKCZQ'], ['TDHOQKLZ', 'DDHOQKLZ'], ['UGPJDZPT', 'UGPJDQPT'], ['NNNNSUNR', 'NNNNSGNR'], ['SIZHTMIV', 'LIZHTMIV'], ['KSTJUZAS', 'KSTJUZPS'], ['GJGUXVFB', 'GJGUXMFB'], ['CCIDTYHU', 'CCYDTYHU'], ['UJOOXJHJ', 'UIOOXJHJ'], ['AKAHLJVB', 'AKAHLKVB'], ['LHSPPMKM', 'LHSPPMMM'], ['FLXKEEKU', 'NLXKEEKU'], ['MNTFUITO', 'MNTFUGTO'], ['UYTTDEFG', 'UYLTDEFG'], ['LMIDZTUV', 'LMIDITUV'], ['ZMDACMHN', 'ZMDNCMHN'], ['FKZIPSCL', 'FKUIPSCL'], ['QLAHNVZG', 'QLAHNYZG']]

// 10 letters
//letterCombo = [['BLBOITDRRO', 'BLBZITDRRO'], ['JXENDRARNI', 'JXLNDRARNI'], ['GUFDPDATXR', 'AUFDPDATXR'], ['VSGZQPOUKJ', 'VSGZQPOCKJ'], ['ZESZNNKCRO', 'ZESZNNHCRO'], ['QBSSZTPPXR', 'QBSSZTPPXI'], ['UOFFSYNGOK', 'UOFFSKNGOK'], ['EHATTGAKUF', 'EHATGGAKUF'], ['TZGSMDJUXQ', 'TZGRMDJUXQ'], ['VQLZFVLHYI', 'VQLZFVLHSI'], ['YHXKNNSQSX', 'HHXKNNSQSX'], ['HYBQSLYPVJ', 'HYBQSLYPVZ'], ['FSRPFSPESQ', 'FSRPFSPNSQ'], ['CSEIDAHOBO', 'CSEIDOHOBO'], ['QZOALXTRDS', 'QZOALXTRDK'], ['OSUDEPTZCP', 'OSPDEPTZCP'], ['NOFBBUJJQG', 'YOFBBUJJQG'], ['QBJILTOFZT', 'BBJILTOFZT'], ['GAFREDRARF', 'GAFRIDRARF'], ['ANGBMAEUAG', 'ANGJMAEUAG'], ['RKBOHPKDXD', 'RKOOHPKDXD'], ['QVNCZXIHNA', 'QVNCHXIHNA'], ['TYRTLIHEJG', 'TYXTLIHEJG'], ['OZUHLNXZLO', 'OZUHLNXZLZ'], ['BIQIAZDCNK', 'BIQIAZDPNK'], ['LGKCYHVMSJ', 'LGKCFHVMSJ'], ['CIULHDTDDR', 'CIULHDFDDR'], ['HXPSTCOJYE', 'HXPSTCOJYP'], ['RNRJLFTIHH', 'XNRJLFTIHH'], ['JDCLKITDOT', 'JDCDKITDOT'], ['FXOCYEALEF', 'FXOCYEALEM'], ['OSPDSTLFIX', 'OIPDSTLFIX'], ['EPHNQTFRUM', 'EPHNQCFRUM'], ['NOPNVNZULO', 'NOPNVVZULO'], ['INOJKHRTPZ', 'INOJKHRTEZ'], ['ONBPXUCCHE', 'ONBPXUUCHE'], ['QKQZCKZEYG', 'QKQZCLZEYG'], ['RUPBXIXAFY', 'RUPBXIXAFF'], ['OOUIINQSHG', 'OOUIINJSHG'], ['YVLHIFJVTJ', 'YVLHIFSVTJ'], ['MOFCKPAPVN', 'MOFPKPAPVN'], ['KUYMSGTOUH', 'KUYMSGTOVH'], ['QALDPQMZCN', 'OALDPQMZCN'], ['KLOBAUXFDC', 'KLBBAUXFDC'], ['XLREMRKQNS', 'XLREMRKQNY'], ['GTQAKFOBFS', 'GTQJKFOBFS'], ['TDIVPRDEZT', 'TJIVPRDEZT'], ['APCMEVVHTS', 'AFCMEVVHTS'], ['YRUJATURHH', 'YRUJATUQHH'], ['IZMDTDADKK', 'IZGDTDADKK'], ['MXAMUEKBGA', 'MXAMUEKBGE'], ['NYGOXPFYEO', 'NYGOXFFYEO'], ['ZNYZRJAROL', 'ZIYZRJAROL'], ['BIFQENLKXR', 'BDFQENLKXR'], ['LNURCSQBTO', 'LNURCSBBTO'], ['DSTGFODPPD', 'DSTGFXDPPD'], ['ZXQDUDYRKK', 'XXQDUDYRKK'], ['CMGOYKNEVG', 'CMGOYKIEVG'], ['ECLJMJVNGA', 'ECLJMJVNGJ'], ['ICFEQMLEYM', 'ZCFEQMLEYM'], ['HSGFENQGQV', 'HSGFENQGQQ'], ['AYUBFJLHFR', 'AYUBEJLHFR'], ['JMVLARMGMZ', 'HMVLARMGMZ'], ['VVIXONXIMO', 'VVIXOXXIMO'], ['LGUAEMGDOO', 'LXUAEMGDOO'], ['SXSLZCESMJ', 'KXSLZCESMJ'], ['ODPYUTQPAZ', 'ODPYUTRPAZ'], ['UUHVHMFCCD', 'UUHVHMFKCD'], ['YBXYUEAVTQ', 'YBXYUEAVTN'], ['HZUCZMUYAD', 'HZUCZMPYAD'], ['NZXQDKDJYD', 'NZXQDKBJYD'], ['BJGXLGYPOG', 'BJGXLGYPNG'], ['PCRZKTTLXV', 'UCRZKTTLXV'], ['HICCIKYKDY', 'HICCIKYJDY'], ['YHMBUHIMTS', 'EHMBUHIMTS'], ['HPEJEVIKVY', 'HPBJEVIKVY'], ['MURILGFPPI', 'MURILGFPPR'], ['AAGDSEAUUD', 'AAGDSEMUUD'], ['KFKSSSINGZ', 'KFKSMSINGZ'], ['VVNGCUQGXO', 'VVNICUQGXO'], ['CVGZPUXJEP', 'VVGZPUXJEP'], ['QPKZNRRPII', 'QPKZNRRPIA'], ['MNJREMMQHP', 'MGJREMMQHP'], ['QOGPQLAGDY', 'MOGPQLAGDY'], ['BQJBUTINKD', 'BQJBUTISKD'], ['AJMKGKRQPH', 'AJMKGKRQPQ'], ['OCYOXQHHHH', 'OCYKXQHHHH'], ['PPEOJOTICE', 'PPEOJOTICH'], ['SKMAXRDIFM', 'IKMAXRDIFM'], ['TQQCVSPKKK', 'TQQCVSPKLK'], ['RSKEDAGJDD', 'RSKEDAGJDI'], ['SUJXRKLPII', 'SUJDRKLPII'], ['YILMYOBQYP', 'YILMYOBCYP'], ['YLZLREZJBJ', 'YCZLREZJBJ'], ['BQSKQCMQCO', 'BOSKQCMQCO'], ['MBBPJPMYCD', 'MBBPJPMICD'], ['JNHYTXAHKH', 'JNHYRXAHKH'], ['GMXBIXZDSL', 'GMXBIXQDSL'], ['CPEBAXPLHU', 'CPEBVXPLHU'], ['TLCQTZOLAQ', 'TVCQTZOLAQ']]
	

	if(letters == 4) {
		letterCombo = letterCombo4
	}
	else {
		letterCombo = letterCombo6
	}

	shuffleArray(colourList);
	shuffleArray(letterCombo);

	testCases = [[blue,yellowYellow,same],[blue,greenGreen,different],[blue,pinkPink,same],[blue,turquiseTurquise,different]];

	colourList = testCases.concat(colourList);

}

function start() {
	readLists()
	listLooper()
}

window.addEventListener("keydown", keyDownFunction);

function keyDownFunction(e) {

	if(globalStatus == "question") {
	endDate   = new Date()
	var list = [];
	var key = e.KeyCode ? e.keyCode : e.which
	list.push(key)
	list.push(colourList[globalListCounter-1][0])
	list.push(colourList[globalListCounter-1][1])
	list.push(colourList[globalListCounter-1][2])
	list.push(document.getElementById("testText").innerHTML)
	list.push(document.getElementById("answer").innerHTML)
	list.push((endDate.getTime() - startDate.getTime()))
	list.push(startDate)
	list.push(endDate)
	//YES
	//console.log(key)
	if (key == 39) { 
		list.push("YES");
		if (document.getElementById("testText").innerHTML == document.getElementById("answer").innerHTML){
			list.push("CORRECT")
		}
		else {
			list.push("INCORRECT")
		}
		globalListOfData.push(list)
		listLooper()

	}
	
	//NO
	else if (key == 37) { 
		list.push("NO")
		if(document.getElementById("testText").innerHTML != document.getElementById("answer").innerHTML){
			list.push("CORRECT")
		}
		else {
			list.push("INCORRECT")
		}
		globalListOfData.push(list)
		listLooper()
	}
	}
}

function listLooper(){
	
	if(globalListCounter<colourList.length) {
		
		viewChanger("noise")

		delay = 0;
		globalListCounter +=1
		document.getElementById("progress").innerHTML = globalListCounter + "/" + colourList.length
		setTimeout(text, delay)
		setTimeout(noise, stimuliTime + delay)
		setTimeout(question, stimuliTime + pauseTime + delay)


		
	}
	else {
		//TESTING DONE!!!
		viewChanger("end")
		JsonExport = globalListOfData

		// https://stackoverflow.com/questions/33780271/export-a-json-object-to-a-text-file

		const filename = id + '.txt';
		const jsonStr = JSON.stringify(JsonExport);

		let element = document.createElement('a');
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
		element.setAttribute('download', filename);

		element.style.display = 'none';
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);		
	}

}

function text() {

		words = getRandomText()

		colours = colourList[globalListCounter-1]

		if(colours[2]) {
			document.getElementById("testText").innerHTML = words[0]
			document.getElementById("answer").innerHTML = words[0]
		}
		else {
			document.getElementById("testText").innerHTML = words[0]
			document.getElementById("answer").innerHTML = words[1]

		}
		
		document.body.style.backgroundColor = colours[0];
		document.getElementById("testText").style.color = colours[1];

	 viewChanger("text")
}

function question() {
	startDate = new Date();
	viewChanger("question")
}

function noise() {
	document.body.style.backgroundColor = "white";
	viewChanger("noise")
}

function getRandomText() {
	globalTextCounter += 1
	return letterCombo[globalTextCounter-1]
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * saxat från StackOverflow
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

viewChanger("start")

