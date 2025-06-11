<script>
    let lang = $state("np");
    const aaja = "आज";
    const title = "नेपाली पात्रो";
    const first = "<<";
    const prev = "<";
    const last = ">>";
    const next = ">";
    const nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    const days = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY",
    ];
    const months = [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPETEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
    ];
    const days_nepali = [
        "आइतवार",
        "साेमवार",
        "मंगलवार",
        "बुधवार",
        "विहीवार",
        "शुक्रवार",
        "शनिवार",
    ];
    const months_nepali = [
        "बैशाख",
        "जेठ",
        "असार",
        "श्रावण",
        "भदाै",
        "असाेज",
        "कातिक",
        "मंसिर",
        "पुस",
        "माघ",
        "फागुन",
        "चैत",
    ];

    const intdates = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const reference = {
        int: {
            year: 2020,
            month: 3,
            date: 13,
            day: 2,
        },
        np: {
            year: 2077,
            month: 0,
            date: 1,
            day: 2,
        },
    };
    const ad_dates = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 365]
    const npdates = {
        2000: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
        2001: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2002: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2003: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2004: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
        2005: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2006: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2007: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2008: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
        2009: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2010: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2011: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2012: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
        2013: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2014: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2015: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2016: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
        2017: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2018: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2019: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
        2020: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2021: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2022: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
        2023: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
        2024: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2025: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2026: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2027: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
        2028: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2029: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
        2030: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2031: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
        2032: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2033: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2034: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2035: [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
        2036: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2037: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2038: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2039: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
        2040: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2041: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2042: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2043: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
        2044: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2045: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2046: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2047: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2048: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2049: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
        2050: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
        2051: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2052: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2053: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
        2054: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
        2055: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2056: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30, 365],
        2057: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2058: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 365],
        2059: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2060: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2061: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2062: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31, 365],
        2063: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2064: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2065: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2066: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31, 365],
        2067: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2068: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2069: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2070: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30, 365],
        2071: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2072: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30, 365],
        2073: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31, 366],
        2074: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2075: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
        2077: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31, 366],
        2078: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30, 365],
        2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30, 365],
        2081: [31, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366],
        2082: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
        2083: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
        2084: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
        2085: [31, 32, 31, 32, 30, 31, 30, 30, 29, 30, 30, 30, 366],
        2086: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
        2087: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30, 366],
        2088: [30, 31, 32, 32, 30, 31, 30, 30, 29, 30, 30, 30, 365],
        2089: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
        2090: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
        2091: [31, 31, 32, 31, 31, 31, 30, 30, 29, 30, 30, 30, 366],
        2092: [30, 31, 32, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
        2093: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 365],
        2094: [31, 31, 32, 31, 31, 30, 30, 30, 29, 30, 30, 30, 365],
        2095: [31, 31, 32, 31, 31, 31, 30, 29, 30, 30, 30, 30, 366],
        2096: [30, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30, 364],
        2097: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30, 366],
        2098: [31, 31, 32, 31, 31, 31, 29, 30, 29, 30, 29, 31, 365],
        2099: [31, 31, 32, 31, 31, 31, 30, 29, 29, 30, 30, 30, 365],
    };

    const daysInYear = 365;

    const today = new Date();
    let temp_ad_date = new Date(today)
    let temp_ad_year = $state(temp_ad_date.getFullYear());
    let temp_ad_month = $state(temp_ad_date.getMonth());

    const today_nepali = structuredClone(ad2bs(today));
    // console.log(today_nepali, today);
    let temp_nepali_date = structuredClone(today_nepali);
    let temp_nepali_month = $state(temp_nepali_date.month);
    let temp_nepali_year = $state(temp_nepali_date.year);

    let now = {};

    String.prototype.toNepaliDigits = function () {
        return this.replace(/[0-9]/g, (match) => {
            return nepali_digits[match];
        });
    };

    String.prototype.revNepaliNumber = function () {
        return this.replace(/['०','१','२','३','४','५','६','७','८','९']/g, (match) => {
            return nepali_digits.findIndex((element) => element == match);
        });
    };

    String.prototype.dateObjects = function (monthFirst = true) {
        date = {};
        //parse the element of dates
        let data = /(\d+)[/.-](\d+)[/.-](\d+)/gi.exec(this.toString());
        data.forEach((elem) => {
            elem = parseInt(elem);
            if (elem > 32) {
            date.year = elem;
            return;
            }
            if (monthFirst) {
            if (typeof date.month == "undefined") {
                date.month = elem;
            }
            date.date = elem;
            } else {
            if (typeof date.date == "undefined") {
                date.date = elem;
            }
            date.month = elem;
            }
        });
        return date;
    };

    Date.prototype.format = function (seprator = "-") {
    return (
        this.getFullYear() +
        seprator +
        (this.getMonth() + 1).toString().padStart(2, 0) +
        seprator +
        this.getDate().toString().padStart(2, 0)
    );
    };

    function formatDate(date, sep = "-") {
        return `${date.year}${sep}${date.month}${sep}${date.date}`;
    }

    function createDate(
        year = now.np.year,
        month = now.np.month,
        date = now.np.date,
        sep = "-"
        ) {
        return `${year}${sep}${month}${sep}${date}`;
    }

    function countDaysInYear(year, isBS = true) {
        if (isBS) {
            if (typeof npdates[year] === "undefined") {
                return daysInYear;
            }
            return npdates[year][12];
        }
        else {
            return year % 4 === 0 ? 366 : 365;
        }
    }
    
    function isLeapYear(year) {
        return daysInYear !== countDaysInYear(year);
    }

    function npDaysInMonth(year = today_nepali.getFullYear(), month = today_nepali.getMonth()) {
        month--;
        if (month < 0) {
            month += 11;
            year--;
        }
        let days = npdates[year][month];
        return days;
    }

   function adDaysInMonth(year = today.getFullYear(), month = today.getMonth()) {
        month--;
        if (month < 0) {
            month += 11;
            year--;
        }
        let days = 0;
        if (year % 4 === 0 && month === 1) days = 29;
        else days = ad_dates[month];
        return days;
    }

    function daysInAMonth(year, month, isBS = false) {
        if (isBS) {
            return npDaysInMonth(year, month);
        }
        else {
            return adDaysInMonth(year, month);
        }
    }

    function returnDate(year, month, date) {
        let dateMonth = month - 1;
        if (dateMonth < 0) {
            year--;
            dateMonth = 11;
        }
        return new Date(year, dateMonth, date);
    }

    function countDaysDiff(date, isBS = false) {
        let refDate = isBS ? 
            new Date(reference.np.year, reference.np.month, reference.np.date) : 
            new Date(reference.int.year, reference.int.month, reference.int.date);
        let timeDiff = date.getTime() - refDate.getTime();
        let diffDays = parseInt(Math.ceil(timeDiff / (1000 * 3600 * 24)));
        return {
            value: Math.abs(diffDays),
            dir: diffDays < 0 ? -1 : 1,
            date: date,
        };
    }

    function offsetDays(days, isBS = false) {
        console.log(days);
        let dayCount = days.value;
        let date = new Date(days.date);
        let refDate = isBS ? structuredClone(reference.np) : structuredClone(reference.int);
        refDate.day = days.date.getDay();
        if (dayCount === 0) {
            return refDate;
        } else if (days.dir > 0) {
            console.log(refDate);
            refDate.date += dayCount;
            console.log(refDate);
            while (refDate.date > daysInAMonth(refDate.year, refDate.month, isBS)) {
                if (refDate.date > countDaysInYear(refDate.year, isBS)) {
                    refDate.date -= countDaysInYear(refDate.year, isBS);
                    refDate.year++;
                } else {
                    refDate.date -= daysInAMonth(refDate.year, refDate.month, isBS);

                    refDate.month++;
                    if (refDate.month > 11) {
                        refDate.year++;
                        refDate.month = 0;
                    }
                }

                //console.log("looping ", refDate);
            }
        } else {
            dayCount = Math.abs(dayCount);
            let days;
            while (dayCount >= 0) {
                refDate.month--;
                if (refDate.month < 0) {
                    refDate.year--;
                    refDate.month = 11;
                }
                days = daysInAMonth(refDate.year, refDate.month, isBS);

                if (dayCount < days) {
                    dayCount = days - dayCount + 1;
                    break;
                }
                dayCount -= days;
            }
            refDate.date = dayCount;
        }
        return refDate;
    }

    function ad2bs(ad) {
        console.log("aaaaaaaa");
        const refDate = offsetDays(countDaysDiff(ad), true);
        console.log(" after changed final ", refDate);
        return refDate;
    }

    function bs2ad(bs) {
        console.log("bbbbbbbb");
        const refDate = offsetDays(countDaysDiff(bs, true));
        return refDate;
    }

    function startDate(year = now.np.year, month = now.np.month) {
        let string = `${year}-${month}-1`;
        return bs2ad(string);
    }

    function getMonthName(month, nep = true) {
        if (month < 0) month += 12;
        if (month > 11) month -= 12;
        if (nep) return months_nepali[month];
        return months[month];
    }

    function getNepaliDate(date) {
        return `${date.getFullYear().toString().toNepaliDigits()}-${date.getMonth().toString().toNepaliDigits()}-${date.getDate().toString().toNepaliDigits()}`;
    }

    let changeToPreNepaliMonth = () => {
        const nepali_ref_date = new Date(temp_nepali_date.year, temp_nepali_date.month, temp_nepali_date.date);
        nepali_ref_date.setMonth(temp_nepali_date.month - 1);
        temp_ad_date.setMonth(temp_ad_date.getMonth() - 1);
        alterTemps(nepali_ref_date, temp_nepali_date.day);
    }
    let changeToNextNepaliMonth = () => {
        const nepali_ref_date = new Date(temp_nepali_date.year, temp_nepali_date.month, temp_nepali_date.date);
        nepali_ref_date.setMonth(temp_nepali_date.month + 1);
        temp_ad_date.setMonth(temp_ad_date.getMonth() + 1);
        alterTemps(nepali_ref_date, temp_nepali_date.day);
    }
    
    function alterTemps(nepali_ref_date = null, day = null) {
        temp_nepali_date = {
            year: nepali_ref_date.getFullYear(),
            month: nepali_ref_date.getMonth(),
            date: nepali_ref_date.getDate(),
            day: day
        }
        temp_nepali_month = temp_nepali_date.month;
        temp_nepali_year = temp_nepali_date.year;
        temp_ad_month = temp_ad_date.getMonth();
        temp_ad_year = temp_ad_date.getFullYear();
    }

    let refreshToday = () => {
        temp_ad_date = new Date(today);
        temp_ad_month = temp_ad_date.getMonth();
        temp_ad_year = today.getFullYear();
        temp_nepali_date = structuredClone(today_nepali);
        temp_nepali_month = today_nepali.month;
        temp_nepali_year = today_nepali.year;
    }

    let getWeekDays = () => {
        if (lang == "en") return days;
        else return days_nepali;
    }
    function range(start, stop, step = 1) {
        if (stop === undefined) {
            stop = start;
            start = 0;
        }
        const result = [];
        for (let i = start; i <= stop; i += step) {
            result.push(i);
        }
        return result;
    }

    function calculateEmptyDays() {
        const first_week_day = new Date(temp_ad_year, temp_ad_month - 1, 1).getDay();
        const day_in_nepali = ad2bs(new Date(temp_ad_year, temp_ad_month - 1, 1));
        let empty_days = 8 - ((day_in_nepali.date - first_week_day) % 7);
        if (empty_days == 7) empty_days = 0;
        if (empty_days == 8) empty_days = 1;
        return empty_days;
    }
    function daysInTempMonth() {
        const this_year = lang == "en" ? temp_ad_year : temp_nepali_year;
        const this_month = lang == "en" ? temp_ad_month : temp_nepali_month;
        const days_in_month = lang == "en" ? ad_dates[this_month] : npdates[this_year][this_month];
        return days_in_month;
    }
    let getInitialInactiveDays = () => {
        const empty_days = calculateEmptyDays();
        let return_array = [];
        for (const i in range(1, empty_days)) {
            return_array.push("");
        }
        return return_array;
    }
    let getActiveDays = () => {
        const days_in_month = daysInTempMonth();
        return range(1, days_in_month);
    }
    let getLastInactiveDays = () => {
        const days_in_month = daysInTempMonth();
        const empty_days = calculateEmptyDays();
        let return_array = [];
        let last_empty_cells = 42 - (days_in_month + empty_days);
        last_empty_cells = last_empty_cells > 6 ? last_empty_cells % 7 : last_empty_cells;
        for (const i in range(1, last_empty_cells)) {
            return_array.push("");
        }
        return return_array;
    }

    let getEnglishDateUsingNepaliDay = (day) => {
        const nepali_date = new Date(temp_nepali_year, temp_nepali_month - 1, day);
        const ad_date = bs2ad(nepali_date);
        return ad_date.date;
    }

    let isToday = (day) => {
        const yesToday = day == today_nepali.date && today_nepali.year === temp_nepali_year && today_nepali.month === temp_nepali_month;
        return yesToday;
    }

