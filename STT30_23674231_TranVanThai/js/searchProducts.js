document.addEventListener("DOMContentLoaded", function() {
    // Mảng sản phẩm tổng hợp từ các danh mục
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
            li.className = 'list-group-item d-flex align-items-center'; // d-flex để xếp hình + chữ cùng hàng

            const img = document.createElement('img');
            img.src = product.imageUrl;
            img.alt = product.name;
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.objectFit = 'cover';
            img.style.marginRight = '10px';
            img.style.borderRadius = '8px'; // nếu bạn muốn bo nhẹ góc ảnh

            const span = document.createElement('span');
            span.textContent = product.name;

            li.appendChild(img); // Thêm ảnh vào li
            li.appendChild(span); // Thêm text vào li

            li.addEventListener('click', function() {
                window.location.href = `chitiet_sp.html?type=${product.type}&id=${product.id}`;
            });

            suggestions.appendChild(li);
        });
    });
});