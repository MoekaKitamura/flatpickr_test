document.addEventListener("DOMContentLoaded", () => {
  const buildCalender = async () => {
    const res = await fetch("https://holidays-jp.github.io/api/v1/date.json");
    const holidayObj = await res.json();
    const holidays = Object.keys(holidayObj);

    flatpickr("#js-flatpickr", {
      locale: "ja",
      dateFormat: "Y年m月d日(D)",
      minDate: new Date(),
      disable: [
        ...holidays,
        function (date) {
          return date.getDay() === 0 || date.getDay() === 3;
        },
      ],
      // locale: {
      //   firstDayOfWeek: 1, // start week on Monday
      // },
    });
  };

  buildCalender();
});
