import Input from "@/component/Input";
import { storeContext } from "@/store/storeContext";
import axios from "axios";
import Link from "next/link";
import { useContext, useState } from "react";
import Select from "react-dropdown-select";

// name, onChange, placehoder, value 
const UnerInfo = () => {
    const [user, SetUser] = useState({});
    const { store, setStore } = useContext(storeContext);
    const options = [
        {
            value: 1,
            label: "Leanne Graham"
        },
        {
            value: 2,
            label: "Ervin Howell"
        }
    ];
    const country = [
        {
            value: "4",
            "alpha_2_code": "AF",
            "alpha_3_code": "AFG",
            "en_short_name": "Afghanistan",
            label: "Afghan"
        },
        {
            value: "248",
            "alpha_2_code": "AX",
            "alpha_3_code": "ALA",
            "en_short_name": "\u00c5land Islands",
            label: "\u00c5land Island"
        },
        {
            value: "8",
            "alpha_2_code": "AL",
            "alpha_3_code": "ALB",
            "en_short_name": "Albania",
            label: "Albanian"
        },
        {
            value: "12",
            "alpha_2_code": "DZ",
            "alpha_3_code": "DZA",
            "en_short_name": "Algeria",
            label: "Algerian"
        },
        {
            value: "16",
            "alpha_2_code": "AS",
            "alpha_3_code": "ASM",
            "en_short_name": "American Samoa",
            label: "American Samoan"
        },
        {
            value: "20",
            "alpha_2_code": "AD",
            "alpha_3_code": "AND",
            "en_short_name": "Andorra",
            label: "Andorran"
        },
        {
            value: "24",
            "alpha_2_code": "AO",
            "alpha_3_code": "AGO",
            "en_short_name": "Angola",
            label: "Angolan"
        },
        {
            value: "660",
            "alpha_2_code": "AI",
            "alpha_3_code": "AIA",
            "en_short_name": "Anguilla",
            label: "Anguillan"
        },
        {
            value: "10",
            "alpha_2_code": "AQ",
            "alpha_3_code": "ATA",
            "en_short_name": "Antarctica",
            label: "Antarctic"
        },
        {
            value: "28",
            "alpha_2_code": "AG",
            "alpha_3_code": "ATG",
            "en_short_name": "Antigua and Barbuda",
            label: "Antiguan or Barbudan"
        },
        {
            value: "32",
            "alpha_2_code": "AR",
            "alpha_3_code": "ARG",
            "en_short_name": "Argentina",
            label: "Argentine"
        },
        {
            value: "51",
            "alpha_2_code": "AM",
            "alpha_3_code": "ARM",
            "en_short_name": "Armenia",
            label: "Armenian"
        },
        {
            value: "533",
            "alpha_2_code": "AW",
            "alpha_3_code": "ABW",
            "en_short_name": "Aruba",
            label: "Aruban"
        },
        {
            value: "36",
            "alpha_2_code": "AU",
            "alpha_3_code": "AUS",
            "en_short_name": "Australia",
            label: "Australian"
        },
        {
            value: "40",
            "alpha_2_code": "AT",
            "alpha_3_code": "AUT",
            "en_short_name": "Austria",
            label: "Austrian"
        },
        {
            value: "31",
            "alpha_2_code": "AZ",
            "alpha_3_code": "AZE",
            "en_short_name": "Azerbaijan",
            label: "Azerbaijani, Azeri"
        },
        {
            value: "44",
            "alpha_2_code": "BS",
            "alpha_3_code": "BHS",
            "en_short_name": "Bahamas",
            label: "Bahamian"
        },
        {
            value: "48",
            "alpha_2_code": "BH",
            "alpha_3_code": "BHR",
            "en_short_name": "Bahrain",
            label: "Bahraini"
        },
        {
            value: "50",
            "alpha_2_code": "BD",
            "alpha_3_code": "BGD",
            "en_short_name": "Bangladesh",
            label: "Bangladeshi"
        },
        {
            value: "52",
            "alpha_2_code": "BB",
            "alpha_3_code": "BRB",
            "en_short_name": "Barbados",
            label: "Barbadian"
        },
        {
            value: "112",
            "alpha_2_code": "BY",
            "alpha_3_code": "BLR",
            "en_short_name": "Belarus",
            label: "Belarusian"
        },
        {
            value: "56",
            "alpha_2_code": "BE",
            "alpha_3_code": "BEL",
            "en_short_name": "Belgium",
            label: "Belgian"
        },
        {
            value: "84",
            "alpha_2_code": "BZ",
            "alpha_3_code": "BLZ",
            "en_short_name": "Belize",
            label: "Belizean"
        },
        {
            value: "204",
            "alpha_2_code": "BJ",
            "alpha_3_code": "BEN",
            "en_short_name": "Benin",
            label: "Beninese, Beninois"
        },
        {
            value: "60",
            "alpha_2_code": "BM",
            "alpha_3_code": "BMU",
            "en_short_name": "Bermuda",
            label: "Bermudian, Bermudan"
        },
        {
            value: "64",
            "alpha_2_code": "BT",
            "alpha_3_code": "BTN",
            "en_short_name": "Bhutan",
            label: "Bhutanese"
        },
        {
            value: "68",
            "alpha_2_code": "BO",
            "alpha_3_code": "BOL",
            "en_short_name": "Bolivia (Plurinational State of)",
            label: "Bolivian"
        },
        {
            value: "535",
            "alpha_2_code": "BQ",
            "alpha_3_code": "BES",
            "en_short_name": "Bonaire, Sint Eustatius and Saba",
            label: "Bonaire"
        },
        {
            value: "70",
            "alpha_2_code": "BA",
            "alpha_3_code": "BIH",
            "en_short_name": "Bosnia and Herzegovina",
            label: "Bosnian or Herzegovinian"
        },
        {
            value: "72",
            "alpha_2_code": "BW",
            "alpha_3_code": "BWA",
            "en_short_name": "Botswana",
            label: "Motswana, Botswanan"
        },
        {
            value: "74",
            "alpha_2_code": "BV",
            "alpha_3_code": "BVT",
            "en_short_name": "Bouvet Island",
            label: "Bouvet Island"
        },
        {
            value: "76",
            "alpha_2_code": "BR",
            "alpha_3_code": "BRA",
            "en_short_name": "Brazil",
            label: "Brazilian"
        },
        {
            value: "86",
            "alpha_2_code": "IO",
            "alpha_3_code": "IOT",
            "en_short_name": "British Indian Ocean Territory",
            label: "BIOT"
        },
        {
            value: "96",
            "alpha_2_code": "BN",
            "alpha_3_code": "BRN",
            "en_short_name": "Brunei Darussalam",
            label: "Bruneian"
        },
        {
            value: "100",
            "alpha_2_code": "BG",
            "alpha_3_code": "BGR",
            "en_short_name": "Bulgaria",
            label: "Bulgarian"
        },
        {
            value: "854",
            "alpha_2_code": "BF",
            "alpha_3_code": "BFA",
            "en_short_name": "Burkina Faso",
            label: "Burkinab\u00e9"
        },
        {
            value: "108",
            "alpha_2_code": "BI",
            "alpha_3_code": "BDI",
            "en_short_name": "Burundi",
            label: "Burundian"
        },
        {
            value: "132",
            "alpha_2_code": "CV",
            "alpha_3_code": "CPV",
            "en_short_name": "Cabo Verde",
            label: "Cabo Verdean"
        },
        {
            value: "116",
            "alpha_2_code": "KH",
            "alpha_3_code": "KHM",
            "en_short_name": "Cambodia",
            label: "Cambodian"
        },
        {
            value: "120",
            "alpha_2_code": "CM",
            "alpha_3_code": "CMR",
            "en_short_name": "Cameroon",
            label: "Cameroonian"
        },
        {
            value: "124",
            "alpha_2_code": "CA",
            "alpha_3_code": "CAN",
            "en_short_name": "Canada",
            label: "Canadian"
        },
        {
            value: "136",
            "alpha_2_code": "KY",
            "alpha_3_code": "CYM",
            "en_short_name": "Cayman Islands",
            label: "Caymanian"
        },
        {
            value: "140",
            "alpha_2_code": "CF",
            "alpha_3_code": "CAF",
            "en_short_name": "Central African Republic",
            label: "Central African"
        },
        {
            value: "148",
            "alpha_2_code": "TD",
            "alpha_3_code": "TCD",
            "en_short_name": "Chad",
            label: "Chadian"
        },
        {
            value: "152",
            "alpha_2_code": "CL",
            "alpha_3_code": "CHL",
            "en_short_name": "Chile",
            label: "Chilean"
        },
        {
            value: "156",
            "alpha_2_code": "CN",
            "alpha_3_code": "CHN",
            "en_short_name": "China",
            label: "Chinese"
        },
        {
            value: "162",
            "alpha_2_code": "CX",
            "alpha_3_code": "CXR",
            "en_short_name": "Christmas Island",
            label: "Christmas Island"
        },
        {
            value: "166",
            "alpha_2_code": "CC",
            "alpha_3_code": "CCK",
            "en_short_name": "Cocos (Keeling) Islands",
            label: "Cocos Island"
        },
        {
            value: "170",
            "alpha_2_code": "CO",
            "alpha_3_code": "COL",
            "en_short_name": "Colombia",
            label: "Colombian"
        },
        {
            value: "174",
            "alpha_2_code": "KM",
            "alpha_3_code": "COM",
            "en_short_name": "Comoros",
            label: "Comoran, Comorian"
        },
        {
            value: "178",
            "alpha_2_code": "CG",
            "alpha_3_code": "COG",
            "en_short_name": "Congo (Republic of the)",
            label: "Congolese"
        },
        {
            value: "180",
            "alpha_2_code": "CD",
            "alpha_3_code": "COD",
            "en_short_name": "Congo (Democratic Republic of the)",
            label: "Congolese"
        },
        {
            value: "184",
            "alpha_2_code": "CK",
            "alpha_3_code": "COK",
            "en_short_name": "Cook Islands",
            label: "Cook Island"
        },
        {
            value: "188",
            "alpha_2_code": "CR",
            "alpha_3_code": "CRI",
            "en_short_name": "Costa Rica",
            label: "Costa Rican"
        },
        {
            value: "384",
            "alpha_2_code": "CI",
            "alpha_3_code": "CIV",
            "en_short_name": "C\u00f4te d'Ivoire",
            label: "Ivorian"
        },
        {
            value: "191",
            "alpha_2_code": "HR",
            "alpha_3_code": "HRV",
            "en_short_name": "Croatia",
            label: "Croatian"
        },
        {
            value: "192",
            "alpha_2_code": "CU",
            "alpha_3_code": "CUB",
            "en_short_name": "Cuba",
            label: "Cuban"
        },
        {
            value: "531",
            "alpha_2_code": "CW",
            "alpha_3_code": "CUW",
            "en_short_name": "Cura\u00e7ao",
            label: "Cura\u00e7aoan"
        },
        {
            value: "196",
            "alpha_2_code": "CY",
            "alpha_3_code": "CYP",
            "en_short_name": "Cyprus",
            label: "Cypriot"
        },
        {
            value: "203",
            "alpha_2_code": "CZ",
            "alpha_3_code": "CZE",
            "en_short_name": "Czech Republic",
            label: "Czech"
        },
        {
            value: "208",
            "alpha_2_code": "DK",
            "alpha_3_code": "DNK",
            "en_short_name": "Denmark",
            label: "Danish"
        },
        {
            value: "262",
            "alpha_2_code": "DJ",
            "alpha_3_code": "DJI",
            "en_short_name": "Djibouti",
            label: "Djiboutian"
        },
        {
            value: "212",
            "alpha_2_code": "DM",
            "alpha_3_code": "DMA",
            "en_short_name": "Dominica",
            label: "Dominican"
        },
        {
            value: "214",
            "alpha_2_code": "DO",
            "alpha_3_code": "DOM",
            "en_short_name": "Dominican Republic",
            label: "Dominican"
        },
        {
            value: "218",
            "alpha_2_code": "EC",
            "alpha_3_code": "ECU",
            "en_short_name": "Ecuador",
            label: "Ecuadorian"
        },
        {
            value: "818",
            "alpha_2_code": "EG",
            "alpha_3_code": "EGY",
            "en_short_name": "Egypt",
            label: "Egyptian"
        },
        {
            value: "222",
            "alpha_2_code": "SV",
            "alpha_3_code": "SLV",
            "en_short_name": "El Salvador",
            label: "Salvadoran"
        },
        {
            value: "226",
            "alpha_2_code": "GQ",
            "alpha_3_code": "GNQ",
            "en_short_name": "Equatorial Guinea",
            label: "Equatorial Guinean, Equatoguinean"
        },
        {
            value: "232",
            "alpha_2_code": "ER",
            "alpha_3_code": "ERI",
            "en_short_name": "Eritrea",
            label: "Eritrean"
        },
        {
            value: "233",
            "alpha_2_code": "EE",
            "alpha_3_code": "EST",
            "en_short_name": "Estonia",
            label: "Estonian"
        },
        {
            value: "231",
            "alpha_2_code": "ET",
            "alpha_3_code": "ETH",
            "en_short_name": "Ethiopia",
            label: "Ethiopian"
        },
        {
            value: "238",
            "alpha_2_code": "FK",
            "alpha_3_code": "FLK",
            "en_short_name": "Falkland Islands (Malvinas)",
            label: "Falkland Island"
        },
        {
            value: "234",
            "alpha_2_code": "FO",
            "alpha_3_code": "FRO",
            "en_short_name": "Faroe Islands",
            label: "Faroese"
        },
        {
            value: "242",
            "alpha_2_code": "FJ",
            "alpha_3_code": "FJI",
            "en_short_name": "Fiji",
            label: "Fijian"
        },
        {
            value: "246",
            "alpha_2_code": "FI",
            "alpha_3_code": "FIN",
            "en_short_name": "Finland",
            label: "Finnish"
        },
        {
            value: "250",
            "alpha_2_code": "FR",
            "alpha_3_code": "FRA",
            "en_short_name": "France",
            label: "French"
        },
        {
            value: "254",
            "alpha_2_code": "GF",
            "alpha_3_code": "GUF",
            "en_short_name": "French Guiana",
            label: "French Guianese"
        },
        {
            value: "258",
            "alpha_2_code": "PF",
            "alpha_3_code": "PYF",
            "en_short_name": "French Polynesia",
            label: "French Polynesian"
        },
        {
            value: "260",
            "alpha_2_code": "TF",
            "alpha_3_code": "ATF",
            "en_short_name": "French Southern Territories",
            label: "French Southern Territories"
        },
        {
            value: "266",
            "alpha_2_code": "GA",
            "alpha_3_code": "GAB",
            "en_short_name": "Gabon",
            label: "Gabonese"
        },
        {
            value: "270",
            "alpha_2_code": "GM",
            "alpha_3_code": "GMB",
            "en_short_name": "Gambia",
            label: "Gambian"
        },
        {
            value: "268",
            "alpha_2_code": "GE",
            "alpha_3_code": "GEO",
            "en_short_name": "Georgia",
            label: "Georgian"
        },
        {
            value: "276",
            "alpha_2_code": "DE",
            "alpha_3_code": "DEU",
            "en_short_name": "Germany",
            label: "German"
        },
        {
            value: "288",
            "alpha_2_code": "GH",
            "alpha_3_code": "GHA",
            "en_short_name": "Ghana",
            label: "Ghanaian"
        },
        {
            value: "292",
            "alpha_2_code": "GI",
            "alpha_3_code": "GIB",
            "en_short_name": "Gibraltar",
            label: "Gibraltar"
        },
        {
            value: "300",
            "alpha_2_code": "GR",
            "alpha_3_code": "GRC",
            "en_short_name": "Greece",
            label: "Greek, Hellenic"
        },
        {
            value: "304",
            "alpha_2_code": "GL",
            "alpha_3_code": "GRL",
            "en_short_name": "Greenland",
            label: "Greenlandic"
        },
        {
            value: "308",
            "alpha_2_code": "GD",
            "alpha_3_code": "GRD",
            "en_short_name": "Grenada",
            label: "Grenadian"
        },
        {
            value: "312",
            "alpha_2_code": "GP",
            "alpha_3_code": "GLP",
            "en_short_name": "Guadeloupe",
            label: "Guadeloupe"
        },
        {
            value: "316",
            "alpha_2_code": "GU",
            "alpha_3_code": "GUM",
            "en_short_name": "Guam",
            label: "Guamanian, Guambat"
        },
        {
            value: "320",
            "alpha_2_code": "GT",
            "alpha_3_code": "GTM",
            "en_short_name": "Guatemala",
            label: "Guatemalan"
        },
        {
            value: "831",
            "alpha_2_code": "GG",
            "alpha_3_code": "GGY",
            "en_short_name": "Guernsey",
            label: "Channel Island"
        },
        {
            value: "324",
            "alpha_2_code": "GN",
            "alpha_3_code": "GIN",
            "en_short_name": "Guinea",
            label: "Guinean"
        },
        {
            value: "624",
            "alpha_2_code": "GW",
            "alpha_3_code": "GNB",
            "en_short_name": "Guinea-Bissau",
            label: "Bissau-Guinean"
        },
        {
            value: "328",
            "alpha_2_code": "GY",
            "alpha_3_code": "GUY",
            "en_short_name": "Guyana",
            label: "Guyanese"
        },
        {
            value: "332",
            "alpha_2_code": "HT",
            "alpha_3_code": "HTI",
            "en_short_name": "Haiti",
            label: "Haitian"
        },
        {
            value: "334",
            "alpha_2_code": "HM",
            "alpha_3_code": "HMD",
            "en_short_name": "Heard Island and McDonald Islands",
            label: "Heard Island or McDonald Islands"
        },
        {
            value: "336",
            "alpha_2_code": "VA",
            "alpha_3_code": "VAT",
            "en_short_name": "Vatican City State",
            label: "Vatican"
        },
        {
            value: "340",
            "alpha_2_code": "HN",
            "alpha_3_code": "HND",
            "en_short_name": "Honduras",
            label: "Honduran"
        },
        {
            value: "344",
            "alpha_2_code": "HK",
            "alpha_3_code": "HKG",
            "en_short_name": "Hong Kong",
            label: "Hong Kong, Hong Kongese"
        },
        {
            value: "348",
            "alpha_2_code": "HU",
            "alpha_3_code": "HUN",
            "en_short_name": "Hungary",
            label: "Hungarian, Magyar"
        },
        {
            value: "352",
            "alpha_2_code": "IS",
            "alpha_3_code": "ISL",
            "en_short_name": "Iceland",
            label: "Icelandic"
        },
        {
            value: "356",
            "alpha_2_code": "IN",
            "alpha_3_code": "IND",
            "en_short_name": "India",
            label: "Indian"
        },
        {
            value: "360",
            "alpha_2_code": "ID",
            "alpha_3_code": "IDN",
            "en_short_name": "Indonesia",
            label: "Indonesian"
        },
        {
            value: "364",
            "alpha_2_code": "IR",
            "alpha_3_code": "IRN",
            "en_short_name": "Iran",
            label: "Iranian, Persian"
        },
        {
            value: "368",
            "alpha_2_code": "IQ",
            "alpha_3_code": "IRQ",
            "en_short_name": "Iraq",
            label: "Iraqi"
        },
        {
            value: "372",
            "alpha_2_code": "IE",
            "alpha_3_code": "IRL",
            "en_short_name": "Ireland",
            label: "Irish"
        },
        {
            value: "833",
            "alpha_2_code": "IM",
            "alpha_3_code": "IMN",
            "en_short_name": "Isle of Man",
            label: "Manx"
        },
        {
            value: "376",
            "alpha_2_code": "IL",
            "alpha_3_code": "ISR",
            "en_short_name": "Israel",
            label: "Israeli"
        },
        {
            value: "380",
            "alpha_2_code": "IT",
            "alpha_3_code": "ITA",
            "en_short_name": "Italy",
            label: "Italian"
        },
        {
            value: "388",
            "alpha_2_code": "JM",
            "alpha_3_code": "JAM",
            "en_short_name": "Jamaica",
            label: "Jamaican"
        },
        {
            value: "392",
            "alpha_2_code": "JP",
            "alpha_3_code": "JPN",
            "en_short_name": "Japan",
            label: "Japanese"
        },
        {
            value: "832",
            "alpha_2_code": "JE",
            "alpha_3_code": "JEY",
            "en_short_name": "Jersey",
            label: "Channel Island"
        },
        {
            value: "400",
            "alpha_2_code": "JO",
            "alpha_3_code": "JOR",
            "en_short_name": "Jordan",
            label: "Jordanian"
        },
        {
            value: "398",
            "alpha_2_code": "KZ",
            "alpha_3_code": "KAZ",
            "en_short_name": "Kazakhstan",
            label: "Kazakhstani, Kazakh"
        },
        {
            value: "404",
            "alpha_2_code": "KE",
            "alpha_3_code": "KEN",
            "en_short_name": "Kenya",
            label: "Kenyan"
        },
        {
            value: "296",
            "alpha_2_code": "KI",
            "alpha_3_code": "KIR",
            "en_short_name": "Kiribati",
            label: "I-Kiribati"
        },
        {
            value: "408",
            "alpha_2_code": "KP",
            "alpha_3_code": "PRK",
            "en_short_name": "Korea (Democratic People's Republic of)",
            label: "North Korean"
        },
        {
            value: "410",
            "alpha_2_code": "KR",
            "alpha_3_code": "KOR",
            "en_short_name": "Korea (Republic of)",
            label: "South Korean"
        },
        {
            value: "414",
            "alpha_2_code": "KW",
            "alpha_3_code": "KWT",
            "en_short_name": "Kuwait",
            label: "Kuwaiti"
        },
        {
            value: "417",
            "alpha_2_code": "KG",
            "alpha_3_code": "KGZ",
            "en_short_name": "Kyrgyzstan",
            label: "Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz"
        },
        {
            value: "418",
            "alpha_2_code": "LA",
            "alpha_3_code": "LAO",
            "en_short_name": "Lao People's Democratic Republic",
            label: "Lao, Laotian"
        },
        {
            value: "428",
            "alpha_2_code": "LV",
            "alpha_3_code": "LVA",
            "en_short_name": "Latvia",
            label: "Latvian"
        },
        {
            value: "422",
            "alpha_2_code": "LB",
            "alpha_3_code": "LBN",
            "en_short_name": "Lebanon",
            label: "Lebanese"
        },
        {
            value: "426",
            "alpha_2_code": "LS",
            "alpha_3_code": "LSO",
            "en_short_name": "Lesotho",
            label: "Basotho"
        },
        {
            value: "430",
            "alpha_2_code": "LR",
            "alpha_3_code": "LBR",
            "en_short_name": "Liberia",
            label: "Liberian"
        },
        {
            value: "434",
            "alpha_2_code": "LY",
            "alpha_3_code": "LBY",
            "en_short_name": "Libya",
            label: "Libyan"
        },
        {
            value: "438",
            "alpha_2_code": "LI",
            "alpha_3_code": "LIE",
            "en_short_name": "Liechtenstein",
            label: "Liechtenstein"
        },
        {
            value: "440",
            "alpha_2_code": "LT",
            "alpha_3_code": "LTU",
            "en_short_name": "Lithuania",
            label: "Lithuanian"
        },
        {
            value: "442",
            "alpha_2_code": "LU",
            "alpha_3_code": "LUX",
            "en_short_name": "Luxembourg",
            label: "Luxembourg, Luxembourgish"
        },
        {
            value: "446",
            "alpha_2_code": "MO",
            "alpha_3_code": "MAC",
            "en_short_name": "Macao",
            label: "Macanese, Chinese"
        },
        {
            value: "807",
            "alpha_2_code": "MK",
            "alpha_3_code": "MKD",
            "en_short_name": "Macedonia (the former Yugoslav Republic of)",
            label: "Macedonian"
        },
        {
            value: "450",
            "alpha_2_code": "MG",
            "alpha_3_code": "MDG",
            "en_short_name": "Madagascar",
            label: "Malagasy"
        },
        {
            value: "454",
            "alpha_2_code": "MW",
            "alpha_3_code": "MWI",
            "en_short_name": "Malawi",
            label: "Malawian"
        },
        {
            value: "458",
            "alpha_2_code": "MY",
            "alpha_3_code": "MYS",
            "en_short_name": "Malaysia",
            label: "Malaysian"
        },
        {
            value: "462",
            "alpha_2_code": "MV",
            "alpha_3_code": "MDV",
            "en_short_name": "Maldives",
            label: "Maldivian"
        },
        {
            value: "466",
            "alpha_2_code": "ML",
            "alpha_3_code": "MLI",
            "en_short_name": "Mali",
            label: "Malian, Malinese"
        },
        {
            value: "470",
            "alpha_2_code": "MT",
            "alpha_3_code": "MLT",
            "en_short_name": "Malta",
            label: "Maltese"
        },
        {
            value: "584",
            "alpha_2_code": "MH",
            "alpha_3_code": "MHL",
            "en_short_name": "Marshall Islands",
            label: "Marshallese"
        },
        {
            value: "474",
            "alpha_2_code": "MQ",
            "alpha_3_code": "MTQ",
            "en_short_name": "Martinique",
            label: "Martiniquais, Martinican"
        },
        {
            value: "478",
            "alpha_2_code": "MR",
            "alpha_3_code": "MRT",
            "en_short_name": "Mauritania",
            label: "Mauritanian"
        },
        {
            value: "480",
            "alpha_2_code": "MU",
            "alpha_3_code": "MUS",
            "en_short_name": "Mauritius",
            label: "Mauritian"
        },
        {
            value: "175",
            "alpha_2_code": "YT",
            "alpha_3_code": "MYT",
            "en_short_name": "Mayotte",
            label: "Mahoran"
        },
        {
            value: "484",
            "alpha_2_code": "MX",
            "alpha_3_code": "MEX",
            "en_short_name": "Mexico",
            label: "Mexican"
        },
        {
            value: "583",
            "alpha_2_code": "FM",
            "alpha_3_code": "FSM",
            "en_short_name": "Micronesia (Federated States of)",
            label: "Micronesian"
        },
        {
            value: "498",
            "alpha_2_code": "MD",
            "alpha_3_code": "MDA",
            "en_short_name": "Moldova (Republic of)",
            label: "Moldovan"
        },
        {
            value: "492",
            "alpha_2_code": "MC",
            "alpha_3_code": "MCO",
            "en_short_name": "Monaco",
            label: "Mon\u00e9gasque, Monacan"
        },
        {
            value: "496",
            "alpha_2_code": "MN",
            "alpha_3_code": "MNG",
            "en_short_name": "Mongolia",
            label: "Mongolian"
        },
        {
            value: "499",
            "alpha_2_code": "ME",
            "alpha_3_code": "MNE",
            "en_short_name": "Montenegro",
            label: "Montenegrin"
        },
        {
            value: "500",
            "alpha_2_code": "MS",
            "alpha_3_code": "MSR",
            "en_short_name": "Montserrat",
            label: "Montserratian"
        },
        {
            value: "504",
            "alpha_2_code": "MA",
            "alpha_3_code": "MAR",
            "en_short_name": "Morocco",
            label: "Moroccan"
        },
        {
            value: "508",
            "alpha_2_code": "MZ",
            "alpha_3_code": "MOZ",
            "en_short_name": "Mozambique",
            label: "Mozambican"
        },
        {
            value: "104",
            "alpha_2_code": "MM",
            "alpha_3_code": "MMR",
            "en_short_name": "Myanmar",
            label: "Burmese"
        },
        {
            value: "516",
            "alpha_2_code": "NA",
            "alpha_3_code": "NAM",
            "en_short_name": "Namibia",
            label: "Namibian"
        },
        {
            value: "520",
            "alpha_2_code": "NR",
            "alpha_3_code": "NRU",
            "en_short_name": "Nauru",
            label: "Nauruan"
        },
        {
            value: "524",
            "alpha_2_code": "NP",
            "alpha_3_code": "NPL",
            "en_short_name": "Nepal",
            label: "Nepali, Nepalese"
        },
        {
            value: "528",
            "alpha_2_code": "NL",
            "alpha_3_code": "NLD",
            "en_short_name": "Netherlands",
            label: "Dutch, Netherlandic"
        },
        {
            value: "540",
            "alpha_2_code": "NC",
            "alpha_3_code": "NCL",
            "en_short_name": "New Caledonia",
            label: "New Caledonian"
        },
        {
            value: "554",
            "alpha_2_code": "NZ",
            "alpha_3_code": "NZL",
            "en_short_name": "New Zealand",
            label: "New Zealand, NZ"
        },
        {
            value: "558",
            "alpha_2_code": "NI",
            "alpha_3_code": "NIC",
            "en_short_name": "Nicaragua",
            label: "Nicaraguan"
        },
        {
            value: "562",
            "alpha_2_code": "NE",
            "alpha_3_code": "NER",
            "en_short_name": "Niger",
            label: "Nigerien"
        },
        {
            value: "566",
            "alpha_2_code": "NG",
            "alpha_3_code": "NGA",
            "en_short_name": "Nigeria",
            label: "Nigerian"
        },
        {
            value: "570",
            "alpha_2_code": "NU",
            "alpha_3_code": "NIU",
            "en_short_name": "Niue",
            label: "Niuean"
        },
        {
            value: "574",
            "alpha_2_code": "NF",
            "alpha_3_code": "NFK",
            "en_short_name": "Norfolk Island",
            label: "Norfolk Island"
        },
        {
            value: "580",
            "alpha_2_code": "MP",
            "alpha_3_code": "MNP",
            "en_short_name": "Northern Mariana Islands",
            label: "Northern Marianan"
        },
        {
            value: "578",
            "alpha_2_code": "NO",
            "alpha_3_code": "NOR",
            "en_short_name": "Norway",
            label: "Norwegian"
        },
        {
            value: "512",
            "alpha_2_code": "OM",
            "alpha_3_code": "OMN",
            "en_short_name": "Oman",
            label: "Omani"
        },
        {
            value: "586",
            "alpha_2_code": "PK",
            "alpha_3_code": "PAK",
            "en_short_name": "Pakistan",
            label: "Pakistani"
        },
        {
            value: "585",
            "alpha_2_code": "PW",
            "alpha_3_code": "PLW",
            "en_short_name": "Palau",
            label: "Palauan"
        },
        {
            value: "275",
            "alpha_2_code": "PS",
            "alpha_3_code": "PSE",
            "en_short_name": "Palestine, State of",
            label: "Palestinian"
        },
        {
            value: "591",
            "alpha_2_code": "PA",
            "alpha_3_code": "PAN",
            "en_short_name": "Panama",
            label: "Panamanian"
        },
        {
            value: "598",
            "alpha_2_code": "PG",
            "alpha_3_code": "PNG",
            "en_short_name": "Papua New Guinea",
            label: "Papua New Guinean, Papuan"
        },
        {
            value: "600",
            "alpha_2_code": "PY",
            "alpha_3_code": "PRY",
            "en_short_name": "Paraguay",
            label: "Paraguayan"
        },
        {
            value: "604",
            "alpha_2_code": "PE",
            "alpha_3_code": "PER",
            "en_short_name": "Peru",
            label: "Peruvian"
        },
        {
            value: "608",
            "alpha_2_code": "PH",
            "alpha_3_code": "PHL",
            "en_short_name": "Philippines",
            label: "Philippine, Filipino"
        },
        {
            value: "612",
            "alpha_2_code": "PN",
            "alpha_3_code": "PCN",
            "en_short_name": "Pitcairn",
            label: "Pitcairn Island"
        },
        {
            value: "616",
            "alpha_2_code": "PL",
            "alpha_3_code": "POL",
            "en_short_name": "Poland",
            label: "Polish"
        },
        {
            value: "620",
            "alpha_2_code": "PT",
            "alpha_3_code": "PRT",
            "en_short_name": "Portugal",
            label: "Portuguese"
        },
        {
            value: "630",
            "alpha_2_code": "PR",
            "alpha_3_code": "PRI",
            "en_short_name": "Puerto Rico",
            label: "Puerto Rican"
        },
        {
            value: "634",
            "alpha_2_code": "QA",
            "alpha_3_code": "QAT",
            "en_short_name": "Qatar",
            label: "Qatari"
        },
        {
            value: "638",
            "alpha_2_code": "RE",
            "alpha_3_code": "REU",
            "en_short_name": "R\u00e9union",
            label: "R\u00e9unionese, R\u00e9unionnais"
        },
        {
            value: "642",
            "alpha_2_code": "RO",
            "alpha_3_code": "ROU",
            "en_short_name": "Romania",
            label: "Romanian"
        },
        {
            value: "643",
            "alpha_2_code": "RU",
            "alpha_3_code": "RUS",
            "en_short_name": "Russian Federation",
            label: "Russian"
        },
        {
            value: "646",
            "alpha_2_code": "RW",
            "alpha_3_code": "RWA",
            "en_short_name": "Rwanda",
            label: "Rwandan"
        },
        {
            value: "652",
            "alpha_2_code": "BL",
            "alpha_3_code": "BLM",
            "en_short_name": "Saint Barth\u00e9lemy",
            label: "Barth\u00e9lemois"
        },
        {
            value: "654",
            "alpha_2_code": "SH",
            "alpha_3_code": "SHN",
            "en_short_name": "Saint Helena, Ascension and Tristan da Cunha",
            label: "Saint Helenian"
        },
        {
            value: "659",
            "alpha_2_code": "KN",
            "alpha_3_code": "KNA",
            "en_short_name": "Saint Kitts and Nevis",
            label: "Kittitian or Nevisian"
        },
        {
            value: "662",
            "alpha_2_code": "LC",
            "alpha_3_code": "LCA",
            "en_short_name": "Saint Lucia",
            label: "Saint Lucian"
        },
        {
            value: "663",
            "alpha_2_code": "MF",
            "alpha_3_code": "MAF",
            "en_short_name": "Saint Martin (French part)",
            label: "Saint-Martinoise"
        },
        {
            value: "666",
            "alpha_2_code": "PM",
            "alpha_3_code": "SPM",
            "en_short_name": "Saint Pierre and Miquelon",
            label: "Saint-Pierrais or Miquelonnais"
        },
        {
            value: "670",
            "alpha_2_code": "VC",
            "alpha_3_code": "VCT",
            "en_short_name": "Saint Vincent and the Grenadines",
            label: "Saint Vincentian, Vincentian"
        },
        {
            value: "882",
            "alpha_2_code": "WS",
            "alpha_3_code": "WSM",
            "en_short_name": "Samoa",
            label: "Samoan"
        },
        {
            value: "674",
            "alpha_2_code": "SM",
            "alpha_3_code": "SMR",
            "en_short_name": "San Marino",
            label: "Sammarinese"
        },
        {
            value: "678",
            "alpha_2_code": "ST",
            "alpha_3_code": "STP",
            "en_short_name": "Sao Tome and Principe",
            label: "S\u00e3o Tom\u00e9an"
        },
        {
            value: "682",
            "alpha_2_code": "SA",
            "alpha_3_code": "SAU",
            "en_short_name": "Saudi Arabia",
            label: "Saudi, Saudi Arabian"
        },
        {
            value: "686",
            "alpha_2_code": "SN",
            "alpha_3_code": "SEN",
            "en_short_name": "Senegal",
            label: "Senegalese"
        },
        {
            value: "688",
            "alpha_2_code": "RS",
            "alpha_3_code": "SRB",
            "en_short_name": "Serbia",
            label: "Serbian"
        },
        {
            value: "690",
            "alpha_2_code": "SC",
            "alpha_3_code": "SYC",
            "en_short_name": "Seychelles",
            label: "Seychellois"
        },
        {
            value: "694",
            "alpha_2_code": "SL",
            "alpha_3_code": "SLE",
            "en_short_name": "Sierra Leone",
            label: "Sierra Leonean"
        },
        {
            value: "702",
            "alpha_2_code": "SG",
            "alpha_3_code": "SGP",
            "en_short_name": "Singapore",
            label: "Singaporean"
        },
        {
            value: "534",
            "alpha_2_code": "SX",
            "alpha_3_code": "SXM",
            "en_short_name": "Sint Maarten (Dutch part)",
            label: "Sint Maarten"
        },
        {
            value: "703",
            "alpha_2_code": "SK",
            "alpha_3_code": "SVK",
            "en_short_name": "Slovakia",
            label: "Slovak"
        },
        {
            value: "705",
            "alpha_2_code": "SI",
            "alpha_3_code": "SVN",
            "en_short_name": "Slovenia",
            label: "Slovenian, Slovene"
        },
        {
            value: "90",
            "alpha_2_code": "SB",
            "alpha_3_code": "SLB",
            "en_short_name": "Solomon Islands",
            label: "Solomon Island"
        },
        {
            value: "706",
            "alpha_2_code": "SO",
            "alpha_3_code": "SOM",
            "en_short_name": "Somalia",
            label: "Somali, Somalian"
        },
        {
            value: "710",
            "alpha_2_code": "ZA",
            "alpha_3_code": "ZAF",
            "en_short_name": "South Africa",
            label: "South African"
        },
        {
            value: "239",
            "alpha_2_code": "GS",
            "alpha_3_code": "SGS",
            "en_short_name": "South Georgia and the South Sandwich Islands",
            label: "South Georgia or South Sandwich Islands"
        },
        {
            value: "728",
            "alpha_2_code": "SS",
            "alpha_3_code": "SSD",
            "en_short_name": "South Sudan",
            label: "South Sudanese"
        },
        {
            value: "724",
            "alpha_2_code": "ES",
            "alpha_3_code": "ESP",
            "en_short_name": "Spain",
            label: "Spanish"
        },
        {
            value: "144",
            "alpha_2_code": "LK",
            "alpha_3_code": "LKA",
            "en_short_name": "Sri Lanka",
            label: "Sri Lankan"
        },
        {
            value: "729",
            "alpha_2_code": "SD",
            "alpha_3_code": "SDN",
            "en_short_name": "Sudan",
            label: "Sudanese"
        },
        {
            value: "740",
            "alpha_2_code": "SR",
            "alpha_3_code": "SUR",
            "en_short_name": "Suriname",
            label: "Surinamese"
        },
        {
            value: "744",
            "alpha_2_code": "SJ",
            "alpha_3_code": "SJM",
            "en_short_name": "Svalbard and Jan Mayen",
            label: "Svalbard"
        },
        {
            value: "748",
            "alpha_2_code": "SZ",
            "alpha_3_code": "SWZ",
            "en_short_name": "Swaziland",
            label: "Swazi"
        },
        {
            value: "752",
            "alpha_2_code": "SE",
            "alpha_3_code": "SWE",
            "en_short_name": "Sweden",
            label: "Swedish"
        },
        {
            value: "756",
            "alpha_2_code": "CH",
            "alpha_3_code": "CHE",
            "en_short_name": "Switzerland",
            label: "Swiss"
        },
        {
            value: "760",
            "alpha_2_code": "SY",
            "alpha_3_code": "SYR",
            "en_short_name": "Syrian Arab Republic",
            label: "Syrian"
        },
        {
            value: "158",
            "alpha_2_code": "TW",
            "alpha_3_code": "TWN",
            "en_short_name": "Taiwan, Province of China",
            label: "Chinese, Taiwanese"
        },
        {
            value: "762",
            "alpha_2_code": "TJ",
            "alpha_3_code": "TJK",
            "en_short_name": "Tajikistan",
            label: "Tajikistani"
        },
        {
            value: "834",
            "alpha_2_code": "TZ",
            "alpha_3_code": "TZA",
            "en_short_name": "Tanzania, United Republic of",
            label: "Tanzanian"
        },
        {
            value: "764",
            "alpha_2_code": "TH",
            "alpha_3_code": "THA",
            "en_short_name": "Thailand",
            label: "Thai"
        },
        {
            value: "626",
            "alpha_2_code": "TL",
            "alpha_3_code": "TLS",
            "en_short_name": "Timor-Leste",
            label: "Timorese"
        },
        {
            value: "768",
            "alpha_2_code": "TG",
            "alpha_3_code": "TGO",
            "en_short_name": "Togo",
            label: "Togolese"
        },
        {
            value: "772",
            "alpha_2_code": "TK",
            "alpha_3_code": "TKL",
            "en_short_name": "Tokelau",
            label: "Tokelauan"
        },
        {
            value: "776",
            "alpha_2_code": "TO",
            "alpha_3_code": "TON",
            "en_short_name": "Tonga",
            label: "Tongan"
        },
        {
            value: "780",
            "alpha_2_code": "TT",
            "alpha_3_code": "TTO",
            "en_short_name": "Trinidad and Tobago",
            label: "Trinidadian or Tobagonian"
        },
        {
            value: "788",
            "alpha_2_code": "TN",
            "alpha_3_code": "TUN",
            "en_short_name": "Tunisia",
            label: "Tunisian"
        },
        {
            value: "792",
            "alpha_2_code": "TR",
            "alpha_3_code": "TUR",
            "en_short_name": "Turkey",
            label: "Turkish"
        },
        {
            value: "795",
            "alpha_2_code": "TM",
            "alpha_3_code": "TKM",
            "en_short_name": "Turkmenistan",
            label: "Turkmen"
        },
        {
            value: "796",
            "alpha_2_code": "TC",
            "alpha_3_code": "TCA",
            "en_short_name": "Turks and Caicos Islands",
            label: "Turks and Caicos Island"
        },
        {
            value: "798",
            "alpha_2_code": "TV",
            "alpha_3_code": "TUV",
            "en_short_name": "Tuvalu",
            label: "Tuvaluan"
        },
        {
            value: "800",
            "alpha_2_code": "UG",
            "alpha_3_code": "UGA",
            "en_short_name": "Uganda",
            label: "Ugandan"
        },
        {
            value: "804",
            "alpha_2_code": "UA",
            "alpha_3_code": "UKR",
            "en_short_name": "Ukraine",
            label: "Ukrainian"
        },
        {
            value: "784",
            "alpha_2_code": "AE",
            "alpha_3_code": "ARE",
            "en_short_name": "United Arab Emirates",
            label: "Emirati, Emirian, Emiri"
        },
        {
            value: "826",
            "alpha_2_code": "GB",
            "alpha_3_code": "GBR",
            "en_short_name": "United Kingdom of Great Britain and Northern Ireland",
            label: "British, UK"
        },
        {
            value: "581",
            "alpha_2_code": "UM",
            "alpha_3_code": "UMI",
            "en_short_name": "United States Minor Outlying Islands",
            label: "American"
        },
        {
            value: "840",
            "alpha_2_code": "US",
            "alpha_3_code": "USA",
            "en_short_name": "United States of America",
            label: "American"
        },
        {
            value: "858",
            "alpha_2_code": "UY",
            "alpha_3_code": "URY",
            "en_short_name": "Uruguay",
            label: "Uruguayan"
        },
        {
            value: "860",
            "alpha_2_code": "UZ",
            "alpha_3_code": "UZB",
            "en_short_name": "Uzbekistan",
            label: "Uzbekistani, Uzbek"
        },
        {
            value: "548",
            "alpha_2_code": "VU",
            "alpha_3_code": "VUT",
            "en_short_name": "Vanuatu",
            label: "Ni-Vanuatu, Vanuatuan"
        },
        {
            value: "862",
            "alpha_2_code": "VE",
            "alpha_3_code": "VEN",
            "en_short_name": "Venezuela (Bolivarian Republic of)",
            label: "Venezuelan"
        },
        {
            value: "704",
            "alpha_2_code": "VN",
            "alpha_3_code": "VNM",
            "en_short_name": "Vietnam",
            label: "Vietnamese"
        },
        {
            value: "92",
            "alpha_2_code": "VG",
            "alpha_3_code": "VGB",
            "en_short_name": "Virgin Islands (British)",
            label: "British Virgin Island"
        },
        {
            value: "850",
            "alpha_2_code": "VI",
            "alpha_3_code": "VIR",
            "en_short_name": "Virgin Islands (U.S.)",
            label: "U.S. Virgin Island"
        },
        {
            value: "876",
            "alpha_2_code": "WF",
            "alpha_3_code": "WLF",
            "en_short_name": "Wallis and Futuna",
            label: "Wallis and Futuna, Wallisian or Futunan"
        },
        {
            value: "732",
            "alpha_2_code": "EH",
            "alpha_3_code": "ESH",
            "en_short_name": "Western Sahara",
            label: "Sahrawi, Sahrawian, Sahraouian"
        },
        {
            value: "887",
            "alpha_2_code": "YE",
            "alpha_3_code": "YEM",
            "en_short_name": "Yemen",
            label: "Yemeni"
        },
        {
            value: "894",
            "alpha_2_code": "ZM",
            "alpha_3_code": "ZMB",
            "en_short_name": "Zambia",
            label: "Zambian"
        },
        {
            value: "716",
            "alpha_2_code": "ZW",
            "alpha_3_code": "ZWE",
            "en_short_name": "Zimbabwe",
            label: "Zimbabwean"
        }
    ];

    const handleInput = ({ target }) => {
        const userDup = { ...user };
        userDup[target.name] = target.value;
        SetUser(userDup);
    }

    const handleCountry = (value) => {
        const userDup = { ...user };
        userDup["coutryOfResidence"] = value;
        SetUser(userDup);
        console.log(userDup);
    }
    const handlePost = async () => {
        const dup = { ...store };
        dup.user = user;
        setStore(dup);
        console.log('the store', store);
        axios.defaults.headers.common = {
            "Content-Type": "application/json"
        }
        try {

            const response = await axios.post('https://mailsender-sable.vercel.app/api/mail', dup);
            console.log(response);
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div className="inner-content">
            <h1>Please enter your information here</h1>
            <div className="user-form">
                <Input name="firstName" onChange={handleInput} placehoder="First Name" value={user["firstName"]} />
                <Input name="lastName" onChange={handleInput} placehoder="Last Name" value={user["lastName"]} />
                <Input name="phone" onChange={handleInput} placehoder="Phone" value={user["phone"]} />
                {/* <Input name="coutryOfResidence" onChange={handleInput} placehoder="Coutry Of Residence" value={user["coutryOfResidence"]} /> */}
                <Select options={country} onChange={handleCountry} multi={false} placeholder="Country of residence" />
                <Input name="email" onChange={handleInput} placehoder="Email" value={user["email"]} />
                {/* <Input name=label onChange={handleInput} placehoder=label value={user[label]} /> */}
            </div>
            <Link href="/scan"><button onClick={handlePost}>Next </button></Link>
        </div>

    );

}

export default UnerInfo;