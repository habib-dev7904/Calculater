  let display = document.getElementById("display");

        function append(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = "";
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }

        // Keyboard support - CORRECTED VERSION
        document.addEventListener("keydown", function(event) {
            const key = event.key;
            
            // Numbers and operators
            if ((key >= "0" && key <= "9") || ['+', '-', '*', '/', '.'].includes(key)) {
                append(key);
            }
            
            // Enter key for calculate
            if (key === "Enter") {
               
                calculate();
            }
            
            // Backspace for delete
            if (key === "Backspace") {
         
                deleteLast();
            }
            
            // Escape for clear
            if (key === "Escape") {
                clearDisplay();
            }
        });
