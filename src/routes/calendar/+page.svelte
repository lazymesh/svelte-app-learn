<script>
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
        month: 4,
        date: 13,
        day: 2,
    },
    np: {
        year: 2077,
        month: 1,
        date: 1,
        day: 2,
    },
    };

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

    let today = new Date();
    let now = {};

    const daysInYear = 365;

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

    function countDaysInYear(year) {
    if (typeof npdates[year] === "undefined") {
        return daysInYear;
    }
    return npdates[year][12];
    }

    function countPartialDays(date, dir) {
    let count = 0;
    //add up the days from top up to previous of given date
    for (let i = 0; i < date.month - 1; i++) {
        count += npdates[date.year][i];
    }
    //add the date of given date to the count
    count += date.date;
    //if direction is opposite then complement the count with year sum
    if (!dir) {
        //if dir is set then count top to bottom
        count = npdates[date.year][12] - count + 1;
    } else {
        count--;
    }
    //return the value of count
    return count;
    }

    function daysInMonth(year = now.np.year, month = now.np.month) {
    // let iny = year,
    //     inm = month;
    //to make it array compatible subtract one in month
    month--;
    if (month < 0) {
        month += 11;
        year--;
    }
    let days = npdates[year][month];
    //console.log(`${iny}-${inm} : ${days} days`);
    return days;
    }

    function isLeapYear(year) {
    return daysInYear !== countDaysInYear(year);
    }

    function countBSDays(date) {
    if (typeof date !== "string") {
        console.error("Invalid date!");
        return;
    }

    let dayCount = {
        value: 0,
        dir: 0,
        npdate: date,
    };

    //convert the date provided to an json object
    date = date.toString().dateObjects();

    if (date.year < 2000) {
        console.error("Invalid date range: Ahead of 2000 BS");
        return 0;
    }

    if (date.year > 2099) {
        console.error("Invalid date range: After 1999 BS");
        return 0;
    }

    dayCount.dir = compNpDates(date, reference.np);

    if (dayCount.dir == 0) return dayCount;

    let i =
        dayCount.dir < 0 ? reference.np.year + dayCount.dir : reference.np.year;
    let loop = true;

    while (loop && reference.np.year !== date.year) {
        dayCount.value += countDaysInYear(i);
        i += dayCount.dir;
        if (dayCount.dir < 0) {
        if (i <= date.year) loop = false;
        } else {
        if (i >= date.year) loop = false;
        }
    }
    dayCount.value += countPartialDays(date, dayCount.dir < 0 ? false : true);
    return dayCount;
    }

    function compNpDates(date1, date2) {
    if (date1.year > date2.year) return 1;
    if (date1.year === date2.year && date1.month > date2.month) return 1;
    if (
        date1.year === date2.year &&
        date1.month === date2.month &&
        date1.date > date2.date
    )
        return 1;
    if (
        date1.year === date2.year &&
        date1.month === date2.month &&
        date1.date === date2.date
    )
        return 0;
    return -1;
    }

    function countADDays(ad) {
    let date = ad.toString().dateObjects();
    let refDate = new Date(
        reference.int.year,
        reference.int.month - 1,
        reference.int.date
    );
    date = new Date(date.year, date.month - 1, date.date);
    let timeDiff = date.getTime() - refDate.getTime();
    let diffDays = parseInt(Math.ceil(timeDiff / (1000 * 3600 * 24)));
    return {
        value: Math.abs(diffDays),
        dir: diffDays < 0 ? -1 : 1,
        intdate: ad,
    };
    }

    function offsetBSDays(days) {
    let dayCount = days.value;
    let dateInAd = new Date(days.intdate);
    let refDate = JSON.parse(JSON.stringify(reference.np));
    if (days.value === 0) {
        return refDate;
    } else if (days.dir > 0) {
        refDate.date += dayCount;
        while (refDate.date > daysInMonth(refDate.year, refDate.month)) {
        refDate.date -= daysInMonth(refDate.year, refDate.month);
        refDate.month++;
        if (refDate.month > 12) {
            refDate.year++;
            refDate.month = 1;
        }
        }
    } else {
        dayCount = Math.abs(dayCount);
        let days;
        while (dayCount >= 0) {
        refDate.month--;
        if (refDate.month < 1) {
            refDate.year--;
            refDate.month = 12;
        }
        days = daysInMonth(refDate.year, refDate.month);
        if (dayCount < days) {
            dayCount = days - dayCount + 1;
            break;
        }
        dayCount -= days;
        }
        refDate.date = dayCount;
    }
    refDate.day = dateInAd.getDay() + 1;
    return refDate;
    }

    function offsetADDays(days) {
    let date = new Date(
        reference.int.year,
        reference.int.month - 1,
        reference.int.date
    );
    let shift = days.value * days.dir;
    date.setDate(date.getDate() + shift);
    return {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay() + 1,
    };
    }

    function ad2bs(ad) {
    return offsetBSDays(countADDays(ad));
    }

    function bs2ad(bs) {
    return offsetADDays(countBSDays(bs));
    }

    function startDate(year = now.np.year, month = now.np.month) {
    let string = `${year}-${month}-1`;
    return bs2ad(string);
    }

    function getMonthName(month, nep = true) {
    //subtract one from month to make array compatible
    month--;
    if (month < 0) month += 11;
    if (month > 11) month -= 12;
    if (nep) return months_nepali[month];
    return months[month];
    }
