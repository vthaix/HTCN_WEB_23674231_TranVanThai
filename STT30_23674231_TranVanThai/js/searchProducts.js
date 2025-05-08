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
        // Lấy giá trị người dùng nhập vào và chuyển thành chữ thường
        const query = event.target.value.toLowerCase();
        // Xóa nội dung cũ của danh sách gợi ý
        suggestions.innerHTML = '';

        if (!query) return;

        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(query)
        );

        filteredProducts.forEach(product => {
            // Tạo thẻ `<li>` cho từng sản phẩm
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex align-items-center';
            // Tạo thẻ `<img>` để hiển thị hình ảnh sản phẩm
            const img = document.createElement('img');
            img.src = product.imageUrl;
            img.alt = product.name;
            img.style.width = '50px';
            img.style.height = '50px';
            img.style.objectFit = 'cover';
            img.style.marginRight = '10px';
            img.style.borderRadius = '8px';
            // Tạo thẻ `<span>` để hiển thị tên sản phẩm
            const span = document.createElement('span');
            span.textContent = product.name;
            // Thêm ảnh và tên sản phẩm vào thẻ `<li>`
            li.appendChild(img);
            li.appendChild(span);

            li.addEventListener('click', function() {
                window.location.href = `chitiet_sp.html?type=${product.type}&id=${product.id}`;
            });
            // Them thẻ `<li>` vào danh sách gợi ý
            suggestions.appendChild(li);
        });
    });
});
