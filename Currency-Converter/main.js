// const fromAmountElement = document.querySelector('.amount')
// const convertedAmountElement = document.querySelector('.convertedAmount')
// const fromCurrencyElement = document.querySelector('.fromCurrency')
// const toCurrencyElement = document.querySelector('.toCurrency')
// const resultElement = document.querySelector('.result');


// const countries = [
//     { country: "Afghanistan", name: "Afghan Afghani", code: "AFN" },
//     { country: "Albania", name: "Albanian Lek", code: "ALL" },
//     { country: "Algeria", name: "Algerian Dinar", code: "DZD" },
//     { country: "Andorra", name: "Euro", code: "EUR" },
//     { country: "Angola", name: "Angolan Kwanza", code: "AOA" },
//     { country: "Argentina", name: "Argentine Peso", code: "ARS" },
//     { country: "Armenia", name: "Armenian Dram", code: "AMD" },
//     { country: "Australia", name: "Australian Dollar", code: "AUD" },
//     { country: "Austria", name: "Euro", code: "EUR" },
//     { country: "Azerbaijan", name: "Azerbaijani Manat", code: "AZN" },
//     { country: "Bahamas", name: "Bahamian Dollar", code: "BSD" },
//     { country: "Bahrain", name: "Bahraini Dinar", code: "BHD" },
//     { country: "Bangladesh", name: "Bangladeshi Taka", code: "BDT" },
//     { country: "Barbados", name: "Barbadian Dollar", code: "BBD" },
//     { country: "Belarus", name: "Belarusian Ruble", code: "BYN" },
//     { country: "Belgium", name: "Euro", code: "EUR" },
//     { country: "Belize", name: "Belize Dollar", code: "BZD" },
//     { country: "Benin", name: "West African CFA Franc", code: "XOF" },
//     { country: "Bhutan", name: "Bhutanese Ngultrum", code: "BTN" },
//     { country: "Bolivia", name: "Bolivian Boliviano", code: "BOB" },
//     { country: "Bosnia and Herzegovina", name: "Bosnia and Herzegovina Convertible Mark", code: "BAM" },
//     { country: "Botswana", name: "Botswana Pula", code: "BWP" },
//     { country: "Brazil", name: "Brazilian Real", code: "BRL" },
//     { country: "Brunei", name: "Brunei Dollar", code: "BND" },
//     { country: "Bulgaria", name: "Bulgarian Lev", code: "BGN" },
//     { country: "Burkina Faso", name: "West African CFA Franc", code: "XOF" },
//     { country: "Burundi", name: "Burundian Franc", code: "BIF" },
//     { country: "Cambodia", name: "Cambodian Riel", code: "KHR" },
//     { country: "Cameroon", name: "Central African CFA Franc", code: "XAF" },
//     { country: "Canada", name: "Canadian Dollar", code: "CAD" },
//     { country: "Cape Verde", name: "Cape Verdean Escudo", code: "CVE" },
//     { country: "Central African Republic", name: "Central African CFA Franc", code: "XAF" },
//     { country: "Chad", name: "Central African CFA Franc", code: "XAF" },
//     { country: "Chile", name: "Chilean Peso", code: "CLP" },
//     { country: "China", name: "Chinese Yuan", code: "CNY" },
//     { country: "Colombia", name: "Colombian Peso", code: "COP" },
//     { country: "Comoros", name: "Comorian Franc", code: "KMF" },
//     { country: "Congo", name: "Central African CFA Franc", code: "XAF" },
//     { country: "Congo (Democratic Republic of the)", name: "Congolese Franc", code: "CDF" },
//     { country: "Costa Rica", name: "Costa Rican Colón", code: "CRC" },
//     { country: "Croatia", name: "Croatian Kuna", code: "HRK" },
//     { country: "Cuba", name: "Cuban Peso", code: "CUP" },
//     { country: "Cyprus", name: "Euro", code: "EUR" },
//     { country: "Czechia", name: "Czech Koruna", code: "CZK" },
//     { country: "Denmark", name: "Danish Krone", code: "DKK" },
//     { country: "Djibouti", name: "Djiboutian Franc", code: "DJF" },
//     { country: "Dominica", name: "East Caribbean Dollar", code: "XCD" },
//     { country: "Dominican Republic", name: "Dominican Peso", code: "DOP" },
//     { country: "Ecuador", name: "United States Dollar", code: "USD" },
//     { country: "Egypt", name: "Egyptian Pound", code: "EGP" },
//     { country: "El Salvador", name: "United States Dollar", code: "USD" },
//     { country: "Equatorial Guinea", name: "Central African CFA Franc", code: "XAF" },
//     { country: "Eritrea", name: "Eritrean Nakfa", code: "ERN" },
//     { country: "Estonia", name: "Euro", code: "EUR" },
//     { country: "Eswatini", name: "Swazi Lilangeni", code: "SZL" },
//     { country: "Ethiopia", name: "Ethiopian Birr", code: "ETB" },
//     { country: "Fiji", name: "Fijian Dollar", code: "FJD" },
//     { country: "Finland", name: "Euro", code: "EUR" },
//     { country: "France", name: "Euro", code: "EUR" },
//     { country: "Gabon", name: "Central African CFA Franc", code: "XAF" },
//     { country: "Gambia", name: "Gambian Dalasi", code: "GMD" },
//     { country: "Georgia", name: "Georgian Lari", code: "GEL" },
//     { country: "Germany", name: "Euro", code: "EUR" },
//     { country: "Ghana", name: "Ghanaian Cedi", code: "GHS" },
//     { country: "Greece", name: "Euro", code: "EUR" },
//     { country: "Greenland", name: "Danish Krone", code: "DKK" },
//     { country: "Grenada", name: "East Caribbean Dollar", code: "XCD" },
//     { country: "Guatemala", name: "Guatemalan Quetzal", code: "GTQ" },
//     { country: "Guinea", name: "Guinean Franc", code: "GNF" },
//     { country: "Guinea-Bissau", name: "West African CFA Franc", code: "XOF" },
//     { country: "Guyana", name: "Guyanese Dollar", code: "GYD" },
//     { country: "Haiti", name: "Haitian Gourde", code: "HTG" },
//     { country: "Honduras", name: "Honduran Lempira", code: "HNL" },
//     { country: "Hong Kong", name: "Hong Kong Dollar", code: "HKD" },
//     { country: "Hungary", name: "Hungarian Forint", code: "HUF" },
//     { country: "Iceland", name: "Icelandic Króna", code: "ISK" },
//     { country: "India", name: "Indian Rupee", code: "INR" },
//     { country: "Indonesia", name: "Indonesian Rupiah", code: "IDR" },
//     { country: "Iran", name: "Iranian Rial", code: "IRR" },
//     { country: "Iraq", name: "Iraqi Dinar", code: "IQD" },
//     { country: "Ireland", name: "Euro", code: "EUR" },
//     { country: "Israel", name: "Israeli New Shekel", code: "ILS" },
//     { country: "Italy", name: "Euro", code: "EUR" },
//     { country: "Jamaica", name: "Jamaican Dollar", code: "JMD" },
//     { country: "Japan", name: "Japanese Yen", code: "JPY" },
//     { country: "Jordan", name: "Jordanian Dinar", code: "JOD" },
//     { country: "Kazakhstan", name: "Kazakhstani Tenge", code: "KZT" },
//     { country: "Kenya", name: "Kenyan Shilling", code: "KES" },
//     { country: "Kiribati", name: "Australian Dollar", code: "AUD" },
//     { country: "Kuwait", name: "Kuwaiti Dinar", code: "KWD" },
//     { country: "Kyrgyzstan", name: "Kyrgyzstani Som", code: "KGS" },
//     { country: "Laos", name: "Lao Kip", code: "LAK" },
//     { country: "Latvia", name: "Euro", code: "EUR" },
//     { country: "Lebanon", name: "Lebanese Pound", code: "LBP" },
//     { country: "Lesotho", name: "Lesotho Loti", code: "LSL" },
//     { country: "Liberia", name: "Liberian Dollar", code: "LRD" },
//     { country: "Libya", name: "Libyan Dinar", code: "LYD" },
//     { country: "Liechtenstein", name: "Swiss Franc", code: "CHF" },
//     { country: "Lithuania", name: "Euro", code: "EUR" },
//     { country: "Luxembourg", name: "Euro", code: "EUR" },
//     { country: "Madagascar", name: "Malagasy Ariary", code: "MGA" },
//     { country: "Malawi", name: "Malawian Kwacha", code: "MWK" },
//     { country: "Malaysia", name: "Malaysian Ringgit", code: "MYR" },
//     { country: "Maldives", name: "Maldivian Rufiyaa", code: "MVR" },
//     { country: "Mali", name: "West African CFA Franc", code: "XOF" },
//     { country: "Malta", name: "Euro", code: "EUR" },
//     { country: "Marshall Islands", name: "United States Dollar", code: "USD" },
//     { country: "Mauritania", name: "Mauritanian Ouguiya", code: "MRU" },
//     { country: "Mauritius", name: "Mauritian Rupee", code: "MUR" },
//     { country: "Mexico", name: "Mexican Peso", code: "MXN" },
//     { country: "Micronesia (Federated States of)", name: "United States Dollar", code: "USD" },
//     { country: "Moldova", name: "Moldovan Leu", code: "MDL" },
//     { country: "Monaco", name: "Euro", code: "EUR" },
//     { country: "Mongolia", name: "Mongolian Tögrög", code: "MNT" },
//     { country: "Montenegro", name: "Euro", code: "EUR" },
//     { country: "Montserrat", name: "East Caribbean Dollar", code: "XCD" },
//     { country: "Morocco", name: "Moroccan Dirham", code: "MAD" },
//     { country: "Mozambique", name: "Mozambican Metical", code: "MZN" },
//     { country: "Myanmar", name: "Burmese Kyat", code: "MMK" },
//     { country: "Namibia", name: "Namibian Dollar", code: "NAD" },
//     { country: "Nauru", name: "Australian Dollar", code: "AUD" },
//     { country: "Nepal", name: "Nepalese Rupee", code: "NPR" },
//     { country: "Netherlands", name: "Euro", code: "EUR" },
//     { country: "New Zealand", name: "New Zealand Dollar", code: "NZD" },
//     { country: "Nicaragua", name: "Nicaraguan Córdoba", code: "NIO" },
//     { country: "Niger", name: "West African CFA Franc", code: "XOF" },
//     { country: "Nigeria", name: "Nigerian Naira", code: "NGN" },
//     { country: "Niue", name: "New Zealand Dollar", code: "NZD" },
//     { country: "North Macedonia", name: "Macedonian Denar", code: "MKD" },
//     { country: "Norway", name: "Norwegian Krone", code: "NOK" },
//     { country: "Oman", name: "Omani Rial", code: "OMR" },
//     { country: "Pakistan", name: "Pakistani Rupee", code: "PKR" },
//     { country: "Palau", name: "United States Dollar", code: "USD" },
//     { country: "Palestine", name: "Israeli New Shekel", code: "ILS" },
//     { country: "Panama", name: "Panamanian Balboa", code: "PAB" },
//     { country: "Papua New Guinea", name: "Papua New Guinean Kina", code: "PGK" },
//     { country: "Paraguay", name: "Paraguayan Guaraní", code: "PYG" },
//     { country: "Peru", name: "Peruvian Sol", code: "PEN" },
//     { country: "Philippines", name: "Philippine Peso", code: "PHP" },
//     { country: "Poland", name: "Polish Złoty", code: "PLN" },
//     { country: "Portugal", name: "Euro", code: "EUR" },
//     { country: "Qatar", name: "Qatari Riyal", code: "QAR" },
//     { country: "Romania", name: "Romanian Leu", code: "RON" },
//     { country: "Russia", name: "Russian Ruble", code: "RUB" },
//     { country: "Rwanda", name: "Rwandan Franc", code: "RWF" },
//     { country: "Saint Kitts and Nevis", name: "East Caribbean Dollar", code: "XCD" },
//     { country: "Saint Lucia", name: "East Caribbean Dollar", code: "XCD" },
//     { country: "Saint Vincent and the Grenadines", name: "East Caribbean Dollar", code: "XCD" },
//     { country: "Samoa", name: "Samoan Tālā", code: "WST" },
//     { country: "San Marino", name: "Euro", code: "EUR" },
//     { country: "Sao Tome and Principe", name: "São Tomé and Príncipe Dobra", code: "STN" },
//     { country: "Saudi Arabia", name: "Saudi Riyal", code: "SAR" },
//     { country: "Senegal", name: "West African CFA Franc", code: "XOF" },
//     { country: "Serbia", name: "Serbian Dinar", code: "RSD" },
//     { country: "Seychelles", name: "Seychellois Rupee", code: "SCR" },
//     { country: "Sierra Leone", name: "Sierra Leonean Leone", code: "SLL" },
//     { country: "Singapore", name: "Singapore Dollar", code: "SGD" },
//     { country: "Sint Maarten", name: "Netherlands Antillean Guilder", code: "ANG" },
//     { country: "Slovakia", name: "Euro", code: "EUR" },
//     { country: "Slovenia", name: "Euro", code: "EUR" },
//     { country: "Solomon Islands", name: "Solomon Islands Dollar", code: "SBD" },
//     { country: "Somalia", name: "Somali Shilling", code: "SOS" },
//     { country: "South Africa", name: "South African Rand", code: "ZAR" },
//     { country: "South Korea", name: "South Korean Won", code: "KRW" },
//     { country: "South Sudan", name: "South Sudanese Pound", code: "SSP" },
//     { country: "Spain", name: "Euro", code: "EUR" },
//     { country: "Sri Lanka", name: "Sri Lankan Rupee", code: "LKR" },
//     { country: "Sudan", name: "Sudanese Pound", code: "SDG" },
//     { country: "Suriname", name: "Surinamese Dollar", code: "SRD" },
//     { country: "Sweden", name: "Swedish Krona", code: "SEK" },
//     { country: "Switzerland", name: "Swiss Franc", code: "CHF" },
//     { country: "Syria", name: "Syrian Pound", code: "SYP" },
//     { country: "Taiwan", name: "New Taiwan Dollar", code: "TWD" },
//     { country: "Tajikistan", name: "Tajikistani Somoni", code: "TJS" },
//     { country: "Tanzania", name: "Tanzanian Shilling", code: "TZS" },
//     { country: "Thailand", name: "Thai Baht", code: "THB" },
//     { country: "Togo", name: "West African CFA Franc", code: "XOF" },
//     { country: "Tonga", name: "Tongan Paʻanga", code: "TOP" },
//     { country: "Trinidad and Tobago", name: "Trinidad and Tobago Dollar", code: "TTD" },
//     { country: "Tunisia", name: "Tunisian Dinar", code: "TND" },
//     { country: "Turkey", name: "Turkish Lira", code: "TRY" },
//     { country: "Turkmenistan", name: "Turkmenistani Manat", code: "TMT" },
//     { country: "Tuvalu", name: "Australian Dollar", code: "AUD" },
//     { country: "Uganda", name: "Ugandan Shilling", code: "UGX" },
//     { country: "Ukraine", name: "Ukrainian Hryvnia", code: "UAH" },
//     { country: "United Arab Emirates", name: "United Arab Emirates Dirham", code: "AED" },
//     { country: "United Kingdom", name: "British Pound", code: "GBP" },
//     { country: "United States", name: "United States Dollar", code: "USD" },
//     { country: "Uruguay", name: "Uruguayan Peso", code: "UYU" },
//     { country: "Uzbekistan", name: "Uzbekistani Som", code: "UZS" },
//     { country: "Vanuatu", name: "Vanuatu Vatu", code: "VUV" },
//     { country: "Venezuela", name: "Venezuelan Bolívar", code: "VES" },
//     { country: "Vietnam", name: "Vietnamese Đồng", code: "VND" },
//     { country: "Yemen", name: "Yemeni Rial", code: "YER" },
//     { country: "Zambia", name: "Zambian Kwacha", code: "ZMW" },
//     { country: "Zimbabwe", name: "Zimbabwean Dollar", code: "ZWL" }

