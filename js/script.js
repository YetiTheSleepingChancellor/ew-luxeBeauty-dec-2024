function openProductModal(title, description, variants, imageUrl) {
    document.getElementById('productModalLabel').innerText = title;
    document.getElementById('productDescription').innerText = description;
    document.getElementById('productImage').src = imageUrl;

    // Populate variants
    const variantsList = document.getElementById('productVariants');
    variantsList.innerHTML = ''; // Clear existing variants
    variants.forEach(variant => {
      const li = document.createElement('li');
      li.innerText = `${variant.size}: ${variant.price}`;
      variantsList.appendChild(li);
    });

    // Update WhatsApp button
    const whatsappButton = document.getElementById('whatsappButton');
    const whatsappMessage = `Hello, I would like to order ${title}. Available sizes: ${variants.map(v => `${v.size} (${v.price})`).join(', ')}.`;
    whatsappButton.href = `https://wa.me/<Your-WhatsApp-Number>?text=${encodeURIComponent(whatsappMessage)}`;

    // Show the modal
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
  }