function checkResources() {
    const userName = document.getElementById('userName').value;
    const resultDiv = document.getElementById('result');

    fetch('src/shopset.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            const userRecord = lines.find(line => line.startsWith(userName));

            if (userRecord && userName != "") {
                const [, research, gold] = userRecord.split('-');
                resultDiv.textContent = `${userName}: You have ${research} and ${gold}`;
            } else {
                resultDiv.textContent = 'User not found.';
            }
        })
        .catch(error => {
            resultDiv.textContent = 'Error loading resources file.';
        });

    displayItemList();
}

function displayItemList() {
    const itemListDiv = document.getElementById('itemList');

    fetch('src/items.txt')
        .then(response => response.text())
        .then(data => {
            itemListDiv.innerHTML = '';  // Clear previous items

            const items = data.split('\n');
            items.forEach(item => {
                const itemSpan = document.createElement('span');
                itemSpan.textContent = item;
                itemSpan.className = 'item';
                itemSpan.onclick = () => itemClick(item); // Bind click event
                itemListDiv.appendChild(itemSpan); 
                itemListDiv.appendChild(document.createElement('br')); // Add <br>
            });
        })
        .catch(error => {
            console.error('Error loading items file:', error);
        });
}

function itemClick(item) {
    console.log("Item clicked:", item); 
    switch (item) {
        case item.startsWith("BOAT"): {
            buy_boat()
        }
        case item.startsWith("INVENTION LAB"): {
            buy_lab()
        }
        case item.startsWith("PLANE"): {
            buy_plane()
        }
    }
}

function buy_boat(){

}