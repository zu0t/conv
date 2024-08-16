const apiKey = '9d9344ae80f35c28c8102ad2';
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const currencyNames = {
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudian Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswana Pula",
    "BYN": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Colón",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound",
    "FOK": "Faroese Króna",
    "GBP": "British Pound Sterling",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey Pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Shekel",
    "IMP": "Isle of Man Pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "IRR": "Iranian Rial",
    "ISK": "Icelandic Króna",
    "JEP": "Jersey Pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgyzstani Som",
    "KHR": "Cambodian Riel",
    "KID": "Kiribati Dollar",
    "KMF": "Comorian Franc",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Lao Kip",
    "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Burmese Kyat",
    "MNT": "Mongolian Tögrög",
    "MOP": "Macanese Pataca",
    "MRU": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan Córdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Zloty",
    "PYG": "Paraguayan Guaraní",
    "QAR": "Qatari Riyal",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SDG": "Sudanese Pound",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helena Pound",
    "SLL": "Sierra Leonean Leone",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "SSP": "South Sudanese Pound",
    "STN": "São Tomé and Príncipe Dobra",
    "SYP": "Syrian Pound",
    "SZL": "Eswatini Lilangeni",
    "THB": "Thai Baht",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Paʻanga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TVD": "Tuvaluan Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "USD": "United States Dollar",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistani Soʻm",
    "VES": "Venezuelan Bolívar",
    "VND": "Vietnamese Đồng",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tālā",
    "XAF": "Central African CFA Franc",
    "XCD": "East Caribbean Dollar",
    "XDR": "Special Drawing Rights",
    "XOF": "West African CFA Franc",
    "XPF": "CFP Franc",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
};

function setDropdownWidth(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const optionsContainer = dropdown.querySelector('.options-container');
    const options = optionsContainer.querySelectorAll('.option');
    let maxWidth = 0;

    const temp = document.createElement('span');
    temp.style.visibility = 'hidden';
    temp.style.whiteSpace = 'nowrap';
    document.body.appendChild(temp);

    options.forEach(option => {
        temp.textContent = option.textContent;
        maxWidth = Math.max(maxWidth, temp.offsetWidth);
    });

    document.body.removeChild(temp);

    dropdown.style.width = `${maxWidth + 20}px`;
    optionsContainer.style.width = `${maxWidth + 20}px`;
}

async function getCurrencies() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Failed to fetch currencies");

        const data = await response.json();
        const currencies = Object.keys(data.conversion_rates);

        const fromCurrencyOptions = document.getElementById('fromCurrencyOptions');
        const toCurrencyOptions = document.getElementById('toCurrencyOptions');

        fromCurrencyOptions.innerHTML = '';
        toCurrencyOptions.innerHTML = '';

        currencies.forEach(currency => {
            const fullName = currencyNames[currency] || currency;

            const option1 = document.createElement('div');
            option1.classList.add('option');
            option1.dataset.value = currency;
            option1.textContent = fullName;
            option1.onclick = () => selectCurrency('fromDropdown', currency, fullName);
            fromCurrencyOptions.appendChild(option1);

            const option2 = document.createElement('div');
            option2.classList.add('option');
            option2.dataset.value = currency;
            option2.textContent = fullName;
            option2.onclick = () => selectCurrency('toDropdown', currency, fullName);
            toCurrencyOptions.appendChild(option2);
        });

        setDropdownWidth('fromDropdown');
        setDropdownWidth('toDropdown');

    } catch (error) {
        console.error("Error fetching currencies:", error);
        alert("Failed to load currencies. Please try again later.");
    }
}

function filterOptions(dropdownId) {
    const input = document.querySelector(`#${dropdownId} input`);
    const filter = input.value.toUpperCase();
    const optionsContainer = document.querySelector(`#${dropdownId} .options-container`);
    const options = optionsContainer.getElementsByClassName('option');

    for (let i = 0; i < options.length; i++) {
        const txtValue = options[i].textContent || options[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            options[i].style.display = "";
        } else {
            options[i].style.display = "none";
        }
    }

    setDropdownWidth(dropdownId);
}

function selectCurrency(dropdownId, currency, fullName) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.querySelector('input').value = fullName;
    dropdown.dataset.selectedCurrency = currency;
    dropdown.classList.remove('active');

    setDropdownWidth(dropdownId);
}

async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromDropdown').dataset.selectedCurrency;
    const toCurrency = document.getElementById('toDropdown').dataset.selectedCurrency;

    if (fromCurrency === toCurrency) {
        document.getElementById('result').textContent = "Are you acoustic?";
        return;
    }

    if (!fromCurrency || !toCurrency || amount === '' || isNaN(amount)) {
        alert('Please select valid currencies and enter a valid amount');
        return;
    }

    const pairUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`;

    try {
        const response = await fetch(pairUrl);
        if (!response.ok) throw new Error("Failed to fetch conversion rates");

        const data = await response.json();
        const rate = data.conversion_rate;
        const result = amount * rate;

        document.getElementById('result').textContent = `${amount} ${fromCurrency} (${currencyNames[fromCurrency] || fromCurrency}) = ${result.toFixed(2)} ${toCurrency} (${currencyNames[toCurrency] || toCurrency})`;

    } catch (error) {
        console.error("Error converting currency:", error);
        alert("Failed to convert currency. Please try again later.");
    }
}

function adjustFontSize() {
    const selects = document.querySelectorAll('.custom-dropdown input');
    
    selects.forEach(select => {
        const selectedText = select.value;
        const length = selectedText.length;

        if (length > 25) {
            select.style.fontSize = '14px';
        } else if (length > 20) {
            select.style.fontSize = '16px';
        } else {
            select.style.fontSize = '18px';
        }
    });
}

document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.custom-dropdown');
    dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target)) {
            dropdown.classList.add('active');
        } else {
            dropdown.classList.remove('active');
        }
    });
});

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}

getCurrencies();