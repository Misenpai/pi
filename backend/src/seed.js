// seedPIData.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const seedPIData = async () => {
  try {
    const piData = [
      {
        username: "a.saikia",
        password: "123456",
      },
      {
        username: "aamir740",
        password: "123456",
      },
      {
        username: "abarua",
        password: "123456",
      },
      {
        username: "abd",
        password: "123456",
      },
      {
        username: "abhiak",
        password: "123456",
      },
      {
        username: "abhijitkakati",
        password: "123456",
      },
      {
        username: "abhisheksingh11",
        password: "123456",
      },
      {
        username: "achalkumar",
        password: "123456",
      },
      {
        username: "adas",
        password: "123456",
      },
      {
        username: "adilseh",
        password: "123456",
      },
      {
        username: "aditib",
        password: "123456",
      },
      {
        username: "adutta",
        password: "123456",
      },
      {
        username: "aganguly",
        password: "123456",
      },
      {
        username: "ajay.bsbe",
        password: "123456",
      },
      {
        username: "akanksha_bansal",
        password: "123456",
      },
      {
        username: "akanksha_bansal_old",
        password: "123456",
      },
      {
        username: "akd",
        password: "123456",
      },
      {
        username: "akdm",
        password: "123456",
      },
      {
        username: "aks",
        password: "123456",
      },
      {
        username: "aksarma",
        password: "123456",
      },
      {
        username: "akshaikumar",
        password: "123456",
      },
      {
        username: "alika",
        password: "123456",
      },
      {
        username: "aloshious",
        password: "123456",
      },
      {
        username: "amaresh",
        password: "123456",
      },
      {
        username: "amitdbanik",
        password: "123456",
      },
      {
        username: "amul",
        password: "123456",
      },
      {
        username: "amurali",
        password: "123456",
      },
      {
        username: "anamika1404",
        password: "123456",
      },
      {
        username: "anand.ashish",
        password: "123456",
      },
      {
        username: "anand.bio",
        password: "123456",
      },
      {
        username: "anil.iitr",
        password: "123456",
      },
      {
        username: "anilmishra",
        password: "123456",
      },
      {
        username: "animes",
        password: "123456",
      },
      {
        username: "anirban.biswas",
        password: "123456",
      },
      {
        username: "anirban.dasgupta",
        password: "123456",
      },
      {
        username: "anki.reddy",
        password: "123456",
      },
      {
        username: "ankitagaur",
        password: "123456",
      },
      {
        username: "ankushbag",
        password: "123456",
      },
      {
        username: "anp",
        password: "123456",
      },
      {
        username: "anugrah",
        password: "123456",
      },
      {
        username: "anuran.maity",
        password: "123456",
      },
      {
        username: "aparnarai",
        password: "123456",
      },
      {
        username: "aparupa",
        password: "123456",
      },
      {
        username: "apghosh",
        password: "123456",
      },
      {
        username: "arbhavanam",
        password: "123456",
      },
      {
        username: "arghyadip",
        password: "123456",
      },
      {
        username: "arijit",
        password: "123456",
      },
      {
        username: "arindam.dey",
        password: "123456",
      },
      {
        username: "arnabsarkar",
        password: "123456",
      },
      {
        username: "arpita2608",
        password: "123456",
      },
      {
        username: "arubors",
        password: "123456",
      },
      {
        username: "arun",
        password: "123456",
      },
      {
        username: "arungoyl",
        password: "123456",
      },
      {
        username: "aruntej",
        password: "123456",
      },
      {
        username: "arupchatt",
        password: "123456",
      },
      {
        username: "asaikia",
        password: "123456",
      },
      {
        username: "ashok",
        password: "123456",
      },
      {
        username: "ashwinisawant",
        password: "123456",
      },
      {
        username: "asil",
        password: "123456",
      },
      {
        username: "atanub",
        password: "123456",
      },
      {
        username: "atk",
        password: "123456",
      },
      {
        username: "atulprajapati",
        password: "123456",
      },
      {
        username: "avid25",
        password: "123456",
      },
      {
        username: "avijit.chowdhury",
        password: "123456",
      },
      {
        username: "awekar",
        password: "123456",
      },
      {
        username: "babitadevi",
        password: "123456",
      },
      {
        username: "banand",
        password: "123456",
      },
      {
        username: "bdebadrita",
        password: "123456",
      },
      {
        username: "bdeka",
        password: "123456",
      },
      {
        username: "be.hemdan",
        password: "123456",
      },
      {
        username: "bhuyan",
        password: "123456",
      },
      {
        username: "bibhas.majhi",
        password: "123456",
      },
      {
        username: "bidisha",
        password: "123456",
      },
      {
        username: "biman.mandal",
        password: "123456",
      },
      {
        username: "bimk",
        password: "123456",
      },
      {
        username: "binota",
        password: "123456",
      },
      {
        username: "binoyarghadam",
        password: "123456",
      },
      {
        username: "biplabbose",
        password: "123456",
      },
      {
        username: "bithiahgj",
        password: "123456",
      },
      {
        username: "bkhazra",
        password: "123456",
      },
      {
        username: "bmandal",
        password: "123456",
      },
      {
        username: "boeing",
        password: "123456",
      },
      {
        username: "bpmandal",
        password: "123456",
      },
      {
        username: "brboruah",
        password: "123456",
      },
      {
        username: "bsengupta",
        password: "123456",
      },
      {
        username: "budhaditya.hazra",
        password: "123456",
      },
      {
        username: "c.mallikarjuna",
        password: "123456",
      },
      {
        username: "cdas",
        password: "123456",
      },
      {
        username: "chandan",
        password: "123456",
      },
      {
        username: "chandank",
        password: "123456",
      },
      {
        username: "chaudhary",
        password: "123456",
      },
      {
        username: "chem.bishal",
        password: "123456",
      },
      {
        username: "ckarfa",
        password: "123456",
      },
      {
        username: "ckjana",
        password: "123456",
      },
      {
        username: "cmsomayaji",
        password: "123456",
      },
      {
        username: "cmukherjee",
        password: "123456",
      },
      {
        username: "cngupta",
        password: "123456",
      },
      {
        username: "csouptick",
        password: "123456",
      },
      {
        username: "d.surajit",
        password: "123456",
      },
      {
        username: "darun",
        password: "123456",
      },
      {
        username: "dborah",
        password: "123456",
      },
      {
        username: "ddas",
        password: "123456",
      },
      {
        username: "deb.sikdar",
        password: "123456",
      },
      {
        username: "debabratade.ju",
        password: "123456",
      },
      {
        username: "debarshidas",
        password: "123456",
      },
      {
        username: "debasishd",
        password: "123456",
      },
      {
        username: "debolina_1990",
        password: "123456",
      },
      {
        username: "deekshas",
        password: "123456",
      },
      {
        username: "deep123hazarika",
        password: "123456",
      },
      {
        username: "dibakar.saha10",
        password: "123456",
      },
      {
        username: "dineshbabug",
        password: "123456",
      },
      {
        username: "dineshpeu",
        password: "123456",
      },
      {
        username: "dipamath",
        password: "123456",
      },
      {
        username: "dipban",
        password: "123456",
      },
      {
        username: "dkathir80",
        password: "123456",
      },
      {
        username: "dkundu",
        password: "123456",
      },
      {
        username: "dmanna",
        password: "123456",
      },
      {
        username: "dnbasu",
        password: "123456",
      },
      {
        username: "dneog",
        password: "123456",
      },
      {
        username: "dornd",
        password: "123456",
      },
      {
        username: "drbdas",
        password: "123456",
      },
      {
        username: "dsharma",
        password: "123456",
      },
      {
        username: "dutpriya",
        password: "123456",
      },
      {
        username: "dwivedy",
        password: "123456",
      },
      {
        username: "ebunf",
        password: "123456",
      },
      {
        username: "elina",
        password: "123456",
      },
      {
        username: "emily",
        password: "123456",
      },
      {
        username: "erwin",
        password: "123456",
      },
      {
        username: "evmrs",
        password: "123456",
      },
      {
        username: "gankita8186",
        password: "123456",
      },
      {
        username: "ganu",
        password: "123456",
      },
      {
        username: "gargigoswami",
        password: "123456",
      },
      {
        username: "gauravshukla",
        password: "123456",
      },
      {
        username: "gayatri.natu",
        password: "123456",
      },
      {
        username: "gindu",
        password: "123456",
      },
      {
        username: "gk",
        password: "123456",
      },
      {
        username: "gkrishna",
        password: "123456",
      },
      {
        username: "gnongthombam",
        password: "123456",
      },
      {
        username: "gtm",
        password: "123456",
      },
      {
        username: "gupta",
        password: "123456",
      },
      {
        username: "guptar",
        password: "123456",
      },
      {
        username: "gurvinder",
        password: "123456",
      },
      {
        username: "g_barua",
        password: "123456",
      },
      {
        username: "h.s.shekhawat",
        password: "123456",
      },
      {
        username: "harshakota",
        password: "123456",
      },
      {
        username: "harshal",
        password: "123456",
      },
      {
        username: "harshc",
        password: "123456",
      },
      {
        username: "head.mfsdsai",
        password: "123456",
      },
      {
        username: "hemangee",
        password: "123456",
      },
      {
        username: "hemantakalita",
        password: "123456",
      },
      {
        username: "hemantbk",
        password: "123456",
      },
      {
        username: "hemants",
        password: "123456",
      },
      {
        username: "hemantsingh",
        password: "123456",
      },
      {
        username: "himadri01",
        password: "123456",
      },
      {
        username: "hkalita",
        password: "123456",
      },
      {
        username: "hoccc",
        password: "123456",
      },
      {
        username: "hoccet",
        password: "123456",
      },
      {
        username: "hochst",
        password: "123456",
      },
      {
        username: "hocnano",
        password: "123456",
      },
      {
        username: "hocrt",
        password: "123456",
      },
      {
        username: "hodbio",
        password: "123456",
      },
      {
        username: "hoddesign",
        password: "123456",
      },
      {
        username: "htiwari",
        password: "123456",
      },
      {
        username: "indranik",
        password: "123456",
      },
      {
        username: "jaitra",
        password: "123456",
      },
      {
        username: "jatin",
        password: "123456",
      },
      {
        username: "jawed",
        password: "123456",
      },
      {
        username: "jayantah",
        password: "123456",
      },
      {
        username: "jaydebphys",
        password: "123456",
      },
      {
        username: "jha",
        password: "123456",
      },
      {
        username: "jintuduttadbt",
        password: "123456",
      },
      {
        username: "jiten",
        password: "123456",
      },
      {
        username: "johnjose",
        password: "123456",
      },
      {
        username: "joysarang",
        password: "123456",
      },
      {
        username: "juhidutta10",
        password: "123456",
      },
      {
        username: "junbarman",
        password: "123456",
      },
      {
        username: "jupitara_16",
        password: "123456",
      },
      {
        username: "k.raidongia",
        password: "123456",
      },
      {
        username: "kajay",
        password: "123456",
      },
      {
        username: "kallal",
        password: "123456",
      },
      {
        username: "kallol22",
        password: "123456",
      },
      {
        username: "kanagaraj",
        password: "123456",
      },
      {
        username: "kanhaiyapandey",
        password: "123456",
      },
      {
        username: "karmakar.sougata",
        password: "123456",
      },
      {
        username: "kartha",
        password: "123456",
      },
      {
        username: "karuna.kalita",
        password: "123456",
      },
      {
        username: "kasula.mohan",
        password: "123456",
      },
      {
        username: "kaustuv006",
        password: "123456",
      },
      {
        username: "kbhabak",
        password: "123456",
      },
      {
        username: "kd",
        password: "123456",
      },
      {
        username: "keyur",
        password: "123456",
      },
      {
        username: "khimpanthi",
        password: "123456",
      },
      {
        username: "kingsuk",
        password: "123456",
      },
      {
        username: "kipgen",
        password: "123456",
      },
      {
        username: "kiran_saha",
        password: "123456",
      },
      {
        username: "kirtonia0108",
        password: "123456",
      },
      {
        username: "kisholaym",
        password: "123456",
      },
      {
        username: "kmohanty",
        password: "123456",
      },
      {
        username: "koushik",
        password: "123456",
      },
      {
        username: "kpmech",
        password: "123456",
      },
      {
        username: "krishnab",
        password: "123456",
      },
      {
        username: "krs",
        password: "123456",
      },
      {
        username: "ksrkm",
        password: "123456",
      },
      {
        username: "kssharma",
        password: "123456",
      },
      {
        username: "kuldeep.baishya",
        password: "123456",
      },
      {
        username: "kunnumakkara",
        password: "123456",
      },
      {
        username: "kuntaldeka",
        password: "123456",
      },
      {
        username: "kuntaljana",
        password: "123456",
      },
      {
        username: "kuntalphy",
        password: "123456",
      },
      {
        username: "kusumsingh",
        password: "123456",
      },
      {
        username: "kvk",
        password: "123456",
      },
      {
        username: "lalitpandey",
        password: "123456",
      },
      {
        username: "lmkundu",
        password: "123456",
      },
      {
        username: "lopab",
        password: "123456",
      },
      {
        username: "lrangan",
        password: "123456",
      },
      {
        username: "ls",
        password: "123456",
      },
      {
        username: "lyngdoh",
        password: "123456",
      },
      {
        username: "m.misra",
        password: "123456",
      },
      {
        username: "mahimaarrawatia",
        password: "123456",
      },
      {
        username: "mahuya",
        password: "123456",
      },
      {
        username: "manasdas",
        password: "123456",
      },
      {
        username: "manaskhatua",
        password: "123456",
      },
      {
        username: "mandalpramod9",
        password: "123456",
      },
      {
        username: "mangala.hegde",
        password: "123456",
      },
      {
        username: "mangala.hegde_old",
        password: "123456",
      },
      {
        username: "manmohan",
        password: "123456",
      },
      {
        username: "manojbr",
        password: "123456",
      },
      {
        username: "manpreet.singh",
        password: "123456",
      },
      {
        username: "maurya",
        password: "123456",
      },
      {
        username: "mavanikape24",
        password: "123456",
      },
      {
        username: "mayuri21",
        password: "123456",
      },
      {
        username: "mckumar",
        password: "123456",
      },
      {
        username: "meena.kh",
        password: "123456",
      },
      {
        username: "mihir",
        password: "123456",
      },
      {
        username: "mishratapan",
        password: "123456",
      },
      {
        username: "mkb",
        password: "123456",
      },
      {
        username: "mkgoyal",
        password: "123456",
      },
      {
        username: "mkumar1",
        password: "123456",
      },
      {
        username: "mokashi_P_Project_staff",
        password: "123456",
      },
      {
        username: "mos4me@gmail.com",
        password: "123456",
      },
      {
        username: "moumita.patra",
        password: "123456",
      },
      {
        username: "mq",
        password: "123456",
      },
      {
        username: "mrityunjay_2016",
        password: "123456",
      },
      {
        username: "msarma",
        password: "123456",
      },
      {
        username: "munuborah",
        password: "123456",
      },
      {
        username: "muthuraja1985",
        password: "123456",
      },
      {
        username: "muzaffer",
        password: "123456",
      },
      {
        username: "n.ganesh",
        password: "123456",
      },
      {
        username: "nair.archana",
        password: "123456",
      },
      {
        username: "neelam16",
        password: "123456",
      },
      {
        username: "nelsonm",
        password: "123456",
      },
      {
        username: "nilotpald",
        password: "123456",
      },
      {
        username: "nilutpal1608",
        password: "123456",
      },
      {
        username: "nkashyap",
        password: "123456",
      },
      {
        username: "nkishore",
        password: "123456",
      },
      {
        username: "nselvaraju",
        password: "123456",
      },
      {
        username: "p.saha",
        password: "123456",
      },
      {
        username: "p.sukumar",
        password: "123456",
      },
      {
        username: "pahi",
        password: "123456",
      },
      {
        username: "pakshi",
        password: "123456",
      },
      {
        username: "pal.suman",
        password: "123456",
      },
      {
        username: "pamu",
        password: "123456",
      },
      {
        username: "pandabiranchi",
        password: "123456",
      },
      {
        username: "pankaj.mishra",
        password: "123456",
      },
      {
        username: "pankaj.tiwari",
        password: "123456",
      },
      {
        username: "pankaj.upadhyay",
        password: "123456",
      },
      {
        username: "pankajk",
        password: "123456",
      },
      {
        username: "par",
        password: "123456",
      },
      {
        username: "passkrishna",
        password: "123456",
      },
      {
        username: "patel",
        password: "123456",
      },
      {
        username: "pavankancharla",
        password: "123456",
      },
      {
        username: "pbarooah",
        password: "123456",
      },
      {
        username: "pchandra13",
        password: "123456",
      },
      {
        username: "peelanr",
        password: "123456",
      },
      {
        username: "perumal",
        password: "123456",
      },
      {
        username: "pgoswami",
        password: "123456",
      },
      {
        username: "pguha",
        password: "123456",
      },
      {
        username: "phrangboklang",
        password: "123456",
      },
      {
        username: "pinak",
        password: "123456",
      },
      {
        username: "pkdas",
        password: "123456",
      },
      {
        username: "pkghosh",
        password: "123456",
      },
      {
        username: "pkhanikar",
        password: "123456",
      },
      {
        username: "pki",
        password: "123456",
      },
      {
        username: "pmkumar",
        password: "123456",
      },
      {
        username: "porag_s",
        password: "123456",
      },
      {
        username: "poulose",
        password: "123456",
      },
      {
        username: "prabin",
        password: "123456",
      },
      {
        username: "pranabm",
        password: "123456",
      },
      {
        username: "prasad.bokil",
        password: "123456",
      },
      {
        username: "prasanna",
        password: "123456",
      },
      {
        username: "pratim",
        password: "123456",
      },
      {
        username: "pratulkalita",
        password: "123456",
      },
      {
        username: "praveen_kumar",
        password: "123456",
      },
      {
        username: "priyank.sinha",
        password: "123456",
      },
      {
        username: "priyanka.tiwari",
        password: "123456",
      },
      {
        username: "priyankoo",
        password: "123456",
      },
      {
        username: "psanpui",
        password: "123456",
      },
      {
        username: "psatpati",
        password: "123456",
      },
      {
        username: "psgp",
        password: "123456",
      },
      {
        username: "psr",
        password: "123456",
      },
      {
        username: "pugal",
        password: "123456",
      },
      {
        username: "pujapn.iitkgp",
        password: "123456",
      },
      {
        username: "pulakrajbongshi",
        password: "123456",
      },
      {
        username: "purabi08",
        password: "123456",
      },
      {
        username: "purvita.c",
        password: "123456",
      },
      {
        username: "r.duttabaruah",
        password: "123456",
      },
      {
        username: "rafiahamed",
        password: "123456",
      },
      {
        username: "rajandce",
        password: "123456",
      },
      {
        username: "rajankumar.chem",
        password: "123456",
      },
      {
        username: "rajen",
        password: "123456",
      },
      {
        username: "rajesha",
        password: "123456",
      },
      {
        username: "rajivkar",
        password: "123456",
      },
      {
        username: "rajshree",
        password: "123456",
      },
      {
        username: "rakhi_chaturvedi",
        password: "123456",
      },
      {
        username: "ramenjamatia",
        password: "123456",
      },
      {
        username: "ramgopalu",
        password: "123456",
      },
      {
        username: "ranbir",
        password: "123456",
      },
      {
        username: "ranjantamuli",
        password: "123456",
      },
      {
        username: "ranjith.t",
        password: "123456",
      },
      {
        username: "rashid1985",
        password: "123456",
      },
      {
        username: "ratnajit",
        password: "123456",
      },
      {
        username: "ravi.civil",
        password: "123456",
      },
      {
        username: "ravindranath",
        password: "123456",
      },
      {
        username: "rbharti",
        password: "123456",
      },
      {
        username: "rds",
        password: "123456",
      },
      {
        username: "resmis",
        password: "123456",
      },
      {
        username: "riasain",
        password: "123456",
      },
      {
        username: "rishi.k",
        password: "123456",
      },
      {
        username: "ritushkumar",
        password: "123456",
      },
      {
        username: "rkbc",
        password: "123456",
      },
      {
        username: "rkmittal",
        password: "123456",
      },
      {
        username: "rkupadhyay",
        password: "123456",
      },
      {
        username: "roypaily",
        password: "123456",
      },
      {
        username: "rprasanna",
        password: "123456",
      },
      {
        username: "rsinha",
        password: "123456",
      },
      {
        username: "rsw",
        password: "123456",
      },
      {
        username: "rthu",
        password: "123456",
      },
      {
        username: "rupam",
        password: "123456",
      },
      {
        username: "ruttam95",
        password: "123456",
      },
      {
        username: "s.gumma",
        password: "123456",
      },
      {
        username: "s.m.hazarika",
        password: "123456",
      },
      {
        username: "sachinksingh",
        password: "123456",
      },
      {
        username: "sachinku",
        password: "123456",
      },
      {
        username: "saha",
        password: "123456",
      },
      {
        username: "sajan.kapil",
        password: "123456",
      },
      {
        username: "sak",
        password: "123456",
      },
      {
        username: "saket",
        password: "123456",
      },
      {
        username: "salilkashyap",
        password: "123456",
      },
      {
        username: "samaren",
        password: "123456",
      },
      {
        username: "sambit",
        password: "123456",
      },
      {
        username: "samit",
        password: "123456",
      },
      {
        username: "samiyara786",
        password: "123456",
      },
      {
        username: "sandip.das",
        password: "123456",
      },
      {
        username: "sandipp",
        password: "123456",
      },
      {
        username: "sanjeev.bt",
        password: "123456",
      },
      {
        username: "sanjib.chaudhary",
        password: "123456",
      },
      {
        username: "sanjukta",
        password: "123456",
      },
      {
        username: "santosh_biswas",
        password: "123456",
      },
      {
        username: "saradhi",
        password: "123456",
      },
      {
        username: "sashin",
        password: "123456",
      },
      {
        username: "sastricv",
        password: "123456",
      },
      {
        username: "satyajitp",
        password: "123456",
      },
      {
        username: "sau",
        password: "123456",
      },
      {
        username: "saurabh",
        password: "123456",
      },
      {
        username: "savinash",
        password: "123456",
      },
      {
        username: "sawmyaray",
        password: "123456",
      },
      {
        username: "sayan.chakrabarti",
        password: "123456",
      },
      {
        username: "sayantan_c",
        password: "123456",
      },
      {
        username: "sbdas",
        password: "123456",
      },
      {
        username: "sbiswas",
        password: "123456",
      },
      {
        username: "sdk",
        password: "123456",
      },
      {
        username: "selva",
        password: "123456",
      },
      {
        username: "senthilkumar",
        password: "123456",
      },
      {
        username: "senthilmurugan",
        password: "123456",
      },
      {
        username: "sganguly",
        password: "123456",
      },
      {
        username: "sghosh",
        password: "123456",
      },
      {
        username: "shahtariq",
        password: "123456",
      },
      {
        username: "shamima",
        password: "123456",
      },
      {
        username: "sharadbg",
        password: "123456",
      },
      {
        username: "sharmiliroy",
        password: "123456",
      },
      {
        username: "shivakumar_k",
        password: "123456",
      },
      {
        username: "shock",
        password: "123456",
      },
      {
        username: "shoora.su_19",
        password: "123456",
      },
      {
        username: "shri",
        password: "123456",
      },
      {
        username: "sid7987",
        password: "123456",
      },
      {
        username: "siddharthafp",
        password: "123456",
      },
      {
        username: "sikha24",
        password: "123456",
      },
      {
        username: "sinhasneh",
        password: "123456",
      },
      {
        username: "skar",
        password: "123456",
      },
      {
        username: "skhijwania",
        password: "123456",
      },
      {
        username: "sknayak",
        password: "123456",
      },
      {
        username: "sksarkar",
        password: "123456",
      },
      {
        username: "smahanta",
        password: "123456",
      },
      {
        username: "smajhi",
        password: "123456",
      },
      {
        username: "smukherjee",
        password: "123456",
      },
      {
        username: "snagotu",
        password: "123456",
      },
      {
        username: "snath",
        password: "123456",
      },
      {
        username: "snigdha.saikia",
        password: "123456",
      },
      {
        username: "snj",
        password: "123456",
      },
      {
        username: "soniaarora",
        password: "123456",
      },
      {
        username: "sonkar",
        password: "123456",
      },
      {
        username: "soumenkm",
        password: "123456",
      },
      {
        username: "soumitra.nandi",
        password: "123456",
      },
      {
        username: "sovan",
        password: "123456",
      },
      {
        username: "spal",
        password: "123456",
      },
      {
        username: "span",
        password: "123456",
      },
      {
        username: "spanda",
        password: "123456",
      },
      {
        username: "spkanaujia",
        password: "123456",
      },
      {
        username: "sravi",
        password: "123456",
      },
      {
        username: "sreeja",
        password: "123456",
      },
      {
        username: "sreeparnadas",
        password: "123456",
      },
      {
        username: "srees",
        password: "123456",
      },
      {
        username: "srinikris",
        password: "123456",
      },
      {
        username: "ssbag75",
        password: "123456",
      },
      {
        username: "ssen23",
        password: "123456",
      },
      {
        username: "ssg",
        password: "123456",
      },
      {
        username: "ssvelan",
        password: "123456",
      },
      {
        username: "subashisa",
        password: "123456",
      },
      {
        username: "subhab",
        password: "123456",
      },
      {
        username: "subhajit1986",
        password: "123456",
      },
      {
        username: "subhasht",
        password: "123456",
      },
      {
        username: "subhasishroy",
        password: "123456",
      },
      {
        username: "subrata.pramanik",
        password: "123456",
      },
      {
        username: "sudip.shyam",
        password: "123456",
      },
      {
        username: "sudipmitra",
        password: "123456",
      },
      {
        username: "sudipta.math7",
        password: "123456",
      },
      {
        username: "suganya",
        password: "123456",
      },
      {
        username: "sukanya",
        password: "123456",
      },
      {
        username: "sukumar",
        password: "123456",
      },
      {
        username: "sumana",
        password: "123456",
      },
      {
        username: "sumana1989",
        password: "123456",
      },
      {
        username: "sumitkrmehta",
        password: "123456",
      },
      {
        username: "sundarbalaji",
        password: "123456",
      },
      {
        username: "sunita.y",
        password: "123456",
      },
      {
        username: "sureshkr",
        password: "123456",
      },
      {
        username: "sureshsundaram",
        password: "123456",
      },
      {
        username: "suryarao24",
        password: "123456",
      },
      {
        username: "sushantak",
        password: "123456",
      },
      {
        username: "susmita.prod",
        password: "123456",
      },
      {
        username: "sutapa_r",
        password: "123456",
      },
      {
        username: "swarupbag",
        password: "123456",
      },
      {
        username: "swetatiwari",
        password: "123456",
      },
      {
        username: "s_kumar",
        password: "123456",
      },
      {
        username: "t.debnath",
        password: "123456",
      },
      {
        username: "t.venkat",
        password: "123456",
      },
      {
        username: "tamalb",
        password: "123456",
      },
      {
        username: "tanmay.dutta",
        password: "123456",
      },
      {
        username: "tanmoymedhi1989",
        password: "123456",
      },
      {
        username: "tanur",
        password: "123456",
      },
      {
        username: "tapan.mankodi",
        password: "123456",
      },
      {
        username: "tapasche",
        password: "123456",
      },
      {
        username: "tapobroto.bhanja",
        password: "123456",
      },
      {
        username: "tarak.dey",
        password: "123456",
      },
      {
        username: "tarinee",
        password: "123456",
      },
      {
        username: "thesniya91",
        password: "123456",
      },
      {
        username: "tmang.haokip",
        password: "123456",
      },
      {
        username: "tpunni",
        password: "123456",
      },
      {
        username: "trivedi",
        password: "123456",
      },
      {
        username: "tsubbi",
        password: "123456",
      },
      {
        username: "turlapati",
        password: "123456",
      },
      {
        username: "tvb",
        password: "123456",
      },
      {
        username: "ubora",
        password: "123456",
      },
      {
        username: "uday",
        password: "123456",
      },
      {
        username: "udaymaiti",
        password: "123456",
      },
      {
        username: "udit.raha",
        password: "123456",
      },
      {
        username: "ulla.hidayath",
        password: "123456",
      },
      {
        username: "umanna",
        password: "123456",
      },
      {
        username: "utpalb",
        password: "123456",
      },
      {
        username: "v.prabu",
        password: "123456",
      },
      {
        username: "vasundharaj",
        password: "123456",
      },
      {
        username: "vdubey",
        password: "123456",
      },
      {
        username: "vedeshwar",
        password: "123456",
      },
      {
        username: "veeranki",
        password: "123456",
      },
      {
        username: "velentinadas",
        password: "123456",
      },
      {
        username: "vibin",
        password: "123456",
      },
      {
        username: "vinayak",
        password: "123456",
      },
      {
        username: "vivek.borse",
        password: "123456",
      },
      {
        username: "vivekchemistry",
        password: "123456",
      },
      {
        username: "vkatiyar",
        password: "123456",
      },
      {
        username: "vmoholkar",
        password: "123456",
      },
      {
        username: "vtrivedi",
        password: "123456",
      },
      {
        username: "vvgoud",
        password: "123456",
      },
      {
        username: "y.vashi",
        password: "123456",
      },
      {
        username: "younis",
        password: "123456",
      },
      {
        username: "yparekh",
        password: "123456",
      },
    ];

    await prisma.pI.createMany({
      data: piData,
      skipDuplicates: true,
    });

    console.log(`✅ Seeded ${piData.length} PIs successfully`);

    const piProjectAssignments = [
      {
        username: "a.saikia",
        projects: ["577_student"],
      },
      {
        username: "aamir740",
        projects: ["SHSTSPNIITG01367xxAD001"],
      },
      {
        username: "abarua",
        projects: [
          "CSWRSPNSRCF00807xxAB014",
          "HSS-PDF-A. Barua_807- Reconciled",
          "xENVSPNDoFE00807xxAB007",
          "xHSSSPNASIA00807xxAB009",
          "xHSSSPNIHED00807xAB011",
          "xHSSSPNKTHR00807xxAB008 Reconciled",
          "xHSSSPNSASN00807xxAB002-RECONCILED",
          "xHSSSPNSIDA00807xxAB004-reconciled",
          "xHSSSPNWAGN00807xxAB010-Reconciled",
          "xHSSSPNxDST00807xxAB012-ZBSA Reconciled",
          "xHSSSPNxDST00807xxAB013_ZBSA_1819",
        ],
      },
      {
        username: "abd",
        projects: [
          "1117_student",
          "xxCESPNMHRD01117xAJD002",
          "xxCESPNMHRDO1117xAJD002",
          "xxCESPNMHRDO1117xAJD002",
        ],
      },
      {
        username: "abhiak",
        projects: [
          "998_student",
          "xxCESPNMOES00998xABK003",
          "xxCESPNxDST00998xABK002",
        ],
      },
      {
        username: "abhijitkakati",
        projects: ["xCLESPNSERB01327xABK002"],
      },
      {
        username: "abhisheksingh11",
        projects: ["1001_student"],
      },
      {
        username: "achalkumar",
        projects: [
          "CHMSPxDSTPDFNC086200",
          "CHMSPxDSTPDFNC08620001",
          "xCHMPDRSERB00862SKS001",
          "xCHMPDRxDST00862xxNC001",
        ],
      },
      {
        username: "adas",
        projects: ["1113_student", "xCHMSPNSERB01113xxAD005"],
      },
      {
        username: "adilseh",
        projects: ["xCSESPNIITG01125xxAS001"],
      },
      {
        username: "aditib",
        projects: ["NANOPDRxDST00399xxAB001"],
      },
      {
        username: "adutta",
        projects: ["ce-c-ad-381"],
      },
      {
        username: "aganguly",
        projects: ["1184_student"],
      },
      {
        username: "ajay.bsbe",
        projects: ["xCLESPNxNRL00860xxVK013", "xCLESPNxNRL00860xxVK013"],
      },
      {
        username: "akanksha_bansal",
        projects: ["BSBEPDRxDBT00811xAKB002"],
      },
      {
        username: "akanksha_bansal_old",
        projects: ["BSBEPDRDBT00811xxAKB001"],
      },
      {
        username: "akd",
        projects: ["776_student", "xxMESPNANRF00776ARKD006"],
      },
      {
        username: "akdm",
        projects: ["xCLESPNCSIR00763AKDM003"],
      },
      {
        username: "aks",
        projects: [
          "270_student",
          "BPC",
          "CDMRSPNxxWU00270xAKS014",
          "ce-c-aks-40",
          "CESPxBBGAKS02700008",
          "xCECNLxCWC00270xAKS040",
          "xxCESPNGMDA00270xAKS010",
          "xxCESPNMOWR00270xAKS009",
          "xxCESPNMOWR00270xAKS009",
          "xxCESPNMOWR00270xAKS009",
          "xxCESPNMOWR00270xAKS009",
          "xxCESPNMOWR00270xAKS009",
          "xxCESPNMOWR00270xAKS009",
          "xxCESPNMOWR00270xAKS009",
          "xxCESPNMOWR00270xAKS009",
          "xxCESPNNEPC00270xAKS012",
          "xxCESPNxBBG00270xAKS008",
          "xxCESPNxBBG00270xAKS013",
          "xxCESPNxBBG0027xAKS013",
          "xxCETSPNxBBG00270xAKS008",
        ],
      },
      {
        username: "aksarma",
        projects: [
          "PHYSPCSIRAMKS0626000",
          "PHYSPCSIRAMKS06260002",
          "xPHYSPNSTAR0626AMKS005_STARS_3668",
        ],
      },
      {
        username: "akshaikumar",
        projects: ["1122_student", "xCHMSPNSERB01122AKAS008"],
      },
      {
        username: "alika",
        projects: ["xPHYSPNMHRD00035xxAK008"],
      },
      {
        username: "aloshious",
        projects: ["xEEESPNSERB01336xABA002"],
      },
      {
        username: "amaresh",
        projects: [
          "0",
          "817_student",
          "MESPBARCAMD08170003",
          "MExxSPNBARCxAMD00817003",
          "xxMESPNBARC00817xAMD003",
          "xxMESPNBRNS00817xAMD003",
          "xxMESPNSERB00817xAMD006",
          "xxMESPNxDST00817xAMD004",
          "xxMESPNxDST00817xAMD005",
        ],
      },
      {
        username: "amitdbanik",
        projects: ["xPHYPDRSERB00828xADB001"],
      },
      {
        username: "amul",
        projects: [
          "BSBESPNICMR00743xAML008",
          "BSBESPNICMR00743xAML010",
          "BSBESPNICMR00743xAML012",
          "BSBESPNSERB00743xAML011",
          "BSBESPNxDBT00646xxSP007",
          "BSBESPNxDBT00743xAML005",
          "BSBESPNxDBT00743xAML006",
          "BSBESPNxDBT00743xAML007",
          "BTSPxDBTAML07430005",
        ],
      },
      {
        username: "amurali",
        projects: [
          "710_student",
          "xxCECNLNPCI00710xAMK037",
          "xxCESPNxDST00710xAMK005",
        ],
      },
      {
        username: "anamika1404",
        projects: ["BSBEDPRxDST00936xxAM001"],
      },
      {
        username: "anand.ashish",
        projects: ["842_student"],
      },
      {
        username: "anand.bio",
        projects: ["BTPDIITGRT07470000"],
      },
      {
        username: "anil.iitr",
        projects: ["xCLEPDRSERB00527xANK001"],
      },
      {
        username: "anilmishra",
        projects: ["xxCExDST00826AKMI001-ZBSA-1819"],
      },
      {
        username: "animes",
        projects: ["674_student", "xCLESPNSERB00674AKGO003"],
      },
      {
        username: "anirban.biswas",
        projects: ["xPHYPDRSERB01152xANB001"],
      },
      {
        username: "anirban.dasgupta",
        projects: ["1349_student"],
      },
      {
        username: "anki.reddy",
        projects: ["CLE-PDF-ARK_1019"],
      },
      {
        username: "ankitagaur",
        projects: ["CEE/RF/SERB/AG/01"],
      },
      {
        username: "ankushbag",
        projects: [
          "1351_student",
          "NANOSPNxDST01351ANKB002",
          "xEEESPNINAE01351ANKB004",
          "xEEESPNSERB01351ANKB001",
        ],
      },
      {
        username: "anp",
        projects: ["CHMSPSERBANP06310002"],
      },
      {
        username: "anugrah",
        projects: [
          "492_student",
          "xCLESPNDRDO00492xxAS004",
          "xCLESPNSERB00492xxAS005",
          "xCLESPNSERB00492xxAS005-Reconciled",
        ],
      },
      {
        username: "anuran.maity",
        projects: ["MATHSPNIITG00613xxAM001"],
      },
      {
        username: "aparnarai",
        projects: ["IITG/R&D/IPDF-Aushadhi/20"],
      },
      {
        username: "aparupa",
        projects: ["xCEEPDRxDST00407xAPT001"],
      },
      {
        username: "apghosh",
        projects: ["BSBEPDRSERB00857xAPG001"],
      },
      {
        username: "arbhavanam",
        projects: ["xCLEPDRSERB01011xANB001"],
      },
      {
        username: "arghyadip",
        projects: [
          "MDSASPNSERB01335xxAR002",
          "MDSASPNSERB01335xxAR002-Reconciled",
        ],
      },
      {
        username: "arijit",
        projects: [
          "778_student",
          "CSESPDEIYARS07780001",
          "xCSESPNDEIY00778xARS001",
          "xCSESPNSERB00778xxARS003",
          "xCSESPNxDST00778xxARS003",
        ],
      },
      {
        username: "arindam.dey",
        projects: ["859_student"],
      },
      {
        username: "arnabsarkar",
        projects: ["952_student", "xCSESPNMHRD00952xxAS002"],
      },
      {
        username: "arpita2608",
        projects: ["DBT-RA/2022/July/NE/2111"],
      },
      {
        username: "arubors",
        projects: [
          "xxCESPNDALM00207xABS001",
          "xxCESPNZERU00207xABS002",
          "xxMESPNxDST00155xUSD007",
        ],
      },
      {
        username: "arun",
        projects: [
          "41_student",
          "CHMSPCSIRAC00410010",
          "CHMSPxDSTPDFMG004100",
          "CHMSPxDSTPDFMG00410001",
          "NANOSPNxDIT00041xxAC011",
          "NANOSPNxDIT00041xxAC011",
          "NANOSPNxDIT00041xxAC011",
          "NANOSPNxDIT00041xxAC011",
          "NANOSPNxDIT00041xxAC011",
          "xCHMPDRxDST00041xxMG001",
        ],
      },
      {
        username: "arungoyl",
        projects: [
          "420_student",
          "BSBESPNCSIR00420xxAG011",
          "BSBESPNxDBT00420xxAG015",
          "BSBESPNxDBT00420xxAG015-ZBSA",
          "BSBSESPNxDBT00420xxAG012",
          "BTSPxDBTAG04200009",
          "xCEESPNxDBT00420xxAG013",
          "xCEESPNxDBT00420xxAG014",
          "xCEESPNxDBT00420xxAG014-ZBSA",
        ],
      },
      {
        username: "aruntej",
        projects: ["1141_student"],
      },
      {
        username: "arupchatt",
        projects: ["1119_student", "MATHSPNSERB01119xARC002"],
      },
      {
        username: "asaikia",
        projects: [
          "CHMSPCSIRAKS03800004",
          "xCHMSPNCSIR00380xAKS004",
          "xCHMSPNSERB00380xAKS005",
          "xCHMSPNSERB00380xAKS007",
        ],
      },
      {
        username: "ashok",
        projects: ["MATHSPNELNT00017xASS002"],
      },
      {
        username: "ashwinisawant",
        projects: ["xEEESPNSERB01347xASH002"],
      },
      {
        username: "asil",
        projects: ["RNDxxxIITG00828xIPDF001", "xPHYSPNSERB00828xASI002"],
      },
      {
        username: "atanub",
        projects: ["MESPXDBTAB08200002", "xxMESPNSERB00820xxAB004"],
      },
      {
        username: "atk",
        projects: ["CHMSPCSIRATK00910003", "xCHMSPNxDST00091xATK004"],
      },
      {
        username: "atulprajapati",
        projects: ["xCLESPNxNRL00860xxVK013"],
      },
      {
        username: "avid25",
        projects: ["BSBEPDRxDST00391xAVD001"],
      },
      {
        username: "avijit.chowdhury",
        projects: ["xPHYPDRSERB00981xxAC001"],
      },
      {
        username: "awekar",
        projects: ["841_student"],
      },
      {
        username: "babitadevi",
        projects: ["BSBEPDRxDBT00936xxBD001"],
      },
      {
        username: "banand",
        projects: [
          "811_student",
          "BSBESPNILSF00811xxBA011",
          "BSBESPNSERB00811xxBA008",
          "BSBESPNSERB00811xxBA010",
          "BSBESPNSERB00811xxBA012",
          "BSBESPNSERB00811xxBA013- STARS-3668",
          "BSBESPNSERB00811xxBA016_TSA(Hybrid)_1023",
          "BSBESPNxDBT00811xxBA006",
          "BSBESPNxDBT00811xxBA007",
          "BSBESPNxDBT00811xxBA007",
          "BSBESPNxDBT00811xxBA009",
          "BTSPxDBTBA08110005",
          "BTSPxDBTBA08110007",
        ],
      },
      {
        username: "bdebadrita",
        projects: ["NANOPDRxDST00041xxDB001"],
      },
      {
        username: "bdeka",
        projects: ["MATHSPNSERB00991xxBD003"],
      },
      {
        username: "be.hemdan",
        projects: ["BSBEPDRxDBT0038BAMH001"],
      },
      {
        username: "bhuyan",
        projects: [
          "627_student",
          "PHYSPxDSTBB06270004",
          "PHYSPxDSTBB06270005",
          "xPHYSPNxDST00627xxBB004",
          "xPHYSPNxDST00627xxBB006-ZBSA-3237",
        ],
      },
      {
        username: "bibhas.majhi",
        projects: ["xPHYSPNSERB01080xBRM002"],
      },
      {
        username: "bidisha",
        projects: [
          "HSSSPxDSTBS06980002",
          "xHSSSPNxDST00698xxBS002",
          "xHSSSPNxDST00698xxBS004-ZBSA-1817",
          "xHSSSPNxDST00698xxBS004-ZBSA-1817 - Reconciled",
        ],
      },
      {
        username: "biman.mandal",
        projects: [
          "857_student",
          "BSBESPNDoHR00857xBBM019",
          "BSBESPNSERB00857xBBM015",
          "BSBESPNSERB00857xBBM020",
          "BSBESPNSERB00857xBBM022",
          "BSBESPNSERB00857xBBM025",
          "BSBESPNxDBT00857xBBM008",
          "BSBESPNxDBT00857xBBM009",
          "BSBESPNxDBT00857xBBM011",
          "BSBESPNxDBT00857xBBM012",
          "BSBESPNxDBT00857xBBM013",
          "BSBESPNxDBT00857xBBM014",
          "BSBESPNxDBT00857xBBM016",
          "BSBESPNxDBT00857xBBM018",
          "BSBESPNxDBT00857xBBM024",
          "BTSPxDBTBBM08570008",
          "BTSPxDBTBBM08570010",
          "BTSPxDSTBBM08570010",
          "SHSTSPNICMR00857xBBM028",
        ],
      },
      {
        username: "bimk",
        projects: ["CESPMOESBK07730003"],
      },
      {
        username: "binota",
        projects: ["DST/INSPIRE/04/2017/00259"],
      },
      {
        username: "binoyarghadam",
        projects: ["xCHMPDRCSIR00110xxBD001"],
      },
      {
        username: "biplabbose",
        projects: [
          "598_student",
          "BSBESPNICMR00598xxBB006",
          "BSBESPNSERB00598xxBB007",
          "BSBESPNxDBT00598xxBB005",
          "BSBESPNxDBT22598xxBB005",
        ],
      },
      {
        username: "bithiahgj",
        projects: ["BSBESPNxDBT00756xBGJ007", "BTSPxDBTBGJ07560007"],
      },
      {
        username: "bkhazra",
        projects: ["xPHYSPNANRF01396xBKH004"],
      },
      {
        username: "bmandal",
        projects: ["703_student", "xCHMSPNSERB00703xBHM007"],
      },
      {
        username: "boeing",
        projects: ["CESPHUDCOLBS07930002", "xxCECNLxUOM00793xLBS003"],
      },
      {
        username: "bpmandal",
        projects: [
          "426_student",
          "CLESPxDSTBM04260003",
          "CLESPxDSTBM04260004",
          "xCLECNLGAIL00426xxBM002",
          "xCLECNLGAIL00426xxBM002",
          "xCLECNLNTPC00426xAKG008",
          "xCLECNLxxMOC00426xxBM001",
          "xCLECNLxxMOC0042xxBM001",
          "xCLESPNSERB00426xxBM006",
          "xCLESPNxDST00426xxBM005",
        ],
      },
      {
        username: "brboruah",
        projects: ["PHY-PDF-B"],
      },
      {
        username: "bsengupta",
        projects: ["xHSSSPNICSR00880xBOS001- Reconciled"],
      },
      {
        username: "budhaditya.hazra",
        projects: ["1058_student"],
      },
      {
        username: "c.mallikarjuna",
        projects: ["644_student", "CESPXDSTMC06440003"],
      },
      {
        username: "cdas",
        projects: [
          "673_student",
          "xCLESPNNEE00673xxCD002",
          "xCLESPNNEEO00673xxCD002",
          "xCLESPNNEPC00705xxMD005",
          "xCLESPNSERB00673xxCD005",
          "xCLESPNSERB00673xxCD005 Reconciled",
        ],
      },
      {
        username: "chandan",
        projects: [
          "54_student",
          "xxCECNLNERI00054xxCM083",
          "xxCECNLWWFI00054xxCM075",
          "xxCESPNxDST00054xxCM004",
        ],
      },
      {
        username: "chandank",
        projects: [
          "xEEESPNCPRI01137xxCK006",
          "xEEESPNMEIT01137xxCK002",
          "xEEESPNSERB01137xxCK003",
          "xEEESPNSERB01137xxCK007",
        ],
      },
      {
        username: "chaudhary",
        projects: [
          "848_student",
          "BSBESPNxDBT00848xxNC004",
          "BSBESPNxDBT00848xxNC006",
        ],
      },
      {
        username: "chem.bishal",
        projects: ["xCHMPDRSERB00729xxBD001"],
      },
      {
        username: "ckarfa",
        projects: [
          "1188_student",
          "xCSESPNSERB01188xxCK002",
          "xCSESPNSERB01188xxCK004",
          "xCSESPNSERB01188xxCK008",
          "xCSESPNxDST00728xSAB003",
        ],
      },
      {
        username: "ckjana",
        projects: [
          "863_student",
          "xCHMSPNSERB00863xCKJ007",
          "xCHMSPNSERB00863xCKJ009",
          "xCHMSPNxDBT00863xCKJ006",
        ],
      },
      {
        username: "cmsomayaji",
        projects: ["MESPXDBTCS07670002", "xxMESPNxDST00767xxCS002"],
      },
      {
        username: "cmukherjee",
        projects: [
          "850_student",
          "CHMSPCSIRCM08500004",
          "xCHMSPNCSIR00850xxCM004",
        ],
      },
      {
        username: "cngupta",
        projects: ["1192_student", "BSBESPNxDST01192xCNG003"],
      },
      {
        username: "csouptick",
        projects: [
          "BSBESPNSERB01216xxSC002",
          "BSBESPNSERB01216xxSC004",
          "BSBESPNxMOE01216xxSC005-STARS-3668_ZBSA",
        ],
      },
      {
        username: "d.surajit",
        projects: ["xCLESPNxNRL00860xxVK013"],
      },
      {
        username: "darun",
        projects: ["605_student"],
      },
      {
        username: "dborah",
        projects: [
          "1152_student",
          "xPHYSPNSERB01152xxDB002",
          "xPHYSPNSERB01152xxDB004",
        ],
      },
      {
        username: "ddas",
        projects: [
          "865_student",
          "CHMSPCSIRDD08650005",
          "xCHMSPNBRNS00865xxDD009",
        ],
      },
      {
        username: "deb.sikdar",
        projects: ["xEEESPNxDST01218xxDS002", "xEEESPNxDST01218xxDS003"],
      },
      {
        username: "debabratade.ju",
        projects: ["MATHPDRNBHM01119DBDE001"],
      },
      {
        username: "debarshidas",
        projects: ["CEESPxDSTDD07120004"],
      },
      {
        username: "debasishd",
        projects: [
          "810_student",
          "BSBESPNICMR00810xxDD010",
          "BSBESPNONGC00810xxDD006",
          "BSBESPNSERB00810xxDD009",
          "BSBESPNxDBT00420xxAG015",
          "BSBESPNxDBT00420xxAG015-ZBSA.xls",
          "BSBESPNxDBT00420xxAG015.xls",
          "BSBESPNxDBT00810xxDD005",
          "BTSPxDBTDD08100005",
          "xCEESPNBCIL00810xxDD007",
          "xCEESPNxDST00712xxDD004",
        ],
      },
      {
        username: "debolina_1990",
        projects: ["xxMESPNIITG00845xxDS001"],
      },
      {
        username: "deekshas",
        projects: ["MATHSPNIITG00200xxDS001"],
      },
      {
        username: "deep123hazarika",
        projects: ["xCHMPDRSERB01118xxDH001"],
      },
      {
        username: "dibakar.saha10",
        projects: ["MATHPDRSERB00732xxDS001"],
      },
      {
        username: "dineshbabug",
        projects: ["SBEPDRSERB00810xxDG001"],
      },
      {
        username: "dineshpeu",
        projects: ["xCHMPDRSERB00334xDKN001"],
      },
      {
        username: "dipamath",
        projects: ["MATHSPNIITG01371xxDG001"],
      },
      {
        username: "dipban",
        projects: [
          "771_student",
          "NANOSPNDEIT00771xDPB008",
          "NANOSPNDEIT00771xDPB008-TSA-4197",
          "NANOSPNICMR00771xDPB009",
          "NANOSPNMHRD00771xDPB007",
          "SHSTSPNxDBT00771xDPB010-ZBSA",
          "xCLESPNSERB00771xDPB006",
        ],
      },
      {
        username: "dkathir80",
        projects: ["xCHMPDRSERB00334KD001"],
      },
      {
        username: "dkundu",
        projects: ["BSBEPDRSERB00646xxDK001"],
      },
      {
        username: "dmanna",
        projects: [
          "772_student",
          "xCHMSPNCSIR00772xxDM009",
          "xCHMSPNSERB00772xxDM007",
          "xCHMSPNxDBT00772xxDM006",
        ],
      },
      {
        username: "dnbasu",
        projects: ["xxMESPNSERB00930xDNB003"],
      },
      {
        username: "dneog",
        projects: ["MDSASPNSERB01329xDRN002"],
      },
      {
        username: "dornd",
        projects: [
          "IITG/R&D/Automation",
          "IITG/R&D/IDF/PS",
          "xRNDSPNIITG90034xIDF001",
          "xRNDSPNIITG90034xIDF001",
          "xRNDSPNxDBT90034DORD001",
          "xRNDSPNxIITG90034DORD006",
        ],
      },
      {
        username: "drbdas",
        projects: ["BSBEPDRxDST0064xBHD001"],
      },
      {
        username: "dsharma",
        projects: ["900_student", "xxMESPNSERB00900xxDS003"],
      },
      {
        username: "dutpriya",
        projects: ["xCHMPDRSERB00505xxPD001"],
      },
      {
        username: "dwivedy",
        projects: [
          "CETSPMHRDSKD02280002",
          "IITGISPxDST00228xTIH101",
          "MESPDEITSKD02280002",
        ],
      },
      {
        username: "ebunf",
        projects: ["BSBEPDRxDST00646xDEF001"],
      },
      {
        username: "elina",
        projects: ["BSBEPDRxDBT00936xxEK001"],
      },
      {
        username: "emily",
        projects: ["xHSSSPNICSR00874xPRS004"],
      },
      {
        username: "erwin",
        projects: ["SHSTSPNIKAD01488ERFU001"],
      },
      {
        username: "evmrs",
        projects: ["xxMESPNxDST00897xMRS003"],
      },
      {
        username: "gankita8186",
        projects: ["BSBEPDRxDBT00908xxAG001"],
      },
      {
        username: "ganu",
        projects: ["635_student"],
      },
      {
        username: "gargigoswami",
        projects: ["BSBEPDRSERB00811xxGG001"],
      },
      {
        username: "gauravshukla",
        projects: ["xCHMPDRSERB00110xxGS001"],
      },
      {
        username: "gayatri.natu",
        projects: ["NANOPDRxDST90024xxGN001"],
      },
      {
        username: "gindu",
        projects: ["996_student", "xxCESPNSERB00996GISR002"],
      },
      {
        username: "gk",
        projects: ["982_student", "PHYSPxDSTGK09820001"],
      },
      {
        username: "gkrishna",
        projects: ["IISIISPxDBT90061D0II101"],
      },
      {
        username: "gnongthombam",
        projects: ["xCHMPDRSERB00505xNGS001"],
      },
      {
        username: "gtm",
        projects: [
          "980_student",
          "MESPSERBGB09800001",
          "xxMESPNSERB00980xxGB001",
        ],
      },
      {
        username: "gupta",
        projects: ["CHMSPSERBAKG04900002"],
      },
      {
        username: "guptar",
        projects: [
          "1010_student",
          "CLE-PDF-RG_1010",
          "NANOSPNSERB01010xxRG004",
          "RCGCA-2022",
          "xCLESPNBRNS01010xxRG003",
          "xCLESPNICMR01010xxRG005",
          "xCLESPNICMR01010xxRG005-reconciled",
        ],
      },
      {
        username: "gurvinder",
        projects: ["390_student", "BSBESPNxDBT00390xGKS004"],
      },
      {
        username: "g_barua",
        projects: ["CESPSERBGB03670003", "xxCESPNSERB00367xxGB003"],
      },
      {
        username: "h.s.shekhawat",
        projects: [
          "1089_student",
          "xEEESPNxDBT01089xHSS002-GT",
          "xEEESPNxDBT01089xHSS002-HSS",
        ],
      },
      {
        username: "harshakota",
        projects: ["xxCESPNSERB01015xxHK001"],
      },
      {
        username: "harshal",
        projects: ["275_student"],
      },
      {
        username: "harshc",
        projects: [
          "1144_student",
          "SESESPNxDST1144xxHC002",
          "xCEECNLUNSD01144xxHC005",
          "xCEESPNMHRD01144xxHC001",
        ],
      },
      {
        username: "head.mfsdsai",
        projects: ["MSDASPNMFF90062HOS001"],
      },
      {
        username: "hemangee",
        projects: [
          "633_student",
          "xCSESPNDEIY00633xHKK002",
          "xCSESPNSERB00633xHKK003",
        ],
      },
      {
        username: "hemantakalita",
        projects: ["xCHMPDRSERB00862xHEK001"],
      },
      {
        username: "hemantbk",
        projects: [
          "671_student",
          "CESPXDSTHBK06710003",
          "xxCESPNCSIR00671xHBK006",
          "xxCESPNSERB00671xHBK007",
          "xxCESPNxDST00671xHBK003",
        ],
      },
      {
        username: "hemants",
        projects: ["xCHMPDRSERB00110xHKS001"],
      },
      {
        username: "hemantsingh",
        projects: ["xCHMPDRSERB00862xHKS001"],
      },
      {
        username: "himadri01",
        projects: ["BSBEPDRxDBT00747HIMD001"],
      },
      {
        username: "hkalita",
        projects: ["xCHMPDRSERB00505xxHK001"],
      },
      {
        username: "hoccc",
        projects: [
          "CC-P-HoC-01",
          "CCSPIITGHOC02240001",
          "CSE-P-GB_13-1",
          "CSESPERNTGB00130001",
        ],
      },
      {
        username: "hoccet",
        projects: [
          "xCETSPNMHRD90022HOC004",
          "xCETSPNMHRD90022HOC004-MOOCS",
          "xCETSPNMHRD90022xHOC002",
          "xCETSPNMHRD90022xHOC004",
        ],
      },
      {
        username: "hochst",
        projects: ["SHSTSPNxMFF90061xHOC001"],
      },
      {
        username: "hocnano",
        projects: [
          "90024_student",
          "NANOSPNDITY90024xHOC001",
          "NANOSPNDITY90024xHOC001-TSA-2354",
        ],
      },
      {
        username: "hocrt",
        projects: ["90057_student", "xCRTISPMOPR90057xHOC101"],
      },
      {
        username: "hodbio",
        projects: ["BSBESPNxDBT90001xHOD002"],
      },
      {
        username: "hoddesign",
        projects: [
          "xDESSPNMEIT00834xUKD001",
          "xDESSPNMEIT00834xUKD001-RBI-2354 1.xls",
          "xDESSPNMHRD90008xHOD001",
          "xDESSPNMHRD90008xHOD001-9027-ZBSA",
        ],
      },
      {
        username: "htiwari",
        projects: [
          "SHSTSPNxDBT01350xHKT001",
          "SHSTSPNxDBT01350xHKT001-Not Reconciled-Not Updated",
        ],
      },
      {
        username: "indranik",
        projects: ["765_student"],
      },
      {
        username: "jaitra",
        projects: ["MATHPDRDoAE00577xxJC001"],
      },
      {
        username: "jatin",
        projects: ["CSESPGOOEJKD03350003"],
      },
      {
        username: "jawed",
        projects: ["261_student", "xxCEPDRSERB00261xRSR001"],
      },
      {
        username: "jayantah",
        projects: ["xCHMPDRSERB01106xxJH001"],
      },
      {
        username: "jaydebphys",
        projects: ["xxPHYPDRSERB00946JDDS001"],
      },
      {
        username: "jha",
        projects: [
          "xEEESPNxDOT01333RKJH004",
          "xEEESPNxDST01333RKJH002-1819-DST",
        ],
      },
      {
        username: "jintuduttadbt",
        projects: ["xENVPDRSERB00534xxJD002"],
      },
      {
        username: "jiten",
        projects: ["MATHSPNSERB00409xJCK003"],
      },
      {
        username: "johnjose",
        projects: [
          "1125_student",
          "xCSESPNMEIT00794xxTV003_TSA_4197.xls",
          "xCSESPNSERB01125xxJJ002",
          "xCSESPNSERB01125xxJJ005",
        ],
      },
      {
        username: "joysarang",
        projects: ["CHMSPxDSTPDFSJS01100001"],
      },
      {
        username: "juhidutta10",
        projects: ["xCHMPDRSERB00707JHD001"],
      },
      {
        username: "junbarman",
        projects: ["DST/WOS-A/PM-55/2021"],
      },
      {
        username: "jupitara_16",
        projects: ["xCHMPDRxDST00505xxJD001"],
      },
      {
        username: "k.raidongia",
        projects: [
          "1106_student",
          "CHMSPxDSTKR11060003",
          "xCHMSPNxDST01106xxKR005",
        ],
      },
      {
        username: "kajay",
        projects: [
          "xxCECNLSBFP00782xxAK030",
          "xxCESPNxDST00782xxAK005",
          "xxCESPNxDST00782xxAK006",
          "xxCESPNxDST00782xxAK006-ZBSA 1819",
        ],
      },
      {
        username: "kallal",
        projects: ["CPF-Special Overhead"],
      },
      {
        username: "kallol22",
        projects: ["MATHSPNIITG00991xxKR001"],
      },
      {
        username: "kanagaraj",
        projects: [
          "709_student",
          "ME-P-SKJ_709-4 TATA STEEL",
          "ME-PDF-SKJ_709",
          "MESPSERBSKJ07090005",
          "MESPSERBSKJ07090006",
          "MESPXMOSSKJ07090004",
          "SHSTSPNICMR00709xSKJ018",
          "xMESPNSERB00709xSKJ010",
          "xxMESPNNDSB00709xSKJ007",
          "xxMESPNSERB00709xSKJ006",
          "xxMESPNSERB00709xSKJ011",
          "xxMESPNTATA00709xSKJ004",
          "xxMESPNxDBT00709xSKJ008",
          "xxMESPNxDBT00709xSKJ009",
          "xxMESPNxDBT00709xSKJ016-ZBSA",
          "xxMESPNxDBT00709xSKJ016-ZBSA-0150-DBT",
          "xxMESPNxMOS00709xSKJ004",
          "xxMESPNxxDBT00709xSKJ009",
          "xxMWSPNxDST00767xxCS002",
        ],
      },
      {
        username: "kanhaiyapandey",
        projects: [
          "1162_student",
          "xPHYSPNxDST01162xxKP004",
          "xPHYSPNxDST01162xxKP005",
          "xPHYSPNxDST01162xxKP005 - ZBSA",
        ],
      },
      {
        username: "karmakar.sougata",
        projects: [
          "xDESSPNDRDO00814xxSK003",
          "xDESSPNMEIT00834xUKD001-RBI-2354.xls",
          "xDESSPNxNEC00814xxSK004-HR",
          "xDESSPNxNEC00814xxSK004-Reconciled",
        ],
      },
      {
        username: "kartha",
        projects: [
          "642_student",
          "xxCESPNxDST00054xxCM004-ZBSA",
          "xxCESPNxDST00054xxCM004-ZBSA-3237",
        ],
      },
      {
        username: "karuna.kalita",
        projects: [
          "MECLNEEPCOKK08250001",
          "MESPDEITKK08250003",
          "MESPSERBKK08250002",
          "xEEESPNMETY00781xxPK004",
          "xxMESPNxDIT00825xxKK002",
        ],
      },
      {
        username: "kasula.mohan",
        projects: ["xCHMPDRSERB00738xxMK001"],
      },
      {
        username: "kaustuv006",
        projects: ["xCHMPDRSERB00975xxKB001"],
      },
      {
        username: "kbhabak",
        projects: [
          "CHMSPSERBKPB11110002",
          "xCHMSPNSERB01111xKPB004",
          "xCHMSPNSERB01111xKPB007",
        ],
      },
      {
        username: "kd",
        projects: ["786_student"],
      },
      {
        username: "keyur",
        projects: [
          "821_student",
          "DESCLNOKAKS08210003",
          "DESSPMRLIKS08210006",
          "xDESCNLNOKA00821xxKS003",
          "xDESSPNASTE00821xxKS011",
          "xDESSPNDTCM00821xxKS007",
          "xDESSPNGPMS00821xxKS013",
          "xDESSPNMHRD00821xxKS009",
          "xDESSPNMHRD00821xxKS009",
          "xDESSPNMHRD00821xxKS010",
          "xDESSPNMICT00821xxKS003",
          "xDESSPNNIHA00821xxKS012",
          "xDESSPNWGTS00821xxKS014",
          "xDESSPNxPNG00821xxKS008",
          "xDESSPNxxPG00821xxKS006",
        ],
      },
      {
        username: "khimpanthi",
        projects: ["BSBPPDRxDST00993xKPP001"],
      },
      {
        username: "kingsuk",
        projects: ["964_student", "xCHMSPNSERB00964xxKM003"],
      },
      {
        username: "kipgen",
        projects: ["999_student", "HSSSPIITGNGK9990002"],
      },
      {
        username: "kiran_saha",
        projects: ["MATHSPNIITG01179xxKS001"],
      },
      {
        username: "kirtonia0108",
        projects: ["BSBEPDRxDBT00857xxAK001"],
      },
      {
        username: "kisholaym",
        projects: ["xxCEPDRCSIR00360xxKM001"],
      },
      {
        username: "kmohanty",
        projects: [
          "619_student",
          "RNDxxxIITG00619xIPDF001",
          "SESESPNxDST00619xxKM009",
          "xCEESPNxDBT00619xxKM008",
          "xCLESPNGSBT00619xxKM010",
          "xCLESPNGSBT00619xxKM010 Reconciled",
          "xCLESPNMHRD00619xxKM006",
          "xCLESPNxDBT00619xxKM007",
          "xENVSPNxDST00619xxKM005",
        ],
      },
      {
        username: "koushik",
        projects: ["xPHYPDRSERB00513xKOS001"],
      },
      {
        username: "kpmech",
        projects: [
          "976_student",
          "ME-PDF-PK_976",
          "xxMESPNSERB00976xxPK002",
          "xxMESPNSERB00976xxPK003",
          "xxMESPNSERB00976xxPK006",
          "xxMESPNxDST00976xxPK005",
          "xxMESPNxSERB00976xxPK006",
        ],
      },
      {
        username: "krishnab",
        projects: ["xxMESPNSERB01124xxBM002"],
      },
      {
        username: "krs",
        projects: [
          "RNDxxxIITG00344xIPDF001",
          "RNDxxxIITG00507xIPDF001",
          "RNDxxxIITG00567xIPDF001",
          "RNDxxxIITG00983xIPDF001",
          "xEEESPNSERB00567xKRS001",
        ],
      },
      {
        username: "ksrkm",
        projects: [
          "382_student",
          "xxMESPNGTRE00382KSRK003",
          "xxMESPNSERB00382KSRK004",
        ],
      },
      {
        username: "kssharma",
        projects: ["xCHMPDRSERB0072xKSS001"],
      },
      {
        username: "kuldeep.baishya",
        projects: ["RNDxxxIITG01372xIPDF001"],
      },
      {
        username: "kunnumakkara",
        projects: [
          "936_student",
          "BSBESPNICMR00936xABK009",
          "BSBESPNICMR00957xxPS003",
          "BSBESPNxDBT00936xABK005",
          "BSBESPNxDBT00936xABK006",
          "BSBESPNxDBT00936xABK008",
          "BSBESPNxDBT00936xABK008",
          "BT-PDF-ABKunnumakkara_936",
          "BTSPxDBTABK09360003",
        ],
      },
      {
        username: "kuntaldeka",
        projects: [
          "xEEESPNINAE01346xKUD005",
          "xEEESPNOULU1346xKUD001",
          "xEEESPNxDST01346xKUD006",
        ],
      },
      {
        username: "kuntaljana",
        projects: ["xCEEPDRSERB00307xxKJ001"],
      },
      {
        username: "kuntalphy",
        projects: ["xPHYPDRSERB00411xxKB001"],
      },
      {
        username: "kusumsingh",
        projects: [
          "1123_student",
          "BSBESPNICMR01123xKKS007",
          "BSBESPNSERB01123xKKS002",
          "BSBESPNSERB01123xKKS005",
          "BSBESPNxDBT01123xKKS006",
        ],
      },
      {
        username: "kvk",
        projects: [
          "xCCSPNIIT00613xKVK001",
          "xxCCSPINIITG00613xKVK001",
          "xxCCSPNIIT00613xKVK001",
          "xxCCSPNIITG00613xKVK001",
        ],
      },
      {
        username: "lalitpandey",
        projects: [
          "993_student",
          "BSBESPNSERB00993xLMP003",
          "BSBESPNSERB0993xLMP008",
          "BSBESPNSICI00993xLMP006",
          "xENVSPNxDBT00993xLMP007",
          "xENVSPNxDBT00993xLMP007-ZBSA-0150",
        ],
      },
      {
        username: "lmkundu",
        projects: ["775_student"],
      },
      {
        username: "lopab",
        projects: [
          "xCEESPNMNES00307xxPM003-ZBSA-4104",
          "xCEESPNxDST00407xxLB001",
        ],
      },
      {
        username: "lrangan",
        projects: ["BSBESPNxDBT00524xxLR007", "SARTSPNxDBT00524xxLR008"],
      },
      {
        username: "ls",
        projects: [
          "391_student",
          "BSBESPNxDBT00391xLBS013",
          "BSBESPNxDBT00391xxLS010",
          "BSBESPNxDBT00391xxLS011",
          "BSBESPNxDBT00391xxLS013",
          "BSBESPNxDBT00391xxLS014",
          "BSBESPNxDBT00391xxLS015",
          "BSBESPNxDBT00391xxLS016",
          "BSBESPNxDBT00391xxLS017",
          "BSBESPNxDBT00391xxLS018",
          "BSBESPNxDBT00391xxLS018-ZBSA",
          "BSBESPNxDBT00391xxLS018-ZBSA-reconciled",
          "BSBESPNxDBT00391xxLS019-ZBSA-0150",
          "BTSPxDBTLS03910010",
          "BTSPxDBTLS03910011",
          "xCHMSPNxDBT01118xxUM008-ZBSA.xls",
        ],
      },
      {
        username: "lyngdoh",
        projects: ["CESPxDSTTLR05470001"],
      },
      {
        username: "m.misra",
        projects: ["MATHPDRNBHM00577xxMM001"],
      },
      {
        username: "mahimaarrawatia",
        projects: [
          "1238_student",
          "xEEESPNSMER00378xxRB004-TTDF-Physical",
          "xEEESPNSMER00378xxRB004-TTDF-Physical.xls",
        ],
      },
      {
        username: "mahuya",
        projects: ["705_student", "xCEESPNSERB00705xxMD004"],
      },
      {
        username: "manasdas",
        projects: [
          "922_student",
          "xxMESPNSERB00922xMDA003",
          "xxMESPNxDST00922xMDA002",
        ],
      },
      {
        username: "manaskhatua",
        projects: [
          "xCSESPNCPRI01285xxMK03",
          "xCSESPNSERB01285xxMK002",
          "xCSESPNSERB01285xxMK004",
        ],
      },
      {
        username: "mandalpramod9",
        projects: ["xEEEPDRSERB01351PRKM001"],
      },
      {
        username: "mangala.hegde",
        projects: ["BSBEDPRxDBT00936xxMH001"],
      },
      {
        username: "mangala.hegde_old",
        projects: ["BSBEPDRSERB00936xxMH001"],
      },
      {
        username: "manmohan",
        projects: [
          "302_student",
          "xxMESPNSERB00302xxMP005",
          "xxMESPNSERB00302xxMP006",
        ],
      },
      {
        username: "manojbr",
        projects: ["1353_student", "xEEESPNSERB01353xMBR002"],
      },
      {
        username: "manpreet.singh",
        projects: ["xPHYPDRSERB01161xxMS001"],
      },
      {
        username: "maurya",
        projects: [
          "663_student",
          "CESPCSIRAKM06630003",
          "xxCESPNSERB00663xAKM005",
        ],
      },
      {
        username: "mavanikape24",
        projects: ["xCHMPDRxDBT00772xxAM001"],
      },
      {
        username: "mayuri21",
        projects: ["xPHYPDRSERB00521xxMB001"],
      },
      {
        username: "mckumar",
        projects: ["xPHYSPNSERB1165xMCK002"],
      },
      {
        username: "meena.kh",
        projects: ["xCRTSPNSERB01203xMEK003"],
      },
      {
        username: "mihir",
        projects: [
          "CLE-P-MKP_527-9",
          "xCLESPNxDST00527xMKP008",
          "xCLESPNxDST00527xMKP013",
          "xCLESPNxJJM00527xMKP023",
          "xENVSPNINAE00527xMKP017",
          "xENVSPNTATA00527xMKP012",
        ],
      },
      {
        username: "mishratapan",
        projects: ["xPHYSPNSERB01161xxTM002"],
      },
      {
        username: "mkb",
        projects: ["746_student"],
      },
      {
        username: "mkgoyal",
        projects: [
          "955_student",
          "CESPXDSTMKG09550003",
          "CESPxDSTMKG09550004",
          "xCEESPNxDST00955xMKG004",
          "xxCESPNBRNS00955xMKG006",
          "xxCESPNSERB0955xMKG003",
          "xxCESPNxDST00955xMKG002",
          "xxCESPNxDST00955xMKG003",
          "xxCESPNxDST00955xMKG005",
        ],
      },
      {
        username: "mkumar1",
        projects: [
          "929_student",
          "BSBESPNICMR00929xxMK006",
          "BSBESPNSERB00929xxMK005",
          "BSBESPNSERB00929xxMK011",
          "BSBESPNxDBT00929xxMK004",
          "BSBESPNxDBT00929xxMK007",
          "BSBESPNxDBT00929xxMK012-ZBSA",
          "BSBESPNxDST00929xxMK011",
          "BTSPxDBTMK09290004",
        ],
      },
      {
        username: "mokashi_P_Project_staff",
        projects: ["330_student", "CETSPMHRDRMP01940002"],
      },
      {
        username: "mos4me@gmail.com",
        projects: ["BSBEPDRxDBT00391xAMA001"],
      },
      {
        username: "moumita.patra",
        projects: ["xCSESPNSERB01284xxMP001", "xCSESPNSERB01284xxMP003"],
      },
      {
        username: "mq",
        projects: ["729_student", "xCHMSPNSERB00729xxMQ005"],
      },
      {
        username: "mrityunjay_2016",
        projects: ["CHMxPDRSERB00863xMRA01", "xCHMPDRSERB00863xMRA001"],
      },
      {
        username: "msarma",
        projects: ["CHMSPSERBMS07070003"],
      },
      {
        username: "munuborah",
        projects: ["xPHYPDRSERB01082xMUB001"],
      },
      {
        username: "muthuraja1985",
        projects: ["xCHMPDRSERB00334MRP001"],
      },
      {
        username: "muzaffer",
        projects: ["xCHMPDRSERB00505xxMA001"],
      },
      {
        username: "n.ganesh",
        projects: ["847_student"],
      },
      {
        username: "nair.archana",
        projects: [
          "1121_student",
          "CESPNISRO01121xAMN002",
          "xxCESPNISRO01121xAMN002",
        ],
      },
      {
        username: "neelam16",
        projects: ["MATHPDRSERB90010xxNS001"],
      },
      {
        username: "nelsonm",
        projects: ["1220_student", "xxMESPNSERB01220xxNM002"],
      },
      {
        username: "nilotpald",
        projects: ["xxCEPDRSERB00955xxND001"],
      },
      {
        username: "nilutpal1608",
        projects: ["xxCEPDRSERB00876xxNB001"],
      },
      {
        username: "nkashyap",
        projects: ["HSSSPxDSTNK06890002", "xHSSSPNxDST00689xxNK002"],
      },
      {
        username: "nkishore",
        projects: ["852_student"],
      },
      {
        username: "nselvaraju",
        projects: ["401_student"],
      },
      {
        username: "p.saha",
        projects: [
          "432_student",
          "CLESPxDSTPKS04320002",
          "xCLESPNxDST00432xPKS002",
        ],
      },
      {
        username: "p.sukumar",
        projects: ["BTSPICMRPS09570003"],
      },
      {
        username: "pahi",
        projects: ["HSSSPICSSRPS08690002", "xHSSSPNICSR00869xxPS003"],
      },
      {
        username: "pakshi",
        projects: [
          "504_student",
          "BSBESPNxDBT00504xxKP006",
          "BSBESPNxDBT00504xxKP009",
          "xENVSPNCSIR00504xxKP008",
          "xENVSPNxDST00504xxKP007",
          "xENVSPNxDST00504xxKP009",
        ],
      },
      {
        username: "pal.suman",
        projects: ["xCHMPDRSERB00110xxSP001"],
      },
      {
        username: "pamu",
        projects: [
          "764_student",
          "NANOSPNBRNS00764xxDP008",
          "PHYSPBFSTDP07640005",
        ],
      },
      {
        username: "pandabiranchi",
        projects: [
          "1315_student",
          "xxMESPNxDST01315xBNP002",
          "xxMESPNxDST01315xBNP002-ZBSA-1819",
          "xxMESPNxDST01315xBNP004-ZBSA-3237",
        ],
      },
      {
        username: "pankaj.mishra",
        projects: ["xPHYSPNSERB01168xPKM003"],
      },
      {
        username: "pankaj.tiwari",
        projects: [
          "939_student",
          "xCLECNLxOIL00939xxPT002",
          "xCLESPNBRNS00939xxPT006 Reconciled",
        ],
      },
      {
        username: "pankaj.upadhyay",
        projects: ["1007_student"],
      },
      {
        username: "pankajk",
        projects: [
          "CEE-PDF-PK_1134",
          "SESESPNASTE01134xxPK005",
          "SESESPNMOPW01134xxPK007",
          "SESESPNSERB1134xxPK006",
          "xCEESPNSERB01134xxPK003",
        ],
      },
      {
        username: "par",
        projects: ["MATHSPNIITG00800xxxP001"],
      },
      {
        username: "passkrishna",
        projects: ["818_student"],
      },
      {
        username: "patel",
        projects: [
          "CHMSPxDSTPDFSJS01100",
          "xCHMPDRxDST00110xSJS001",
          "xCHMSPNCSIR00091xATK003",
          "xCHMSPNSERB00110xBKP010",
          "xCHMSPNSERB00110xBKP013",
          "xCHMSPNSERB00110xBKP014",
        ],
      },
      {
        username: "pavankancharla",
        projects: [
          "1146_student",
          "xCHMSPNSERB01146xPKK002",
          "xCHMSPNSERB01146xPKK004",
        ],
      },
      {
        username: "pbarooah",
        projects: ["1366_student", "xEEESPNSERB01366PRBA002"],
      },
      {
        username: "pchandra13",
        projects: ["BSBESPNxDBT01126xxPC004"],
      },
      {
        username: "peelanr",
        projects: [
          "1011_student",
          "CLE-P-NRP-02",
          "xCLEICNCMSP01011xNRP001",
          "xCLESPNSERB01011xNRP002",
          "xCLESPNSERB1011xNRP002",
          "xCLESPNxDST01011xNRP003",
        ],
      },
      {
        username: "perumal",
        projects: [
          "PHYSPxDSTAP05130005",
          "PHYxSPNCSIRxxAP00513006",
          "xPHYSPNCSIR00513xxAP006",
          "xPHYSPNxDST00513xxAP005",
        ],
      },
      {
        username: "pgoswami",
        projects: [
          "389_student",
          "BSBESPNxDBT00389xxPG007",
          "BSBESPNxDBT00389xxPG008",
          "BSBESPNxDBT00389xxPG008-ZBSA",
          "BSBESPNxDBT00389xxPG009",
          "CEESPMNREPG03890006",
          "xCEESPNxDBT0389xxPG005",
        ],
      },
      {
        username: "pguha",
        projects: [
          "EEECSESPDEIYPG094500",
          "EEECSESPDEIYPG09450001",
          "xEEESPNDEIY00945xxPG001",
        ],
      },
      {
        username: "phrangboklang",
        projects: ["1467_student", "xCSESPNIBIT01467xPLT001"],
      },
      {
        username: "pinak",
        projects: [
          "307_student",
          "CEESPMNESPM03070003",
          "CEESPMNESPM03070010",
          "CEESPMNREPM03070003",
          "CEESPMNREPM03070010",
          "MECLXPVTPM03070019",
          "xCEESPNMNES00307xxPM010",
          "xCEESPNxDST00307xxPM009",
        ],
      },
      {
        username: "pkdas",
        projects: ["171_student", "CSESPDEIYPKD01710003"],
      },
      {
        username: "pkghosh",
        projects: ["CESPMODWPKG05260003"],
      },
      {
        username: "pkhanikar",
        projects: ["1112_student"],
      },
      {
        username: "pki",
        projects: [
          "CHMSPxDSTPDFSA050500",
          "CHMSPxDSTPKI05050007",
          "NANOSPxDSTPKI0505000",
          "NANOSPxDSTPKI05050006",
          "xCHMSPNxDST00505xPKI012",
          "xCHMSPNxxMP00505xPKI07B",
        ],
      },
      {
        username: "pmkumar",
        projects: [
          "584_student",
          "xCEESPNxDST00584xPMK007",
          "xCEESPNxDST00584xPMK008",
          "xCRTSPNxDBT00584xPMK010",
          "xMESPNxDST00584xPMK009",
          "xxMESPNMHRD00584xPMK006",
          "xxMESPNxDST00584xPMK005",
        ],
      },
      {
        username: "porag_s",
        projects: ["417_student"],
      },
      {
        username: "poulose",
        projects: ["xPHYSPNSERB00511xxPP003", "xPHYSPNSERB00511xxPP007"],
      },
      {
        username: "prabin",
        projects: ["97_student", "xDESSPNMEIT0083xUKD001"],
      },
      {
        username: "pranabm",
        projects: [
          "1115_student",
          "xxMESPNBIRA01115xPKM002",
          "xxMESPNSERB01115xPKM001",
          "xxMESPNSERB01115xPKM004",
        ],
      },
      {
        username: "prasad.bokil",
        projects: ["959_student"],
      },
      {
        username: "prasanna",
        projects: [
          "510_student",
          "CLSTSPNxDBT00510SRMP009",
          "EEE-P-SRMP_510-8",
          "EEE-PDF-SRMPRASSNA_510",
          "EEESPxDITSRMP0510000",
          "EEESPxDITSRMP05100004",
          "EEESPxDITSRMP05100007",
          "EEESPxDITSRMP05100008",
        ],
      },
      {
        username: "pratim",
        projects: ["630_student"],
      },
      {
        username: "pratulkalita",
        projects: [
          "xDESCNLxMOT01081xPCK001",
          "xDESCNLxMOTO1081xPCK001",
          "xDESSPNMOEF01081xPCK001",
        ],
      },
      {
        username: "praveen_kumar",
        projects: ["781_student", "CETSPMHRDPK07810002"],
      },
      {
        username: "priyank.sinha",
        projects: ["xSOBSPNICMR01374xPSI002"],
      },
      {
        username: "priyanka.tiwari",
        projects: ["xPHYPDRSERBOO856xxPT001"],
      },
      {
        username: "priyankoo",
        projects: [
          "874_student",
          "CLSTCNLTATA00871xPRS002",
          "CLSTSPNMHRD00874xPRS005",
          "HSSSPICSRPRS08740003",
          "HSSSPxDITPRS08740002",
          "xHSSPNxDIT00874xPRS002",
          "xHSSSPNICSR00874xPRS003",
          "xHSSSPNICSR00874xPRS004",
          "xHSSSPNxDIT00874xPRS002",
        ],
      },
      {
        username: "psanpui",
        projects: ["NANOPDRSERB90024xxPS001"],
      },
      {
        username: "psatpati",
        projects: ["BSBESPNxDSTx01116xPDS002"],
      },
      {
        username: "psgp",
        projects: ["1018_student"],
      },
      {
        username: "psr",
        projects: ["106_student"],
      },
      {
        username: "pugal",
        projects: ["586_student", "CLECLUIPLGP05860004"],
      },
      {
        username: "pujapn.iitkgp",
        projects: ["xCLEPDRSERB00619xPPN001"],
      },
      {
        username: "pulakrajbongshi",
        projects: ["CHMPDIITGBKP01100000"],
      },
      {
        username: "purabi08",
        projects: ["xCLEPDRSERB00860xxPB001"],
      },
      {
        username: "purvita.c",
        projects: ["BSBEPDRSERB00913xxPC001"],
      },
      {
        username: "r.duttabaruah",
        projects: ["1005_student", "xCSESPNONGC01005xRDB002"],
      },
      {
        username: "rafiahamed",
        projects: ["xEEESPNSERB00695xSRA001"],
      },
      {
        username: "rajandce",
        projects: [
          "792_student",
          "CESPSERBRC07920001",
          "xxCESPNxDST00792xxRC001",
          "xxCESPNxDST00792xxRC002",
        ],
      },
      {
        username: "rajankumar.chem",
        projects: ["NANOPDRxDST90024xRJK001"],
      },
      {
        username: "rajen",
        projects: ["MATHSSPXDAEAJRKS0200"],
      },
      {
        username: "rajesha",
        projects: ["616_student", "xEEESPNSERB00616xxAR001"],
      },
      {
        username: "rajivkar",
        projects: [
          "SHSTSPNSERB01350xRKK002",
          "SHSTSPNSERB01350xRKK002-Reconciled",
        ],
      },
      {
        username: "rajshree",
        projects: ["808_student", "xHSSSPNDOES00808xxRB003"],
      },
      {
        username: "rakhi_chaturvedi",
        projects: [
          "498_student",
          "BSBECNLNEGR00498xxRC001",
          "BSBESPNxDBT00498xxRC004",
          "BSBESPNxDBT00498xxRC005",
          "BSBESPNxDBT00498xxRC007",
          "BTSPxDBTRC04980004",
        ],
      },
      {
        username: "ramenjamatia",
        projects: ["xCHMPDRSERB01107xxRJ001"],
      },
      {
        username: "ramgopalu",
        projects: ["ENVSPCSIRRGU05140006", "xENVSPNCSIR00514xRGU006"],
      },
      {
        username: "ranbir",
        projects: [
          "804_student",
          "CSESPMHRDSRS08040002",
          "xCSESPNDEIT00804xSRS004",
          "xCSESPNxDIT00804xSRS003",
        ],
      },
      {
        username: "ranjantamuli",
        projects: ["747_student", "BSBESPNxDBT00747xxRT005"],
      },
      {
        username: "ranjith.t",
        projects: [
          "PDF_FARUKH KHALID_1364.xls",
          "SESESPNMOES01360xRTH004-RBI-4001",
          "xCEESPNxDST00584xPMK008-ZBSA.xls",
          "xCEESPNxDST00584xPMK008.xls",
          "xCRTSPNxDBT00584xPMK010-ZBSA-HR-DK.xls",
          "xCRTSPNxDBT00584xPMK010-ZBSA.xls",
        ],
      },
      {
        username: "rashid1985",
        projects: ["xCHMPDRCSIR00091xxRA001"],
      },
      {
        username: "ratnajit",
        projects: [
          "378_student",
          "CET-P-RB-02- Integration",
          "CET-P-RB-02-Phase 3",
          "CET-P-RB-02-Phase 3 Virtual Lab",
          "RB-02 Integration",
          "xCETSPNDIT93022xHOA001",
          "xCETSPNDIT93022xHOA001",
          "xCETSPNDIT93022xHOA001",
          "xCETSPNMHRD00378xxRB002",
          "xCETSPNMHRD00378xxRB002",
          "xEEESPNMEIT00378XXRB003",
        ],
      },
      {
        username: "ravi.civil",
        projects: ["1136_student", "xxCESPNSERB01136xxRK002"],
      },
      {
        username: "ravindranath",
        projects: [
          "994_student",
          "xEEESPNxDIT00994xxRA004",
          "xEEESPNxDST00994xxRA003",
        ],
      },
      {
        username: "rbharti",
        projects: [
          "1140_student",
          "xxCESPNDTRL01140xRIB004",
          "xxCESPNDTRL01140xRIB005",
          "xxCESPNISRO01140xRIB002",
          "xxCESPNISRO1140xRIB002",
        ],
      },
      {
        username: "rds",
        projects: ["BSBESRFDBT00391xxRDS001"],
      },
      {
        username: "resmis",
        projects: ["xCLESPNSERB01309xxRS002"],
      },
      {
        username: "riasain",
        projects: ["xPHYPDRSERB00946xxRS001"],
      },
      {
        username: "rishi.k",
        projects: ["xEEESPNSERB01237xRDK002"],
      },
      {
        username: "ritushkumar",
        projects: ["xCHMPDRSERB00110xxRK001"],
      },
      {
        username: "rkbc",
        projects: [
          "708_student",
          "CESPxDSTRKB07080002",
          "xxCESPNxDST00708xRKB002",
          "xxCESPNxIITM00708xRKB004",
        ],
      },
      {
        username: "rkmittal",
        projects: ["1332_student", "xxMESPNSERB01332xRKM003"],
      },
      {
        username: "rkupadhyay",
        projects: [
          "829_student",
          "xCLECNLxxGI00829xRKU001",
          "xCLECNLxxGI00829xRKU002",
          "xCLESPNxDBT00760xVVG008",
          "xCLESPNxDST00829xRKU005",
          "xCLESPNxDST00829xRKU005",
        ],
      },
      {
        username: "roypaily",
        projects: [
          "507_student",
          "NANOSPSERBPDFPS05070",
          "xCHMSPNxDST00507xPKI007",
          "xEEESPNDEIY00507xRPP004",
          "xEEESPNSERB00507xRPP006",
          "xEEESPNxDIT00507xRPP004",
          "xEEESPNxDIT00507xRPP005",
          "xEEESPNxDIT00507xRPP005",
          "xEEESPNxSRC00507xRPP007",
        ],
      },
      {
        username: "rprasanna",
        projects: ["IITGSPxDBTDORD096900", "IITGSPxDBTDORD09690001"],
      },
      {
        username: "rsinha",
        projects: ["612_student", "EEESPxDITRS06120003"],
      },
      {
        username: "rsw",
        projects: ["BSBESPNxDBT00209xxRS007", "BTSPxDBTRS02090007"],
      },
      {
        username: "rthu",
        projects: [
          "1128_student",
          "BSBESPNSERB01128xRPT005",
          "BSBESPNxDBT01128xRPT003",
          "BSBESPNxDBT01128xRPT006",
        ],
      },
      {
        username: "rupam",
        projects: ["MATHPDRSERB01185xxZA001", "MATHSPNSERB01185xxRB003"],
      },
      {
        username: "ruttam95",
        projects: ["xCHMPDRSERB00862xRAU001"],
      },
      {
        username: "s.gumma",
        projects: ["xCLECNLDRDO00515xxSG009"],
      },
      {
        username: "s.m.hazarika",
        projects: [
          "xxMESPNIHFC1219xSMH005",
          "xxMESPNINAE01219xSMH007",
          "xxMESPNxDST01219xSMH002",
          "xxMESPNxDST01219xSMH004",
        ],
      },
      {
        username: "sachinksingh",
        projects: ["xCHMPDRxDST00862xSKS002"],
      },
      {
        username: "sachinku",
        projects: [
          "913_student",
          "BSBESPNDMRF00913xxSK012",
          "BSBESPNICMR00913xxSK009",
          "BSBESPNICMR00913xxSK014",
          "BSBESPNxDBT00913xxSK006",
          "BSBESPNxDBT00913xxSK007",
          "BSBESPNxDBT00913xxSK008",
          "BTSPxDBTSK09130004",
          "BTSPXDSTSK09130002",
        ],
      },
      {
        username: "saha",
        projects: ["286_student"],
      },
      {
        username: "sajan.kapil",
        projects: [
          "1305_student",
          "xxMESPNxDST01305xSJK002",
          "xxMESPNxDST01305xSJK003",
        ],
      },
      {
        username: "sak",
        projects: [
          "1097_student",
          "xxCESPNGRSP01097AKSG003",
          "xxCESPNNRDA01097AKSG005",
          "xxCESPNNRDA01097AKSG007",
          "xxCESPNNRDA01097AKSG009",
          "xxCESPNNRDA01097AKSG010",
        ],
      },
      {
        username: "saket",
        projects: ["SESESPNSERB1478SAVR001"],
      },
      {
        username: "salilkashyap",
        projects: ["1242_student", "xEEESPNSERB01242xxSK002"],
      },
      {
        username: "samaren",
        projects: ["133_student"],
      },
      {
        username: "sambit",
        projects: [
          "HSSSPICSSRSBM0680000",
          "HSSSPICSSRSBM06800001",
          "RNDxxxIITG00507xIPDF001",
          "xHSSSPNICSS00680xSBM001",
        ],
      },
      {
        username: "samit",
        projects: ["CLSTSPNMEIT00742xxSB001", "CLSTSPNMEIT00742xxSB001-2354"],
      },
      {
        username: "samiyara786",
        projects: ["xCHMPDRSERB00490xxSB001"],
      },
      {
        username: "sandip.das",
        projects: ["876_student", "xxCESPNxDST00876xSAD002"],
      },
      {
        username: "sandipp",
        projects: ["725_student", "xCHMSPNxDST00725xxSP006"],
      },
      {
        username: "sanjeev.bt",
        projects: ["BSBEPDRSERB00391XXSK001", "BSBEPDRxDBT00391xxSK002"],
      },
      {
        username: "sanjib.chaudhary",
        projects: ["SHSTPDRxDBT00771xxSC001"],
      },
      {
        username: "sanjukta",
        projects: [
          "646_student",
          "BSBESPNxDBT00646xxSP003",
          "BTSPxDBTSP06460003",
          "BTSPxDBTSP06460005",
        ],
      },
      {
        username: "santosh_biswas",
        projects: [
          "728_student",
          "CSESPDEIYSAB07280002",
          "xCSESPNDEIY00728xSAB002",
          "xCSESPNxDIT00728xSAB002",
        ],
      },
      {
        username: "saradhi",
        projects: ["799_student"],
      },
      {
        username: "sashin",
        projects: [
          "296_student",
          "ME-PDF-SK_296",
          "MESPXGOISK02960002",
          "SARTSPNASEC00296xxSK012",
          "SARTSPNDSIR00296xxSK011",
          "SARTSPNDSIR00296xxSK011-ZBSA-DSIR-1826-Reconciled",
          "xCRTSPNSERB00296xxSK004",
          "xCRTSPNxDST00296xxSK010",
          "xRTCSPNxDST00296xxSK008",
          "xxMESPNSERB00296xxSK005",
        ],
      },
      {
        username: "sastricv",
        projects: [
          "736_student",
          "CHEMSPNSERB00736xCVS012",
          "xCHMSPNSERB00736xCVS009",
        ],
      },
      {
        username: "satyajitp",
        projects: ["MATHSPNSERB01371SATP001"],
      },
      {
        username: "sau",
        projects: ["MATHPDRxDST01119xxHS001"],
      },
      {
        username: "saurabh",
        projects: ["411_student", "xPHYSPNSERB00411xxSB004"],
      },
      {
        username: "savinash",
        projects: ["DESSPDCIMAS07690002"],
      },
      {
        username: "sawmyaray",
        projects: [
          "HSS-P-SR-05",
          "xHSSSPNICSR00802xxSR007",
          "xHSSSPNMoLJ00802xxSR006",
        ],
      },
      {
        username: "sayan.chakrabarti",
        projects: ["981_student"],
      },
      {
        username: "sayantan_c",
        projects: ["1337_student", "xxCESPNSERB01337xSAC002"],
      },
      {
        username: "sbdas",
        projects: ["xPHYSPNISRO00783xSBD002"],
      },
      {
        username: "sbiswas",
        projects: ["xCHMSPNSERB00975xSPB004"],
      },
      {
        username: "sdk",
        projects: ["MESPXDSTSDK07840003"],
      },
      {
        username: "selva",
        projects: [
          "BSBESPNxDST01213xSEN003",
          "BSBESPNxDST01213xSEN003-ZBSA-1819",
          "BSBESPNxDST01213xSEN004",
        ],
      },
      {
        username: "senthilkumar",
        projects: [
          "861_student",
          "BSBESPNSERB00861xxSS007",
          "BSBESPNSERB00861xxSS008",
          "BSBESPNxDBT00861xxSS002",
          "BSBESPNxDBT00861xxSS005",
          "BSBESPNxDBT00861xxSS006",
          "BSBESPNxDST00861xxSS005",
          "BTSPxDBTSS08610002",
        ],
      },
      {
        username: "senthilmurugan",
        projects: [
          "985_student",
          "CLECLxHURSS09850002",
          "SESESPNNTPC00985xxSS010",
          "SESESPNxOIL00985xxSS011",
          "xCEESPNIAMD00985xxSS009",
          "xCEESPNONGC00985xxSS004",
          "xCEESPNxDST00985xxSS005",
          "xCLECNLHURC00985xxSS002",
          "xCLECNLxHUR00985xxSS002",
          "xCLESPNBIRC00985xxSS007",
          "xCLESPNEKAT00985xxSS013",
          "xCLESPNMHRD00985xSS006",
          "xCLESPNMHRD00985xxSS006",
          "xCLESPNONGC00985xxSS004",
          "xCLESPNxDST00985xxSS008",
          "xCLESPNxOIL00985xxSS012",
          "xENVCNLEURK00985xxSS004",
          "xENVCNLxEFL00985xxSS003",
        ],
      },
      {
        username: "sganguly",
        projects: ["xEEESPNSERB01120xxSG003"],
      },
      {
        username: "sghosh",
        projects: [
          "399_student",
          "BSBESPNxDBT00399xSSG00",
          "BSBESPNxDBT00399xSSG002",
          "BSBESPNxDBT00399xSSG006",
          "BSBESPNxDBT00399xSSG009",
          "NANOSPNxDBT00399xSSG007",
        ],
      },
      {
        username: "shahtariq",
        projects: ["xCHMPDRSERB00334xTAS001"],
      },
      {
        username: "shamima",
        projects: ["xCLEPDRSERB00763xxSB001"],
      },
      {
        username: "sharadbg",
        projects: ["xxCESPNMOES00532xSBG004"],
      },
      {
        username: "sharmiliroy",
        projects: ["BSBEPDRSERB01126xxSR001"],
      },
      {
        username: "shivakumar_k",
        projects: ["NANOPDRSERB01122xKIS001"],
      },
      {
        username: "shock",
        projects: [
          "530_student",
          "xxMESPNARDB00530xxNS004",
          "xxMESPNISRO00530xxNS005",
        ],
      },
      {
        username: "shoora.su_19",
        projects: ["xCHMPDRSERB01118SUKS001"],
      },
      {
        username: "shri",
        projects: [
          "1055_student",
          "CLSTSPNMHRD00510SRMP010",
          "DIC",
          "xCETSPNMHRD01055xRMP002",
        ],
      },
      {
        username: "sid7987",
        projects: ["xENVPDRxDBT00504xSNB001"],
      },
      {
        username: "siddharthafp",
        projects: [
          "SARTSPNDRDO01195xxSS005",
          "SARTSPNDRDO01195xxSS005-Reconciled",
          "SARTSPNUSAI01195xxSS006",
          "SARTSPNxDBT01195xxSS004-ZBSA",
          "SARTSPNxDBT01195xxSS004-ZBSA-0150",
          "xCRTSPNxDBT01195xxSS003",
          "xCRTSPNxDBT01195xxSS003-ZBSA-0150",
        ],
      },
      {
        username: "sikha24",
        projects: ["xxCEPDRCSIR01121xxSH001"],
      },
      {
        username: "sinhasneh",
        projects: ["MATHPDRSERB01185xSBS001"],
      },
      {
        username: "skar",
        projects: ["xxCESPNNBCC01334SKA002"],
      },
      {
        username: "skhijwania",
        projects: [
          "CETSPMHRDHOC05170001",
          "CETSPMHRDHOC05170002",
          "xCETSPNMHRD00517xSKH003",
        ],
      },
      {
        username: "sknayak",
        projects: [
          "871_student",
          "EEESPNSERB00871xSKN005",
          "SESESPNDRDO00871xSKN007",
          "xCEESPNSERB00871xSKN002",
          "xEEESPNMHRD00871xSKN003",
          "xEEESPNSERB00871xSKN002",
          "xEEESPNSERB00871xSKN006",
          "xEEESPNxDST00871xSKN004",
        ],
      },
      {
        username: "sksarkar",
        projects: [
          "xCHMSPNSERB01400xSKS002",
          "xCHMSPNSERB01400xSKS003_TSA(Hybrid)_4211",
        ],
      },
      {
        username: "smahanta",
        projects: [
          "HSSSPxDITSM06750003",
          "xHSSSPNIITI00675xxSM004",
          "xHSSSPNxDIT00675xxSM003",
        ],
      },
      {
        username: "smajhi",
        projects: ["239_student"],
      },
      {
        username: "smukherjee",
        projects: ["xEEESPNSERB01321xSDM002"],
      },
      {
        username: "snagotu",
        projects: [
          "1129_student",
          "BSBESPNSERB01129xxSN006",
          "BSBESPNxDBT01129xxSN003",
          "BSBESPNxDBT01129xxSN005",
        ],
      },
      {
        username: "snath",
        projects: ["xEEESPNSERB01006xxSN002"],
      },
      {
        username: "snigdha.saikia",
        projects: ["BSBExxRAICMR00743xSNS001"],
      },
      {
        username: "snj",
        projects: [
          "815_student",
          "MESPSERBSNJ8150002",
          "xxMESPNSERB00815xSNJ003",
        ],
      },
      {
        username: "soniaarora",
        projects: ["CHMSPxDSTPDFSA05050001"],
      },
      {
        username: "sonkar",
        projects: [
          "875_student",
          "xEEESPNSERB00875xRKS003",
          "xEEESPNSERB00875xRKS005",
          "xEEESPNSERB00875xRKS006",
        ],
      },
      {
        username: "soumenkm",
        projects: ["BSBESPNSERB00992xSKM002", "BSBESPNxDBT00508xVVD005"],
      },
      {
        username: "soumitra.nandi",
        projects: ["xPHYSPNSERB00946xxSN001"],
      },
      {
        username: "sovan",
        projects: ["1170_student", "xPHYSPNSERB01170xSOC003"],
      },
      {
        username: "spal",
        projects: ["813_student", "RNDxxxIITG00813xIPDF001"],
      },
      {
        username: "span",
        projects: [
          "879_student",
          "CHMSPxDSTSCP08790004",
          "xCHMSPNxDBT00879xSCP007",
          "xCHMSPNxDST00879xSCP004",
        ],
      },
      {
        username: "spanda",
        projects: ["xxMESPNSERB00768xxSP004"],
      },
      {
        username: "spkanaujia",
        projects: [
          "908_student",
          "BSBESPNSERB00908xSPK007",
          "BSBESPNSERB00908xSPK009",
          "BSBESPNSERB00908xSPK009-Reconciled",
          "BSBESPNxDBT00908xSPK005",
          "BSBESPNxDBT00908xSPK006",
          "BSBESPNxDBT00908xSPK010-ZBSA",
          "BSBESPNxDBT00908xSPK012_TSA(Hybrid)_4306",
          "BTSPxDBTSPK09080002",
        ],
      },
      {
        username: "sravi",
        projects: ["PHYSPxUGCSR02050008"],
      },
      {
        username: "sreeja",
        projects: ["641_student", "xxCESPNMOES00641xxSP002_0325_ZBSA"],
      },
      {
        username: "sreeparnadas",
        projects: ["xCHMPDRSERB00772xSRD001"],
      },
      {
        username: "srees",
        projects: ["CE-P-SS_592-3", "xxCESPNTEXF00592xxSS005"],
      },
      {
        username: "srinikris",
        projects: [
          "xEEESPNSTAR00934xxSK001- 3668- STARS",
          "xEEESPNSTAR00934xxSK001- 3668- STARS ZBSA",
          "xEEESPNxDOT00934xxSK002",
        ],
      },
      {
        username: "ssbag75",
        projects: ["xCHMSPNxDBT00738xSSB005", "xENVSPNICMR00738xxSSB007"],
      },
      {
        username: "ssen23",
        projects: ["BSBEPDRSERB00504xxSUPS001"],
      },
      {
        username: "ssg",
        projects: [
          "974_student",
          "xMESPNxDST00974xSSG002",
          "xxMESPNSERB00974xSSG002",
          "xxMESPNSERB00974xSSG004",
          "xxMESPNSERB00974xSSG005",
          "xxMESPNSERB00974xSSG005_TSA(Hybrid)_1023",
          "xxMESPNxDST00974xSSG002",
        ],
      },
      {
        username: "ssvelan",
        projects: [
          "590_student",
          "xMESONNIRD00590xSSV003",
          "xxMESPNMHRD00590xxSS004",
          "xxMESPNNIRH00590xSSV003",
          "xxMESPNSERB00590xxSS006",
          "xxMESPNxDST00590xxSS005",
        ],
      },
      {
        username: "subashisa",
        projects: [
          "415_student",
          "CESPIWAISD04150009",
          "CESPxDSTSD04150008",
          "xxCECNLAPGC00415xxSD011",
          "xxCECNLIWAI00415xxSD010",
          "xxCESPNEPSA00415xxSD011",
          "xxCESPNGBPI00415xxSD010",
          "xxCESPNNMHS00415xxSD012",
          "xxCESPNxDST00415xxSD008",
        ],
      },
      {
        username: "subhab",
        projects: [
          "983_student",
          "xPHYSPNSERB00983xSUB002",
          "xPHYSPNSERB00983xSUB003",
          "xPHYSPNxDST00983xSUB001",
        ],
      },
      {
        username: "subhajit1986",
        projects: ["xCHMPDRSERB00865xxSG001"],
      },
      {
        username: "subhasht",
        projects: ["856_student"],
      },
      {
        username: "subhasishroy",
        projects: ["xCHMPDRSERB00334xxSR001"],
      },
      {
        username: "subrata.pramanik",
        projects: ["SHSTSPNSERB01356xSUP002"],
      },
      {
        username: "sudip.shyam",
        projects: ["xCLESPNxNRL00860xxVK013"],
      },
      {
        username: "sudipmitra",
        projects: [
          "1191_student",
          "RNDxxxIITG01191xIPDF001",
          "SARTSPNSERB01191xxSM007",
          "xCRTSPNxDBT01191xxSM004",
          "xRTCSPNxDBT01191xxSM001",
          "xRTCSPNxDBT01191xxSM002",
        ],
      },
      {
        username: "sudipta.math7",
        projects: ["MATHSPNIITG00944xxSS001"],
      },
      {
        username: "suganya",
        projects: ["BSBEPDRSERB00861xxSE001"],
      },
      {
        username: "sukanya",
        projects: [
          "594_student",
          "HSSSPICSSRSS05940003",
          "xHSSSPNCAST00594xxSS004",
          "xHSSSPNSITA00594xxSS005",
          "xHSSSPNSITA00594xxSS005_Reconciled",
        ],
      },
      {
        username: "sukumar",
        projects: [
          "30_student",
          "CLSTSPNxDIT00030xxSN010",
          "CLSTSPNxDST00030xxSN009",
          "CSESPDEIYSN00300007",
          "xCSESPNcDIT00030xxSN007",
          "xCSESPNICAR00030xxSN011",
          "xCSESPNITRA00030xxSN008",
          "xCSESPNxDIT00030xxSN007",
        ],
      },
      {
        username: "sumana",
        projects: [
          "853_student",
          "xCHMSPNSERB00853xxSD002",
          "xCHMSPNSERB00853xxSD003",
        ],
      },
      {
        username: "sumana1989",
        projects: ["xPHYPDRSERB00344xSP001"],
      },
      {
        username: "sumitkrmehta",
        projects: ["xMEPDRSERB01115SKM001"],
      },
      {
        username: "sundarbalaji",
        projects: ["xCHMPDRSERB01107SUNB001"],
      },
      {
        username: "sunita.y",
        projects: ["BSBEPDRSERB00611xxSY001"],
      },
      {
        username: "sureshkr",
        projects: ["xCHMPDRSERB00736xxSK001"],
      },
      {
        username: "sureshsundaram",
        projects: [
          "978_student",
          "EEE-P-SS_978-2",
          "EEESPxDITSS09780002",
          "xEEESPNDEIY00978xxSS002",
          "xEEESPNxDIT00978xxSS002",
        ],
      },
      {
        username: "suryarao24",
        projects: ["xxMESPNIITG00768xxSN001"],
      },
      {
        username: "sushantak",
        projects: ["xCSESPNxDST00803xxSK001"],
      },
      {
        username: "susmita.prod",
        projects: ["xxMEPDRSERB00845xxSD001"],
      },
      {
        username: "sutapa_r",
        projects: ["CHMPDRCSIR00879xSUR001"],
      },
      {
        username: "swarupbag",
        projects: ["xxMESPNSERB00854xxSB004"],
      },
      {
        username: "swetatiwari",
        projects: ["1179_student"],
      },
      {
        username: "s_kumar",
        projects: ["xCLESPNSERB01326xSUK002"],
      },
      {
        username: "t.debnath",
        projects: ["NANO-RF-TD-01", "NANO/RF/SERB/TD/01"],
      },
      {
        username: "t.venkat",
        projects: [
          "794_student",
          "CSE-P-TV_794-2",
          "CSESPDEIYTV07940002",
          "CSExSPNDEIY00794xxTV002",
          "xCSESPNDEIY00794xxTV002",
        ],
      },
      {
        username: "tamalb",
        projects: [
          "617_student",
          "xCLESPNBRNS00617xxTB004",
          "xCLESPNHPCL00617xxTB007",
          "xCLESPNMHRD00617xxTB005",
          "xCLESPNSERB00617xxTB003",
          "xCLESPNSERB00617xxTB009",
          "xENVSPNxDST00617xxTB010",
          "xENVSPNxDST00617xxTB010-ZBSA-1819",
        ],
      },
      {
        username: "tanmay.dutta",
        projects: [
          "1355_student",
          "NANOSPNMHRD01355xxTD003_ZBSA_3668",
          "xEEESPNSERB01355xxTD004",
        ],
      },
      {
        username: "tanmoymedhi1989",
        projects: ["xMEPDRSERB00845xTAM001"],
      },
      {
        username: "tanur",
        projects: ["xCHMPDRSERB00865xxTS001"],
      },
      {
        username: "tapan.mankodi",
        projects: ["xxMESPNSERB01319TKM004"],
      },
      {
        username: "tapasche",
        projects: ["xCLESPNxDST00745xTKM004"],
      },
      {
        username: "tapobroto.bhanja",
        projects: ["xPHYPDRSERB00950xTAB001"],
      },
      {
        username: "tarak.dey",
        projects: [
          "PHYSPxDSTTND06380001",
          "xPHYSPNSERB00638xTND002",
          "xPHYSPNSERB00638xTND003",
        ],
      },
      {
        username: "tarinee",
        projects: ["BSBEPDRxDBT00747xxTP001"],
      },
      {
        username: "thesniya91",
        projects: ["xxCEPDRxDST01121xTPM001"],
      },
      {
        username: "tmang.haokip",
        projects: ["xHSSPDRICCS00999xxTH001"],
      },
      {
        username: "tpunni",
        projects: [
          "334_student",
          "CHMSPSERBTP03340011",
          "CHMSPxDSTtPDFAD03340",
          "CHMSPxDSTtPDFAD03340001",
          "xCHMSPNCSIR00334xxTP012",
          "xCHMSPNSERB00334xxTP011",
          "xCHMSPNSERB00334xxTP013",
        ],
      },
      {
        username: "trivedi",
        projects: [
          "883_student",
          "EEESPNMEIT00883xxGT008-ZBSA-2354",
          "xCEESPNISRP00883xxGT003",
          "xEEESPNISRO000883xxGT003",
          "xEEESPNISRO00883xxGT003",
          "xEEESPNOTHE00883xxGT001",
          "xEEESPNSERB00883xxGT004",
          "xEEESPNTEIN00883xxGT007",
          "xEEESPNxDST00883xxGT005",
          "xEEESPNxDST00883xxGT006",
          "xEEESPNxDST00883xxGT006-ZBSA-1819",
        ],
      },
      {
        username: "tsubbi",
        projects: ["BSBESPNSERB00861xxSS007"],
      },
      {
        username: "turlapati",
        projects: ["xCHMPDRSERB00862xxST001"],
      },
      {
        username: "tvb",
        projects: [
          "953_student",
          "CE-PDF-TVBharat_953",
          "xIKSSPNAICT00953xTVB005-3921",
          "xIKSSPNAICT00953xTVB005-3921-R-DK",
          "xIKSSPNAITE00953xTVB003",
          "xIKSSPNAITE00953xTVB003-Reconciled",
          "xxCESPNJUTE00953xTVB006",
          "xxCESPNSERB00953xTVB002",
          "xxCESPNxDST00953xTVB001",
        ],
      },
      {
        username: "ubora",
        projects: [
          "534_student",
          "BSBESPNxDBT00534xxUB010",
          "BTSPxDBTUB05340008",
          "ENVSPxDBTUB05340004",
          "ENVSPxDBTUB05340010",
          "xENVSPNASEC00534xxUB012",
          "xENVSPNDRDO00534xxUB013",
          "xENVSPNxDBT00534xxUB009",
          "xENVSPNxDBT00534xxUB010",
          "xENVSPNxDST00534xxUB014-ZBSA-1819",
        ],
      },
      {
        username: "uday",
        projects: [
          "155_student",
          "155_student",
          "ME-PDF-USD_155",
          "MESPDRDLUSD01550005",
          "MESPxDSTUSD01550006",
          "xxMESONxDST00155xUSD007",
          "xxMESPNxDST00155xUSD006",
          "xxMESPNxDST00155xUSD007",
          "xxMESPNxDST00155xUSD008",
        ],
      },
      {
        username: "udaymaiti",
        projects: ["xPHYSPNSERB01082xUNM002"],
      },
      {
        username: "udit.raha",
        projects: ["911_student", "xPHYSPNSERB00911xxUR002"],
      },
      {
        username: "ulla.hidayath",
        projects: ["xCHMPDRSERB00862xxHU001"],
      },
      {
        username: "umanna",
        projects: [
          "1118_student",
          "CHMSPSERBUM11180002",
          "xCHMSPNMRPL01118xxUM005",
          "xCHMSPNSERB01118xxUM002",
          "xCHMSPNSERB01118xxUM009",
          "xCHMSPNxDBT01118xxUM008",
          "xCHMSPNxDST01118xxUM002",
        ],
      },
      {
        username: "utpalb",
        projects: ["DESSPxDICHOD02600001"],
      },
      {
        username: "v.prabu",
        projects: [
          "965_student",
          "xCLESPNCOAL00965xxVP004",
          "xCLESPNCOAL00965xxVP004_reconciled",
          "xCLESPNCOAL00965xxVP005",
          "xCLESPNSERB00965xxVP003",
        ],
      },
      {
        username: "vasundharaj",
        projects: ["xHSSSPNICSR01233xxVJ001"],
      },
      {
        username: "vdubey",
        projects: [
          "611_student",
          "BSBESPNxDBT00611xVKD013",
          "BSBESPNxDBT00611xVKD014",
          "BSBESPNxDBT00611xVKD015",
          "BTSPxDBTVKD06110012",
          "BTSPxDBTVKD06110013",
        ],
      },
      {
        username: "vedeshwar",
        projects: ["xCHMPDRSERB00863xVNS001"],
      },
      {
        username: "veeranki",
        projects: [
          "BSBESPNICMR00508xVVD006",
          "BSBESPNICMR00508xVVD007",
          "BSBESPNxDBT00508xVVD003",
          "BSBESPNxDBT00508xVVD005",
          "BTSPxDBTHOD05080002",
        ],
      },
      {
        username: "velentinadas",
        projects: ["xCLEPDRSERB00619xVD001"],
      },
      {
        username: "vibin",
        projects: [
          "864_student",
          "BSBESPNBRNS00864xxVR006",
          "BSBESPNCCRA00864xxVR009",
          "BSBESPNxDBT00864xxVR005",
          "BSBESPNxDBT00864xxVR007",
          "BT-PDF-VRamakrishnan_864",
          "xxx",
        ],
      },
      {
        username: "vinayak",
        projects: [
          "713_student",
          "MESPAPGCVNK07130002",
          "xxMESPNISRO00713xVNK005",
        ],
      },
      {
        username: "vivek.borse",
        projects: ["NANOOPDRxDST90024xVIB001", "NANOPDRxDST90024xVIB001"],
      },
      {
        username: "vivekchemistry",
        projects: ["xCHMPDRSERB00334xxVK001"],
      },
      {
        username: "vkatiyar",
        projects: [
          "860_student",
          "CFSPSPNNEDF00860xxVK019",
          "CFSPSPNxDBT00860xxVK016",
          "CFSPSPNxDBT00860xxVK024",
          "CFSPSPNxDST00860xxVK020",
          "CLE-PDF-VKatiyar_860",
          "CLESPNKPTM00860xxVK008",
          "CLESPxDSTVK08600002",
          "CLESPxDSTVK08600004",
          "CLESPxDSTVK08600006",
          "CLExSPNCHES00860xxVK005",
          "PDF",
          "xCFSPSPNxDST0860VKAK023",
          "xCLEPDFIITG00860xxVK001",
          "xCLESPNABST00860xxVK011",
          "xCLESPNKPTM00860xxVK008",
          "xCLESPNxDBT00860xxVK009",
          "xCLESPNxDBT00860xxVK010",
          "xCLESPNxDBT00860xxVK015",
          "xCLESPNxDST00860xxVK004",
          "xCLESPNxNRL00860xxVK013",
          "xENVSPNxDST00860xxVK014",
        ],
      },
      {
        username: "vmoholkar",
        projects: ["491_student"],
      },
      {
        username: "vtrivedi",
        projects: [
          "789_student",
          "BSBESPNSERB00789xxVT009",
          "BSBESPNxDBT00789xxVT006",
          "BSBESPNxDBT00789xxVT008",
          "BTSPNTRFVT07890007",
          "BTSPxDBTVT07890006",
        ],
      },
      {
        username: "vvgoud",
        projects: [
          "760_student",
          "CLE-P-VVG_760-4",
          "CLESPxDBTVVG07600004",
          "CLESPxDBTVVG07600006",
          "SESESPNGITA00760xVVG011",
          "xCEESPNMHRD00760xVVG009",
          "xCEESPNxDBT00760xVVG005",
          "xCEESPNxDBT00760xVVG007",
          "xCEESPNxDBT00760xVVG010",
          "xCLESPNxDBT00760xVVG006",
          "xCLESPNxDBT00760xVVG008",
        ],
      },
      {
        username: "y.vashi",
        projects: ["BSBEPDRxDBT00913xYV0001"],
      },
      {
        username: "younis",
        projects: ["MATHSPNIITG00836xxYB001"],
      },
      {
        username: "yparekh",
        projects: ["xCLESPNxNRL00860xxVK013"],
      },
    ];

    const piProjectRelations = [];
    for (const assignment of piProjectAssignments) {
      for (const projectCode of assignment.projects) {
        if (projectCode) {
          piProjectRelations.push({
            username: assignment.username,
            projectCode,
          });
        }
      }
    }

    if (piProjectRelations.length > 0) {
      await prisma.pIProjectRelation.createMany({
        data: piProjectRelations,
        skipDuplicates: true,
      });

      console.log(
        `✅ Created ${piProjectRelations.length} PI-Project relations successfully`
      );
    }

    console.log("PI-Project Distribution:");
    piProjectAssignments.forEach((assignment) => {
      console.log(
        `  - ${assignment.username}: ${
          assignment.projects.length
        } projects (${assignment.projects.join(", ")})`
      );
    });

    return {
      success: true,
      message: `PIs and relations seeded successfully`,
      count: piData.length,
    };
  } catch (error) {
    console.error("❌ Error seeding PIs:", error);
    return {
      success: false,
      message: "Failed to seed PIs",
      error: error instanceof Error ? error.message : error,
    };
  } finally {
    await prisma.$disconnect();
  }
};

// Run seed if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedPIData();
}
