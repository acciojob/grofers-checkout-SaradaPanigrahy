    const getSumBtn = document.createElement("button");
        getSumBtn.id = "getTotalBtn"; // Unique ID for Cypress
        getSumBtn.append("Get Total Price");
        document.body.appendChild(getSumBtn);

        const getSum = () => {
            const priceCells = document.querySelectorAll('.prices');
            let total = 0;
            priceCells.forEach(cell => {
                total += parseFloat(cell.textContent) || 0;
            });

            // Display total in #ans div
            const ansDiv = document.getElementById("ans");
            ansDiv.textContent = total;
        };

        getSumBtn.addEventListener("click", getSum);

