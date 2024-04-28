import './style.css'

// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});


/*let buttons = document.querySelectorAll('#filterSection button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        let category = this.getAttribute('data-category');
        let items = document.querySelectorAll('#linkSelection .group');
        
        items.forEach(item => {
            if(item.getAttribute('data-category') === category || category === 'all') {
                item.style.display = 'grid'; 
            } else {
                item.style.display = 'none'; 
            }
        });
        
    });
}); */






function filterSelection(filter) {
    let items = document.querySelectorAll('.containerWithLinkBtn .group');
    
    // If "all" is selected, show all items
    if(filter === "all") {
        items.forEach(item => item.style.display = "block");
        return;
    }

    // Otherwise, hide or show items based on the filter
    items.forEach(item => {
        if(item.classList.contains(filter)) {
            item.style.display = "grid";
        } else {
            item.style.display = "none";
        }
    });
}

// Add event listeners to the buttons
let btns = document.querySelectorAll('.btnFilter');
btns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove the "active" class from all buttons
        btns.forEach(btn => btn.classList.remove('active'));

        // Add the "active" class to the clicked button
        this.classList.add('active');

        // Filter the items
        filterSelection(this.dataset.filter);
    });
});

// Show all items by default
filterSelection("all");
window.filterSelection = filterSelection;