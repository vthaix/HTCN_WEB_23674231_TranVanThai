document.addEventListener("DOMContentLoaded", function() {
    const allProducts = [
        ...window.sach.map(product => ({...product, type: 'sach' })),
        ...window.hoacu.map(product => ({...product, type: 'hoacu' })),
        ...window.vanphongpham.map(product => ({...product, type: 'vanphongpham' })),
        ...window.butghi.map(product => ({...product, type: 'butghi' }))
    ];

    const searchBox = document.getElementById('searchBox');
    const suggestions = document.getElementById('suggestions');

    searchBox.addEventListener('input', function(event) {
        const query = event.target.value.toLowerCase();

        suggestions.innerHTML = '';

        if (!query) return;

        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        filteredProducts.forEach(product => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex align-items-center';

            const img = document.createElement('img');
            img.src = product.imageUrl;
            img.alt = product.name;
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.objectFit = 'cover';
            img.style.marginRight = '10px';
            img.style.borderRadius = '8px';

            const span = document.createElement('span');
            span.textContent = product.name;

            li.appendChild(img);
            li.appendChild(span);

            li.addEventListener('click', function() {
                window.location.href = `chitiet_sp.html?type=${product.type}&id=${product.id}`;
            });

            suggestions.appendChild(li);
        });
    });
});
