const clockTitle = document.querySelector(".js-clock");

function last_christmas() {
  const date = new Date();
  const christmas = new Date(date.getFullYear(), 11, 25);

  let day_gap = christmas - date;
  const time_gap_list = [1000, 60, 60, 24];
  let last_day = [0, 0, 0, 0];
  let last_day_string = ["", "", "", ""];
  for (i = 0; i < 4; i++) {
    day_gap = Math.floor(day_gap / time_gap_list[i]);
    last_day[i] = day_gap % time_gap_list[i + 1];
  }
  last_day[3] = day_gap;

  for (i = 0; i < 4; i++) {
    last_day_string[i] = String(last_day[i]).padStart(2, "0");
  }

  clockTitle.innerText = `${last_day_string[3]}d ${last_day_string[2]}h ${last_day_string[1]}m ${last_day_string[0]}s`;
}
last_christmas();

setInterval(last_christmas, 1000);
