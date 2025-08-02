    const calendarDates = document.getElementById("calendarDates");
    const currentMonthElement = document.getElementById("currentMonth");
    const prevMonthBtn = document.getElementById("prevMonth");
    const nextMonthBtn = document.getElementById("nextMonth");

    let currentDate = new Date(2025, 6, 31); // July 2025 (month is 0-indexed)

    const events = [
      { date: 3, type: "model", title: "Model p...", description: "Submit model paper before deadline." },
      { date: 4, type: "sql", title: "SQL File i...", description: "Upload SQL implementation file." },
      { date: 7, type: "teaching", title: "Teaching...", description: "Teaching session on advanced topics." },
      { date: 9, type: "er", title: "ER Diagr...", description: "ER Diagram design and implementation." },
      { date: 14, type: "recap", title: "Recap II ...", description: "Second recap session covering key concepts." },
      { date: 16, type: "quiz", title: "Quiz 3 o...", description: "Quiz 3 on database concepts." },
      { date: 16, type: "quiz", title: "Quiz 3 cl...", description: "Quiz 3 closing session." }
    ];

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const monthNamesPrev = [
      "December", "January", "February", "March", "April", "May",
      "June", "July", "August", "September", "October", "November"
    ];

    const monthNamesNext = [
      "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December", "January"
    ];

    function generateCalendar() {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      
      // Update header
      currentMonthElement.textContent = `${monthNames[month]} ${year}`;
      prevMonthBtn.innerHTML = `‹ ${monthNamesPrev[month]}`;
      nextMonthBtn.innerHTML = `${monthNamesNext[month]} ›`;

      // Clear previous calendar
      calendarDates.innerHTML = "";

      // Get first day of month and number of days
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDay = (firstDay.getDay() + 6) % 7; // Convert Sunday=0 to Monday=0

      // Add empty cells for previous month
      for (let i = 0; i < startingDay; i++) {
        const cell = document.createElement("div");
        cell.className = "date-cell other-month";
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        const dateNumber = prevMonthLastDay - startingDay + i + 1;
        cell.innerHTML = `<div class="date-number">${dateNumber}</div>`;
        calendarDates.appendChild(cell);
      }

      // Add days of current month
      for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("div");
        cell.className = "date-cell";
        
        // Check if it's today
        const today = new Date();
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
          cell.classList.add("today");
        }

        const dateNumber = document.createElement("div");
        dateNumber.className = "date-number";
        dateNumber.textContent = day;
        cell.appendChild(dateNumber);

        // Add events for this day
        const dayEvents = events.filter(event => event.date === day);
        dayEvents.forEach(event => {
          const eventElement = document.createElement("div");
          eventElement.className = `event-item ${event.type}`;
          eventElement.textContent = event.title;
          eventElement.onclick = (e) => {
            e.stopPropagation();
            showEventModal(event);
          };
          cell.appendChild(eventElement);
        });

        calendarDates.appendChild(cell);
      }

      // Add empty cells for next month
      const totalCells = calendarDates.children.length;
      const remainingCells = 42 - totalCells; // 6 rows × 7 days
      for (let day = 1; day <= remainingCells; day++) {
        const cell = document.createElement("div");
        cell.className = "date-cell other-month";
        cell.innerHTML = `<div class="date-number">${day}</div>`;
        calendarDates.appendChild(cell);
      }
    }

    function showEventModal(event) {
      document.getElementById("modal-title").textContent = event.title;
      document.getElementById("modal-description").textContent = event.description;
      document.getElementById("eventModal").classList.remove("hidden");
    }

    function navigateMonth(direction) {
      currentDate.setMonth(currentDate.getMonth() + direction);
      generateCalendar();
    }

    // Event listeners
    prevMonthBtn.addEventListener("click", () => navigateMonth(-1));
    nextMonthBtn.addEventListener("click", () => navigateMonth(1));

    // Close modal
    document.querySelector(".close-btn").onclick = () => {
      document.getElementById("eventModal").classList.add("hidden");
    };

    // Close modal when clicking outside
    document.getElementById("eventModal").onclick = (e) => {
      if (e.target.id === "eventModal") {
        document.getElementById("eventModal").classList.add("hidden");
      }
    };

    // Initialize calendar
    generateCalendar();