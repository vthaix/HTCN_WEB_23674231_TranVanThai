document.addEventListener("DOMContentLoaded", function() {
            const renderProductList = (products, containerId, type) => {
                    const productListContainer = document.getElementById(containerId);
                    if (!productListContainer) return;
                    // Duyệt qua từng sản phẩm trong mảng
                    products.forEach(product => {
                                const productHtml = `
                <div class="col-md-3">
                    <div class="product-card">
                        <a href="chitiet_sp.html?type=${type}&id=${product.id}" style="text-decoration: none; color: inherit;">
                            <img src="${product.imageUrl}" class="img-fluid mb-2" alt="Sản phẩm">
                            <h6 style="font-weight: bold;">${product.name}</h6>
                            ${product.author ? `<p>Tác giả: <i style="font-weight: bold;">${product.author}</i></p>` : ''}
                            ${product.publisher ? `<p>Nhà xuất bản: <i style="font-weight: bold;">${product.publisher}</i></p>` : ''}
                        </a>
                        <div class="cost" style="display: flex; justify-content: space-between; align-items: center;">
                            <p class="text-danger fw-bold">Giá: ${product.price.toLocaleString()}đ</p>
                            <button class="btn" style="border: 1px solid red" onclick="themVaoGio('${product.name}', ${product.price}, '${product.imageUrl}')">
                                <i class="bi bi-cart giohang"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `;
            // Thêm HTML của sản phẩm
            productListContainer.innerHTML += productHtml;
        });
    };

    renderProductList(window.sach, "book-list", "sach");
    renderProductList(window.hoacu, "art-supply-list", "hoacu");
    renderProductList(window.vanphongpham, "papper-list", "vanphongpham");
    renderProductList(window.butghi, "pen-list", "butghi");
});
