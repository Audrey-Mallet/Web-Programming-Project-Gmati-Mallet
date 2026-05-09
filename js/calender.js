document.addEventListener('DOMContentLoaded', () => {
    // --- Calendar Component ---
    const calendarGrid = document.getElementById('calendar-grid');
    const monthYearDisplay = document.getElementById('month-year');
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');

    // Proceed only if we are on a page with the calendar
    if (calendarGrid && monthYearDisplay) {
        let currentDate = new Date();

        // Sample events (replace or remove as needed)
        const events = [
            { date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10), title: 'Project Deadline' },
        ];

        function renderCalendar(date) {
            calendarGrid.innerHTML = '';

            const year = date.getFullYear();
            const month = date.getMonth();

            // Setup Header
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

            let firstDayOfMonth = new Date(year, month, 1).getDay();
            firstDayOfMonth = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1; // Make Monday index 0
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const today = new Date();

            // Render empty slots before the 1st day of the month
            for (let i = 0; i < firstDayOfMonth; i++) {
                const emptyCell = document.createElement('div');
                emptyCell.classList.add('calendar-day', 'empty');
                calendarGrid.appendChild(emptyCell);
            }

            // Render days of the month
            for (let i = 1; i <= daysInMonth; i++) {
                const dayCell = document.createElement('div');
                dayCell.classList.add('calendar-day');

                // Mark today's date
                if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
                    dayCell.classList.add('today');
                }

                // Day number
                const dayNumber = document.createElement('div');
                dayNumber.classList.add('calendar-day-number');
                dayNumber.textContent = i;
                dayCell.appendChild(dayNumber);

                // Check for events
                events.forEach(event => {
                    if (event.date.getFullYear() === year && event.date.getMonth() === month && event.date.getDate() === i) {
                        const eventDiv = document.createElement('div');
                        eventDiv.classList.add('calendar-event');
                        eventDiv.textContent = event.title;
                        dayCell.appendChild(eventDiv);
                    }
                });

                calendarGrid.appendChild(dayCell);
            }
        }

        // Navigation event listeners
        if (prevMonthBtn) {
            prevMonthBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() - 1);
                renderCalendar(currentDate);
            });
        }

        if (nextMonthBtn) {
            nextMonthBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() + 1);
                renderCalendar(currentDate);
            });
        }

        // Initial render
        renderCalendar(currentDate);
    }
});
