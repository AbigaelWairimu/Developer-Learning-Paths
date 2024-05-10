import '/style.css'

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



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backHome').addEventListener('click', function() {
        console.log('clicked');
        window.location.href = './index.html';
    });
});



// send to whatsapp


window.addEventListener("load", function() {
    const form = document.getElementById('my-form');

    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        document.getElementById("my-form").reset();
      })
    });
  });

document.getElementById('my-button').addEventListener('click', sendToWhatsapp);
function sendToWhatsapp() {
    let number = "+254708167366";

    let FullName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    var url = "https://wa.me/" + number + "?text="
    + "Full name :" +FullName+ "%0a"
    + "Email :" +email+ "%0a"
    + "Message :" +message+ "%0a%0a"

    window.open(url, '_blank').focus();
    
  }



  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('backHome').addEventListener('click', function() {
        console.log('clicked');
        window.location.href = './index.html';
    });
});