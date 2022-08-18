import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const chooseDate = document.querySelector("input#datetime-picker");
console.log(chooseDate);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

flatpickr(chooseDate, options);