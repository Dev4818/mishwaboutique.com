document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    hamburger.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    closeMenu.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Gallery Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryGrid = document.querySelector('.gallery-grid');
    
    // Sample gallery data
    const galleryItems = [
        {
            id: 1,
            name: 'Bridal blue Chaniya Choli',
            category: 'bridal',
            image: 'bridal/3.png',
            description: 'Radiant Beauty in Traditional Attire'
        },
        {
            id: 2,
            name: 'Festival elegant yellow Chaniyacholi',
            category: 'festival',
            image: 'festival/1.png',
            description: 'Elegant chaniya choli in Yellow Lehenga '
        },
        {
            id: 3,
            name: 'Modern geomatric Lehenga',
            category: 'modern',
            image: 'mordern/2.png',
            description: 'Contemporary lehenga with geometric patterns'
        },
        {
            id: 4,
            name: 'Bridal red Set',
            category: 'bridal',
            image: 'bridal/2.png',
            description: 'Radiant Beauty in Traditional Lehenga'
        },
        {
            id: 5,
            name: 'Festival red Chaniya choli',
            category: 'festival',
            image: 'festival/2.png',
            description: 'Traditional Indian Beauty in a Garden'
        },
        {
            id: 6,
            name: 'Modern Blue Lehenga',
            category: 'modern',
            image: 'mordern/1.png',
            description: 'Contemporary blue lehenga with geometric patterns'
        },
        {
            id: 7,
            name: 'Bridal Gold Chaniya',
            category: 'bridal',
            image: 'bridal/1.png',
            description: 'Luxurious gold bridal chaniya with intricate work'
        },
        {
            id: 8,
            name: 'Festival colourful Set',
            category: 'festival',
            image: 'festival/3.png',
            description: 'Vibrant Lehenga in Serene Garden'
        },
        {
            id: 9,
            name: 'Modern Grey Lehenga',
            category: 'modern',
            image: 'mordern/3.png',
            description: 'Elegant grey lehenga with contemporary embroidery'
        }
    ];
    
    // Display all gallery items initially
    displayGalleryItems(galleryItems);
    
    // Filter gallery items
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            if (filter === 'all') {
                displayGalleryItems(galleryItems);
            } else {
                const filteredItems = galleryItems.filter(item => item.category === filter);
                displayGalleryItems(filteredItems);
            }
        });
    });
    
    // Display gallery items function
    function displayGalleryItems(itemsToDisplay) {
        galleryGrid.innerHTML = '';
        
        itemsToDisplay.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.category = item.category;
            
            galleryItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="gallery-overlay">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            
            galleryGrid.appendChild(galleryItem);
        });
    }
    
    // Contact form submission
    const inquiryForm = document.getElementById('inquiryForm');
    inquiryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // In a real implementation, you would send this data to your server
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        
        // Show success message
        alert(`Thank you for your inquiry, ${data.name}! We will contact you shortly at ${data.email} or ${data.phone}.`);
        
        // Reset form
        this.reset();
    });
});