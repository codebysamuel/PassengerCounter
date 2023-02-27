let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let prevEntries = document.getElementById("prev-entries")

let count = 0

incrementBtn.addEventListener("click", () => {
  count += 1
  countEl.textContent = count
})

saveBtn.addEventListener("click", () => {
  let countFormat = `${count} - `
  prevEntries.textContent += countFormat
  count = 0
  countEl.textContent = 0
})