// ];

// // countries from array to select tag 
// countries.forEach(country => {
//     const option1 = document.createElement('option');
//     option1.textContent = `${country.code} ,${country.name}`;
//     fromCurrencyElement.appendChild(option1);

//     const option2 = document.createElement('option');
//     option2.textContent = `${country.code} ,${country.name}`;
//     toCurrencyElement.appendChild(option2);

//     fromCurrencyElement.value = "USD";
//     toCurrencyElement.value = "PKR";

// });
// // fetch data for exchange rate 
// const getExchangeRate = async () => {

//     const amount = parseFloat(fromAmountElement.value);
//     const fromCurrency = fromAmountElement.value;
//     const toCurrency = toCurrencyElement.value;


//     // fetch data 

//     const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
//     const data = await response.json();
//     console.log(data);

// }

// getExchangeRate();

const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');

const countries = [
    { country: "Afghanistan", name: "Afghan Afghani", code: "AFN" },
    { country: "Albania", name: "Albanian Lek", code: "ALL" },
    { country: "Algeria", name: "Algerian Dinar", code: "DZD" },
    { country: "Andorra", name: "Euro", code: "EUR" },
    { country: "Angola", name: "Angolan Kwanza", code: "AOA" },
    { country: "Argentina", name: "Argentine Peso", code: "ARS" },
    { country: "Armenia", name: "Armenian Dram", code: "AMD" },
    { country: "Australia", name: "Australian Dollar", code: "AUD" },
    { country: "Austria", name: "Euro", code: "EUR" },
    { country: "Azerbaijan", name: "Azerbaijani Manat", code: "AZN" },
    { country: "Bahamas", name: "Bahamian Dollar", code: "BSD" },
    { country: "Bahrain", name: "Bahraini Dinar", code: "BHD" },
    { country: "Bangladesh", name: "Bangladeshi Taka", code: "BDT" },
    { country: "Barbados", name: "Barbadian Dollar", code: "BBD" },
    { country: "Belarus", name: "Belarusian Ruble", code: "BYN" },
    { country: "Belgium", name: "Euro", code: "EUR" },
    { country: "Belize", name: "Belize Dollar", code: "BZD" },
    { country: "Benin", name: "West African CFA Franc", code: "XOF" },
    { country: "Bhutan", name: "Bhutanese Ngultrum", code: "BTN" },
    { country: "Bolivia", name: "Bolivian Boliviano", code: "BOB" },
    { country: "Bosnia and Herzegovina", name: "Bosnia and Herzegovina Convertible Mark", code: "BAM" },
    { country: "Botswana", name: "Botswana Pula", code: "BWP" },
    { country: "Brazil", name: "Brazilian Real", code: "BRL" },
    { country: "Brunei", name: "Brunei Dollar", code: "BND" },
    { country: "Bulgaria", name: "Bulgarian Lev", code: "BGN" },
    { country: "Burkina Faso", name: "West African CFA Franc", code: "XOF" },
    { country: "Burundi", name: "Burundian Franc", code: "BIF" },
    { country: "Cambodia", name: "Cambodian Riel", code: "KHR" },
    { country: "Cameroon", name: "Central African CFA Franc", code: "XAF" },
    { country: "Canada", name: "Canadian Dollar", code: "CAD" },
    { country: "Cape Verde", name: "Cape Verdean Escudo", code: "CVE" },
    { country: "Central African Republic", name: "Central African CFA Franc", code: "XAF" },
    { country: "Chad", name: "Central African CFA Franc", code: "XAF" },
    { country: "Chile", name: "Chilean Peso", code: "CLP" },
    { country: "China", name: "Chinese Yuan", code: "CNY" },
    { country: "Colombia", name: "Colombian Peso", code: "COP" },
    { country: "Comoros", name: "Comorian Franc", code: "KMF" },
    { country: "Congo", name: "Central African CFA Franc", code: "XAF" },
    { country: "Congo (Democratic Republic of the)", name: "Congolese Franc", code: "CDF" },
    { country: "Costa Rica", name: "Costa Rican Colón", code: "CRC" },
    { country: "Croatia", name: "Croatian Kuna", code: "HRK" },
    { country: "Cuba", name: "Cuban Peso", code: "CUP" },
    { country: "Cyprus", name: "Euro", code: "EUR" },
    { country: "Czechia", name: "Czech Koruna", code: "CZK" },
    { country: "Denmark", name: "Danish Krone", code: "DKK" },
    { country: "Djibouti", name: "Djiboutian Franc", code: "DJF" },
    { country: "Dominica", name: "East Caribbean Dollar", code: "XCD" },
    { country: "Dominican Republic", name: "Dominican Peso", code: "DOP" },
    { country: "Ecuador", name: "United States Dollar", code: "USD" },
    { country: "Egypt", name: "Egyptian Pound", code: "EGP" },
    { country: "El Salvador", name: "United States Dollar", code: "USD" },
    { country: "Equatorial Guinea", name: "Central African CFA Franc", code: "XAF" },
    { country: "Eritrea", name: "Eritrean Nakfa", code: "ERN" },
    { country: "Estonia", name: "Euro", code: "EUR" },
    { country: "Eswatini", name: "Swazi Lilangeni", code: "SZL" },
    { country: "Ethiopia", name: "Ethiopian Birr", code: "ETB" },
    { country: "Fiji", name: "Fijian Dollar", code: "FJD" },
    { country: "Finland", name: "Euro", code: "EUR" },
    { country: "France", name: "Euro", code: "EUR" },
    { country: "Gabon", name: "Central African CFA Franc", code: "XAF" },
    { country: "Gambia", name: "Gambian Dalasi", code: "GMD" },
    { country: "Georgia", name: "Georgian Lari", code: "GEL" },
    { country: "Germany", name: "Euro", code: "EUR" },
    { country: "Ghana", name: "Ghanaian Cedi", code: "GHS" },
    { country: "Greece", name: "Euro", code: "EUR" },
    { country: "Greenland", name: "Danish Krone", code: "DKK" },
    { country: "Grenada", name: "East Caribbean Dollar", code: "XCD" },
    { country: "Guatemala", name: "Guatemalan Quetzal", code: "GTQ" },
    { country: "Guinea", name: "Guinean Franc", code: "GNF" },
    { country: "Guinea-Bissau", name: "West African CFA Franc", code: "XOF" },
    { country: "Guyana", name: "Guyanese Dollar", code: "GYD" },
    { country: "Haiti", name: "Haitian Gourde", code: "HTG" },
    { country: "Honduras", name: "Honduran Lempira", code: "HNL" },
    { country: "Hong Kong", name: "Hong Kong Dollar", code: "HKD" },
    { country: "Hungary", name: "Hungarian Forint", code: "HUF" },
    { country: "Iceland", name: "Icelandic Króna", code: "ISK" },
    { country: "India", name: "Indian Rupee", code: "INR" },
    { country: "Indonesia", name: "Indonesian Rupiah", code: "IDR" },
    { country: "Iran", name: "Iranian Rial", code: "IRR" },
    { country: "Iraq", name: "Iraqi Dinar", code: "IQD" },
    { country: "Ireland", name: "Euro", code: "EUR" },
    { country: "Israel", name: "Israeli New Shekel", code: "ILS" },
    { country: "Italy", name: "Euro", code: "EUR" },
    { country: "Jamaica", name: "Jamaican Dollar", code: "JMD" },
    { country: "Japan", name: "Japanese Yen", code: "JPY" },
    { country: "Jordan", name: "Jordanian Dinar", code: "JOD" },
    { country: "Kazakhstan", name: "Kazakhstani Tenge", code: "KZT" },
    { country: "Kenya", name: "Kenyan Shilling", code: "KES" },
    { country: "Kiribati", name: "Australian Dollar", code: "AUD" },
    { country: "Kuwait", name: "Kuwaiti Dinar", code: "KWD" },
    { country: "Kyrgyzstan", name: "Kyrgyzstani Som", code: "KGS" },
    { country: "Laos", name: "Lao Kip", code: "LAK" },
    { country: "Latvia", name: "Euro", code: "EUR" },
    { country: "Lebanon", name: "Lebanese Pound", code: "LBP" },
    { country: "Lesotho", name: "Lesotho Loti", code: "LSL" },
    { country: "Liberia", name: "Liberian Dollar", code: "LRD" },
    { country: "Libya", name: "Libyan Dinar", code: "LYD" },
    { country: "Liechtenstein", name: "Swiss Franc", code: "CHF" },
    { country: "Lithuania", name: "Euro", code: "EUR" },
    { country: "Luxembourg", name: "Euro", code: "EUR" },
    { country: "Madagascar", name: "Malagasy Ariary", code: "MGA" },
    { country: "Malawi", name: "Malawian Kwacha", code: "MWK" },
    { country: "Malaysia", name: "Malaysian Ringgit", code: "MYR" },
    { country: "Maldives", name: "Maldivian Rufiyaa", code: "MVR" },
    { country: "Mali", name: "West African CFA Franc", code: "XOF" },
    { country: "Malta", name: "Euro", code: "EUR" },
    { country: "Marshall Islands", name: "United States Dollar", code: "USD" },
    { country: "Mauritania", name: "Mauritanian Ouguiya", code: "MRU" },
    { country: "Mauritius", name: "Mauritian Rupee", code: "MUR" },
    { country: "Mexico", name: "Mexican Peso", code: "MXN" },
    { country: "Micronesia (Federated States of)", name: "United States Dollar", code: "USD" },
    { country: "Moldova", name: "Moldovan Leu", code: "MDL" },
    { country: "Monaco", name: "Euro", code: "EUR" },
    { country: "Mongolia", name: "Mongolian Tögrög", code: "MNT" },
    { country: "Montenegro", name: "Euro", code: "EUR" },
    { country: "Montserrat", name: "East Caribbean Dollar", code: "XCD" },
    { country: "Morocco", name: "Moroccan Dirham", code: "MAD" },
    { country: "Mozambique", name: "Mozambican Metical", code: "MZN" },
    { country: "Myanmar", name: "Burmese Kyat", code: "MMK" },
    { country: "Namibia", name: "Namibian Dollar", code: "NAD" },
    { country: "Nauru", name: "Australian Dollar", code: "AUD" },
    { country: "Nepal", name: "Nepalese Rupee", code: "NPR" },
    { country: "Netherlands", name: "Euro", code: "EUR" },
    { country: "New Zealand", name: "New Zealand Dollar", code: "NZD" },
    { country: "Nicaragua", name: "Nicaraguan Córdoba", code: "NIO" },
    { country: "Niger", name: "West African CFA Franc", code: "XOF" },
    { country: "Nigeria", name: "Nigerian Naira", code: "NGN" },
    { country: "Niue", name: "New Zealand Dollar", code: "NZD" },
    { country: "North Macedonia", name: "Macedonian Denar", code: "MKD" },
    { country: "Norway", name: "Norwegian Krone", code: "NOK" },
    { country: "Oman", name: "Omani Rial", code: "OMR" },
    { country: "Pakistan", name: "Pakistani Rupee", code: "PKR" },
    { country: "Palau", name: "United States Dollar", code: "USD" },
    { country: "Palestine", name: "Israeli New Shekel", code: "ILS" },
    { country: "Panama", name: "Panamanian Balboa", code: "PAB" },
    { country: "Papua New Guinea", name: "Papua New Guinean Kina", code: "PGK" },
    { country: "Paraguay", name: "Paraguayan Guaraní", code: "PYG" },
    { country: "Peru", name: "Peruvian Sol", code: "PEN" },
    { country: "Philippines", name: "Philippine Peso", code: "PHP" },
    { country: "Poland", name: "Polish Złoty", code: "PLN" },
    { country: "Portugal", name: "Euro", code: "EUR" },
    { country: "Qatar", name: "Qatari Riyal", code: "QAR" },
    { country: "Romania", name: "Romanian Leu", code: "RON" },
    { country: "Russia", name: "Russian Ruble", code: "RUB" },
    { country: "Rwanda", name: "Rwandan Franc", code: "RWF" },
    { country: "Saint Kitts and Nevis", name: "East Caribbean Dollar", code: "XCD" },
    { country: "Saint Lucia", name: "East Caribbean Dollar", code: "XCD" },
    { country: "Saint Vincent and the Grenadines", name: "East Caribbean Dollar", code: "XCD" },
    { country: "Samoa", name: "Samoan Tālā", code: "WST" },
    { country: "San Marino", name: "Euro", code: "EUR" },
    { country: "Sao Tome and Principe", name: "São Tomé and Príncipe Dobra", code: "STN" },
    { country: "Saudi Arabia", name: "Saudi Riyal", code: "SAR" },
    { country: "Senegal", name: "West African CFA Franc", code: "XOF" },
    { country: "Serbia", name: "Serbian Dinar", code: "RSD" },
    { country: "Seychelles", name: "Seychellois Rupee", code: "SCR" },
    { country: "Sierra Leone", name: "Sierra Leonean Leone", code: "SLL" },
    { country: "Singapore", name: "Singapore Dollar", code: "SGD" },
    { country: "Sint Maarten", name: "Netherlands Antillean Guilder", code: "ANG" },
    { country: "Slovakia", name: "Euro", code: "EUR" },
    { country: "Slovenia", name: "Euro", code: "EUR" },
    { country: "Solomon Islands", name: "Solomon Islands Dollar", code: "SBD" },
    { country: "Somalia", name: "Somali Shilling", code: "SOS" },
    { country: "South Africa", name: "South African Rand", code: "ZAR" },
    { country: "South Korea", name: "South Korean Won", code: "KRW" },
    { country: "South Sudan", name: "South Sudanese Pound", code: "SSP" },
    { country: "Spain", name: "Euro", code: "EUR" },
    { country: "Sri Lanka", name: "Sri Lankan Rupee", code: "LKR" },
    { country: "Sudan", name: "Sudanese Pound", code: "SDG" },
    { country: "Suriname", name: "Surinamese Dollar", code: "SRD" },
    { country: "Sweden", name: "Swedish Krona", code: "SEK" },
    { country: "Switzerland", name: "Swiss Franc", code: "CHF" },
    { country: "Syria", name: "Syrian Pound", code: "SYP" },
    { country: "Taiwan", name: "New Taiwan Dollar", code: "TWD" },
    { country: "Tajikistan", name: "Tajikistani Somoni", code: "TJS" },
    { country: "Tanzania", name: "Tanzanian Shilling", code: "TZS" },
    { country: "Thailand", name: "Thai Baht", code: "THB" },
    { country: "Togo", name: "West African CFA Franc", code: "XOF" },
    { country: "Tonga", name: "Tongan Paʻanga", code: "TOP" },
    { country: "Trinidad and Tobago", name: "Trinidad and Tobago Dollar", code: "TTD" },
    { country: "Tunisia", name: "Tunisian Dinar", code: "TND" },
    { country: "Turkey", name: "Turkish Lira", code: "TRY" },
    { country: "Turkmenistan", name: "Turkmenistani Manat", code: "TMT" },
    { country: "Tuvalu", name: "Australian Dollar", code: "AUD" },
    { country: "Uganda", name: "Ugandan Shilling", code: "UGX" },
    { country: "Ukraine", name: "Ukrainian Hryvnia", code: "UAH" },
    { country: "United Arab Emirates", name: "United Arab Emirates Dirham", code: "AED" },
    { country: "United Kingdom", name: "British Pound", code: "GBP" },
    { country: "United States", name: "United States Dollar", code: "USD" },
    { country: "Uruguay", name: "Uruguayan Peso", code: "UYU" },
    { country: "Uzbekistan", name: "Uzbekistani Som", code: "UZS" },
    { country: "Vanuatu", name: "Vanuatu Vatu", code: "VUV" },
    { country: "Venezuela", name: "Venezuelan Bolívar", code: "VES" },
    { country: "Vietnam", name: "Vietnamese Đồng", code: "VND" },
    { country: "Yemen", name: "Yemeni Rial", code: "YER" },
    { country: "Zambia", name: "Zambian Kwacha", code: "ZMW" },
    { country: "Zimbabwe", name: "Zimbabwean Dollar", code: "ZWL" }

];

// Populate currency options in the select elements
countries.forEach(country => {
    const option1 = document.createElement('option');
    option1.textContent = `${country.code} ,${country.name}`;
    option1.value = country.code;
    fromCurrencyElement.appendChild(option1);

    const option2 = document.createElement('option');
    option2.textContent = `${country.code} ,${country.name}`;
    option2.value = country.code;
    toCurrencyElement.appendChild(option2);
});

// Set default values
fromCurrencyElement.value = "USD";
toCurrencyElement.value = "PKR";

// Fetch exchange rate and convert the amount
const getExchangeRate = async () => {
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    // Fetch exchange rate data based on the "from" currency
    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();
    console.log(data);
    // Calculate the converted amount
    const rate = data.rates[toCurrency];
    const convertedAmount = amount * rate;

  
    // Display the result
    convertedAmountElement.value=convertedAmount;
    resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

// Add event listeners to update the conversion on user input
fromAmountElement.addEventListener('input', getExchangeRate);
fromCurrencyElement.addEventListener('change', getExchangeRate);
toCurrencyElement.addEventListener('change', getExchangeRate);

// Initial conversion on page load
getExchangeRate();
