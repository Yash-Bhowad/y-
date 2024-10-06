let cartCount = 0; // Initialize cart count
let cart = []; // Initialize cart array

$(document).ready(function() {
    // Add to cart functionality
    $('.add-to-cart').on('click', function() {
        const $this = $(this); // Store reference to the clicked button
        const productName = $this.closest('.card-body').find('.card-title').text();
        const productPrice = $this.closest('.card-body').find('.card-text').text();

        // Check if the product is already in the cart
        const productInCart = cart.find(item => item.name === productName && item.price === productPrice);

        if (!productInCart) {
            cart.push({ name: productName, price: productPrice }); // Add product to cart array
            cartCount++; // Increment cart count
            $('#cart-count').text(cartCount); // Update displayed cart count
        }

        $this.text('Added'); // Change button text
        $this.siblings('.remove-from-cart').show(); // Show the remove button
        console.log(cart);  // Shows the cart contents in the console
    });

    // Remove from cart functionality
    $(document).on('click', '.remove-from-cart', function() {
        const $this = $(this); // Store reference to the clicked button
        const productName = $this.closest('.card-body').find('.card-title').text();
        const productPrice = $this.closest('.card-body').find('.card-text').text();

        // Find the index of the product in the cart
        const productIndex = cart.findIndex(item => item.name === productName && item.price === productPrice);

        if (productIndex !== -1) {
            cart.splice(productIndex, 1); // Remove product from cart array
            cartCount--; // Decrement cart count
            $('#cart-count').text(cartCount); // Update displayed cart count
        }

        $this.siblings('.add-to-cart').text('Add to Cart'); // Change the text back to 'Add'
        $this.hide(); // Hide the remove button
        console.log(cart);  // Shows the updated cart contents in the console
    });
});

$(document).ready(function() {
    // Manually toggle the dropdown using jQuery
    $('.nav-link.dropdown-toggle').on('click', function(event) {
        event.preventDefault();  // Prevent default link behavior
        
        // Toggle the visibility of the dropdown
        var $dropdownMenu = $(this).next('.dropdown-menu');
        $dropdownMenu.toggle();
    });

    // Close the dropdown when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').hide(); // Hide the dropdown menu if click is outside
        }
    });

    // Optional: Custom logic for dropdown item click
    $('.dropdown-item').on('click', function() {
        const selectedItemText = $(this).text();
        console.log('Selected item:', selectedItemText); // Add any custom logic here
    });
});