</script>

<div class="calendar-container">
    <div class="calendar-head">
        <div class="calendar-title">
            {title} {temp_nepali_month} {temp_ad_month}
        </div>
        <div class="cal-nav">
            <div class="cal-head-left">
                <div class="cal-btn cal-prev" onclick={refreshToday}> 
                    <small>{aaja}</small>
                </div>
            </div>
            <div class="cal-head-center">
                <span class="cal-year"> <strong>{temp_nepali_year.toString().toNepaliDigits()}/</strong><small>{temp_ad_year}</small> </span>
                <span class="month"><strong>{getMonthName(temp_nepali_month)}</strong></span>
                <span class="int-month"><small>({getMonthName(temp_nepali_month + 3, false)}/{getMonthName(temp_nepali_month + 4, false)})</small></span>
            </div>
            <div class="cal-head-right">
                <div class="cal-btn cal-prev" onclick={changeToPreNepaliMonth}> 
                    <small>{prev}</small>
                </div>
                <div class="cal-btn cal-next" onclick={changeToNextNepaliMonth}>
                    <small>{next}</small>
                </div>
            </div>
        </div>
    </div>
    <div class="calendar-body">
        <div class="week">
            {#each getWeekDays() as day}
                <div class="days-name">{day}</div>
            {/each}
        </div>
        <div class="days">
            {#each getInitialInactiveDays() as day}
                <div class="day inactive">
                    <span class="np-date">{day.toString().toNepaliDigits()}</span>
                    <span class="int-date">{day}</span>
                    <span class="task"></span>
                </div>
            {/each}
            {#each getActiveDays() as day}
                <div class="day {isToday(day) ? "today" : ""}">
                    <span class="np-date">{day.toString().toNepaliDigits()}</span>
                    <span class="int-date">{getEnglishDateUsingNepaliDay(day)}</span>
                    <span class="task"></span>
                </div>
            {/each}
            
            {#each getLastInactiveDays() as day}
                <div class="day inactive">
                    <span class="np-date">{day.toString().toNepaliDigits()}</span>
                    <span class="int-date">{day}</span>
                    <span class="task"></span>
                </div>
            {/each}
            
        </div>
    </div>
    <div class="calendar-footer">
        <div class="cal-foot-left"><strong class="footer-time">०२:१५:४५ पुर्वान्ह</strong></div>
        <div class="cal-foot-center"><strong class="footer-today">२०७७ - असार - १६ मंगलवार</strong></div>
        <div class="cal-foot-right">
            <div class="cal-copy">Calendar</div>
        </div>
    </div>
</div>


<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css");
.cal-btn {
  text-decoration: none;
  font-family: ".LucidaGrandeUI", "Lucida Grande", "Lucida sans unicode";
  color: black;
  font-size: 1em;
  padding: 0.2em 0.7em;
  border: 1px solid #acacac;
  margin: 2px 2px;
  display: inline-block;
  background-image: -webkit-linear-gradient(#ffffff 0%, #F6F6F6 30%, #F3F3F3 45%, #EDEDED 60%, #eeeeee 100%);
  border-radius: 3px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 1px #acacac;
          box-shadow: 0px 0px 1px #acacac;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
}

.cal-btn:hover,
.cal-btn:active {
  border-color: #c2c2c2;
  background-image: -webkit-linear-gradient(#dbdbdb 0%, #d1d1d1 30%, #cfcece 45%, #b9b9b9 60%, #b4b4b4 100%);
  -webkit-box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.65);
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.65);
}

.cal-btn.disabled {
  color: #999 !important;
  background-image: -webkit-linear-gradient(#fbf8f8 0%, #f0f0f0 30%, #e3e3e3 45%, #d7d7d7 60%, #cbc9c9 100%);
}

.inactive {
  color: #999 !important;
  background-color: #f0ecf0 !important;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  cursor: default;
}

.today {
  background: #737473a6 !important;
  border: 1px solid #acacac;
}

.calendar-container {
  margin: 0 auto;
  min-height: 250px;
  min-width: 250px;
  max-width: 700px;
  max-height: 700px;
  color: #4d494d;
  font-family: 'Helvetica Neue', 'Lucida Grande', Arial, sans-serif;
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: 4.8em 1fr 2em;
      grid-template-rows: 4.8em 1fr 2em;
  background-color: white;
  -webkit-box-shadow: 0px 0px 20px #acacac;
          box-shadow: 0px 0px 20px #acacac;
  border: 1px solid #acacac;
  border-radius: 6px;
  overflow: hidden;
}

.calendar-container .calendar-head {
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: 2.5em 2.3em;
      grid-template-rows: 2.5em 2.3em;
  text-align: center;
  color: #4d494d;
  text-align: center;
  width: 100%;
}

.calendar-container .calendar-head {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  cursor: default;
  line-height: 1.3em;
  background: -webkit-gradient(linear, left top, left bottom, from(#ebebeb), to(#d5d5d5));
  background: linear-gradient(top, #ebebeb, #d5d5d5);
  border-top: 1px solid #f3f1f3;
  border-bottom: 1px solid #b1aeb1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.calendar-title {
  font-size: 1.3em;
  font-weight: bold;
  padding: 0.2em 0.5em;
  line-height: 1.9em;
}

.calendar-container .calendar-head .cal-nav {
  border-bottom: 1px solid #b1aeb1;
}

.calendar-container .calendar-head .cal-nav .cal-head-left {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto auto;
      grid-template-columns: auto auto;
  place-items: start;
}

.calendar-container .calendar-head .cal-nav .cal-head-center {
  display: -ms-grid;
  display: grid;
  place-items: center;
  -ms-grid-columns: (1fr)[3];
      grid-template-columns: repeat(3, 1fr);
}

.calendar-container .calendar-head .cal-nav .cal-head-right {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto auto;
      grid-template-columns: auto auto;
  place-items: end;
}

.calendar-container .calendar-head > .cal-nav,
.calendar-container .calendar-footer {
  background-color: #f3f3f3;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr auto;
      grid-template-columns: auto 1fr auto;
  place-content: center center;
  padding: 0 1.4em;
}

.calendar-container .calendar-body {
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: 2em 1fr;
      grid-template-rows: 2em 1fr;
  gap: 0.1em;
  place-content: stretch;
  padding: 0.1em;
}

.calendar-container .calendar-body .week {
  background: -webkit-linear-gradient(#ffffff 0%, #F6F6F6 30%, #F3F3F3 45%, #EDEDED 60%, #eeeeee 100%);
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (1fr)[7];
      grid-template-columns: repeat(7, 1fr);
  place-items: strech;
  border-bottom: 1px solid #b1aeb1;
}

.calendar-container .calendar-body .week .days-name {
  display: -ms-grid;
  display: grid;
  place-content: center;
  text-transform: uppercase;
  font-weight: 1.1em;
  font-size: 1em;
}

.calendar-container .calendar-body .week .days-name:not(:last-child) {
  border-right: 1px solid #acacac;
}

.calendar-container .calendar-body .week .days-name:nth-child(7n) {
  color: rgba(211, 32, 32, 0.753);
}

.calendar-container .calendar-body .days {
  display: -ms-grid;
  display: grid;
  gap: 0.1em;
  -ms-grid-rows: (1fr)[6];
  -ms-grid-columns: (1fr)[7];
      grid-template: repeat(6, 1fr)/repeat(7, 1fr);
  place-content: strech;
}

.calendar-container .calendar-body .days .day {
  padding: clamp(0.01, 0.2vw, 0.3em);
  background: #e4e2e4;
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: 1fr 1em;
      grid-template-rows: 1fr 1em;
  -ms-grid-columns: 1fr 1em;
      grid-template-columns: 1fr 1em;
  place-content: center;
  text-align: center;
  cursor: pointer;
  -webkit-transition: background-color 250ms;
  transition: background-color 250ms;
}

.calendar-container .calendar-body .days .day .np-date {
  display: -ms-grid;
  display: grid;
  padding: 2vh 0;
  place-items: center;
  font-size: clamp(1.1em, 3.5vw, 1.7em);
  font-weight: 700;
  -ms-grid-column: 1;
  -ms-grid-column-span: 2;
  grid-column: 1/3;
  -ms-grid-row: 1;
  -ms-grid-row-span: 2;
  grid-row: 1/3;
  z-index: 1;
}

.calendar-container .calendar-body .days .day .int-date {
  padding: 0.2em;
  -ms-grid-column: 2;
  -ms-grid-column-span: 1;
  grid-column: 2/3;
  -ms-grid-row: 1;
  -ms-grid-row-span: 1;
  grid-row: 1/2;
  font-size: clamp(0.5em, 1.3vw, 0.8em);
  z-index: 2;
}

.calendar-container .calendar-body .days .day .task {
  -ms-grid-column: 1;
  -ms-grid-column-span: 2;
  grid-column: 1/3;
  -ms-grid-row: 2;
  -ms-grid-row-span: 1;
  grid-row: 2/3;
  font-size: clamp(0.5em, 1.3vw, 0.8em);
  z-index: 2;
}

.calendar-container .calendar-body .days .day:hover {
  background-color: #adacad;
}

.calendar-container .calendar-body .days .day:nth-child(7n) {
  color: rgba(211, 32, 32, 0.753);
}

.calendar-container .calendar-footer {
  border-top: 1px solid #f3f1f3;
}

.calendar-container .calendar-footer .cal-foot-left {
  font-size: 0.8em;
  display: -ms-grid;
  display: grid;
  place-items: start;
}

.calendar-container .calendar-footer .cal-foot-center {
  font-size: 0.8em;
  display: -ms-grid;
  display: grid;
  place-items: center;
}

.calendar-container .calendar-footer .cal-foot-center .footer-today {
  cursor: pointer;
}

.calendar-container .calendar-footer .cal-foot-right {
  font-size: 0.8em;
  display: -ms-grid;
  display: grid;
  place-items: end;
}

.calendar-container .calendar-footer .cal-foot-right .cal-copy {
  font-style: italic;
}

.calendar-container .calendar-footer .cal-foot-right .cal-copy a {
  text-decoration: none;
  color: #4d494d;
}
</style>