</script>
<h1>Welcome to Calendar page</h1>
<div class="calendar-container">
            <div class="calendar-head">
                <span class="calendar-title">
                    <slot name="title" />
                </span>
                <div class="cal-nav">
                    <div class="cal-head-left">
                        <div class="cal-btn cal-prev-year"> 
                        <small></small>
                        </div>
                        <div class="cal-btn cal-prev"> 
                        <small></small>
                        </div>
                    </div>
                    <div class="cal-head-center">
                        <span class="cal-year"> <strong>२०७७/</strong><small>2020</small> </span>
                        <span class="month"><strong>भाद्र</strong></span>
                        <span class="int-month"><small>(August/September)</small></span>

                    </div>
                    <div class="cal-head-right">
                        <div class="cal-btn cal-next">
                            <small>></small>
                        </div>
                        <div class="cal-btn cal-next-year">
                            <small></small>
                        </div>
                    </div>
                </div>
            </div>
            <div class="calendar-body">
                <div class="week">
                    <div class="days-name">SUN</div>
                    <div class="days-name">MON</div>
                    <div class="days-name">TUE</div>
                    <div class="days-name">WED</div>
                    <div class="days-name">THU</div>
                    <div class="days-name">FRI</div>
                    <div class="days-name">SAT</div>
                </div>
                <div class="days">
                    <div class="day inactive">
                        <span class="np-date">01</span>
                        <span class="int-date">1</span>
                        <span class="task">something</span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">02</span>
                        <span class="int-date">2</span>
                        <span class="task"></span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">03</span>
                        <span class="int-date">3</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">04</span>
                        <span class="int-date">4</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">05</span>
                        <span class="int-date">5</span>
                        <span class="task">something</span>
                    </div>
                    <div class="day">
                        <span class="np-date">06</span>
                        <span class="int-date">6</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">07</span>
                        <span class="int-date">7</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">08</span>
                        <span class="int-date">8</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">09</span>
                        <span class="int-date">9</span>
                        <span class="task">something</span>
                    </div>
                    <div class="day">
                        <span class="np-date">10</span>
                        <span class="int-date">10</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">11</span>
                        <span class="int-date">11</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">12</span>
                        <span class="int-date">12</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">13</span>
                        <span class="int-date">13</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">14</span>
                        <span class="int-date">14</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">15</span>
                        <span class="int-date">15</span>
                        <span class="task"></span>
                    </div>
                    <div class="day today">
                        <span class="np-date">16</span>
                        <span class="int-date">16</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">17</span>
                        <span class="int-date">17</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">18</span>
                        <span class="int-date">18</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">19</span>
                        <span class="int-date">19</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">20</span>
                        <span class="int-date">20</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">21</span>
                        <span class="int-date">21</span>
                        <span class="task">something</span>
                    </div>
                    <div class="day">
                        <span class="np-date">22</span>
                        <span class="int-date">22</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">23</span>
                        <span class="int-date">23</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">24</span>
                        <span class="int-date">24</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">25</span>
                        <span class="int-date">25</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">26</span>
                        <span class="int-date">26</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">27</span>
                        <span class="int-date">27</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">28</span>
                        <span class="int-date">28</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">29</span>
                        <span class="int-date">29</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">30</span>
                        <span class="int-date">30</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">31</span>
                        <span class="int-date">31</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">32</span>
                        <span class="int-date">32</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">33</span>
                        <span class="int-date">33</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">34</span>
                        <span class="int-date">34</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">35</span>
                        <span class="int-date">35</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">36</span>
                        <span class="int-date">36</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">37</span>
                        <span class="int-date">37</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">38</span>
                        <span class="int-date">38</span>
                        <span class="task"></span>
                    </div>
                    <div class="day">
                        <span class="np-date">39</span>
                        <span class="int-date">39</span>
                        <span class="task"></span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">1</span>
                        <span class="int-date">1</span>
                        <span class="task"></span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">2</span>
                        <span class="int-date">2</span>
                        <span class="task"></span>
                    </div>
                    <div class="day inactive">
                        <span class="np-date">3</span>
                        <span class="int-date">3</span>
                        <span class="task"></span>
                    </div>
                </div>
            </div>
            <div class="calendar-footer">
                <div class="cal-foot-left"><strong class="footer-time">०२:१५:४५ पुर्वान्ह</strong></div>
                <div class="cal-foot-center"><strong class="footer-today">२०७७ - असार - १६ मंगलवार</strong></div>
                <div class="cal-foot-right">
                    <div class="cal-copy">&copy; <a href="http://mentormaya.com">mentormaya</a> </div>
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
  -ms-grid-rows: 3.6em 1fr 2em;
      grid-template-rows: 3.6em 1fr 2em;
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
  -ms-grid-rows: 1.3em 2.3em;
      grid-template-rows: 1.3em 2.3em;
  text-align: center;
  color: #4d494d;
  text-align: center;
  width: 100%;
}

.calendar-container .calendar-head .calendar-title {
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